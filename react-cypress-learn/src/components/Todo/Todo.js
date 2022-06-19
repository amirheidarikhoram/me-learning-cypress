import styles from "./Todo.module.scss";

function Todo({ name, dueDate, status }) {
	let date = new Date(dueDate * 1000);
	let dateString = date.toUTCString();

	return (
		<div className={styles.todo} id="todo">
			<div className={styles.info}>
				<p className={styles.name}>{name}</p>
				<p className={styles.date}>{dateString}</p>
			</div>

			<div className={styles.status} data-status={!!status} />
		</div>
	);
}

export default Todo;
