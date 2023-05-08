import React, { useEffect, useState } from "react";
import '../css/employee.css'
import store from "../store/configureStore";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employee/employees";

const EmployeesForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        store.subscribe(() => {
            console.log(store.getState());
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee({ name, email }));
        setName("");
        setEmail("");
    };
    
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Add Employee</button>
          </div>
        </form>

        <div>
          <h2>Employees</h2>
          <div>
            {store.getState().map((employee, index) => (
                <div key={index}>
                    <h3>
                        {employee.id} - {employee.name} - {employee.email}
                    </h3>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeesForm;