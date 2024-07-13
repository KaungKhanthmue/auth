import { Navigate, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Nav from './Nav';

export default function XX() {
  const { token } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const clicksidebtn = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full">
      <div onClick={toggleSidebar}>
        <Nav />
      </div>
      <div className="bg-black flex w-full h-screen">
        <div className={`h-screen bg-gray-700  transition-all duration-300 ${sidebar ? 'hidden' : 'w-[20%]'}`}>
            <div className="  h-screen pt-9 ">
            <div
              onClick={() => clicksidebtn('dashboard')}
              className={`w-full h-[50px] mt-10 rounded-md pl-2 text-black font-medium text-xl py-3 cursor-pointer ${activeItem === 'dashboard' ? 'bg-blue-200' : 'bg-opacity-60'}`}
            >
              @ Dashboard
            </div>
            <div
              onClick={() => clicksidebtn('language')}
              className={`w-full h-[50px]  mt-3 rounded-md pl-2 text-black font-medium text-xl py-3 cursor-pointer ${activeItem === 'language' ? 'bg-blue-200  ' : 'bg-opacity-60'}`}
            >
              @ Language
            </div>
            </div>
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
