export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div className="todo" id={`todo-${index}`}>
      <p>{todo}</p>
      <div className="deletecheckbox">
        <input type="checkbox" />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}
