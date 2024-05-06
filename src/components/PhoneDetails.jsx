import { useLoaderData } from "react-router-dom";


const PhoneDetails = () => {
const phone = useLoaderData()

const {name,price,desc,photo} = phone
    return (
      <>
        <h1 className="text-3xl mb-6">
          Produc details of <span className="font-bold">{name}</span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-around w-full">
          <img src={photo} alt="" />
          <div className="">
            <p>Name: {name}</p>
            <p>price: ${price}</p>
            <p>description: {desc}</p>
            <button className="bg-blue-800 py-2 px-5 rounded-full mt-4">
              Add to cart
            </button>
          </div>
        </div>
      </>
    );
};

export default PhoneDetails;