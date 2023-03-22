import "./Checkbox.css";

function Checkbox() {
	return (
		<div>
			<label className="container">
				<input type="checkbox" />
				<span className="checkmark"></span>
			</label>
		</div>
	);
}

export default Checkbox;
