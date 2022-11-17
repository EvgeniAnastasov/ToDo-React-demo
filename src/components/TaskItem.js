import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import styles from './TaskItem.module.css'

export const TaksItem = ({
    task
}) => {

    const { taskDeleteHandler, toggleTask } = useContext(TaskContext)


    return (
        <li>
            <span
                className={task.isCompleted ? styles.completed : ""}
                onClick={() => toggleTask(task)}
            >
                {task.title}</span>

            <button onClick={() => taskDeleteHandler(task._id)}>X</button>
        </li >
    );
};