import {Stack} from "@mui/material"
import {Link} from "react-router-dom"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Social = () => {
    return (
        <Stack direction="row" spacing={2} marginY={2}>

            <Link to="https://www.google.com"><FacebookIcon fontSize="large" color="primary"/></Link>
            <Link to="https://www.google.com"><TwitterIcon fontSize="large" color="primary"/></Link>
            <Link to="https://www.google.com"><InstagramIcon fontSize="large" color="primary"/></Link>
            <Link to="https://www.google.com"><YouTubeIcon fontSize="large" color="primary"/></Link>

        </Stack>
    )
}

export default Social;