import { Outlet } from "react-router-dom";
import Nav from './Nav'
export default function Auth() {
  return (
    <>
        <div >
            <Nav/>
        </div>
        <div className="bg-red-950 h-screen">
            <Outlet/>
        </div>
    </>
  )
}
