import { LogoutIcon, SaveIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateUser = ({ setIsAdding, setEmployees, employees, title }) => {
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    salary: "",
    date: "",
  };
  const [user, setUser] = useState(initialData);
  // console.log(createUser,"props")

  const InputHandler = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const AddHandler = (e) => {
    e.preventDefault();

    if (
      !user.first_name ||
      !user.last_name ||
      !user.email ||
      !user.salary ||
      !user.date
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      salary: user.salary,
      date: user.date,
    };

    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${user.first_name} ${user.last_name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="py-10">
        <form onSubmit={AddHandler}>
          <div className="bg-white border-b p-3 font-bold">{title}</div>
          <div className="space-y-4 bg-white p-6 w-3/5">
            <div className="flex items-center gap-2">
              <label className="w-24">
                <span className=" text-secondary-RosyRed mr-1">*</span>First
                Name :
              </label>
              <input
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={InputHandler}
                className="w-52 p-2 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24">
                <span className=" text-secondary-RosyRed mr-1">*</span>Last Name
                :
              </label>
              <input
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={InputHandler}
                className="w-52 p-2 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24">
                <span className=" text-secondary-RosyRed mr-1">*</span>E-Mail :
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={InputHandler}
                className="w-52 p-2 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24">
                <span className=" text-secondary-RosyRed mr-1">*</span>Salary :
              </label>
              <input
                type="number"
                name="salary"
                value={user.salary}
                onChange={InputHandler}
                className=" w-52 p-2 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24">
                <span className=" text-secondary-RosyRed mr-1">*</span>Date :
              </label>
              <input
                type="date"
                name="date"
                value={user.date}
                onChange={InputHandler}
                className="w-52 p-2 border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="text-white  flex gap-4 ">
              <button className="bg-primary text-sm tracking-wider items-center flex gap-2 px-4 py-2">
                <SaveIcon className="h-5 w-5" />
                Save
              </button>

              <button
                onClick={() => setIsAdding(false)}
                // onClick={CancelHandler}
                className="bg-primary text-sm  tracking-wider items-center flex gap-2 px-4 py-2"
              >
                <LogoutIcon className="h-5 w-5" />
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
