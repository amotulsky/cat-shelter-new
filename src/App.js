import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CatGallery from './components/CatGallery';
import BreedList from './components/BreedList';
import FavoritesDropdown from './components/FavoritesDropdown';
import './App.css';

function App() {
    const [breedId, setBreedId] = useState('');
    const [favorites, setFavorites] = useState({});
    const featuredCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg'; // Fixed image

    function toggleFavorite(catId, catUrl) {
        setFavorites(prev => ({
            ...prev,
            [catId]: !prev[catId] ? catUrl : null
        }));
    }

    return (
        <div className="App">
            <div className="sidebar">
                <FavoritesDropdown favorites={favorites} />
            </div>
            <div className="App-content">
                <Navbar className="show-favorites" />
                <header className="App-header">
                    <h1>Welcome to the Purrfect, a Cat Shelter dedicated for finding every cat a loving home.</h1>
                    <img src={featuredCat} alt="Featured Cat" className="featured-cat"/>
                    <p>Wouldn't you want to adopt this cat? Discover your forever companion from our available cats today!</p>
                </header>
                <BreedList onBreedSelect={setBreedId} />
                <CatGallery breedId={breedId} toggleFavorite={toggleFavorite} />
            </div>
        </div>
    );
}

export default App;
