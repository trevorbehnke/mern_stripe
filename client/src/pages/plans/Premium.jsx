import { useEffect, useContext } from "react";
import { UserContext } from "../../context";

const Premium = ({ history, match }) => {
  const [state, setState] = useContext(UserContext);
  useEffect(() => {
    let result = [];
    const check = () => {
      state?.user?.subscriptions?.map((sub) => result.push(sub.plan.nickname));
    };
    check();
    const plan = match.path.split("/")[1].toUpperCase();
    if (!result.includes(plan)) {
      history.push("/");
    }
  }, [state && state.user]);
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5 bg-light text-center">
          <h1 className="display-4 fw-bold">Premium</h1>
          <p className="lead">
            Here are your 20 exclusive stocks of this month
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 p-5 rounded bg-dark text-light">
            <ul className="lead">
              <li>Tesla</li>
              <li>Apple</li>
              <li>Microsoft</li>
              <li>Netflix</li>
              <li>Amazon</li>
              <li>Tesla</li>
              <li>Apple</li>
              <li>Microsoft</li>
              <li>Netflix</li>
              <li>Amazon</li>
              <li>Tesla</li>
              <li>Apple</li>
              <li>Microsoft</li>
              <li>Netflix</li>
              <li>Amazon</li>
              <li>Tesla</li>
              <li>Apple</li>
              <li>Microsoft</li>
              <li>Netflix</li>
              <li>Amazon</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Market analysis</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem voluptatem molestias magnam quasi officia
              consequuntur eos, sapiente alias excepturi suscipit aut soluta
              libero corrupti non nesciunt facere? Sequi, consequatur natus.
            </p>
            <h4>Email support</h4>
            <p>subscriptions@domain.com</p>
            <h4>Help center</h4>
            1300 123 4567
          </div>
        </div>
      </div>
    </>
  );
};

export default Premium;
