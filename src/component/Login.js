import React from "react";
export default function Login()
{
  return (
     <div className="Form">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
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
  )
}