import React, { Component } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import logo from "../assets/food-truck-transparent.png";
import { Redirect } from 'react-router';
import "./landing.css";

const Landing = () => {
    const { loginWithRedirect } = useAuth0();
        return (
            <div>
                <div className="main">
                <div className="text-center hero my-2">
                    <img className="mb-2 app-logo" src={logo} alt="logo" width="120" />
                    <h1 className="title mb-2">MHEELS</h1>
                    <p className="lead">
                    Track and Eat
                     </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-center">
                            <Button color="success" size="lg"
                                onClick={() => loginWithRedirect({})}
                            >Vendor</Button>
                        </div>
                        <div className="col-6 text-center">
                    <Link to = "/customer"><Button color="info" size="lg" onClick={<Redirect push to= "/customer"/>}>Customer</Button> </Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
}

export default Landing;