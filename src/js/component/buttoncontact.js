import React, { Component } from "react";
import { Link } from "react-router-dom";

export const ButtonContact = () => (
    <div className="container d-flex justify-content-end mb-3">
        <Link to="/FormAddNewContact">
        <button type="button" className="btn btn-success">Add New Contact</button>
        </Link>
    
    </div>
);
