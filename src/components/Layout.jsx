import Nav from "./Nav";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
            <div>
                <Nav/>
                <Outlet/>
            </div>
    );
}