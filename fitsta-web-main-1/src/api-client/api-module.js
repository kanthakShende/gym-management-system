
import axios from "axios";

const url = 'http://127.0.0.1:8080';

const productsList = [
    {
        "id": 1,
        "name": "AmazonBasics Magnetic Rowing Machine with 10 Resistance Levels, 3 Kg Flywheel, Max Weight 110 Kg",
        "price": 16299,
        "Description": "Brand :amazon basics\n Special Feature :Compact,Heavy Duty\n Resistance Mechanism :Magnetic\n Product Dimensions :0.48D x 2.09W x 0.59H Meters\n Maximum Weight Recommendation :110 Kilograms\n Frame Material :Alloy Steel\n Item Weight :26800 Grams\n Power Source :Battery Powered\n Shipping Weight :26 Kilograms\n Item Model Number :ABSFB015\n Item Part Number :ABSFB015\n Is Assembly Required :No\n Manufacturer :AmazonBasics\n",
        "img1": "/img/619tIJVV7iL._SL1500_.jpg",
        "img2": "/img/61j73HcIOOL._SL1500_.jpg",
        "img3": "/img/61j73HcIOOL._SL1500_.jpg",
        "img4": "/img/71rJ3ua8EbL._SL1500_.jpg"
    },
    {
        "id": 2,
        "name": "Sparnod Fitness STH-1200 Motorized Treadmill for Home Use - Easy Self Installation, 3 HP Peak, 12km/hr Max Speed, 100kg Max User Weight, 12 Preset Workouts, Manual Incline, Music Speakers",
        "price": 16499,
        "Description": "Brand :SPARNOD FITNESS\n Colour :Black\n Product Grade :Home\n Product Dimensions :142.8D x 63.5W x 106.4H Centimeters\n Item Weight :30 Kilograms\n Material :Alloy Steel\n Maximum Speed :12 Kilometers per Hour\n Special Feature :Built-In Speaker, Manual Incline, Foldable, Water Bottle Holder, Heart Rate Monitor\n Recommended Uses For Product :Cardio Workout, Walking, Jogging, Running\n Target Audience :Youth, Adult\n Maximum Horsepower :3 Horsepower\n Assembly Required :Yes\n Display Type :LCD\n Power Source :Corded Electric\n Number of Programmes :12\n Included Components :1 x Treadmill Set, 1 x Assembly kit, 1 x Lubrication Oil (30ml), 1 x User Manual, 1 x Warranty Card\n Maximum Weight Recommendation :100 Kilograms\n Deck Length :44 Inches\n ",
        "img1": "/img/717TzFmUstS._SL1200_.jpg",
        "img2": "/img/614A6KSqoAS._SL1200_.jpg",
        "img3": "/img/61tpI5BGL3S._SL1200_.jpg",
        "img4": "/img/717-vGThoZS._SL1200_.jpg"
    },
    {
        "id": 3,
        "name": "REAL SWISS Commercial Leg Press Machine Olympic Bench (Black and Yellow)",
        "price": 110000,
        "Description": "Manufacturer :Realswiss\n Country of Origin :India\n ASIN :B08PT379R3\n Manufacturer :Realswiss, for any query please whatsapp 7888772825, 8837727505\n Item Weight :350 kg\n Item Dimensions LxWxH :2.69 x 1.58 x 1.5 Meters\n Included Components :1\n Generic Name :exercise and fitness\n Best Sellers Rank :#145,329 in Sports, Fitness & Outdoors (See Top 100 in Sports, Fitness & Outdoors) in Olympic Weight Benches\n ",
        "img1": "/img/71J5OnSkgWL._SL1500_.jpg",
        "img2": "/img/61XhOf8mMJL._SL1280_.jpg",
        "img3": "/img/61VAf1DZnsL._SL1500_.jpg",
        "img4": "/img/71L83Y6hAJL._SL1500_.jpg"
    },
    {
        "id": 4,
        "name": "Reach Digital Pedal Exercise Machine | Mini Fitness Cycle For Home With Fixing Strap | Adjustable Resistance Band & LCD Display | Suitable for Light Exercise of Legs, Arms, & Physiotherapy at Home",
        "price": 1499,
        "Description": "Brand :Reach\n Special Feature :Adjustable,Compact,Folding\n Colour :Black\n Power Source :Battery Powered\n Recommended Uses For Product :Indoor\n Item Weight :1300 Grams\n Material :Alloy Steel\n Resistance Mechanism :Magnetic\n Product Dimensions :38D x 18W x 33H Centimeters\n Manufacturer :HS Fitness Private Limited\n Item model number :Exercise Pedals\n ASIN :B093Q1924X\n ",
        "img1": "/img/712GMLoAJ4L._SL1500_.jpg",
        "img2": "/img/51IdHPNqgZL._SL1104_.jpg",
        "img3": "/img/61qStI6jByL._SL1100_.jpg",
        "img4": "/img/51AvcVv2QkL._SL1100_.jpg"
    },
    {
        "id": 5,
        "name": "Welcare Elliptical Cross Trainer WC6044 with Adjustable seat, Hand Pulse Sensor, LCD Monitor, Adjustable Resistance for Home Use (DIY Installation with Video Call Assistance)",
        "price": 16990,
        "Description": "Batteries Included :No\n Brand :WELCARE\n Colour :silver,black\n Display Size :14 Inches\n Display Type :LCD\n Included Components :1 x Elliptical Trainer, 1 x User Manual, 1 x Assembly Kit\n Material Type :Metal\n Number of Items :1\n Manufacturer :WELCARE\n Country of Origin :China\n ",
        "img1": "/img/71xV+Ku0uKL._SL1500_.jpg",
        "img2": "/img/img/71fQwlOov0L._SL1500_.jpg",
        "img3": "/img/71Q+N44gztL._SL1500_.jpg",
        "img4": "/img/71sjyEjDd3L._SL1500_.jpg"
    }
];

export async function verifyUser(email, password, type) {
    try {
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);
        // formData.append("type", "admin");
        const response = await axios.post(`${url}/api/login`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
        console.log(response);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('userId', response.data.id);
        sessionStorage.setItem('usertype', response.data.type);
        sessionStorage.setItem('login', true);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function logoutUser() {
    try {
        const formData = new FormData();
        formData.append("token", sessionStorage.getItem('token'));
        const response = await axios.post(`${url}/api/logout`, formData, { headers: { 'Content-Type': 'multipart/form-data', Token: sessionStorage.getItem('token') } });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('userId');
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}



export async function getTrainersList() {
    try {
        const response = await axios.get(`${url}/api/trainer/list`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getCustomerList() {
    try {
        const response = await axios.get(`${url}/api/user/list`, { headers: { Token: sessionStorage.getItem('token') } });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function getStoreList() {
    try {
        const response = await axios.get(`${url}/api/product/list`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getMembershipPlanList() {
    try {
        const response = await axios.get(`${url}/api/plans/list`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getOrderList() {
    try {
        const response = await axios.get(`${url}/api/order/list`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getStoreEquipmentById(id) {
    try {
        const response = await axios.get(`${url}/api/product/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getUserListById(id) {
    try {
        console.log(id);
        const response = await axios.get(`${url}/api/trainer/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function getCustomerById(id) {
    try {
        const response = await axios.get(`${url}/api/user/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getMembershipPlanById(id) {
    try {
        const response = await axios.get(`${url}/api/plans/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getPlanspurchasePlanById(id) {
    try {
        const response = await axios.get(`${url}/api/planspurchase/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getTrainersById(id) {
    try {
        const response = await axios.get(`${url}/api/trainer/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getUserTaskListById(id) {
    try {
        const response = await axios.get(`${url}/api/task/list/user/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getUserOrderListById(id) {
    try {
        const response = await axios.get(`${url}/api/order/list/user/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getUserTaskById(id) {
    try {
        const response = await axios.get(`${url}/api/task/list/user/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}






export async function addEquipment(data) {
    try {
        const response = await axios.post(`${url}/api/product/create`, data, { headers: { 'Content-Type': 'multipart/form-data', Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function addTrainer(data) {
    try {
        const response = await axios.post(`${url}/api/trainer/create`, data, { headers: { 'Content-Type': 'multipart/form-data', Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function addCustomer(data) {
    try {
        const response = await axios.post(`${url}/api/user/create`, data, { headers: { Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function addPlanspurchase(data) {
    try {
        const response = await axios.post(`${url}/api/planspurchase/create`, data, { headers: { Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function addOrder(data) {
    try {
        const response = await axios.post(`${url}/api/order/create`, data, { headers: { Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}



export async function addMembershipPlan(data) {
    try {
        const response = await axios.post(`${url}/api/plans/create`, data, { headers: { Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function addTaskToUser(data) {
    try {
        const response = await axios.post(`${url}/api/task/create`, data, { headers: { Token: sessionStorage.getItem('token') }, });
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}



export async function deleteEquipment(id) {
    try {
        await axios.delete(`${url}/api/product/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function deleteTrainer(id) {
    try {
        await axios.delete(`${url}/api/trainer/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteCustomer(id) {
    try {
        await axios.delete(`${url}/api/user/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteMembershipPlanAdmin(id) {
    try {
        await axios.delete(`${url}/api/plans/${id}`, { headers: { Token: sessionStorage.getItem('token') } });
    } catch (error) {
        console.error("Error:", error);
    }
}

// export async function verifyUser(email, password) {
//     try {
//       const formData = new FormData();
//       formData.append("email", email);
//       formData.append("password", password);
//     //   const response = await axios.post(`${url}/login`, formData,{headers: {'Content-Type': 'multipart/form-data',}});
//       return true;
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }