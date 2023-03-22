import Delete from "./Delete";
import "./Textbox.css";

function Textbox() {
	return (
		<div className="todo-input">
			<form action="text">
				<input
					type="text"
					placeholder="Create todo"
					className="SearchBox"
					required
				/>
			</form>
		</div>
	);
}

export default Textbox;
