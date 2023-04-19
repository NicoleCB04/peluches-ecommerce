import { Component } from "react";
import { Link } from "react-router-dom";


export default function CabeceraPagina({children, currentMenu}){

        return (
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1 className="page-name">{currentMenu}</h1>
                                <ol className="breadcrumb">
                                    <li><Link to={'/'}>Inicio</Link></li>    
                                    {children}
                                    <li className="active">{currentMenu}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        );
}