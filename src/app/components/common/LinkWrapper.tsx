import { Box, Link } from "@mui/material"
import { ReactNode } from "react"

enum Colors {
    primary = '#1A4870',
    default = '#F6E8CE',
    info = '#EE823D'
}
interface Props {
    children: ReactNode;
    icon?: JSX.Element;
    width?: string;
    bgColor?: keyof typeof Colors;
    textColor?: keyof typeof Colors;
    iconBlockBgColor?: keyof typeof Colors
    borderColor?: keyof typeof Colors
}

const LinkWrapper = ({ children, icon, bgColor = 'default', textColor = 'primary', iconBlockBgColor = 'primary', borderColor = 'primary', width = '14rem' }: Props) => {

    const linkStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: Colors[bgColor], width, border: 1, borderColor: Colors[borderColor] }
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