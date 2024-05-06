import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phones = () => {
    const params = useParams()
  const brand  = params.brand
    const [phones,setPhones] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/phones/${brand}`)
        .then(res=>res.json())
        .then(data=>setPhones(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12">
            {
                phones.map(phone=><PhoneCard phone={phone}></PhoneCard>)
            }
        </div>
    );
};

export default Phones;