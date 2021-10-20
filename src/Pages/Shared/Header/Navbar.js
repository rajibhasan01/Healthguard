import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const history = useHistory();
    const { user, logOut } = useAuth();

    const showSidebar = () => setSidebar(!sidebar);

    const handlePage = () => {
        history.push('/login');
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="me-0 mt-2 ms-auto d-flex text-white">
                        <FaIcons.FaPhoneAlt className="d-none d-md-block mt-2" />
                        <p className="me-5 fw-lighter ms-3 d-none d-md-block mt-2">01754-063712</p>

                        <FaIcons.FaUser className="text-white me-2 mt-2" />
                        {
                            !user.email ? <p className="me-5 fw-light mt-2 login-cursor" onClick={handlePage}>Login</p>
                                :
                                <div className="logoutName mt-2"><p className="text-muted pe-3"> {user.displayName} </p><p className="me-5 bg-secondary px-2 rounded fw-light login-cursor" onClick={logOut}>Logout</p></div>

                        }

                    </div>

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;