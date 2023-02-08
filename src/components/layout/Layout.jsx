import Content from "./Content"
import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import {Box} from "@mui/material"

const Layout = () => {
    return (
        <>
            <Box component="div">
                <NavBar/>
                <SideBar/>
                <Content/>
                <Footer/>
            </Box>
        </>
    )


}

export default Layout;