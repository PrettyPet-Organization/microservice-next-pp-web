import { Box } from "@mui/material"
import './styles/page.style.scss';

const Logo = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="circle-default-outer">
                <div className="circle-default-inner"></div>
            </div>

            <div className="spacer-horizontal"></div>
            <div className="logo"></div>

            <div className="circle-primary bg-primary"></div>
        </Box>
    )
}

export default Logo