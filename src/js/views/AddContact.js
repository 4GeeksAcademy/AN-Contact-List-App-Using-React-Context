import React from "react";
import { Link } from "react-router-dom";
export const AddContact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Add New Contact</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter phone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
              <Link to="/contact">volver contactos</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
