import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
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
        }
    },
});