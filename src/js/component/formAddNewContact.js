import React, { Component } from "react";
import { Link } from "react-router-dom";

export const FormNewContact = () => (
    <div className="container">
    <form>
        <h1 className="text-center">Add a new contact</h1>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlm-label">Full Name</label>
        <input placeholder="Full Name" type="text" className="htmlm-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlm-label"  >Email address</label>
        <input placeholder="Enter email" type="email" className="htmlm-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlm-label">Phone</label>
        <input placeholder="Enter phone" type="number" className="htmlm-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="htmlm-label">Address</label>
        <input placeholder="Enter Address" type="text" className="htmlm-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    
    <Link to="/home">
    <button type="button" className="btn btn-link p-0">or get back to contacts</button>
    </Link>
</form>
    </div>
);