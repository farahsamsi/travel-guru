import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="hero place-items-start bg-heroBg bg-center bg-no-repeat bg-cover  min-h-screen">

            <Helmet>
                <title>Travel Guru | Main</title>
            </Helmet>
            <div className="hero-overlay bg-black bg-opacity-60"></div>



            <div className="container mx-auto">
                <nav>
                    <Navbar></Navbar>
                </nav>

                <main>
                    {/* left side */}

                    {/* right side */}
                    <Outlet></Outlet>
                </main>
            </div>


        </div>
    );
};

export default MainLayout;