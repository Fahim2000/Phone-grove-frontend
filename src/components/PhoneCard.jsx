import { Link } from "react-router-dom";


const PhoneCard = ({ phone }) => {
  const { name, brand, price, rating, photo,_id } = phone;
  return (
    <div className="card w-2/3 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}/5</p>
        <div className="card-actions justify-start">
          <Link to={`/productdetail/${_id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
          <Link to={`/updatePhone/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PhoneCard;