import react from 'react';
import './todo.css';
import { useState } from'react';

export const Todo = () => {
    const [todos, setTodos] = useState([]);
    return (
    <section className="todoapp">
        <header>
            <h1>Todos List</h1>
        </header>
        <form>
            <div>
                <input type="text" placeholder="What needs to be done today?" />
                <button type="submit">Add Todo</button>
            </div>
        </form> 
       </section>
    )
}

export default Todo;