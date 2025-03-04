import Todo from './Todo';

export default function TodoContainer({ todos, deleteTodo }) {
  return (
    <div className="task-container">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
