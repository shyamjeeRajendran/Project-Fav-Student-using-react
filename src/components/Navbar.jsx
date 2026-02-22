import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-500 p-3 flex justify-between ">
      <div>
        <h1 className="text-5xl font-bold italic text-amber-200">Student</h1>
        <p className=" font-bold italic text-xl text-amber-200 text-end">medium...</p>
      </div>
      <div className="flex self-baseline-last gap-3">
        <Link to={"/"} className="text-xl underline">
          Profile
        </Link>
        <Link to={"/FavStudent"} className="text-xl underline">
          Favorites
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
