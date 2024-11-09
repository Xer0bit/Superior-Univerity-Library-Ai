export default function PageTransition({ isActive }) {
  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm fade-enter" />
  );
}