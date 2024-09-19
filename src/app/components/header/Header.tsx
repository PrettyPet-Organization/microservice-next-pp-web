'use_client'

import { AppBar, Box, Link } from "@mui/material"
import { theme } from "../../constants/theme"
import NavSocialLinks from "@components/header/NavSocialLinks"
import VerticalSingleBorder from "@components/common/VerticalSingleBorder";
import LinkToCreateProject from "@components/header/LinkToCreateProject";
import LangSelector from "@components/header/LangSelector";

const Header = () => {
    const baseStyleHeaderLinks = {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    }

    const styleSocialLinks = {
        ...baseStyleHeaderLinks,
        justifyContent: 'start',
        width: '33%'
    }

    const styleWrapper = {
        ...baseStyleHeaderLinks,
    }

    const styleBtnLogin = {
        ...baseStyleHeaderLinks,
        justifyContent: 'center',
        width: '9rem',
        bgcolor: 'background.default',
    }
    const styleBtnReg = {
        ...baseStyleHeaderLinks,
        justifyContent: 'center',
        width: '11rem',
        bgcolor: 'background.default',
    }

    return (
        <>
            <AppBar position="static" elevation={0}>
                <Box
                    border={`1px solid ${theme.palette.primary.main}`}
                    height={56}
                    component="nav"
                    sx={{ backgroundColor: 'background.default' }}
                >
                    <Box sx={styleWrapper}>
                        {/* иконки соц. сетей */}
                        <Box sx={styleSocialLinks}>
                            <NavSocialLinks />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%', width: '33%', bgcolor: 'background.default' }}>
                            <Box sx={{ display: 'flex', bgcolor: '#1A4870' }}>
                                <LinkToCreateProject>Создать проект</LinkToCreateProject>
                            </Box>
                        </Box>

                        <Box sx={{
                            width: '33%',
                            height: '100%',
                        }}>

                            {/* кнопки */}
                            <Box sx={{
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'center'
                            }}>
                                {/* выбор локализации */}
                                <LangSelector />


                                <VerticalSingleBorder />

                                <Box sx={styleBtnLogin}>
                                    <Link underline="none">Вход</Link>
                                </Box>

                                <VerticalSingleBorder />

                                <Box sx={styleBtnReg}>
                                    <Link underline="none">Регистрация</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}

export default Header