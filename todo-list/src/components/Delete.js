import "./Delete.css";

function Delete() {
	return (
		<div className="svg-cross">
			<img
				src={require("../cross-icon.svg").default}
				alt="CrossSvg"
				className="svg-cross"
			/>
		</div>
	);
}

export default Delete;
