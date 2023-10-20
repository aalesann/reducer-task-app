import React from 'react'
import { useContext } from 'react'
import { TaskContext } from './context/TaskContext'

export const Tasks = () => {

    const { state } = useContext(TaskContext);

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Listado de Tareas</h1>
                </div>
            </div>
            <pre>
                <code>
                    {
                        JSON.stringify(state, null, 3)
                    }
                </code>
            </pre>

        </div>
    )
}
