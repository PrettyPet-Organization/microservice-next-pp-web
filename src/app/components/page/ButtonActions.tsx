import { Box, Grid2 } from "@mui/material"
import LinkWrapper from "./LinkWrapper"

const iconChevronDown = <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0837 0.999715L11.0837 22.3535M11.0837 22.3535L21.1675 12.2698M11.0837 22.3535L1 12.2698"
        stroke="#F6E8CE" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const ButtonActions = () => {
    return (
        <Grid2 container spacing={3} justifyContent={'center'}>
            <Grid2>
                <Box sx={{ display: 'flex', height: 56, }}>
                    <LinkWrapper icon={iconChevronDown}>Проекты</LinkWrapper>
                </Box>
            </Grid2>
            <Grid2>
                <Box sx={{ display: 'flex', height: 56, }}>
                    <LinkWrapper bgColor={'primary'} textColor="default">Принять участие</LinkWrapper>
                </Box>
            </Grid2>
            <Grid2>
                <Box sx={{ display: 'flex', height: 56, }}>
                    <LinkWrapper icon={iconChevronDown}>О платформе</LinkWrapper>
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default ButtonActions