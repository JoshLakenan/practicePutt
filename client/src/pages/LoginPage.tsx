import Pinniped from "pinniped-sdk";
const pnpd = Pinniped("http://localhost:3000");

const LoginPage = () => {
  const handleLogin = async () => {};

  return (
    <div className={"login, page"}>
      <h1>Login</h1>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
