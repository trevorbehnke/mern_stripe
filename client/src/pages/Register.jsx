import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    // console.log(name, email, password);
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(`Hey ${data.user.name}, you are part of the family now!`);
        history.push("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's Get Started</h1>
          <p className="lead pb-4">
            Sign up for free. No credit card required.
          </p>
          <div className="form-group">
            <Input label="Name" value={name} setValue={setName} />
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              type="email"
            />
            <Input
              label="Password"
              value={password}
              setValue={setPassword}
              type="password"
            />
            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="danger"
                text="Register"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
