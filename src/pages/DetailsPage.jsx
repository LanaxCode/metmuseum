import { useLocation } from "react-router-dom";

const DetailsPage = () => {
const location = useLocation()

    return ( 
        <section>
<p>{location.state.title}</p>
        </section>
     );
}
 
export default DetailsPage;