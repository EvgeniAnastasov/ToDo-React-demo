
export const TaksItem = ({
    title,
    taskDeleteHandler,
    taskId,
}) => {

    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(taskId)}>X</button>
        </li >
    );
};