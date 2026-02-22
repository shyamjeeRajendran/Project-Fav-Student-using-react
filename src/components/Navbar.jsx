import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-500 p-3 flex justify-between ">
      <div>
        <h1 className="text-3xl font-bold italic text-amber-200 md:text-5xl">Student</h1>
        <p className=" font-bold italic text-xl text-amber-200 text-end text-[1rem] md:text-2xl">medium...</p>
      </div>
      <div className="flex self-baseline-last gap-1.5  md:gap-3">
        <Link to={"/"} className=" text-white underline md:text-xl">
          Profile
        </Link>
        <Link to={"/FavStudent"} className=" text-white underline md:text-xl">
          Favorites
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
