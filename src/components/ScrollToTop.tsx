import * as React from 'react';

import { Icon, IconButton, Box } from '@chakra-ui/react';

import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', isScrollTop)
        return function reset() {
            window.removeEventListener('scroll', isScrollTop)
        }
    },[]);

    const isScrollTop = () => {
        if (window.pageYOffset > 400) {
            setShow(true);
        } else if (window.pageYOffset <= 400) {
            setShow(false);
        }
    }

    const onScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {show && 
                <Box
                    pos="fixed"
                    bottom="2rem"
                    right="2rem"
                    zIndex="1000"
                    onClick={onScrollTop}
                    cursor="pointer"
                >
                    <IconButton
                        aria-label="scroll arrow top"
                        icon={<Icon as={FaArrowUp} />}
                        onClick={onScrollTop}
                        borderRadius="full"
                    />
                </Box>
            }
        </>
    )
}
