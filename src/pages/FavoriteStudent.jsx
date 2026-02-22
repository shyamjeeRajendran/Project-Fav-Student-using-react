import { useContext, useState } from "react";
import { student } from "../context/StudentContext";

function FavoriteStudent() {
  let { favStudents, setFavStudents } = useContext(student);

function handleDel(item){
   setFavStudents(favStudents.filter((value)=>value.id !==item.id))
}

  return (
    <div>
      <div>
        <h1 className="bg-violet-600 text-3xl font-bold p-6 text-white text-center mb-3 md:text-5xl">
          Favorite Student List
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="bg-green-400 p-4 text-center text-3xl rounded-md mb-2 md:text-4xl">
          <h2 className="text-center text-white">Favorite Students</h2>
        </div>
        <div>
          <table className=" border border-collapse border-gray-600">
            <thead>
              <tr>
                <th className=" border border-gray-600 p-2 md:p-3">Id</th>
                <th className=" border border-gray-600 p-2 md:p-3">Roll.No</th>
                <th className=" border border-gray-600 p-2 md:p-3">Name</th>
                <th className=" border border-gray-600 p-2 md:p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {favStudents.map((item, ind) => {
                return (
                  <tr key={item.id}>
                    <td className=" border border-gray-600 p-2 md:p-3">{ind + 1}</td>
                    <td className=" border border-gray-600 p-2 md:p-3">{item.roll}</td>
                    <td className=" border border-gray-600 p-2 md:p-3">{item.name}</td>
                    <td className=" border border-gray-600 p-2 md:p-3">
                      <button className=" bg-blue-700 text-white rounded-md hover:cursor-pointer p-2" onClick={()=>{handleDel(item)}}>
                        del
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
         {favStudents.length=== 0 && <p className="text-red-500">* No favourite students added yet.*</p>}
      </div>
    </div>
  );
}

export default FavoriteStudent;
