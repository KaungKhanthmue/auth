import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Nav from './Nav';

export default function XX() {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}
