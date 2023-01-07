import option from "../assets/options.png";
import myprofile from "../assets/myprofile.png";

const Header = (props) => {
  return (
    <div className="fixed bg-slate-100 space-x-56 top-0 flex justify-between rounded drop-shadow-md w-full">
      <div>
        <h1 className="text-black p-4 ml-56">{props.Header}</h1>
      </div>
      <div className="flex items-center justify-items-center">
        <button className="bg-cyan-400 text-white rounded p-1 text-sm">
          CREATE COURSE
        </button>
        <div className="w-6 h-6 bg-black rounded-full ml-2">
          <img src={myprofile} alt="myprofile" />
        </div>
        <button>
          <img src={option} alt="options" className="w-6" />
        </button>
      </div>
    </div>
  );
};
export default Header;
