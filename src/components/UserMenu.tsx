import { 
    Tooltip,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Avatar 
} from '@chakra-ui/react';

import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

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
                    <Tooltip hasArrow label={session ? session.user.name : 'Guest'} bg="red.300">
                        <MenuButton
                            as={Avatar}
                            aria-label="Options"
                            borderRadius="full"
                            cursor="pointer"
                        >
                            {session ? (<Avatar name={session.user.name} src={session.user.image} />) : (<Avatar />)}
                        </MenuButton>
                    </Tooltip>
                    <MenuList>
                        {session ? (
                            <>
                                <MenuGroup title="Profile">
                                    <MenuItem>Profile</MenuItem>
                                    <NextLink href={'/api/auth/signout'}><MenuItem icon={<FaSignOutAlt />}>Sign Out</MenuItem></NextLink>
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
                                    <MenuItem icon={<FaSignInAlt />}>
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