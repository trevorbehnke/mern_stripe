const PriceCard = ({ price }) => {
  const dynamicDescription = () => {
    if (price.nickname === "BASIC") {
      return "5 exclusive stocks";
    } else if (price.nickname === "STANDARD") {
      return "10 exclusive stocks";
    } else if (price.nickname === "PREMIUM") {
      return "Unlimited stocks";
    }
  };
  const handleSubscription = (price) => {};

  const buttonStyle = () => {
    if (price.nickname === "BASIC") {
      return "btn-primary";
    } else if (price.nickname === "STANDARD") {
      return "btn-secondary";
    } else if (price.nickname === "PREMIUM") {
      return "btn-success";
    }
  };

  const headerStyle = () => {
    if (price.nickname === "BASIC") {
      return "text-primary ";
    } else if (price.nickname === "STANDARD") {
      return " text-secondary";
    } else if (price.nickname === "PREMIUM") {
      return " text-success";
    }
  };

  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className={`card-header py-3 ${headerStyle()}`}>
          <h4 className="my-0 fw-normal">{price.nickname}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {(price.unit_amount / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <small className="text-muted fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="fw-bold">{dynamicDescription()}</li>
            <li>Free market analysis</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          {/* <pre>{JSON.stringify(price)}</pre> */}
          <button
            onClick={() => handleSubscription(price)}
            className={`w-100 btn btn-lg ${buttonStyle()}`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
