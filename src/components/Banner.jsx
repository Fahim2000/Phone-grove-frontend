
import phone from "../assets/phone.svg"
const Banner = () => {
    return (
      <div className="flex items-center justify-around">
        <h1 className="text-7xl">Discover the Latest in <br /> Mobile Technology!</h1>
        <img src={phone} alt="" className="w-2/6"/>
      </div>
    );
};

export default Banner;