import React from "react";
import { Link } from "react-router-dom";

export const ButtonContact = () => (
    <div className="container d-flex justify-content-end mb-3 mr-5">
        <Link to="/formAddNewContact">
        <button type="button" className="btn btn-success">Add New Contact</button>
        </Link>
    
    </div>
);
