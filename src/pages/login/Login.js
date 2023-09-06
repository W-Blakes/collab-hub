import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
//styles
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="cc-name"
          required
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="current-password"
          required
        />
      </label>

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Logging In...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
