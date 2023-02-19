import Layout from "./components/layout/Layout.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme/theme";
import {useState} from "react";
import SideBar from "./components/layout/SideBar.jsx";
import {useLocation} from "react-router-dom";


function App() {

    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    const location = useLocation()
    return (
        <div className="app">
            <ColorModeContext.Provider value={colorMode}>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    {location.pathname !== "/" && <SideBar isSidebar={isSidebar}/>}
                    <Layout/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    )
}

export default App
