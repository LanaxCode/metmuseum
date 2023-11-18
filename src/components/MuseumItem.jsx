import '../css/MuseumItem.css'

const MuseumItem = ({ object }) => {
    // Überprüfen, ob das Bild vorhanden ist, bevor es gerendert wird
    
      return (
        <section className="gridItem">
{/* <h3>"{object.title}"</h3> */}
          {/* <p>{object.artistDisplayName}</p> */}
          <div className='imgDiv'>
            <div className='layer'>
            <h3 className='itemTitle'>{object.title}</h3>
            </div>
              
          <img
            src={object.primaryImageSmall}
            alt={object.objectName}
          />
          </div>
          <div className='gridItemText'>
            <h3 className='itemTitle'>{object.title}</h3>
           <p>{object.artistDisplayName}</p> 
          </div>
          

        </section>
      );
  };

  
  export default MuseumItem;

  
  
  
  
  
  