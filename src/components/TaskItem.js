import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export const TaksItem = ({
    title,
    taskId,
}) => {

    const { taskDeleteHandler } = useContext(TaskContext)


    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(taskId)}>X</button>
        </li >
    );
};