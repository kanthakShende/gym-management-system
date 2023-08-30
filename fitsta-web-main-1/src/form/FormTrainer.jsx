import React, { useState } from 'react'
import { addTrainer } from '../api-client/api-module';

export default function FormTrainer({ setSelect,selectItem }) {

    const [trainerName, setTrainerName] = useState(selectItem?selectItem.name:'');
    const [trainerEmail, setTrainerEmail] = useState(selectItem?selectItem.username:'');
    const [trainerPassword, setTrainerPassword] = useState(selectItem?selectItem.password:'');
    const [trainerSpecialization, setTrainerSpecialization] = useState(selectItem?selectItem.specialization:'');
    const [trainerExperience, setTrainerExperience] = useState(selectItem?selectItem.experience:'');
    const [trainerContact, setTrainerContact] = useState(selectItem?selectItem.contactno:'');
    const [trainerGender, setTrainerGender] = useState(selectItem?selectItem.gender:'');
    const [trainerAge, setTrainerAge] = useState(selectItem?selectItem.dob:'');
    const [trainerImage, setTrainerImage] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation here before submission
        if (!trainerName || !trainerEmail || !trainerPassword || !trainerSpecialization || !trainerExperience || !trainerContact || !trainerAge || !trainerImage) {
            console.log('Please fill in all required fields.');
            return;
        }

        const formData = new FormData();

        // Now you can use the collected data for further processing
        formData.append('id', selectItem?selectItem.id:0);
        formData.append('name', trainerName);
        formData.append('username', trainerEmail);
        formData.append('password', trainerPassword);
        formData.append('specialization', trainerSpecialization);
        formData.append('experience', trainerExperience);
        formData.append('contactno', trainerContact);
        formData.append('gender', trainerGender);
        formData.append('dob', trainerAge);
        formData.append('image', trainerImage);
        await addTrainer(formData);
        handelClose();
       
    };
    function handelClose(params) {
        setTrainerName('');
        setTrainerEmail('');
        setTrainerPassword('');
        setTrainerSpecialization('');
        setTrainerExperience('');
        setTrainerContact('');
        setTrainerGender('male');
        setTrainerAge('');
        setTrainerImage(null);
        setSelect('');
    }

    return (
        <div id="equipmentAddModal" className="modal">
            <div className="modal-content entity-add-form">
                <span className="close" onClick={handelClose}>&times;</span>

                <h2>Add New Trainer</h2>
                <form className="trainer-form"  onSubmit={handleSubmit}>
                    <label for="trainerName">Name:</label>
                    <input type="text" id="trainerName" value={trainerName} onChange={(e) => setTrainerName(e.target.value)} required />
                    <label for="trainerEmail">Email:</label>
                    <input type="email" id="trainerEmail" value={trainerEmail} onChange={(e) => setTrainerEmail(e.target.value)} required />
                    <label for="trainerPassword">Password:</label>
                    <input type="password" id="trainerPassword" value={trainerPassword} onChange={(e) => setTrainerPassword(e.target.value)} required />
                    <label for="trainerSpecialization">Specialization:</label>
                    <input type="text" id="trainerSpecialization" value={trainerSpecialization} onChange={(e) => setTrainerSpecialization(e.target.value)} required />
                    <div className="input-group">
                        <div>
                            <label for="trainerExperience">Experience:</label>
                            <input type="text" id="trainerExperience" value={trainerExperience} onChange={(e) => setTrainerExperience(e.target.value)} required />

                        </div>
                        <div>
                            <label for="trainerContact">Contact Number:</label>
                            <input type="tel" id="trainerContact" value={trainerContact} onChange={(e) => setTrainerContact(e.target.value)} required />

                        </div>

                        <div>
                            <label for="trainerGender">Gender:</label>
                            <select id="trainerGender" value={trainerGender} onChange={(e) => setTrainerGender(e.target.value)} required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label for="trainerAge">Date of Birth:</label>
                            <input type="date" id="trainerAge"  onChange={(e) => setTrainerAge(e.target.value)} required />
                        </div>

                        <div>
                            <label for="trainerFees">Profile Image:</label>
                            <input type="file" id="trainerFees" accept="image/*" onChange={(e) => setTrainerImage(e.target.files[0])} required />
                        </div>
                    </div>
                    <button className="add-button" type="submit">Add Trainer</button>
                </form>

            </div>
        </div>
    )
}
