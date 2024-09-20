import { Box } from "@mui/material"
import Image from 'next/image';
import iconDocker from '@/assets/icons/icon_docker.svg';
import iconJira from '@/assets/icons/icon_jira.svg';
import iconGithub from '@/assets/icons/icon_github.svg';
import iconCPlus from '@/assets/icons/icon_c_plus.svg';

const LeftIconsGroup = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1.5rem' }}>
                <Image
                    src={iconDocker}
                    priority
                    alt={""}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '3rem' }}>
                <Image
                    src={iconJira}
                    priority
                    alt={""}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}></Box>

            <Box sx={{ display: 'flex', justifyContent: 'start' }}></Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginRight: '1.5rem', marginBottom: '3rem' }}>
                <Image
                    src={iconGithub}
                    priority
                    alt={""}
                />
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'start', marginLeft: '3rem' }}>
                <Image
                    src={iconCPlus}
                    priority
                    alt={""}
                />
            </Box>
        </>
    )
}

export default LeftIconsGroup