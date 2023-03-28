import { useState } from "react";

import Heading from "./components/Heading";
import Todo from "./components/Todo";

const dummy_todos = [{ text: "", id: Math.random().toString() }];

function App() {
	const [todos, setTodos] = useState(dummy_todos);
	const todoId = dummy_todos[0].id;

	function addTodoHandler(todo) {
		setTodos((prevTodo) => {
			return [todo, ...prevTodo];
		});
	}
	return (
		<div>
			<Heading />
			<Todo todoList={todos} onAddTodo={addTodoHandler} todoId={todoId} />
		</div>
	);
}

export default App;
