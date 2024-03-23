import { useState } from 'react';
import Productrender from './comps/Productrender';
import Basket from './comps/Basket';

import Product from './models/product';
import Basketmodel from './models/basket';

import './App.css';

function App() {

  // product render states
  let [albumsNewreleases] = useState([
             new Product('/images/axetofall.jpg','Axe To Fall','Converge',17.99,'Metalcore/Hardcore'),
             new Product('/images/crownferal.jpg','Crown Feral','Trap Them',19.99,'Metallic Hardcore/D-Beat'),
             new Product('/images/glacialdominationcover.jpg','Glacial Domination','Frozen Soul',21.99,'Death Metal')])
  let [albumsRecomends] = useState(
             [new Product('/images/hissspun.jpg','Hiss Spun','Chelsea Wolfe',19.99,'Doom Metal'),
             new Product('/images/ratwars.jpg','Rat Wars','HEALTH',22.99,'Industrial/Noise Rock'),
             new Product('/images/audionoir.jpg','Audio Noir','Bossk',20.99,'Post-Metal')])
  let [albumsRestocked] = useState(
            [ new Product('/images/unmaker.jpg','Unmaker','LLNN',20.99,'Sludge/Post Metal'),
             new Product('/images/throesofjoy.jpg','Throes Of Joy In The Jaws Of Defeatism','Napalm Death',19.99,'Grindcore/Extreme Metal'),
             new Product('images/modernmirror.jpg','Modern Mirror','Drab Majesty',19.99,'Darkwave')
            ])

  // Customer basket state
  let [customerBasket, setBasket] = useState(new Basketmodel(['Godflesh: Streetcleaner', 'Korn: Untouchables','Carcass: Heartwork'], [22.99, 21.99, 19.99]))

  // Function used to add items to the basket. Failing to run due to error with customerbasket.selection returning undefined
  // Will need to problemsolve further
  const addToBasket = (product) => {
    setBasket(customerBasket.selection = customerBasket.selection + (`${product.artist}: ${product.title}`))
    setBasket(customerBasket.totalPrice = customerBasket.totalPrice + (product.price))
  }

  return (
    <div className="App">
      <div className="main-container">
      
      <header>
        <h4>Incindiary records</h4>

        <h6>New releases</h6>
        <h6>artist A-Z</h6>
        <div id='search-container'>
          <h6>Search:</h6>
          <input />
        </div>
        
      </header>

      {/* Render for Basket Component */}
      <Basket  customerBasket={customerBasket} />


      {/* Renders for Components containing the product states */}
      <h2>New Releases</h2>
      <div id='albums-container'>
        {albumsNewreleases.map((album) => {
         return(
          <Productrender albums={album}/>
         )
        })}
      </div>

      <h2>Incindiary Recommends!</h2>
      <div id='albums-container'>
        {albumsRecomends.map((album) => {
         return(
          <Productrender albums={album}/>
         )
        })}
      </div>

      <h2>Just Restocked</h2>
      <div id='albums-container'>
        {albumsRestocked.map((album) => {
         return(
          <Productrender albums={album}/>
         )
        })}
      </div>


      <footer>
        <h6>Incindiary records 2024</h6>
        <h6>In Heavy Music We Trust</h6>
      </footer>
      </div>
    </div>
  );
}

export default App;
