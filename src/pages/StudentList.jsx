import { useState } from "react";
import { useContext } from "react";
import { student } from "../context/StudentContext";

function Student() {
  const [students, setStudents] = useState([
    { id: 1, roll: "001", name: "ajith" },
    { id: 2, roll: "002", name: "vijay" },
    { id: 3, roll: "003", name: "rajini" },
    { id: 4, roll: "004", name: "kamal" },
    { id: 5, roll: "005", name: "dhanush" },
    { id: 6, roll: "006", name: "simbu" },
    { id: 7, roll: "007", name: "siva Karthikeyan" },
    { id: 8, roll: "008", name: "ravi Mohan" },
    { id: 9, roll: "009", name: "vikram" },
    { id: 10, roll: "0010", name: "suriya" },
  ]);

  let { favStudents, setFavStudents } = useContext(student);
  let [roll, setRoll] = useState("");
  let [name, setName] = useState("");
  let [temp, setTemp] = useState(false);

  let handleName = (e) => {
    return setName(e.target.value);
  };
  let handleRoll = (e) => {
    return setRoll(e.target.value.replace(/\D/g, ""));
  };
  let handleClick = (e) => {
    if (name.trim() !== "" && roll.trim() !== "") {
      setStudents([
        ...students,
        {
          id: students.length + 1,
          roll: "00" + (students.length + 1),
          name: name,
        },
      ]);
      setName("");
      setRoll("");
    } else {
      setTemp(true);
    }
  };
  let handleAdd = (item) => {
    const alreadyExists = favStudents.find((val) => {
      return val.id === item.id;
    });

    if (!alreadyExists) {
      setFavStudents([...favStudents, item]);
    }
  };
  console.log(favStudents)
  return (
    <div>
      <div>
        <h1 className="bg-violet-600 text-5xl font-bold p-6 text-white text-center">
          Student Profile Management
        </h1>
      </div>

      <div className="flex align-middle justify-around mt-5 flex-wrap ">
        <div className=" w-fit p-4 border border-gray-400 h-fit flex  flex-col gap-2">
          <div className="bg-green-400 p-5 text-center text-4xl rounded-xl">
            <h2 className="text-white">Add Student</h2>
          </div>
          <label>Name* :</label>
          <input
            className="border border-gray-400 rounded-md p-1"
            value={name}
            onChange={handleName}
            placeholder="Enter your name"
          />
          <br />
          <label>Mob Number* :</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            className="border border-gray-400 rounded-md p-1"
            value={roll}
            onChange={handleRoll}
            placeholder="Enter Mob number"
          />
          <br />
          {temp && (
            <p className="text-red-500">
              * please fill in all the required columns *
            </p>
          )}
          <button
            type="button"
            className=" bg-blue-700 text-white rounded-md p-1 hover:cursor-pointer "
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
        <div>
          <div className="bg-green-400 p-4 text-center text-4xl rounded-md mb-2">
            <h2 className="text-center text-white">Student List</h2>
          </div>

          <table className=" border border-collapse border-gray-600">
            <thead>
              <tr>
                <th className=" border border-gray-600 p-3">Id</th>
                <th className=" border border-gray-600 p-3">Roll.No</th>
                <th className=" border border-gray-600 p-3">Name</th>
                <th className=" border border-gray-600 p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, ind) => {
                return (
                  <tr key={item.id}>
                    <td className=" border border-gray-600 p-3">{ind + 1}</td>
                    <td className=" border border-gray-600 p-3">{item.roll}</td>
                    <td className=" border border-gray-600 p-3">{item.name}</td>
                    <td className=" border border-gray-600 p-3">
                      <button
                        className=" bg-blue-700 text-white rounded-md hover:cursor-pointer p-2"
                        onClick={() => {
                          handleAdd(item);
                        }}
                      >
                        Add Fav
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
