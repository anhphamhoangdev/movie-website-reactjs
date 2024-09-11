import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import {MovieContext, MovieProvider} from "../context/MovieProvider";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1200, min: 970 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 970, min: 750 },
        items: 3
    },
    superSmallMobile: {
        breakpoint: { max: 750, min: 535 },
        items: 2
    },
    superTinyMobile: {
        breakpoint: { max: 535, min: 0 },
        items: 1
    }
};

export function MovieList({title, data}) {

    const {handleTrailer} = useContext(MovieContext)

    return (
        <div className="text-white p-10">
            <h2 className="text-2xl font-bold uppercase mb-5">{title}</h2>
            <Carousel responsive={responsive} className="flex flex-wrap items-center space-x-3">
                    {data.length > 0 && data.map((item) => (
                        <div onClick={() => handleTrailer(item.id)} key={item.id} className="w-[220px] h-[300px] bg-white relative group">
                            <div
                                className="absolute w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out">
                                <div className="absolute w-full h-full opacity-50 bg-black"/>
                                <img src={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                                     className="w-full h-full object-cover"
                                     alt="IMG"
                                />
                                <p className="absolute uppercase bottom-2 left-0 right-0 text-center text-white text-md">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
            </Carousel>
        </div>
    )
}

MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}