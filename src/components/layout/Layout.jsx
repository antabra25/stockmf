import Content from "./Content"
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <SideBar/>
            <Content/>
            <Footer/>
        </>
    )


}

export default Layout;