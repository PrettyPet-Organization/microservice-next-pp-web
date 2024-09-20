import { Box, Link } from "@mui/material";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const LinkToCreateProject = ({ children }: Props) => {
    return (
        <Link sx={{ display: 'flex', justifyContent: 'center', width: '24rem', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#F6E8CE" />
            </svg>

            <Box sx={{ color: 'background.default' }}>{children}</Box>
        </Link>
    );
}

export default LinkToCreateProject