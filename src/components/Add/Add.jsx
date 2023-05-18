import React, { useState } from 'react';
import axios from 'axios'
const Add = () => {
    const [name, setname] = useState('')
    const [gmail, setgmail] = useState('')

    const reset=()=>{
        setname('')
        setgmail('')
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
        const info = { name, gmail }
        const {data}=await axios.post('http://localhost:5050/user', info)
        if(data){
            console.log(data)
            console.error('Your data sent scccessfull')
        }
        // reset from
        reset()

    }
    return (
        <div className='container mx-auto justify-center text-center'>
            <h1>Add user</h1>
            <form onSubmit={handlesubmit} className='space-y-2'>
                <h1>Name:<input value={name} onChange={(e) => setname(e.target.value)} className='border' type="text" /></h1>
                <h1>Gmail:<input value={gmail} onChange={(e) => setgmail(e.target.value)} className='border' type="text" /></h1>
                <button className='bg-[red] py-2 text-white px-11'>Add</button>
            </form>
        </div>
    );
};

export default Add;