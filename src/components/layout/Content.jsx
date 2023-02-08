import {Routes, Route} from "react-router-dom"
import {Box} from "@mui/material"
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


const Content = () => {
    return (
        <>
            <Box component="main" className="main">

                <Routes>
                    <Route path="/items/" element={<Items/>}/>
                    <Route path="/items/:id" element={<Items/>}/>
                    <Route path="/add-item/" element={<AddItem/>}/>
                    <Route path="/edit-item/:id" element={<AddItem/>}/>
                    <Route path="/users/" element={<Users/>}/>
                    <Route path="/users/:id" element={<UserDetails/>}/>
                    <Route path="/edit-user/:id" element={<AddUser/>}/>
                    <Routes path="/requests/" element={<Requests/>}/>
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