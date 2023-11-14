// MuseumList.jsx
import React, { useState } from "react";
import MuseumItem from "./MuseumItem";
import SearchBar from "./SearchBar";
import '../css/MuseumList.css'

const MuseumList = () => {
  const [objects, setObjects] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);

  // Funktion zum Abfragen von Daten basierend auf der Suchanfrage
  const fetchData = async (query) => {
    try {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
      const data = await response.json();

      if (data.objectIDs && data.objectIDs.length > 0) {
        const objectDataPromises = data.objectIDs.slice(0, 40).map(elt => {
          return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${elt}`)
            .then(resp => {
              if (!resp.ok) {
                console.warn(`Object mit id ${elt} nicht gefunden`);
                return null;
              }
              return resp.json();
            });
        });

        const objectDataArray = await Promise.all(objectDataPromises);
        // Filtere ungültige Objekte (die null sind) aus dem Array
        const validObjects = objectDataArray.filter(obj => obj !== null && obj.primaryImage !== undefined && obj.primaryImage !== "");
        setFilteredObjects(validObjects);
      } else {
        setObjects([]);
        setFilteredObjects([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
console.log(filteredObjects)
  // Funktion zum Aktualisieren des Zustands basierend auf der Suchanfrage
  const handleSearch = (query) => {
    // Überprüfen, ob die Abfrage nicht leer ist, bevor der Fetch ausgelöst wird
    if (query.trim() !== "") {
      fetchData(query);
    } else {
      // Wenn die Abfrage leer ist, setze den Zustand von filteredObjects zurück
      setFilteredObjects([]);
    }
  };

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
      <div className="listgrid">
      {/* Rendern von MuseumItem-Komponenten basierend auf dem Zustand von filteredObjects */}
      {filteredObjects.map((object) => (
        <MuseumItem key={object.objectID} object={object} />
      ))}
      </div>
    </section>
  );
};

export default MuseumList;

