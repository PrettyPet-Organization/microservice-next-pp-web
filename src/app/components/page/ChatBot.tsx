import { Box, Typography } from "@mui/material"
import Image from 'next/image';
import iconChatBot from '@/assets/icons/icon_chat-bot.svg'
import iconChevronUp from '@/assets/icons/icon_chevron_up.svg'

const ChatBot = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '20rem', height: 44, paddingInline: '1.25rem', bgcolor: 'warning.main' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                    src={iconChatBot}
                    width={24}
                    height={24}
                    priority
                    alt={""}
                    style={{ marginRight: '0.25rem' }}
                />

                <Typography component={'span'} color="background.default">
                    Чат-бот
                </Typography>
            </Box>

            <Box>
                <Image
                    src={iconChevronUp}
                    width={22}
                    height={12}
                    priority
                    alt={""}
                />
            </Box>
        </Box>
    )
}

export default ChatBot