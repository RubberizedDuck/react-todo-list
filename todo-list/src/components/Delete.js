import "../styles/Delete.css";

function Delete(props) {
	return (
		<div className="svg-cross" onClick={props.onDeleteHandler}>
			<img
				src={require("../cross-icon.svg").default}
				alt="CrossSvg"
				className="svg-cross"
			/>
		</div>
	);
}

export default Delete;
