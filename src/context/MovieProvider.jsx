import React, {createContext, useState} from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
import PropTypes from "prop-types";

export const MovieContext = createContext();

export function MovieProvider ({children}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const handleTrailer = async (id) => {
        try{
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            };

            const url = `https://api.themoviedb.org/3/movie/${id}/videos`

            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            setTrailerKey(data.results[0].key);
            setModalIsOpen(true);
        }catch (error){
            setModalIsOpen(false);
            console.log(error);
        }
    }

    const customStyles = {
        overlay: {
            position: "fixed",
            zIndex: 1000,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const opts = {
        height: '450',
        width: '800',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,  // Hide player controls
            disablekb: 1,  // Disable keyboard controls
            fs: 1,  // Disable fullscreen button
            modestbranding: 1,
            rel: 0,  // Don't show related videos,
        },
    };

    return (
        <MovieContext.Provider value={{handleTrailer}}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts}/>
            </Modal>
        </MovieContext.Provider>
    )
}

MovieProvider.propTypes = {
    children: PropTypes.node
}

