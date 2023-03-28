import Checkbox from "./Checkbox";
import Textbox from "./Textbox";
import Delete from "./Delete";
import "./Todo.css";

function Todo(props) {
	function submittedTextBoxData(savedTextBoxData) {
		const textBoxData = { ...savedTextBoxData, id: Math.random().toString() };
		props.onAddTodo(textBoxData);
		console.log("This is textBoxData var", textBoxData);
	}

	console.log("This is props.todoList ", props.todoList);

	return (
		<div className="todo-container">
			<ul>
				<div className="todo-list">
					<li>
						{props.todoList.map((todo) => (
							<div className="todo-list__item" key={todo.id}>
								<Checkbox />
								<Textbox onSubmitTextBoxData={submittedTextBoxData} />
								<Delete />
							</div>
						))}
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Todo;
