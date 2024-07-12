import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Nav from './Nav';

export default function XX() {
  const { token } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="w-full">
      <div onClick={toggleSidebar}>
        <Nav />
      </div>
      <div className="bg-black flex w-full">
        <div className={`h-screen bg-gray-300 px-2 transition-all duration-300 ${sidebar ? 'w-0' : 'w-[20%]'}`}>
            <div className="  h-screen pt-9 ">
                <div className="w-full h-[50px]  bg-opacity-80 mt-10 rounded-xl pl-2 text-gray-700  text-xl py-3">@ Dashboard</div>
                <div className="w-full h-[50px] bg-gray-50 bg-opacity-80 mt-3 rounded-xl pl-2  text-gray-700  text-xl py-3">@ Language</div>
            </div>
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
