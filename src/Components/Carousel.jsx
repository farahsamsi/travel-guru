import coxBazar from '../assets/Rectangle 1.png'
import sajek from '../assets/Sajek.png'
import srimongol from '../assets/Sreemongol.png'
import sundorban from '../assets/sundorbon.png'

const Carousel = () => {
    return (
        <div className="carousel carousel-center rounded-box space-x-4 p-4 pb-8">
            <div className="carousel-item relative">
                <img
                    src={coxBazar}
                    className="rounded-box object-cover w-[270px]" />
                <p className='absolute rounded-box flex items-end pl-6 pb-6  w-full h-full text-white font-title text-4xl bg-gradient-to-t from-black'>Cox’s  Bazar</p>
            </div>
            <div className="carousel-item relative">
                <img
                    src={srimongol}
                    className="rounded-box object-cover w-[270px]" />
                <p className='absolute rounded-box flex items-end pl-6 pb-6  w-full h-full text-white font-title text-4xl bg-gradient-to-t from-black'>Sreemangal</p>
            </div>
            <div className="carousel-item relative">
                <img
                    src={sajek}
                    className="rounded-box object-cover w-[270px]" />
                <p className='absolute rounded-box flex items-end pl-6 pb-6  w-full h-full text-white font-title text-4xl bg-gradient-to-t from-black'>Sajek</p>
            </div>
            <div className="carousel-item relative">
                <img
                    src={sundorban}
                    className="rounded-box object-cover w-[270px]" />
                <p className='absolute rounded-box flex items-end pl-6 pb-6  w-full h-full text-white font-title text-4xl '>Sundarbans</p>
            </div>

        </div>


    );
};

export default Carousel;