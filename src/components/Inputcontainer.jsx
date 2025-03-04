export default function InputContainer({ input, writeTodo, addTodo }) {
  return (
    <div className="input-container">
      <input 
        type="text" 
        value={input} 
        onChange={writeTodo} 
        placeholder="Enter a new task..." 
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
}
