import { Box } from "@mui/material"
import Image from 'next/image';
import iconMoon from '@/assets/icons/icon_moon.svg'
import iconTg from '@/assets/icons/icon_tg.svg'
import iconInsta from '@/assets/icons/icon_insta.svg'
import iconMail from '@/assets/icons/icon_mail.svg'
import VerticalSingleBorder from "@components/common/VerticalSingleBorder";
import { theme } from "@/app/constants/theme";

const baseStyleHeaderLinks = {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
}

const styleThemeSwither = {
    ...baseStyleHeaderLinks,
    justifyContent: 'center',
    width: 56,
    bgcolor: theme.palette.primary.main,
}

const NavSocialLinks = () => {
    return (
        <>
            <Box sx={styleThemeSwither}>
                <Image
                    src={iconMoon}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                />
            </Box>

            <Box sx={{ ...baseStyleHeaderLinks, marginInline: '2.5rem' }}>
                <Image
                    src={iconTg}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                />

                <Image
                    src={iconInsta}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                    style={{ marginInline: '1rem' }}
                />

                <Image
                    src={iconMail}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                />
            </Box>

            <VerticalSingleBorder />
        </>
    )
}

export default NavSocialLinks