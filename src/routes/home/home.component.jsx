import Categories from "../../components/categories-list/directory.component"
import {Outlet} from "react-router";

const Home = () => {

    return (
        <>
            <Categories/>
            <Outlet/>
        </>
    );
};



export default Home;
