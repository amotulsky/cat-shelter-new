
import React, { useState } from 'react';
import './FavoritesDropdown.css'; 

function FavoritesDropdown({ favorites }) {
    const [isOpen, setIsOpen] = useState(false);
    const favoriteCats = Object.values(favorites).filter(catUrl => catUrl);
    const hasFavorites = favoriteCats.length > 0;

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className={`favorites-dropdown ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleDropdown} className="toggle-button">
                {isOpen ? 'Hide Favorites' : 'Show Favorites'}
            </button>
            {isOpen && (
                <div className="favorites-content">
                    {hasFavorites ? (
                        <>
                            <h3>Favorites</h3>
                            {favoriteCats.map((catUrl, index) => (
                                <img key={index} src={catUrl} alt="Favorited Cat" className="favorite-cat" />
                            ))}
                        </>
                    ) : (
                        <div>No Favorites Selected</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FavoritesDropdown;
