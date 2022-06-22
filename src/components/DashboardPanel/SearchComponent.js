// import React, { useState } from "react";

// const SearchComponent = ({ employees }) => {
//   const [ss, setss] = useState("");
//   return (
//     <>
//     {/* <form className=" form_div" onSubmit={(e) => e.preventDefault()}> */}
//     <div>
//       <input
//         type="text"
//         className="input_style"
//         placeholder="search here"
//         value={ss}
//         onChange={(e) => setss(e.target.value)}
//       />
//       {employees.filter((val) => {
//         if (ss === "") {
//           return val;
//         } else if (val.first_name.toLowerCase().includes(ss.toLowerCase())) {
//           return val;
//         }
//       })}
//     </div></>
    

//     // </form>
//   );
// };

// export default SearchComponent;
