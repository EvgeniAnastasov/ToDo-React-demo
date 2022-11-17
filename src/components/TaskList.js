import { TaksItem } from "./TaskItem"

export const TaskList = ({
    tasks,
}) => {

    return (
        <ul>
            {tasks.map(x =>
                <TaksItem
                    key={x._id}
                    taskId={x._id}
                    title={x.title}
                />)}
        </ul>
    )
}