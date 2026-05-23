export default function Toast({ message }) {
  if (!message) return null;
  return (
    <aside className="toast" role="status">
      {message}
    </aside>
  );
}
