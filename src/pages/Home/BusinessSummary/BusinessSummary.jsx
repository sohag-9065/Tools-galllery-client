
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faMedal,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const BusinessSummary = () => {
    const date = new Date();
    const month = date.getMonth();
    const monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const year = date.getFullYear();
    return (
        <section className="py-8 my-16 w-full ">
            <h2 className="text-center text-4xl sm:text-5xl text-primary  capitalize font-semibold">
                buisness <span className="text-secondary">summery</span>
            </h2>
            <div className="px-8 lg:px-16 mt-12">
                <div className="stats w-full stats-vertical sm:stats-horizontal shadow ">
                    <div className="stat text-center">
                        <div className="mx-auto pb-4">
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="text-secondary font-bold w-16 h-16"
                            />
                        </div>
                        <div className="stat-title text-primary font-semibold text-lg uppercase">
                            Total customers
                        </div>
                        <div className="stat-value text-primary">2K</div>
                        <div className="stat-desc">
                            Jan 1st 2021 - {monthName[month]} {day} {year}
                        </div>
                    </div>

                    <div className="stat text-center">
                        <div className="mx-auto pb-4">
                            <FontAwesomeIcon
                                icon={faMedal}
                                className="text-secondary font-bold w-16 h-16"
                            />
                        </div>
                        <div className="stat-title text-primary font-semibold text-lg uppercase">
                            Earned Reviews
                        </div>
                        <div className="stat-value text-primary">1.5K+</div>
                        <div className="stat-desc">
                            Jan 1st 2021 - {monthName[month]} {day} {year}
                        </div>
                    </div>

                    <div className="stat text-center">
                        <div className="mx-auto pb-4">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="text-secondary font-bold w-16 h-16"
                            />
                        </div>
                        <div className="stat-title text-primary font-semibold uppercase text-lg">
                            Receiving point
                        </div>
                        <div className="stat-value text-primary">100+</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;




