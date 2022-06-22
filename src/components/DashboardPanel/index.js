import React, { useState } from "react";
import Swal from "sweetalert2";
import { employeesData } from "../../data";
// import SearchComponent from "../DashboardPanel/SearchComponent";
import CreateUser from "../UserController/CreateUser";
import UpdateUser from "../UserController/UpdateUser";
import Button from "./Button";
import DataTable from "./DataTable";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const UpdateHandler = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedUsers(employee);
    setIsEditing(true);
  };

  const DeleteHandler = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure ?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.first_name} ${employee.last_name}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <>
      <div className="lg:px-16 px-6 py-10 space-y-6">
        {!isAdding && !isEditing && (
          <>
            <div className="flex justify-between">
              <Button setIsAdding={setIsAdding} />
              {/* <SearchComponent /> */}
            </div>

            <DataTable
              employees={employees}
              editItem={UpdateHandler}
              deleteItem={DeleteHandler}
            />
          </>
        )}

        {isAdding && (
          <CreateUser
            title={"Create User"}
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}

        {isEditing && (
          <UpdateUser
            title={"Update User"}
            employees={employees}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
            selectedUsers={selectedUsers}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
