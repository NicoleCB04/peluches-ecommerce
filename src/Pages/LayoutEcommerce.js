import { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Layout/Footer";
import HeaderBar from "../Component/Layout/HeaderBar";
import MenuBar from "../Component/Layout/MenuBar";


class LayoutEcommerce extends Component{

    render() {
        return (
            <>
                <HeaderBar/>
                <MenuBar />
                
                <div>
                    <Outlet />
                </div>
                
                <Footer />
            </>
        );
    }
}


export default LayoutEcommerce; 