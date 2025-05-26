import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login failed');
      } else {
        // Save token to localStorage (or context)
        localStorage.setItem('token', data.token);
        // Redirect or update UI as needed
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError('Server error');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: '#fff',
        padding: '40px 32px',
        borderRadius: '14px',
        boxShadow: '0 6px 32px rgba(60,72,88,0.15)',
        width: '100%',
        maxWidth: 370,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          fontWeight: 700,
          fontSize: 28,
          color: '#22c55e',
          marginBottom: 12,
          letterSpacing: 1
        }}>
          FarmConnect
        </div>
        <h2 style={{
          fontWeight: 600,
          fontSize: 22,
          marginBottom: 24,
          color: '#222',
          letterSpacing: 0.5,
          textAlign: 'center'
        }}>Sign in to your account</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: 18 }}>
            <label style={{
              display: 'block',
              marginBottom: 6,
              color: '#444',
              fontWeight: 500,
              fontSize: 15
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 6,
                border: '1px solid #d1d5db',
                fontSize: 15,
                outline: 'none',
                transition: 'border 0.2s',
                boxSizing: 'border-box'
              }}
              autoFocus
            />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label style={{
              display: 'block',
              marginBottom: 6,
              color: '#444',
              fontWeight: 500,
              fontSize: 15
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 6,
                border: '1px solid #d1d5db',
                fontSize: 15,
                outline: 'none',
                transition: 'border 0.2s',
                boxSizing: 'border-box'
              }}
            />
          </div>
          {error && (
            <div style={{
              color: '#e11d48',
              background: '#fef2f2',
              borderRadius: 4,
              padding: '8px 10px',
              fontSize: 14,
              marginBottom: 12,
              textAlign: 'center'
            }}>{error}</div>
          )}
          <button type="submit" disabled={loading} style={{
            width: '100%',
            background: 'linear-gradient(90deg, #22c55e 60%, #16a34a 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            padding: '12px 0',
            border: 'none',
            borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: 8,
            marginBottom: 10,
            boxShadow: '0 2px 8px #22c55e22'
          }}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div style={{
          fontSize: 14,
          color: '#555',
          marginTop: 8,
          textAlign: 'center'
        }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#22c55e', fontWeight: 500, textDecoration: 'none' }}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;