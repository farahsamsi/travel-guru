
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {

    const today = new Date().toISOString().split('T')[0];
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);
    console.log(today)
    return (

        <div className="card bg-base-100 shadow-2xl mx-6 md:mx-36 rounded mt-4 lg:mt-0">
            <form className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-[#818181]">Origin</span>
                    </label>
                    <input type="text" placeholder="Enter Starting Location" className="input bg-[#F2F2F2] font-bold" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium text-[#818181]">Destination</span>
                    </label>
                    <input type="text" placeholder="Enter Your Destination" className="input bg-[#F2F2F2] font-bold" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[#818181]">From</span>
                        </label>
                        <input type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            min={today} className="input bg-[#F2F2F2] font-bold" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-[#818181]">To</span>
                        </label>
                        <input type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            min={today}
                            className="input bg-[#F2F2F2] font-bold" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn border-none bg-primary rounded font-medium">Start Booking</button>
                </div>
            </form>
        </div>

    );
};

export default Booking;