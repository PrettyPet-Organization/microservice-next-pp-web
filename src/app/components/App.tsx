import { Box, Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ReactNode } from "react";
import ChatBot from "./page/ChatBot";
import { theme } from "@/app/constants/theme";

export default function App({ children }: { children: ReactNode }) {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.default }}>
            <Header />

            <Container>
                {children}
            </Container>

            {/* чат-бот */}
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <ChatBot />
            </Box>

            <Footer />
        </main>
    )
}