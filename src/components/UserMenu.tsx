import { 
    Icon,
    Button, 
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar 
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
                        as={Avatar}
                        aria-label="Options"
                        borderRadius="full"
                    >
                        {session ? (<Avatar name={session.user.name} src={session.user.image} />) : (<Avatar icon={<FiUser />} />)}
                    </MenuButton>
                    <MenuList>
                        {session ? (
                            <>
                                <MenuGroup title="Profile">
                                    <MenuItem>{session.user.name}</MenuItem>
                                    <NextLink href={'/api/auth/signout'}><MenuItem>Sign Out</MenuItem></NextLink>
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