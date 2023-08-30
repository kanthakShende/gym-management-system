import React, { useEffect, useState } from 'react'
import { addMembershipPlan, getTrainersList } from '../api-client/api-module';

export default function FormMemberShipAdd({ setSelect, selectItem }) {

    const [dataList, setDataList] = useState();
    const [membershipName, setMembershipName] = useState(selectItem?selectItem.name:'');
    const [membershipType, setMembershipType] = useState(selectItem?selectItem.type:'');
    const [membershipPrice, setMembershipPrice] = useState(selectItem?selectItem.price:'');
    const [membershipDuration, setMembershipDuration] = useState(selectItem?selectItem.duration:'');
    const [membershipTrainer, setMembershipTrainer] = useState(selectItem?selectItem.planstrainer:'');
    const [membershipDescription, setMembershipDescription] = useState(selectItem?selectItem.features:'');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const list = await getTrainersList();
            console.log(list);
            setDataList(list);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    function handelClose(params) {
        setSelect(' ');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            "id": selectItem?selectItem.id:0,
            "planstrainer": membershipTrainer,
            "name": membershipName,
            "type": membershipType,
            "duration": membershipDuration,
            "features": membershipDescription,
            "price": membershipPrice
        };
       

        await addMembershipPlan(formData);
        handelClose()
    };

    return (
        <>
            <div className="modal">
                <div className="modal-content entity-add-form">
                    <span className="close" onClick={handelClose}>&times;</span>
                    <h2>Add New Membership</h2>
                    <form className="common-form" onSubmit={handleSubmit}>
                        <label for="membershipName">Name:</label>
                        <input type="text" id="membershipName" value={membershipName} onChange={(e) => setMembershipName(e.target.value)} required />

                        <label for="membershipType">Type:</label>
                        <select id="membershipType" value={membershipType} onChange={(e) => setMembershipType(e.target.value)} required>
                            <option value="">select type</option>
                            <option value="diamond">Diamond</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                        </select>

                        <label for="membershipPrice">Price:</label>
                        <input type="number" id="membershipPrice"  value={membershipPrice} onChange={(e) => setMembershipPrice(e.target.value)} required/>

                        <label for="membershipDuration">Duration (Months):</label>
                        <input type="number" id="membershipDuration" required value={membershipDuration} onChange={(e) => setMembershipDuration(e.target.value)}/>

                        <label for="membershipTrainer">Trainer:</label>
                        <select id="membershipTrainer" required value={membershipTrainer} onChange={(e) => setMembershipTrainer(e.target.value)}>
                            <option value="">Select Trainer </option>

                            {dataList && dataList.map(item => {

                                return <ListOption key={item.id} params={item} />
                            })}
                        </select>{/*value={description} onChange={(e) => setDescription(e.target.value)}*/}
                        
                        <label for="membershipDescription">Features :</label>
                        <textarea id="membershipDescription" style={{'minHeight': '6rem'}} value={membershipDescription} onChange={(e) => setMembershipDescription(e.target.value)} required />

                        <button className="add-button" type="submit">Add Membership</button>
                    </form>
                </div>
            </div>
        </>
    )
}

function ListOption({ params }) {
    return (<option value={params.id}>{params.name}</option>)
}