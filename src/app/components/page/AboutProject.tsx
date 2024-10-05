import { Box, Grid2, Typography } from "@mui/material"
import ImageArrowsDecor from "../common/ImageArrowsDecor"
import { useMediaQuery } from "@mui/system"

const AboutProject = () => {
    const isMediaQueryMatch = useMediaQuery('(min-width:1199px)');
    const h1Style = { fontSize: isMediaQueryMatch ? '210px' : '150px', lineHeight: isMediaQueryMatch ? '269.22px' : '200px', color: 'primary.main' }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box display={'flex'}>
                <Box display={'flex'} marginTop={'3rem'}>
                    <ImageArrowsDecor color={'primary'} />
                </Box>

                <Typography variant="h1" sx={h1Style}>Pretty Pet</Typography>

                <Box display={'flex'} marginTop={'3rem'} marginLeft={'1rem'}>
                    <ImageArrowsDecor color={'primary'} />
                </Box>
            </Box>

            <Grid2 container spacing={2} justifyContent={'center'}>
                <Grid2 size={{ lg: 6, xl: 6, md: 6 }} color={'primary.main'}>
                    <p style={{ paddingRight: '7rem' }}>
                        Откройте мир возможностей с нашей платформой для pet-проектов! Здесь вы найдёте идеи, вдохновение и
                        инструменты для создания собственных уникальных проектов.
                    </p>
                </Grid2>

                <Grid2 size={{ lg: 4, xl: 4, md: 6 }} color={'primary.main'}>
                    <p style={{ paddingRight: '3rem' }}>
                        Присоединяйтесь к нашему сообществу и начните развивать свои навыки прямо сегодня!
                    </p>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default AboutProject