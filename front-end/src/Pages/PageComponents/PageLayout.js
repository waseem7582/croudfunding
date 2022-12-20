import React from 'react';
import Navbar from "./Navbar";
import Content from "./Content";


const PageLayout = (props) => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex flex-column w-100 m-0 p-0">
                <div className="mp-0 item-hl"> <Navbar/> </div>
                <div className="p-4 item-hl">
                    <Content padding="180"> {props.children} </Content>
                </div>
            </div>
        </div>
    );

};

export default PageLayout;