import xiaomi from "../assets/xiaomi.svg";
import apple from "../assets/apple.svg";
import samsung from "../assets/samsung.svg";
import { Link } from "react-router-dom";
const Brands = () => {
  return (
    <div className="flex flex-col items-center justify-center  lg:flex-row lg:space-x-16">
      <div className="shadow-2xl w-[310px] h-[250px] rounded-lg ">
        <Link to="/phone/Xiaomi">
          <img src={xiaomi} alt="" className="w-full h-full" />
        </Link>
      </div>
      <div className="shadow-2xl w-[310px] h-[250px] rounded-lg ">
        <Link to="/phone/Apple">
          <img src={apple} alt="" className="w-full h-full" />
        </Link>
      </div>
      <div className="shadow-2xl w-[310px] h-[250px] rounded-lg ">
        <Link to="phone/Samsung">
          <img src={samsung} alt="" className="w-full h-full" />
        </Link>
      </div>
    </div>
  );
};

export default Brands;
