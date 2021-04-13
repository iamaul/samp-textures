import { 
    Icon,
    Button, 
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider 
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';

import { useSession } from 'next-auth/client';

import NextLink from 'next/link';

export const UserMenu = () => {
    const [session] = useSession();

    return (
        <>
            <Box
                pos="absolute"
                top="2rem"
                left="2rem"
                zIndex="1000"
            >
                <Menu>
                    <MenuButton
                        as={Button}
                        aria-label="Options"
                        leftIcon={session ? session.user.image : <Icon as={FiUser} />}
                        borderRadius="full"
                    >
                        {session ? session.user.name : 'Guest'}
                    </MenuButton>
                    <MenuList>
                        {session ? (
                            <>
                                <MenuGroup title="Profile">
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem as={NextLink} href={'/api/auth/signout'}>Sign Out</MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title="Help">
                                    <MenuItem>About SA-MP Textures</MenuItem>
                                    <MenuItem>FAQ</MenuItem>
                                </MenuGroup>
                            </>
                        ) : (
                            <>
                                <NextLink href={'/api/auth/signin'} passHref>
                                    <MenuItem>
                                        Sign In
                                    </MenuItem>
                                </NextLink>
                                
                            </>
                        )}
                    </MenuList>
                </Menu>
            </Box>
        </>
    )
}