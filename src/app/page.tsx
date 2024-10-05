'use client'

import { Box } from "@mui/material";

import Logo from "@components/page/logo/Logo";
import AboutProject from "@components/page/AboutProject";
import ButtonActions from "@components/page/ButtonActions";

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>

      {/* малый разделитель */}
      <div className="sm-spacer-vertical"></div>

      {/* лого */}
      <Logo />

      {/* о проекте */}
      <AboutProject />

      {/* малый разделитель */}
      <div className="sm-spacer-vertical"></div>

      {/* кнопки */}
      <ButtonActions />
    </Box>
  );
}
