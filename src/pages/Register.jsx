import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError('Please fill in all fields');
    } else if (password !== confirm) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Add registration logic here
    }
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
        maxWidth: 400,
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
        }}>Create your account</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{
              display: 'block',
              marginBottom: 6,
              color: '#444',
              fontWeight: 500,
              fontSize: 15
            }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
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
          <div style={{ marginBottom: 16 }}>
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
            />
          </div>
          <div style={{ marginBottom: 16 }}>
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
          <div style={{ marginBottom: 10 }}>
            <label style={{
              display: 'block',
              marginBottom: 6,
              color: '#444',
              fontWeight: 500,
              fontSize: 15
            }}>Confirm Password</label>
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
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
          <button type="submit" style={{
            width: '100%',
            background: 'linear-gradient(90deg, #22c55e 60%, #16a34a 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            padding: '12px 0',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            marginTop: 8,
            marginBottom: 10,
            boxShadow: '0 2px 8px #22c55e22'
          }}>
            Register
          </button>
        </form>
        <div style={{
          fontSize: 14,
          color: '#555',
          marginTop: 8,
          textAlign: 'center'
        }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#22c55e', fontWeight: 500, textDecoration: 'none' }}>
            Login
          </a>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 500px) {
            div[style*="max-width: 400px"] {
              padding: 1.2rem 0.5rem !important;
              max-width: 100vw !important;
              border-radius: 8px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Register;