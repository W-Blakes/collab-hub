import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

//styles
import './Signup.css';

import React from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setthumbnailError] = useState(null);

  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayname, thumbnail);
  };

  const handleThumbnailFile = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];

    if (!selected) {
      setthumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setthumbnailError('File type must be an image');
      return;
    }
    // if (!selected.size <= 2000000) {
    //   setthumbnailError('Please select a smaller file size');
    //   return;
    // }
    setThumbnail(selected);
    setthumbnailError(null);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Sign up</h1>
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

      <label>
        <span>Display name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayname(e.target.value)}
          value={displayname}
          autoComplete="nickname"
          required
        />
      </label>

      <label>
        <span>Profile thumbnail:</span>
        <input
          type="file"
          onChange={handleThumbnailFile}
          required
          autoComplete="photo"
        />
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {thumbnailError && <div className="error">{thumbnailError}</div>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
