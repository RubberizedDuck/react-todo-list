import Textbox from "./Textbox";
import Delete from "./Delete";
import "../styles/Todo.css";

function Todo(props) {
	function submittedTextBoxData(savedTextBoxData) {
		const textBoxData = { ...savedTextBoxData, id: Math.random().toString() };
		props.onAddTodo(textBoxData);
	}

	function handleDelete(id) {
		props.onDeleteTodo(id);
	}

	return (
		<div className="todo-container">
			<ul>
				<div className="todo-list">
					<li>
						{props.todoList.map((todo) => (
							<div className="todo-list__item" key={todo.id}>
								<Textbox onSubmitTextBoxData={submittedTextBoxData} />
								<Delete onDeleteHandler={() => handleDelete(todo.id)} />
							</div>
						))}
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Todo;
