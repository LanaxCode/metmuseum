import '../css/Header.css'
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Header = () => {


     const [objectsHeader, setObjectsHeader] = useState([])

     useEffect(() => {
          const fetchDataHeader = async () => {
              try {
                  const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/45695');
  
                  if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                  }
  
                  const data = await response.json();
  
                  // Hier kannst du mit den Daten weiterarbeiten, z.B. sie in der Konsole ausgeben
                  setObjectsHeader(data);
                  console.log(objectsHeader);
  
                  // Rückgabe der Daten, falls nötig
                  return data;
              } catch (error) {
                  // Fehlerbehandlung, z.B. Ausgabe in der Konsole
                  console.error('Fehler beim Abrufen der Daten:', error);
              }
          };
  
          // Funktion aufrufen
          fetchDataHeader();
      }, []);

      console.log();

    return ( 
        <section className="headerSec">
        <article className="headerText">
        <h1 className='headerTitle'>{objectsHeader.title}</h1> 
        <p className='artist'>{objectsHeader.artistDisplayName
}</p>
        </article>
        </section>
     );
}
 
export default Header;
