import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    // for collor you can use https://smart-swatch.netlify.app/
    colors: {
        black: '#16161D',
        primary: {
            50: '#dcffea',
            100: '#b0fdce',
            200: '#81fbb0',
            300: '#50f891',
            400: '#22f673',
            500: '#09dd5a',
            600: '#00ac45',
            700: '#007b30',
            800: '#004b1b',
            900: '#001b04',
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
});

export default theme;