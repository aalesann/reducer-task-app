import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom';
import { type } from '../types/type';
import { TaskListItems } from '../components/TaskListItems';

export const Tasks = () => {

    const { state, dispatch } = useContext(TaskContext);

    const navigate = useNavigate()

    const eliminarTarea = (id) => {
        dispatch({
            type: type.TASK_DELETE,
            payload: id
        })
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Listado de Tareas</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button
                        className='btn btn-sm btn-primary'
                        onClick={() => navigate('/task/add')}
                    >
                        Nuevo
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col">

                    {
                        (state.length === 0)
                            ?
                            (
                                <div className='alert alert-info text-center'>
                                    No Hay tareas
                                </div>
                            )
                            :
                            (
                                <table className='table table-striped text-center'>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>name</th>
                                            <th>done</th>
                                            <th>acciones</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                        state.map(task => (
                                            <TaskListItems
                                                key={task.id}
                                                task={task}
                                                eliminarTarea={eliminarTarea}
                                            />
                                        ))
                                        }
                                    </tbody>
                                </table>
                            )
                    }
        </div>
            </div >
        </div >
    )
}
