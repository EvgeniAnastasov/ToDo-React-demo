import { useState } from 'react'

export const CreateTask = ({ taskCreateHandler }) => {

    const [task, setTask] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        taskCreateHandler(task)
        setTask('')
    }

    const onChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                name="taskName"
                value={task}
                onChange={onChange}
                placeholder="Enter Task" />

            <input type="submit" value="Add" />

        </form>
    )
}