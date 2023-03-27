import Checkbox from "./Checkbox";
import Textbox from "./Textbox";
import Delete from "./Delete";
import "./Todo.css";

function Todo(props) {
	function submittedTextBoxData(savedTextBoxData) {
		const textBoxData = { ...savedTextBoxData, id: Math.random().toString() };
		props.onAddTodo(textBoxData);
	}

	console.log(props.todoList);

	return (
		<div className="todo-container">
			<ul>
				<div className="todo-list">
					<li>
						{props.todoList.map((todo) => (
							<div className="todo-list__item">
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
