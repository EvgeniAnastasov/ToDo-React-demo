import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/taskContext";
import styles from './TaskItem.module.css'

export const TaksItem = ({
    task
}) => {

    const [isEdit, setIsEdit] = useState(false);

    const { taskDeleteHandler, toggleTask, taskEditHandler } = useContext(TaskContext);

    useEffect(() => {

        return () => { }
    }, []);

    const taskEditClickHandler = () => {
        setIsEdit(true)
    };

    const onEdit = (e) => {
        e.preventDefault();
        const { title } = Object.fromEntries(new FormData(e.target));

        taskEditHandler(task, title)
        setIsEdit(false)
    }


    return (
        <li>
            {isEdit
                ?
                <form onSubmit={onEdit}>
                    <input type="text" name="title" defaultValue={task.title} />
                    <input type="submit" value="edit" />
                </form>

                :
                <>
                    <span
                        className={task.isCompleted ? styles.completed : ""}
                        onClick={() => toggleTask(task)}
                    >
                        {task.title}
                    </span>
                    <button onClick={() => taskDeleteHandler(task._id)}>X</button>
                    <button onClick={() => taskEditClickHandler(task._id)}>Edit</button>
                </>

            }


        </li >
    );
};