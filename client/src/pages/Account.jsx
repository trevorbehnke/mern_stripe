import { UserOutlined } from "@ant-design/icons";

const Account = ({ history }) => {
  return (
    <div className="container">
      <div className="row">
        <UserOutlined className="display-4 text-center" />
        <h1>Account</h1>
        <p className="lead pb-4">Subscription Status</p>
      </div>
    </div>
  );
};

export default Account;
