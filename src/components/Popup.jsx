import React from 'react';
import '../css/Popup.css';

const Popup = ({ object, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>Close</button> {/* Close-Button */}
        <h2>{object.title}</h2>
        <p>{object.artistDisplayName ? object.artistDisplayName : 'Artist Unknown'}</p>
        <p>{object.objectDate}</p>
        <img src={object.primaryImageSmall} alt={object.objectName} />
      </div>
    </div>
  );
};

export default Popup;