import { useState } from "react";
import { PinnipedClient } from "pinniped-sdk";

interface LoginPageProps {
  pnpd: PinnipedClient;
}

const LoginPage = ({ pnpd }: LoginPageProps) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await pnpd.auth.login(username, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={"login, page"}>
      <h1>Login</h1>
      <form className="auth">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
      </form>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
