

import React, { useState } from 'react';
import MuseumItem from './MuseumItem';
import SearchBar from './SearchBar';
import Popup from './Popup'; 
import '../css/MuseumList.css';

const MuseumList = () => {
  const [objects, setObjects] = useState([]); // Zustand für alle Objekte
  const [filteredObjects, setFilteredObjects] = useState([]); // Zustand für die gefilterten Objekte
  const [selectedObject, setSelectedObject] = useState(null); // Zustand für das ausgewählte Objekt im Popup-Fenster
  const [spinner, setSpinner] = useState(false); // Zustand für den Ladeindikator

  // Funktion zum Abfragen von Daten basierend auf der Suchanfrage
  const fetchData = async (query) => {
    try {
      setSpinner(true);
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
      const data = await response.json();

      if (data.objectIDs && data.objectIDs.length > 0) {
        const objectDataPromises = data.objectIDs.slice(0, 40).map((elt) => {
          return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${elt}`).then((resp) => {
            if (!resp.ok) {
              console.warn(`Object mit id ${elt} nicht gefunden`);
              return null;
            }
            return resp.json();
          });
        });

        const objectDataArray = await Promise.all(objectDataPromises);
        // Filtere ungültige Objekte (die null sind) aus dem Array
        const validObjects = objectDataArray.filter((obj) => obj !== null && obj.primaryImage !== undefined && obj.primaryImage !== '');
        setObjects(validObjects);
        setFilteredObjects(validObjects);
      } else {
        setObjects([]);
        setFilteredObjects([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setSpinner(false);
    }
  };

  // Funktion zum Behandeln des Klicks auf ein Museumselement
  const handleItemClick = (object) => {
    setSelectedObject(object); // Setzt das ausgewählte Objekt für das Popup-Fenster
  };

  // Funktion zum Schließen des Popup-Fensters
  const handleClosePopup = () => {
    setSelectedObject(null); // Setzt das ausgewählte Objekt auf null, um das Popup zu schließen
  };

  // Funktion zum Aktualisieren des Zustands basierend auf der Suchanfrage
  const handleSearch = (query) => {
    // Überprüfen, ob die Abfrage nicht leer ist, bevor der Fetch ausgelöst wird
    if (query.trim() !== '') {
      fetchData(query);
    } else {
      // Wenn die Abfrage leer ist, setze den Zustand von filteredObjects zurück
      setFilteredObjects([]);
    }
  };

  return (
    <section>
      <SearchBar onSearch={handleSearch} />
        {spinner && (<span className="loader"/>) }
      <article className="listgrid">
        {/* Rendern von MuseumItem-Komponenten basierend auf dem Zustand von filteredObjects */}
        {filteredObjects.map((object, i) => (
          <MuseumItem key={i} object={object} onItemClick={() => handleItemClick(object)} />
        ))}
      </article>
      {/* Popup-Fenster, das angezeigt wird, wenn ein Element ausgewählt ist */}
      {selectedObject && <Popup object={selectedObject} onClose={handleClosePopup} />}
      <article className="listgrid">
        {/* Rendern von MuseumItem-Komponenten basierend auf dem Zustand von objects (alle Objekte) */}
        {objects.map((object, i) => (
          <MuseumItem key={i} object={object} onItemClick={() => handleItemClick(object)} />
        ))}
      </article>
    </section>
  );
};

export default MuseumList;