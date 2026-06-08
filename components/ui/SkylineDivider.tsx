export default function SkylineDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: '32px',
        backgroundImage: "url('/patterns/pattern-border.svg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        opacity: 0.15,
      }}
    />
  );
}
