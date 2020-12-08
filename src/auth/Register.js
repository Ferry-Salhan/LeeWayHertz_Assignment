import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    error: null,
  });

  const { firstname, lastname, email, contact, error } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.firstname]: e.target.value });
    setData({ ...data, [e.target.lastname]: e.target.value });
    setData({ ...data, [e.target.contact]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, error: null });
      await axios.post(
        "/api/auth/register",
        { firstname, lastname, email, contact,  },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      setData({ ...data, error: err.response.data.error });
    }
  };

  return (
    <div className="row">
      <div className="col-sm-2" />
      <div className="col-sm-8">
        <h4 className="text-muted text-center mb-5">Create an account</h4>

        <div className="card p-5 shadow">
          <form>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                className="form-control"
                type="firstname"
                name="firstname"
                value={firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                className="form-control"
                type="lastname"
                name="lastname"
                value={lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">contact</label>
              <input
                className="form-control"
                type="contact"
                name="contact"
                value={contact}
                onChange={handleChange}
              />
            </div>
            {error ? <p className="text-danger">{error}</p> : null}
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Register
              </button>
              <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-2" />
    </div>
  );
};

export default Register;
