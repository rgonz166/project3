import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import GoogleApiWrapper from '../components/MapApp';


const Customer = () => {
        return (
            <div>
                <Searchbar/>
                <br></br>
                <GoogleApiWrapper/>    
        </div>
        )
}

export default Customer;