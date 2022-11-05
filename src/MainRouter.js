import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Bouquets from './pages/Bouquets';
import Catalog from './pages/Catalog';
import Cadeaux from './pages/Cadeaux';
import Plantes from './pages/Plantes';
export default function MainRouter(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={ <Catalog /> } />
            <Route path="/Plantes" element={ < Plantes/> } />
            <Route path="/Bouquets" element={ < Bouquets/> } />
            <Route path="/Cadeaux" element={ <Cadeaux /> } /> 
        </Routes>
       
        )
    }