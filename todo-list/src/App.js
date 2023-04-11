import { useState } from "react";

import Heading from "./components/Heading";
import Todo from "./components/Todo";

const dummy_todos = [{ text: "", id: Math.random().toString() }];

function App() {
	const [todos, setTodos] = useState(dummy_todos);

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
