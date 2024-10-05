import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',

        primary: {
            main: '#1A4870',
            dark: '#fff',
        },

        info: {
            main: '#EE823D',
        },

        warning: {
            main: '#AD4D42',
        },

        background: {
            default: '#F6E8CE',
        },
    },

    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fontSize: '5rem',
            fontWeight: 700,
            lineHeight: '7rem',
            fontFamily: 'Futura PT',
        },

        h2: {
            fontSize: '2.2rem',
            fontWeight: 400,
            lineHeight: '2.8rem',
            fontFamily: 'Futura PT',
        },

        h3: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: '1.3rem',
        },

        h4: {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: '1.3rem',
        },

        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.2rem',
        },
    },
});