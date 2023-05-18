import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id}=useParams()
    const [user,setuser]=useState([])
    const [name, setname] = useState('')
    const [gmail, setgmail] = useState('')
    const navigate=useNavigate()

    // fetch data
    useEffect(()=>{
       const getdata=async()=>{
         const {data}=await axios.get(`http://localhost:5050/user/${id}`)
         setuser(data)
       }
       getdata()
    },[name,gmail])
    
    const handlesubmit = async(e) => {
        e.preventDefault()
        const data = { name, gmail }
        // send to data server
        const url=`http://localhost:5050/user/${id}`
        axios.put(url,data)
        .then(data => {
           console.log(data.data)
           console.warn('updata successfull')
        })  
                   
    }
    return (
        <div className='container mx-auto justify-center text-center'>
            <h1>Update user name::{user.name}</h1>
            <form onSubmit={handlesubmit} className='space-y-2'>
                <h1>Name:<input defaultValue={user.name} onChange={(e) => setname(e.target.value)} className='border' type="text" /></h1>
                <h1>Gmail:<input defaultValue={user.gmail}  onChange={(e) => setgmail(e.target.value)} className='border' type="text" /></h1>
                <button className='bg-[red] py-2 text-white px-11'>Add</button>
            </form>
        </div>
    );
};

export default Update;