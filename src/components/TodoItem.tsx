import React from "react";
import { ITodo } from "../types/data";

interface ITodoItemProps extends ITodo {}

const TodoItem: React.FC<ITodoItemProps> = props => {
    const {id, title, complete} = props;
	return <div>
        <input type="checkbox" checked={complete} />
        {title}
        <button>x</button>
    </div>;
};

export { TodoItem };
