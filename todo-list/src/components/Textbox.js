import { useState } from "react";
import Delete from "./Delete";
import "./Textbox.css";

function Textbox(props) {
	const [textBox, setTextBox] = useState("");

	function textBoxChanger(event) {
		setTextBox(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		const textBoxData = { text: textBox };
		props.onSubmitTextBoxData(textBoxData);
		setTextBox("");
	}
	return (
		<div className="todo-input">
			<form action="text" onSubmit={submitHandler}>
				<input
					type="text"
					value={textBox}
					placeholder="Create todo"
					className="todoBox"
					onChange={textBoxChanger}
					required
				/>
			</form>
		</div>
	);
}

export default Textbox;
