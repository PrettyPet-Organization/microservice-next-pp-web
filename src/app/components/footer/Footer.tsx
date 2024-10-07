import { Grid2, Typography, Box, Container } from "@mui/material"
import LinkWrapper from "@/app/components/common/LinkWrapper"
import ImageArrowsDecor from "@components/common/ImageArrowsDecor"
import ImageArrowsDecorWrapper from "@components/footer/ImageArrowsDecorWrapper"
import { theme } from "@/app/constants/theme"

const iconPlus = <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#F6E8CE" />
</svg>

const iconArrowDown = <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0837 0.999715L11.0837 22.3535M11.0837 22.3535L21.1675 12.2698M11.0837 22.3535L1 12.2698"
        stroke="#1A4870" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Footer = () => {
    return (
        <Box component="footer" sx={{ p: 2, marginTop: 'auto', bgcolor: theme.palette.primary.main }}>

            {/* разделитель */}
            <div className="spacer-vertical"></div>

            <Container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Typography component={'h2'} variant="h1" sx={{ fontFamily: 'Futura PT', color: theme.palette.background.default }}>
                        О платформе
                    </Typography>


                    <ImageArrowsDecor />
                </Box>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ lg: 6, xl: 6, md: 12 }} sx={{ display: 'flex', alignItems: 'end' }}>
                        <Box sx={{ display: 'flex', height: 56, }}>
                            <LinkWrapper icon={iconArrowDown} iconBlockBgColor={'default'}>Проекты</LinkWrapper>

                            <Box sx={{ display: 'flex', marginInline: '1.25rem' }}>
                                <LinkWrapper icon={iconPlus} bgColor={'info'} iconBlockBgColor={'info'} textColor="default">Создать проект</LinkWrapper>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2 size={{ lg: 6, xl: 6, md: 12 }} sx={{ color: theme.palette.background.default }}>
                        <p style={{ marginBottom: '1.13rem' }}>
                            Pretty Pet - это платформа, которая помогает воплотить идеи в жизни и пополнить своё портфолио интересными проектами.
                            <br />
                            Это место встречи. Платформа, на которой создаются pet-проекты, начиная от небольших ботов, заканчивая высоконагруженными веб-сервисами, проводятся хакатоны, работодатели находят кандидатов, а кандидаты получают возможность заявить о себе...
                        </p>

                        <p style={{ marginBottom: '1.13rem' }}>
                            Если у тебя есть какая то интересная идея, но нет возможности технически ее реализовать, просто нажми {'\"Создать проект\"'}, опиши идею, а разработчики, дизайнеры и аналитики тебе помогут ее реализовать.
                        </p>

                        <p>
                            Если ты хочешь получить практический опыт разработки, дизайна или просто опыт работы в команде, заходи в {'\"Каталог проектов\"'}
                            и выбери тот проект, который подходит именно тебе
                        </p>
                    </Grid2>
                </Grid2>

                <ImageArrowsDecorWrapper />
            </Container >
        </Box >
    )
}

export default Footer