import '../css/MuseumItem.css'
import { Link } from 'react-router-dom';

const MuseumItem = ({ object }) => {
    // Überprüfen, ob das Bild vorhanden ist, bevor es gerendert wird
    
      return (
        <Link to={`/${object.objectID}`} state={object}>
        <section className="gridItem">


          <div className='imgDiv'>
          <div className="overlay">
          <h3 className='itemTitle'>{object.title}</h3>
          </div>
            <img className='mainImg'
            src={object.primaryImageSmall}
            alt={object.objectName}
          />
            </div>
          <div className='gridItemText'>
            <h3 className='itemTitle'>{object.title}</h3>
           <p>{object.artistDisplayName}</p> 
          </div>
          

        </section>
        </Link>
      );
  };

  
  export default MuseumItem;

  
  
  
  
  
  