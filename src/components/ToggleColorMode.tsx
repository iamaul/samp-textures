import { Icon, IconButton, useColorMode, Box } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Box
            pos="fixed"
            top="2rem"
            right="2rem"
            onClick={toggleColorMode}
            cursor="pointer"
        >
            <IconButton
                aria-label="toggle color mode"
                icon={<Icon as={isDark ? FiMoon : FiSun} />}
                onClick={toggleColorMode}
                borderRadius="full"
            />
        </Box>
    )
}