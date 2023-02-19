import Content from "./Content"
import Footer from "./Footer.jsx";
import SideBar from "./SideBar.jsx";
import {Box} from "@mui/material"
import TopBar from "./TopBar.jsx";
import {useState} from "react";
import {useLocation} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Content/>
            <Footer/>
        </>
    )


}

export default Layout;