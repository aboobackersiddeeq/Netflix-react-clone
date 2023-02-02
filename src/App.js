
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import { RowPost } from './components/RowPost/RowPost';
import{originals,action,comedy,romance,horror} from './constants/constans'

function App() {
  return (
    <div >
       <Navbar/>
       <Banner/>
       <RowPost title='Netflix Originals' Url={originals} />
       <RowPost title='Action' isSmall  Url={action}/>
       <RowPost title='Comedy' isSmall  Url={comedy}/>
       <RowPost title='Horror' isSmall  Url={horror}/>
       <RowPost title='Drama' isSmall  Url={romance}/>
    </div>
  );
}

export default App;
