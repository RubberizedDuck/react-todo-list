import Checkbox from "./Checkbox";
import Textbox from "./Textbox";
import Delete from "./Delete";
import "./Todo.css";

function Todo() {
	return (
		<div className="todo-container">
			<div className="todo-list">
				<Checkbox />
				<Textbox />
				<div>
					<Delete />
				</div>
			</div>
		</div>
	);
}

export default Todo;
