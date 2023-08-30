import React from 'react'

export default function CusTCell({data,setOption,setSelect,setSelectItem}) {
    return (

        <div class="customer-item">
            <h3 class="customer-name">{data.name}</h3>
            <p class="customer-info">Email: {data.username}</p>
            <div>
                <button class="view-customer-details-button" onClick={()=>{
                    setOption('view')
                    setSelectItem(data);
                }}>
                    View Details
                </button>
                <button class="view-customer-details-button" onClick={()=>{
                    setOption('assign');
                    setSelectItem(data);

                }}>
                    Assign Task
                </button>
                <button class="view-customer-details-button" onClick={()=>{
                    setOption('task');
                    setSelectItem(data);

                }}>
                    View Task
                </button>
            </div>
            <p class="contact-info">Contact: {data.contactno}</p>
        </div>
    )
}
