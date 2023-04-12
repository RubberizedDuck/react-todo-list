import { useState } from "react";
import "../styles/Checkbox.css";

function Checkbox(props) {
	const [isChecked, setisChecked] = useState(false);

	function handleCheckboxChange(event) {
		setisChecked(event.target.checked);
		props.onChange(event.target.checked);
	}

	return (
		<div>
			<label className="container">
				<input type="checkbox" onChange={handleCheckboxChange} />
				<span className="checkmark"></span>
			</label>
		</div>
	);
}

export default Checkbox;
