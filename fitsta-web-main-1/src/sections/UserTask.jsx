import React, { useEffect, useState } from 'react'
import { getUserTaskListById } from '../api-client/api-module';

export default function UserTask({userId}) {

    const [dataList, setDataList] = useState();

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData = async () => {
        try {
            const list = await getUserTaskListById(userId);
            setDataList(list);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    return (
        <>
            <h2>Assigned Tasks and Supplements</h2>
            <div className="tasks-cards">
                <div className="tasks-card overflow-scroll-parent">
                    <h3>Assigned Tasks</h3>
                    <ul className="task-list overflow-scroll">

                    {dataList && dataList.map(item => {
                        return (
                            <ListItem key={item.id} data={item}/>
                        )
                    }
                    )}
                    </ul>
                </div>
            </div>
        </>
    )
}

function ListItem({data}) {
    return (
        <li>
            <div className="task-details">{data.workout}</div>
            <div className="task-details">{data.duration}</div>

        </li>
    )
}