import {Stack, Divider, Typography, Container} from "@mui/material";
import LoginForm from "../form/LoginForm"
import Social from "../common/Social.jsx";
import Svg from "../../assets/img/devices.svg"

const Login = () => {

    return (

            <Stack direction="row" spacing={0}>
                <Stack width="70%">
                    <img src={Svg} alt="Logo svg"/>
                </Stack>
                <Divider orientation="vertical" flexItem sx={{
                    marginLeft: "1rem"
                }}/>
                <Stack direction="column" justifyContent="center" alignItems="center" width="30%">

                    <Typography component="h1" variant="h3" textAlign="center" color="primary" fontWeight="bold" marginBottom={4}>Sistema
                        de Solicitudes </Typography>

                    <LoginForm/>
                    <Social/>

                </Stack>
            </Stack>

    )

}

export default Login;