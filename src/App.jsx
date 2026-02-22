import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentList from "./pages/StudentList.jsx";
import FavStudent from './pages/FavoriteStudent.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<StudentList/>}></Route>
        <Route path="/FavStudent" element={<FavStudent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
