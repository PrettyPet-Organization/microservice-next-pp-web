'use client'

import { Box } from "@mui/material"
import { useMediaQuery } from "@mui/system"
import ImageArrowsDecor from "@components/common/ImageArrowsDecor"

const ImageArrowsDecorWrapper = () => {
    const isMediaQueryMatch = useMediaQuery('(min-width:1199px)');

    return (
        <Box sx={{ display: 'flex', justifyContent: isMediaQueryMatch ? 'center' : 'start' }}>
            <ImageArrowsDecor />
        </Box>
    )
}

export default ImageArrowsDecorWrapper