// AuthorizationComponent.js

import React, { useEffect, useState } from 'react';

const AuthorizationComponent = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setIsAuthorized(false);
          setLoading(false);
          return;
        }

        // Make an API call to check the validity of the token
        const response = await fetch('/check-authorization', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error('Error checking authorization:', error);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthorization();
  }, []);

  if (loading) {
    // You might want to show a loading spinner or some indication while checking authorization
    return <p>Loading...</p>;
  }

  if (isAuthorized) {
    return <>{children}</>;
  } else {
    // Redirect to login or show an unauthorized message
    return <p>You are not authorized to view this page.</p>;
  }
};

export default AuthorizationComponent;
