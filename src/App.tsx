import React, { useState } from "react";
import "./App.css";

function App() {
  const noop = () => {};

  const [area, setArea] = useState("marvel");
  const [role, setRole] = useState("user");

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <div className="logo">Co-Pilot</div>
        </nav>

        <div className="login-box">
          <h2>Welcome user!</h2>
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="area-select">Area: </label>
              <select id="area-select" value={area} onChange={handleAreaChange}>
                <option value="marvel">Marvel</option>
                <option value="dc">DC Comics</option>
              </select>
            </div>
            <div className="input-wrapper">
              <label htmlFor="role-select">Role: </label>
              <select id="role-select" value={role} onChange={handleRoleChange}>
                <option value="admin">Role Admin</option>
                <option value="superadmin">Super Admin</option>
                <option value="user">Role user</option>
              </select>
            </div>
            <div className="input-wrapper">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
