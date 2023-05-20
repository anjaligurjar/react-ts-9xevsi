import * as React from 'react';

import './style.css';

export default function App() {
  return (
    <main>
      <div className="circle circle-lime"></div>
      <form action="" method="get">
   
        <h1>Login</h1>
        <div className="username" />
        <input
          type="username"
          name="username"
          id="username"
          placeholder="Username"
        />

        <div className="passworde" />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password (required)"
          required
        />
        <p className="forgot-text">
          <a href="">Forgot your password?</a>
        </p>

        <div className="keep-logged-in">
          <input type="checkbox" value="Submit"></input>
          <label>Keep me logged in.</label>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
      <div className="circle circle-aqua"></div>
    </main>
  );
}
