import { Box, Link } from "@mui/material"
import { ReactNode } from "react"

enum Colors {
    primary = 'primary.main',
    default = 'background.default',
    info = 'info.main'
}
type Props = { children: ReactNode; icon?: JSX.Element; bgColor?: keyof typeof Colors; textColor?: keyof typeof Colors; iconBlockBgColor?: keyof typeof Colors }

const LinkWrapper = ({ children, icon, bgColor = 'default', textColor = 'primary', iconBlockBgColor = 'primary' }: Props) => {

    const linkStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: Colors[bgColor], width: '14rem', border: 1 }
    const textStyle = { color: Colors[textColor], width: icon ? '75%' : '100%', textAlign: 'center' }

    return (
        <Link sx={linkStyle} underline="none">
            <Box sx={textStyle}>
                {children}
            </Box>

            {icon && (<Box sx={{ bgcolor: Colors[iconBlockBgColor], display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '25%' }}>
                {icon}
            </Box>)}
        </Link>
    )
}

export default LinkWrapper