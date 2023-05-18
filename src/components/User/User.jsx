import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const User = () => {
    const [user, setuser] = useState([])
    const navigate = useNavigate()
    // how to get data
    useEffect(() => {
        // await axios.get("http://localhost:5050/user")
        // .then(data=>console.log(data))
        const getdata = async () => {
            const { data } = await axios.get("http://localhost:5050/user")
            setuser(data)
        }
        getdata()
    }, [])

    const handledelete = userr => {
        const sure = confirm(`You are sure delete ${userr.name}`)
        if (sure) {
            axios.delete(`http://localhost:5050/user/${userr._id}`)
                .then(data => {
                    console.log(data)
                    if (data.data.deletedCount > 0) {
                        const newdata = user.filter(u => u._id !== userr._id)
                        setuser(newdata)
                    }
                })
        }
    }
    return (
        <div className='text-center'>
            <h1 className='text-[red] text-2xl'>User length {user.length}</h1>
            {user.map(user => <li key={user._id}>{user.name} || {user.gmail} ||
                <button onClick={() => handledelete(user)} className='bg-[green] font-bold text-white py-1 px-4 my-3'>X</button>
                <button onClick={() => navigate(`/update/${user._id}`)} className='bg-[#27a6dd] font-bold text-white py-1 px-4 my-3'>Update</button>
            </li>)}
        </div>
    );
};

export default User;