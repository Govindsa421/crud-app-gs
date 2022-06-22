import React, { useState } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";

const DataTable = ({ employees, editItem, deleteItem }) => {
  // console.log(employees, "data");

  const [search, setSearch] = useState("");

  employees.forEach((user, i) => {
    user.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <>
      <div>
        <div className="float-right relative bottom-16">
          <input
            type="text"
            className="input_style"
            placeholder="search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="pb-10">
          <table className="w-full bg-white border text-center ">
            <thead>
              <tr className="h-14">
                <th className="border w-10">#</th>
                <th className="border">First Name</th>
                <th className="border">Last Name</th>
                <th className="border">Email</th>
                <th className="border">Salary</th>
                <th className="border">Date</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody className="border">
              {employees.length ? (
                employees
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.first_name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((user) => {
                    // console.log(user, "user");
                    return (
                      <tr className="h-14" key={user.id}>
                        <td className="border">{user.id}</td>
                        <td className="border">{user.first_name}</td>
                        <td className="border">{user.last_name}</td>
                        <td className="border">{user.email}</td>
                        <td className="border">
                          {formatter.format(user.salary)}
                        </td>
                        <td className="border">{user.date}</td>
                        <td className="border">
                          <div className="flex items-center justify-center cursor-pointer gap-4">
                            <PencilAltIcon
                              className="h-6 w-6"
                              onClick={() => editItem(user.id)}
                            />
                            <TrashIcon
                              className="h-6 w-6 text-secondary-RosyRed"
                              onClick={() => deleteItem(user.id)}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <tr>
                  <td>No Record!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
