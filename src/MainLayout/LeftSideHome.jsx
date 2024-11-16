import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const LeftSideHome = () => {
    const description = {
        description: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.'
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="text-white px-1">
            <h2 className="font-title text-8xl">Cox&apos;s bazar</h2>
            <p className="mb-6">
                {isExpanded ? description.description : `${description.description.split(' ').slice(0, 25).join(' ')}...`}
            </p>

            <Link to='/booking' onClick={handleReadMore} className="btn bg-primary rounded md:py-3 md:px-7 border-none">Booking
                <FaArrowRightLong />
            </Link>
        </div>
    );
};

export default LeftSideHome;