import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const MenuItem = () => {
    const { logOut, user } = useContext(AuthContext)
    return (

        <div>
            <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                {
                    user && user?.uid
                        ?
                        <button
                            onClick={logOut}
                            className='btn bg-gradient-to-r from-primary to-secondary border-0 btn-sm m-4 text-white font-bold'>
                            Log Out
                        </button>
                        :
                        <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </div>
    );
};

export default MenuItem;