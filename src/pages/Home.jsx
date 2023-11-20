import Header from "../components/Header";
import MuseumList from "../components/MuseumList";
import NavBar from '../components/NavBar.jsx';

const Home = () => {
    return ( 
        <section>
            <NavBar/>
            <Header/>
            
            <MuseumList />
            
        </section>
     );
}
 
export default Home;