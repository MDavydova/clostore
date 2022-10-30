import Home from './routes/home/home.component'
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import {Routes, Route} from 'react-router'

const Shop = () => {
    return <h1>ibuigg</h1>
};

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="sign-in" element={<SignIn />}/>
            </Route>
        </Routes>
    );
};



export default App;
