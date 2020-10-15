import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Filters from './components/filters/filters.js';
import Catalog from './components/catalog/catalog.js';

function App (){
    return (
        <div className="app">

            <Header />

            <div className="content">
                <Filters />
                <Catalog />
            </div>

            <Footer />

        </div>
    )
}

export default App;
