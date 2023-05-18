import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[green] py-2'>
            <div className='container mx-auto'>
                <ul className='flex space-x-4 text-white justify-center'>
                    <li><Link to="/add">Add User</Link></li>
                    <li><Link to='/user'>All User</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;