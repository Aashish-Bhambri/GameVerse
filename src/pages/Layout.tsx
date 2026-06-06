import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <div className="min-h-screen bg-[#151515] text-gray-200 font-sans flex flex-col">
            <header className="sticky top-0 z-50 bg-[#151515]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
                <NavBar />
            </header>
            
            <Outlet />
        </div>
    );
};

export default Layout;