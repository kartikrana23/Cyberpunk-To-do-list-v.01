import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';
import UpperContainer from './components/UpperContainer';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const writeTodo = (e) => setInput(e.target.value);

  const addTodo = () => {
    if (input !== '') {
      setTodos(prev => [...prev, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <main>
      <UpperContainer />
      <InputContainer input={input} writeTodo={writeTodo} addTodo={addTodo} />
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
