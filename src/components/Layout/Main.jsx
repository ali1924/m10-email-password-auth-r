import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <p>This is Main page</p>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;