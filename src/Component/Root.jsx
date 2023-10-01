import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
const Root = () => {
    return (
        <div>
              <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;