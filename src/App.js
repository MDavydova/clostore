import Home from './routes/home/home.component'
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentification/authentification.component";
import {Routes, Route} from 'react-router'
import Authentication from "./routes/authentification/authentification.component";

const Shop = () => {
    return <h1>ibuigg</h1>
};

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="auth" element={<Authentication />}/>
            </Route>
        </Routes>
    );
};



export default App;
