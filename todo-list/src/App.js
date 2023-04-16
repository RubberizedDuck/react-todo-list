import { useState } from "react";

import Heading from "./components/Heading";
import Todo from "./components/Todo";

function App() {
	const [todos, setTodos] = useState([
		{ text: "", id: Math.random().toString() },
	]);

	function addTodoHandler(todo) {
		setTodos((prevTodo) => {
			return [todo, ...prevTodo];
		});
	}

	function deleteTodoHandler(id) {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}

	return (
		<div>
			<Heading />
			<Todo
				todoList={todos}
				onAddTodo={addTodoHandler}
				onDeleteTodo={deleteTodoHandler}
			/>
		</div>
	);
}

export default App;
