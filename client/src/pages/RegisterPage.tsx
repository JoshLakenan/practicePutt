import { useState } from "react";
import { PinnipedClient } from "pinniped-sdk";

interface RegisterPageProps {
  pnpd: PinnipedClient;
}

const RegisterPage = ({ pnpd }: RegisterPageProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      await pnpd.auth.register(username, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="page">
      <h1>Register</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
