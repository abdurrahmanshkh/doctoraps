import React from 'react';
import '../styles/layout.css';
import { sidebarMenu } from '../data/Data';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({children}) => {
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
              <h1>Welcome to our website</h1>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;