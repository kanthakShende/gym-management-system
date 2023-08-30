import React, { useState } from 'react'
import { addEquipment } from '../api-client/api-module';

export default function FormEquipment({ setSelect,selectItem }) {

    const [name, setName] = useState(selectItem?selectItem.name:'');
    const [price, setPrice] = useState(selectItem?selectItem.price:'');
    const [description, setDescription] = useState(selectItem?selectItem.Description:'');
    const [images, setImages] = useState([null, null, null, null]);


    const handleImageChange = (index, event) => {
        const newImages = [...images];
        newImages[index] = event.target.files[0];
        setImages(newImages);
    };

    function handelClose(params) {
        setSelect('');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        
        formData.append('Id', selectItem?selectItem.id:0);
        formData.append('Name', name);
        formData.append('ProductPrice', price);
        formData.append('Description', description);
        formData.append('Image1', images[0]);
        formData.append('Image2', images[1]);
        formData.append('Image3', images[2]);
        formData.append('Image4', images[3]);
        await addEquipment(formData);
        handelClose()
      };
    return (

        <div className="modal">
            <div className="modal-content entity-add-form">
                <span className="close" onClick={handelClose}>&times;</span>
                <h3>Add New Equipment</h3>
                <form id="equipmentForm" onSubmit={handleSubmit}>
                    <label htmlFor="equipmentName">Name:</label>
                    <input type="text" id="equipmentName" value={name} onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="equipmentPrice">Price:</label>
                    <input type="number" id="equipmentPrice" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    <label htmlFor="equipmentDescription">Description:</label>
                    <textarea id="equipmentDescription" value={description} onChange={(e) => setDescription(e.target.value)} required />

                    {!selectItem&&<div className="input-group">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index}>
                                <label htmlFor={`image${index}`}>Image {index}:</label>
                                <input type="file" id={`image${index}`} accept="image/*" onChange={(e) => handleImageChange(index - 1, e)} required />
                            </div>
                        ))}
                    </div>}
                    <button type="submit" className="add-button">Add Equipment</button>
                </form>
            </div>
        </div>
    )
}
