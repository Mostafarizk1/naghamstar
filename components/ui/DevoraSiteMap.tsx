'use client';

import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Interactive floor-plan map — Devora Square
// SVG viewBox: 0 0 3200 800  (matches the 4:1 map image)
// ─────────────────────────────────────────────────────────────────────────────

const WA = '966566900885';
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// ── Types ──────────────────────────────────────────────────────────────────
interface Unit {
  id: string;
  cx: number;
  cy: number;
  r: number;
  num?: number;
  labelAr: string;
  area?: string;
  waMsg: string;
  kind: 'shop' | 'kiosk' | 'south' | 'panda';
  reserved?: boolean;      // red X — محجوز
  tipBelow: boolean;
  tipLeft?: boolean;       // tooltip to the left of circle (right-edge elements)
}

// ── Shop / Kiosk constants ─────────────────────────────────────────────────
const SHOP_Y  = 260;   // top arcade row  (user-calibrated)
const KIOSK_Y = 450;   // parking drive-thru row (user-calibrated)
const RESERVED_IDS = new Set([9, 12, 14, 15]);

// 21 commercial shops — dense row above arcade arches
// user-calibrated: shop1=939, shop21=2780 → spacing=(2780-939)/20=92.05
const shops: Unit[] = Array.from({ length: 21 }, (_, i) => {
  const num = i + 1;
  const res = RESERVED_IDS.has(num);
  return {
    id:       `shop-${num}`,
    cx:       1130 + i * 64,          // 939 → 2779  (pixel-perfect)
    cy:       SHOP_Y,
    r:        22,
    num,
    labelAr:  res ? 'محجوز' : `محل رقم ${num}`,
    area:     '104 + 79 م²',
    waMsg:    `مرحباً، أرغب في الاستفسار عن المحل رقم ${num} في مجمع ديورا سكوير — حي الشرائع، مكة المكرمة`,
    kind:     'shop',
    reserved: res,
    tipBelow: true,
  };
});

// 6 drive-through kiosks — 3 left + 3 right (gap at center entrance)
// user-calibrated: K1=928, K6=2253 | intermediate estimated from render
const KIOSK_POS = [942, 1147, 1343,   1748, 1947, 2150];
const kiosks: Unit[] = KIOSK_POS.map((cx, i) => ({
  id:       `kiosk-${i + 1}`,
  cx,
  cy:       KIOSK_Y,
  r:        34,
  num:      i + 1,
  labelAr:  `كشك درايف ثرو ${i + 1}`,
  area:     '15 م²',
  waMsg:    `مرحباً، أرغب في الاستفسار عن كشك الدرايف ثرو رقم ${i + 1} في مجمع ديورا سكوير — حي الشرائع، مكة المكرمة`,
  kind:     'kiosk',
  tipBelow: false,
}));

// South showroom — right building
const southShowroom: Unit = {
  id:      'south',
  cx:      2790,
  cy:      270,
  r:       95,
  labelAr: 'المعرض الشمالي',
  area:    '3,956 م²',
  waMsg:   'مرحباً، أرغب في الاستفسار عن المعرض الشمالي (3,956 م²) في مجمع ديورا سكوير — حي الشرائع، مكة المكرمة',
  kind:    'south',
  tipBelow: false,
  tipLeft:  true,
};

// Panda / North showroom — left building (leased, not clickable)
const panda: Unit = {
  id:      'panda',
  cx:      420,
  cy:      280,
  r:       95,
  labelAr: 'مأجر لـ بنده',
  waMsg:   '',
  kind:    'panda',
  tipBelow: true,
};

const ALL: Unit[] = [...shops, ...kiosks, southShowroom, panda];

// ── Tooltip (SVG-native) ───────────────────────────────────────────────────
function Tip({ u }: { u: Unit }) {
  // 2.5× bigger tooltip for readability
  const W    = 480;
  const H    = u.area ? 200 : 135;
  const TAIL = 22;
  const EDGE = 20;

  let tx: number, ty: number, triPts: string;

  if (u.tipLeft) {
    // ── Tooltip to the LEFT of the circle (right-edge elements) ──
    tx = Math.max(EDGE, u.cx - u.r - TAIL - W);
    ty = Math.max(EDGE, Math.min(800 - H - EDGE, u.cy - H / 2));
    // Triangle pointing right toward circle
    const bx = tx + W;          // right edge of box
    const by = u.cy;            // tip y = circle center
    triPts = `${bx},${by - TAIL} ${bx},${by + TAIL} ${u.cx - u.r - 4},${by}`;
  } else {
    // ── Tooltip above or below ──
    tx = u.cx - W / 2;
    if (tx < EDGE)             tx = EDGE;
    if (tx + W > 3200 - EDGE)  tx = 3200 - W - EDGE;

    ty = u.tipBelow
      ? u.cy + u.r + TAIL + 4
      : u.cy - u.r - TAIL - 4 - H;

    const mx = u.cx;
    triPts = u.tipBelow
      ? `${mx - TAIL},${ty} ${mx + TAIL},${ty} ${mx},${u.cy + u.r + 5}`
      : `${mx - TAIL},${ty + H} ${mx + TAIL},${ty + H} ${mx},${u.cy - u.r - 5}`;
  }

  return (
    <g pointerEvents="none" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.75))' }}>
      <polygon points={triPts} fill="#011828" />
      <rect x={tx} y={ty} width={W} height={H} rx={22} ry={22}
        fill="#011828" stroke="rgba(205,182,137,0.6)" strokeWidth="3" />
      {/* Title */}
      <text x={tx + W / 2} y={ty + 58} textAnchor="middle"
        fill="white" fontSize="34" fontWeight="bold"
        fontFamily="Cairo, Tajawal, Arial, sans-serif">
        {u.labelAr}
      </text>
      {/* Area */}
      {u.area && (
        <text x={tx + W / 2} y={ty + 112} textAnchor="middle"
          fill="#cdb689" fontSize="28"
          fontFamily="Cairo, Tajawal, Arial, sans-serif">
          {u.area}
        </text>
      )}
      {/* CTA */}
      <text x={tx + W / 2} y={ty + H - 22} textAnchor="middle"
        fill="rgba(255,255,255,0.40)" fontSize="22"
        fontFamily="Cairo, Tajawal, Arial, sans-serif">
        {u.reserved ? 'هذا المحل محجوز' : 'اضغط للاستفسار عبر واتساب ◀'}
      </text>
    </g>
  );
}

// ── Single Marker ─────────────────────────────────────────────────────────
function Marker({
  u, active, onEnter, onLeave,
}: {
  u: Unit; active: boolean; onEnter: () => void; onLeave: () => void;
}) {
  const isPanda    = u.kind === 'panda';
  const isSouth    = u.kind === 'south';
  const isReserved = !!u.reserved;

  // ── Colors ──────────────────────────────────────────────────────────────
  const fill = isReserved
    ? 'rgba(220,38,38,0.88)'
    : isPanda
      ? 'rgba(220,38,38,0.88)'
      : isSouth
        ? (active ? '#012847' : '#cdb689')
        : (active ? '#cdb689' : 'rgba(1,40,71,0.88)');

  const stroke  = (isReserved || isPanda) ? '#ef4444' : '#cdb689';
  const strokeW = (isSouth || isPanda || isReserved) ? 3 : 2;

  const textFill = isReserved ? 'white'
    : isPanda  ? 'white'
    : isSouth  ? (active ? '#cdb689' : '#012847')
    : (active ? '#012847' : '#cdb689');

  // ── Inner group ─────────────────────────────────────────────────────────
  const inner = (
    <g
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ cursor: (isPanda || isReserved) ? 'default' : 'pointer' }}
    >
      {/* Outer glow ring */}
      {(active || isPanda || isReserved) && (
        <circle cx={u.cx} cy={u.cy}
          r={u.r + (isPanda || isReserved ? 10 : 13)}
          fill="none"
          stroke={(isPanda || isReserved)
            ? 'rgba(239,68,68,0.22)'
            : 'rgba(205,182,137,0.25)'}
          strokeWidth="1.5" />
      )}

      {/* Main circle */}
      <circle cx={u.cx} cy={u.cy} r={u.r}
        fill={fill} stroke={stroke} strokeWidth={strokeW}
        style={{ transition: 'fill 0.18s' }} />

      {/* Invisible touch hit area */}
      <circle cx={u.cx} cy={u.cy} r={u.r + 18}
        fill="transparent" stroke="none" />

      {/* ── Label text ── */}
      {isReserved ? (
        // Reserved shop: big X + محجوز
        <>
          <text x={u.cx} y={u.cy - 1}
            textAnchor="middle" dominantBaseline="central"
            fill="white" fontSize="18" fontWeight="bold"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            ✕
          </text>
          <text x={u.cx} y={u.cy + 17}
            textAnchor="middle"
            fill="rgba(255,255,255,0.85)" fontSize="9"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            محجوز
          </text>
        </>
      ) : isPanda ? (
        <>
          <text x={u.cx} y={u.cy - 11}
            textAnchor="middle" fill="white"
            fontSize="18" fontWeight="bold"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            مأجر
          </text>
          <text x={u.cx} y={u.cy + 16}
            textAnchor="middle" fill="white" fontSize="17"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            لـ بنده
          </text>
        </>
      ) : isSouth ? (
        <>
          <text x={u.cx} y={u.cy - 11}
            textAnchor="middle" fill={textFill}
            fontSize="18" fontWeight="bold"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            المعرض
          </text>
          <text x={u.cx} y={u.cy + 16}
            textAnchor="middle" fill={textFill} fontSize="17"
            fontFamily="Cairo, Tajawal, Arial, sans-serif">
            الشمالي
          </text>
        </>
      ) : (
        // Regular shop / kiosk: just the number
        <text x={u.cx} y={u.cy}
          textAnchor="middle" dominantBaseline="central"
          fill={textFill}
          fontSize={u.kind === 'kiosk' ? 15 : 13}
          fontWeight="bold"
          fontFamily="Cairo, Tajawal, Arial, sans-serif">
          {u.num}
        </text>
      )}
    </g>
  );

  // Reserved + Panda = not clickable
  if (isPanda || isReserved) return inner;

  return (
    <a href={wa(u.waMsg)} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function DevoraSiteMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeUnit = ALL.find(u => u.id === activeId) ?? null;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#010f1c]">

      {/* Scrollable map — horizontal scroll on small screens */}
      <div style={{ overflowX: 'auto' }}>
        <div style={{ position: 'relative', minWidth: '800px' }}>
          {/* padding-bottom 25% = 800/3200 maintains 4:1 ratio */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '25%' }}>

            {/* Base image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/devora-map.webp"
              alt="مخطط مجمع ديورا سكوير"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* SVG hotspot overlay */}
            <svg
              viewBox="0 0 3200 800"
              preserveAspectRatio="none"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                overflow: 'visible',
              }}
            >
              {/* Inactive markers (rendered first, below active) */}
              {ALL.filter(u => u.id !== activeId).map(u => (
                <Marker key={u.id} u={u} active={false}
                  onEnter={() => setActiveId(u.id)}
                  onLeave={() => setActiveId(null)} />
              ))}

              {/* Active marker + tooltip on top */}
              {activeUnit && (
                <g>
                  <Marker u={activeUnit} active
                    onEnter={() => setActiveId(activeUnit.id)}
                    onLeave={() => setActiveId(null)} />
                  <Tip u={activeUnit} />
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 py-5 border-t border-white/10 flex flex-wrap items-center gap-x-7 gap-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[rgba(1,40,71,0.88)] border-2 border-brand-gold shrink-0" />
          <span className="text-white/70 text-sm font-medium">محلات متاحة</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-red-600 border-2 border-red-400 shrink-0 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold leading-none">✕</span>
          </div>
          <span className="text-white/70 text-sm font-medium">محجوز</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[rgba(1,40,71,0.88)] border-2 border-brand-gold shrink-0" />
          <span className="text-white/70 text-sm font-medium">أكشاك درايف ثرو (6)</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-brand-gold shrink-0" />
          <span className="text-white/70 text-sm font-medium">المعرض الشمالي</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-red-500 shrink-0" />
          <span className="text-white/70 text-sm font-medium">مأجر لـ بنده</span>
        </div>
        <p className="text-white/30 text-xs mr-auto hidden sm:block">
          اضغط على أي وحدة للاستفسار عبر واتساب
        </p>
      </div>
    </div>
  );
}
