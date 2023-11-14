const MuseumItem = ({ object }) => {
    // Überprüfen, ob das Bild vorhanden ist, bevor es gerendert wird
    if (object.primaryImage) {
      return (
        <div>
          <h3>{object.objectName}</h3>
          <img
            src={object.primaryImage}
            alt={object.objectName}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h3>{object.objectName}</h3>
          <p>Bild nicht verfügbar</p>
        </div>
      );
    }
  };
  
  export default MuseumItem;

  
  
  
  
  
  