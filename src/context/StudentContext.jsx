import { createContext } from "react";
import { useState } from "react";

const student = createContext();

function StudentContext({ children }) {
  const [favStudents, setFavStudents] = useState([
  ]);

  return (
    <student.Provider value={{ favStudents, setFavStudents }}>
      {children}
    </student.Provider>
  );
}

export default StudentContext;
export {student}
