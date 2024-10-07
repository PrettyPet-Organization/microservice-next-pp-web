'use client'

import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import ChatBot from "./page/ChatBot";
import { theme } from "../constants/theme";

export default function App({ children }: { children: ReactNode }) {
    return (
        <>
            <CssBaseline />

            {/* малый разделитель */}
            <div className="sm-spacer-vertical"></div>

            <Container style={{ minHeight: '300px' }}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </Container>

            {/* чат-бот */}
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <ChatBot />
            </Box>
        </>
    )
}