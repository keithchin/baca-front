import { Box, Stack } from '@chakra-ui/core'
import { NavLink, NoSSR } from '@47ng/chakra-next'
import { FC } from 'react'

const Header : FC =() => (
    <>
        <NoSSR>
            <Box as="header">
                <Stack as="nav" isInline>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/docs">Documentation</NavLink>
                </Stack>
            </Box>
        </NoSSR>
    </>
)

export default Header;