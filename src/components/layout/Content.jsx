import {Routes, Route, useLocation} from "react-router-dom"
import {Box, useTheme} from "@mui/material"
import AddRequest from "../pages/AddRequest.jsx";
import AddItem from "../pages/AddItem.jsx";
import AddUser from "../pages/AddUser.jsx";
import UserRequests from "../pages/UserRequests.jsx";
import UserDetails from "../pages/UserDetails.jsx";
import AddDepot from "../pages/AddDepot.jsx";
import Requests from "../pages/Requests"
import Items from "../pages/Items.jsx";
import Users from "../pages/Users"
import Deposits from "../pages/Deposits.jsx";
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx";
import TopBar from "./TopBar.jsx";
import {tokens} from "../../theme/theme.js";



const Content = () => {


    const location = useLocation()
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box component="main" className="content" bgcolor={colors.primary[400]} >
                {location.pathname !== "/" && <TopBar/>}
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/items/" element={<Items/>}/>
                    <Route path="/items/:id" element={<Items/>}/>
                    <Route path="/add-item/" element={<AddItem/>}/>
                    <Route path="/edit-item/:id" element={<AddItem/>}/>
                    <Route path="/users/" element={<Users/>}/>
                    <Route path="/add-user/" element={<AddUser/>}/>
                    <Route path="/users/:id" element={<UserDetails/>}/>
                    <Route path="/edit-user/:id" element={<AddUser/>}/>
                    <Route path="/requests/" element={<Requests/>}/>
                    <Route path="/requests/:userId" element={<UserRequests/>}/>
                    <Route path="/add-requests/" element={<AddRequest/>}/>
                    <Route path="/add-depot" element={<AddDepot/>}/>
                    <Route path="/deposits" element={<Deposits/>}/>

                </Routes>

            </Box>

        </>
    )

}
export default Content;