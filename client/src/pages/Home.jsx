import { useEffect, useState, useContext } from "react";
import axios from "axios";
import PriceCard from "../components/cards/PriceCard";
import { UserContext } from "../context";

function Home({ history }) {
  const [state, setState] = useContext(UserContext);
  const [prices, setPrices] = useState([]);
  const [userSubscriptions, setUserSubscriptions] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  useEffect(() => {
    let result = [];
    const check = () => {
      state?.user?.subscriptions?.map((sub) => result.push(sub.plan.id));
    };
    check();
    setUserSubscriptions(result);
  }, [state && state.user]);

  const fetchPrices = async () => {
    const { data } = await axios.get("http://localhost:8000/api/prices");
    console.log(data);
    setPrices(data);
  };

  const handleClick = async (e, price) => {
    e.preventDefault();
    if (userSubscriptions && userSubscriptions.includes(price.id)) {
      history.push(`/${price.nickname.toLowerCase()}`);
      return;
    }
    // console.log("Plan clicked!!!", price.id);
    if (state && state.token) {
      const { data } = await axios.post("create-subscription", {
        priceId: price.id,
      });
      window.open(data);
    } else {
      history.push("/register");
    }
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
          <PriceCard
            key={price.id}
            price={price}
            handleSubscription={handleClick}
            userSubscriptions={userSubscriptions}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
