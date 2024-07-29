import React from 'react';
import '../styles/layout.css';
import { sidebarMenu } from '../data/Data';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({children}) => {
  const {user} = useSelector(state => state.user);
  const location = useLocation();
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">DOCTOR APPOINTMENTS</div>
            <hr></hr>
            <div className="menu">
              {sidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className='header-container'>
                <i className='fa-solid fa-bell'></i>
                <Link to='/profile'>{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;