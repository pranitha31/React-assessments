export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-700">Your Todos</h2>
      </div>
      <ul className="space-y-1 p-2">
        {todos.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => onSelect(t.id)}
              className={`w-full rounded px-3 py-2 text-left text-sm ${
                selectedId === t.id
                  ? "bg-blue-50 border border-blue-200"
                  : "hover:bg-gray-50"
              }`}
            >
              {t.title}
              {t.completed && (
                <span className="ml-2 text-xs text-green-600">✓</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
