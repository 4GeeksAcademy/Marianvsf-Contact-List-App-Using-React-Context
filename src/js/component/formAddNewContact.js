import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context, } from "../store/appContext"; // Assuming your context file
import { useState, useContext } from "react";


export const FormNewContact = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { actions } = useContext(Context);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const newContact = {
      fullName: fullName,
      email: email,
      phone: phone,
      address: address,
    };
    console.log("Creando contacto:", newContact); 
    await actions.createNewContact(newContact);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Add a new contact</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Full Name</label>
          <input
            placeholder="Full Name"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Email address</label>
          <input
            placeholder="Email address"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Phone</label>
          <input
            placeholder="Enter phone"
            type="number"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlm-label">Enter address</label>
          <input
            placeholder="Enter adress"
            type="text"
            className="htmlm-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        <Link to="/home">
          <button type="button" className="btn btn-link p-0">or get back to contacts</button>
        </Link>
      </form>
    </div>
  );
};