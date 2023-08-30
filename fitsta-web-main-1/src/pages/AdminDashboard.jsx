import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import AdminCutomers from '../sections/AdminCutomers';
import AdminTrainers from '../sections/AdminTrainers';
import AdminEquipment from '../sections/AdminEquipment';
import AdminMember from '../sections/AdminMember';
import AdminPurchese from '../sections/AdminPurchese';

export default function AdminDashboard() {
    const [option, setOption] = useState('customers');

  return (
    <>
        <NavBar/>
            <div className="body-container">
                <div className="a-container">
                    <div className="siderbar-menu">
                        <ul>
                            <li>
                                <div className={`menu-option ${option === 'customers' ? 'active-menu' : ''}`} onClick={() => setOption('customers')}>
                                Customers
                                    <img src="img/line-angle-right-icon.svg" alt='' className="toggle-btn" />
                                </div>
                            </li>
                            <li>
                                <div className={`menu-option ${option === 'trainers' ? 'active-menu' : ''}`} onClick={() => setOption('trainers')}>
                                Trainers
                                    <img src="img/line-angle-right-icon.svg" alt='' className="toggle-btn" />
                                </div>
                            </li>
                            <li>
                                <div className={`menu-option ${option === 'equipment' ? 'active-menu' : ''}`} onClick={() => setOption('equipment')} >
                                Equipment
                                    <img src="img/line-angle-right-icon.svg" alt='' className="toggle-btn" />
                                </div>
                            </li>
                            <li>
                                <div className={`menu-option ${option === 'membership' ? 'active-menu' : ''}`} onClick={() => setOption('membership')}>
                                    Memberships Plans
                                    <img src="img/line-angle-right-icon.svg" alt='' className="toggle-btn" />
                                </div>
                            </li>
                            <li>
                                <div className={`menu-option ${option === 'purchese' ? 'active-menu' : ''}`} onClick={() => setOption('purchese')} >
                                    Store Purchese
                                    <img src="img/line-angle-right-icon.svg" alt='' className="toggle-btn" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="main-container" id="mainContainer">
                    {option==='customers'&&<AdminCutomers />}
                    {option==='trainers'&&<AdminTrainers />}
                    {option==='equipment'&&<AdminEquipment />}
                    {option==='membership'&&<AdminMember />}
                    {option==='purchese'&&<AdminPurchese />}
                    </div>
                </div>
            </div>
            <footer>
        <div className="divider-y"></div>
        <p>&copy; 2023 Fitsta.com All rights reserved.</p>

    </footer>
        </>
  )
}
