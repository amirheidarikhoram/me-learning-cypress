import Handler from "./handler";

const PREFIX = "/todo";

export function GetTodos() {
	return Handler.get(PREFIX);
}

export function GetTodoById(id) {
	return Handler.get(`${PREFIX}/${id}`);
}

export function GetTodaysTodos() {
	return Handler.get(`${PREFIX}/today`)
}

export function CreateTodo({ name, dueDate }) {
	return Handler.post(PREFIX, {
		name,
		dueDate,
	});
}

export function UpdateTodo({ id, name, dueDate, status }) {
	return Handler.put(`${PREFIX}/${id}`, {
		id,
		status,
		name,
	});
}

export function DeleteTodo(id) {
	return Handler.delete(`${PREFIX}/${id}`);
}
