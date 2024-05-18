import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme ({
    config: {
        initialColorMode: "dark",
        useSystemColorModeP: false,
    },
});

export default theme;