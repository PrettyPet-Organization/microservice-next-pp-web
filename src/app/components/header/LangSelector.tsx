import { Box, Link } from "@mui/material"
import Image from 'next/image';
import iconLang from '@/assets/icons/icon_lang.svg'
import { theme } from "@/app/constants/theme";

const styleBtnLang = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    bgcolor: theme.palette.background.default,
}

const LangSelector = () => {
    return (
        <Box sx={{ ...styleBtnLang, marginInline: '2.5rem' }}>
            <Link underline="none" sx={{ display: 'flex', alignItems: 'center', width: '100%' }} color={theme.palette.primary.main}>
                <Image
                    src={iconLang}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                    style={{ marginRight: '0.5rem' }}
                />
                <span>RU</span>
            </Link>
        </Box>
    )
}

export default LangSelector