import React, {useState} from "react";
import PropTypes from "prop-types";
import {MovieList} from "./MovieList";

export function Header({onSearch}){

    const handleSearch = (searchVal) => {
        onSearch(searchVal);
    }

    const [search, setSearch] = useState('')

    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase text-red-600 font-bold">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        About
                    </a>
                    <a href="#" className="text-white">
                        Contact
                    </a>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <input value={search} onChange={event => {
                    handleSearch(event.target.value)
                    setSearch(event.target.value)
                }} type="text" placeholder="Search" className="p-2 rounded text-black"/>
                <h1 className="p-2 bg-red-600 text-white rounded" onClick={() => handleSearch(search)}>Search</h1>
            </div>
        </div>
    )
}


Header.propTypes = {
    onSearch: PropTypes.func,
}