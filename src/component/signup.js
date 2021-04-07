import React from "react";

export default function Signup() {
  return (
    
     <div className="Formsignup">
        <div className="form-floating mb-3">
          <input
            type="Username"
            className="form-control"
            id="floatingInput"
            placeholder="name"
          />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="Email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="Mobileno"
            className="form-control"
            id="floatingInput"
            placeholder="1111111111"
          />
          <label for="floatingInput">Mobileno</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="Address"
            className="form-control"
            id="floatingInput"
            placeholder="123,mainroad"
          />
          <label for="floatingInput">Address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
          <br />
        </div>
        <button type="button" class="btn btn-primary">
          login
        </button>
      </div>
  );
}


