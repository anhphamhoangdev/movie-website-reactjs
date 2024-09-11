import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import {MovieContext} from "../context/MovieProvider";

export function MovieSearch({title, data}) {

    const {handleTrailer} = useContext(MovieContext)

    return (
        <div className="text-white p-10">
            <h2 className="text-2xl font-bold uppercase mb-5">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                </div>
        </div>
    )
}


MovieSearch.propTypes = {
    title : PropTypes.string,
    data : PropTypes.array
}