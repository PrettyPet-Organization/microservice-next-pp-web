import { theme } from "@/app/constants/theme"
import { Box } from "@mui/material"

const VerticalSingleBorder = () => {
    return (
        <Box sx={{ borderRight: 1, borderColor: theme.palette.primary.main, height: '80%' }}></Box>
    )
}

export default VerticalSingleBorder