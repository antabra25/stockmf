import {ThemeProvider} from "@mui/material";
import Layout from "./components/layout/Layout.jsx";
import Login from "./components/pages/Login"
import {theme} from "./theme/theme.js";


function App() {


    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Layout/>
            </ThemeProvider>
        </div>
    )
}

export default App
