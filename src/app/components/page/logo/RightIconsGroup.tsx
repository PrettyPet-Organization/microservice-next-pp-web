import { Box } from "@mui/material"
import Image from 'next/image';
import iconStackOverflow from '@/assets/icons/icon_stack_overflow.svg';
import iconJavaScript from '@/assets/icons/icon_java_script.svg';
import iconJenkins from '@/assets/icons/icon_jenkins.svg';
import iconPython from '@/assets/icons/icon_python.svg';

const LeftIconsGroup = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '0.5rem' }}>
                <Image
                    src={iconStackOverflow}
                    priority
                    alt={""}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', marginBottom: '1.5rem' }}>
                <Image
                    src={iconJavaScript}
                    priority
                    alt={""}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '0.5rem', marginLeft: '1.5rem' }}>
                <Image
                    src={iconJenkins}
                    priority
                    alt={""}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Image
                    src={iconPython}
                    priority
                    alt={""}
                />
            </Box>
        </>
    )
}

export default LeftIconsGroup