'use client'

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import '@styles/globals.scss';

import Logo from "@components/page/logo/Logo";
import AboutProject from "@components/page/AboutProject";
import ButtonActions from "@components/page/ButtonActions";
import { theme } from "../app/constants/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }}>

        {/* разделитель */}
        <div className="spacer-vertical"></div>

        {/* лого */}
        <Logo />

        {/* о проекте */}
        <AboutProject />

        {/* малый разделитель */}
        <div className="sm-spacer-vertical"></div>

        {/* кнопки */}
        <ButtonActions />
      </Box>
    </ThemeProvider>
  );
}
