import { useContext } from "react"
import { TaskContext } from "../context/taskContext"
import { TaksItem } from "./TaskItem"

export const TaskList = () => {

    const { tasks } = useContext(TaskContext)

    return (
        <ul>
            {tasks.map(x =>
                <TaksItem
                    key={x._id}
                    task={x}
                />)}
        </ul>
    )
}