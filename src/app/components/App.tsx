'use client'

import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { ReactNode } from "react";
import { theme } from "../constants/theme";
import ChatBot from "./page/ChatBot";

export default function App({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F6E8CE' }}>
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
        </ThemeProvider>
    )
}