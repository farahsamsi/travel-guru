import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LeftSideHome from "./LeftSideHome";


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

                <main className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:pt-[100px]">
                    {/* left side */}
                    <section className="lg:col-span-5">
                        <LeftSideHome />
                    </section>

                    {/* right side */}
                    <section className="lg:col-span-7">
                        <Outlet></Outlet>
                    </section>
                </main>
            </div>


        </div>
    );
};

export default MainLayout;