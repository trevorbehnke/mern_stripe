import { useEffect, useState } from "react";
import axios from "axios";
import PriceCard from "../components/cards/PriceCard";

function Home() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);
  const fetchPrices = async () => {
    const { data } = await axios.get("http://localhost:8000/api/prices");
    console.log(data);
    setPrices(data);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Plan clicked!!!");
  };

  //  get the first three objects from the array since I can't delete old products from stripe
  const pricesToShow = prices.slice(0, 3).reverse();

  return (
    <div className="container-fluid">
      <div className="row col-md-6 offset-md-3 text-center">
        <h1 className="pt-5 fw-bold">
          Explore the right plan for your business
        </h1>
        <p className="lead pb-4">Choose a plan that suits you best</p>
      </div>
      <div className="row pt-5 mb-3 text-center">
        {pricesToShow.map((price) => (
          <PriceCard key={price.id} price={price} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Home;
