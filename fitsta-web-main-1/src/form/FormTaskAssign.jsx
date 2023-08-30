import React, { useEffect, useState } from 'react'
import { addTaskToUser, getUserTaskById } from '../api-client/api-module';

export default function FormTaskAssign({ setSelect,trainerData,userDate}) {

    const [taskName, setTaskName] = useState('');
    const [taskDiet, setTaskDiet] = useState('');
    const [taskWorkoutDate, setTaskWorkoutDate] = useState('');
    const [taskCalories, setTaskCalories] = useState('');
    const [taskDuration, setTaskDuration] = useState('');
    const currentDate = new Date();

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData = async () => {
        try {
            const list = await getUserTaskById();

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!taskName || !taskDiet || !taskWorkoutDate || !taskCalories) {
            console.log('Please fill in all required fields.');
            return;
        }

        const formData = {
            "id": 0,
            "taskTrainer": trainerData.id,
            "taskUser": userDate.id,
            "duration": taskDuration,
            "workoutDate": taskWorkoutDate,
            "workout": taskName,
            "calories": taskCalories,
            "isCompleted": false,
            "diet": taskDiet
        }
       console.log(formData);

         await addTaskToUser(formData);
        handelClose()
    };

    function handelClose(params) {
        setSelect('');
    }

    return (
        <div id="equipmentAddModal" className="modal">
            <div className="modal-content entity-add-form">
                <span className="close" onClick={handelClose}>&times;</span>

                <h2>Assign Task</h2>
                <form onSubmit={handleSubmit}>
                    <label for="taskName">Workout</label>
                    <input type="text" id="taskName" required value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                    
                    <label for="taskDescription">Diet:</label>
                    <input type="text"id="taskDescription" required value={taskDiet} onChange={(e) => setTaskDiet(e.target.value)}/>
                    
                    <label for="taskDuration">Duration (days):</label>
                    <input type="number"id="taskDuration" required value={taskDuration} onChange={(e) => setTaskDuration(e.target.value)}/>
                    
                    <label for="taskDeadline">Workout Date:</label>
                    <input type="date" id="taskDeadline" required value={taskWorkoutDate} onChange={(e) => setTaskWorkoutDate(e.target.value)} min={`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`}/>
                    
                    <label for="taskcalories">Calories Burn(kcal):</label>
                    <input type="number" id="taskcalories" required value={taskCalories} onChange={(e) => setTaskCalories(e.target.value)}/>
                    
                    <button class="add-button btn" type="submit">Assign Task</button>
                </form>

            </div>
        </div>
    )
}
