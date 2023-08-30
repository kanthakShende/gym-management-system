import React, { useEffect, useState } from 'react'
import { addTaskToUser, getUserTaskById } from '../api-client/api-module';

export default function FormTaskComplition({ setSelect, trainerData, userDate }) {
    const [taskList, setTaskList] = useState();
    const [dataRender, setDataRender] = useState()
    useEffect(() => {
        fetchData();
    }, [dataRender]);



    const fetchData = async () => {
        try {
            const d = await getUserTaskById(userDate.id);
            setTaskList(d);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    function handelClose(params) {
        setSelect('');
    }
    return (
        <div>
            <div id="equipmentAddModal" className="modal">
                <div className="modal-content entity-add-form">
                    <span className="close" onClick={handelClose}>&times;</span>
                    <section class="task-list-section">
                        <h2>Task List</h2>
                        <ul class="task-list">
                            {taskList && taskList.map(item => {

                                return (
                                    <TaskCard key={item.id} data={item} setDataRender={setDataRender} />
                                )
                            }
                            )}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    )
}


function TaskCard({ data, setDataRender }) {

    const handleSubmit = async (e) => {

        const formData = {
            "id": data.id,
            "taskTrainer": data.taskTrainer,
            "taskUser": data.taskUser,
            "duration": data.duration,
            "workoutDate": data.workoutDate,
            "workout": data.workout,
            "calories": data.calories,
            "isCompleted": false,
            "diet": data.diet
        }
        console.log(formData);

        await addTaskToUser(formData).then(() => {
            console.log("Sadfsd");
            setDataRender(data.id)
        });

    };

    return (

        <li class="task-item">
            <span class="task-name">{data.workout}</span>
            <span class="task-name">{data.workoutDate.split('T')[0]}</span>
            <span class="task-duration">{data.duration} minutes</span>
            <button class="mark-completed-button" disabled={!data.iscompleted} onClick={handleSubmit}>Mark Completed</button>
        </li>

    )
}
