import React from 'react';
import './ErrorPage.css'; // Optional: Include CSS for styling

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="error-link">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
