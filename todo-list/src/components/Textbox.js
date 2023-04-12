import { useState } from "react";
import "../styles/Textbox.css";
import Checkbox from "./Checkbox";

function Textbox(props) {
	const [textBox, setTextBox] = useState("Create Todo");
	const [isChecked, setIsChecked] = useState(false);

	function textBoxChanger(event) {
		setTextBox(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		const textBoxData = { text: textBox };
		props.onSubmitTextBoxData(textBoxData);
		setTextBox("Create Todo");
	}

	function setBackgroundColor(isChecked) {
		if (isChecked) {
			return "green";
		} else {
			return "white";
		}
	}

	return (
		<div className="todo-input">
			<Checkbox onChange={setIsChecked} />
			<form action="text" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Create todo"
					className="todoBox"
					onChange={textBoxChanger}
					required
					style={{ backgroundColor: setBackgroundColor(isChecked) }}
				/>
			</form>
		</div>
	);
}

export default Textbox;
