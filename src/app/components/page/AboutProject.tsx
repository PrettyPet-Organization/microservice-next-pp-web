import { Box, Typography } from "@mui/material"

const AboutProject = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: '210px', fontFamily: 'Futura PT', lineHeight: '269.22px', color: 'primary.main' }}>Pretty Pet</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%', color: "primary.main" }}>
                <p style={{ paddingRight: '7rem' }}>
                    Откройте мир возможностей с нашей платформой для pet-проектов! Здесь вы найдёте идеи, вдохновение и
                    инструменты для создания собственных уникальных проектов.
                </p>

                <p style={{ paddingRight: '3rem' }}>
                    Присоединяйтесь к нашему сообществу и начните развивать свои навыки прямо сегодня!
                </p>
            </Box>
        </Box>
    )
}

export default AboutProject