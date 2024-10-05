import { Box, Grid2, Typography } from "@mui/material"
import { theme } from "../constants/theme"
import LinkWrapper from "@/app/components/common/LinkWrapper"
import Image from 'next/image'
import IconDecorArrowLeft from '@/assets/icons/icon_decor_arrow_left.svg'
import IconDecorArrowRight from '@/assets/icons/icon_decor_arrow_right.svg'
import ProjectsList from "@/app/components/projects/ProjectsList"


const iconArrowRight = <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999715 11.0842H22.3535M22.3535 11.0842L12.2698 1.00049M22.3535 11.0842L12.2698 21.168" stroke="#F6E8CE" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Projects = () => {
    return (
        <Box>
            <Typography component={'h1'} variant="h1" color="primary.main" sx={{ textAlign: 'center' }}>
                Проекты платформы
            </Typography>

            <Grid2 container spacing={3} justifyContent={'center'} marginBottom={2}>
                <Grid2 size={{ xl: 2 }} display={'flex'} justifyContent={'start'}>
                    <Image
                        src={IconDecorArrowRight}
                        priority
                        alt={""}
                    />
                </Grid2>

                <Grid2 size={{ xl: 8 }} display={'flex'} justifyContent={'center'}>
                    <Box sx={{ flexDirection: 'column', maxWidth: '30rem' }}>
                        <p style={{ color: theme.palette.primary.main, marginBottom: '1.13rem' }}>
                            Вы всегда можете ознакомиться с теми проектами, которые уже закончились,
                            чтобы составить общую картинку о том, что по итогу создаётся на платформе, так и посмотреть на действующие проекты, чтобы принять в них участие.
                        </p>

                        <Box sx={{ display: 'flex', justifyContent: 'center', height: 56, }}>
                            <LinkWrapper bgColor={'info'} iconBlockBgColor={'info'} textColor="default" borderColor="info">Принять участие</LinkWrapper>
                        </Box>
                    </Box>
                </Grid2>


                <Grid2 size={{ xl: 2 }} display={'flex'} justifyContent={'end'}>
                    <Image
                        src={IconDecorArrowLeft}
                        priority
                        alt={""}
                    />
                </Grid2>

            </Grid2>


            <ProjectsList />

            <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'end', height: 56 }}>
                <LinkWrapper icon={iconArrowRight} bgColor={'primary'} iconBlockBgColor={'primary'} textColor="default" borderColor="primary" width="20rem">
                        Показать все проекты
                </LinkWrapper>
            </Box>
        </Box>
    )
}

export default Projects