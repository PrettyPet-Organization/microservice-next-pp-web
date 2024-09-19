import { Box, Link } from "@mui/material"
import Image from 'next/image';
import iconLang from '@/assets/icons/icon_lang.svg'

const styleBtnLang = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    bgcolor: 'background.default',
}

const LangSelector = () => {
    return (
        <Box sx={{ ...styleBtnLang, marginInline: '2.5rem' }}>
            <Link underline="none" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
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