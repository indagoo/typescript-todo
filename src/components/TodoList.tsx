import React from "react";
import { ITodo } from "../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
	items: ITodo[];
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = props => {
	const { items, toggleTodo, removeTodo } = props;

	return (
		<div>
			{props.items.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
					{...todo}
				/>
			))}
		</div>
	);
};

export { TodoList };
