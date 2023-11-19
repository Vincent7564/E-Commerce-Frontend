import React, { useEffect, useState } from 'react';

const AuthorizationComponent = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (!token) {
          setIsAuthorized(false);
          setLoading(false);
          return;
        }

        const response = await fetch('/check-authorization', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            Role : role
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
    return <p>Loading...</p>;
  }

  if (isAuthorized) {
    return <>{children}</>;
  } else {
    return <p>You are not authorized to view this page.</p>;
  }
};

export default AuthorizationComponent;
