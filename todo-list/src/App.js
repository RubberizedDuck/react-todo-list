import { useState } from "react";

import Heading from "./components/Heading";
import Todo from "./components/Todo";

const dummy_todos = [""];

function App() {
	const [todos, setTodos] = useState(dummy_todos);

	function addTodoHandler(todo) {
		setTodos((prevTodo) => {
			return [todo, ...prevTodo];
		});
	}
	return (
		<div>
			<Heading />
			<Todo todoList={todos} onAddTodo={addTodoHandler} />
		</div>
	);
}

export default App;
