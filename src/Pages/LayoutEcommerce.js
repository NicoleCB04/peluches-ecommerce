import { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Layout/Footer";
import HeaderBar from "../Component/Layout/HeaderBar";
import MenuBar from "../Component/Layout/MenuBar";
import { CarritoProvider } from "../Context/CarritoContext";


class LayoutEcommerce extends Component{

    render() {
        return (
     
                <CarritoProvider>
                    <HeaderBar/>
                    <MenuBar />
                    
                    <div>
                        <Outlet />
                    </div>
                    
                    <Footer />
                </CarritoProvider>
          
        );
    }
}


export default LayoutEcommerce; 