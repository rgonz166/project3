import React, { Component } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/food-truck.jpg";

const Landing = () => {

    const { loginWithRedirect } = useAuth0();

    
        return (
            <div>
                <div className="text-center hero my-2">
                    <img className="mb-2 app-logo" src={logo} alt="logo" width="120" />
                    <h1 className="mb-2">MHEELS</h1>
                    <p className="lead">
                    Track and Eat
                     </p>
                 </div>
                <div className="container">
                <div className="row">
                    <div className="col-5 text-right">
                    <Button color="success"
                    onClick={() => loginWithRedirect({})}
                    >Vendor</Button>
                    </div>
                    <div className="col-2 text-center">
                    <p>OR</p>
                    </div>
                    <div className="col-5">
                        <Link to="/customer">
                            <Button color="info">Customer</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Landing;