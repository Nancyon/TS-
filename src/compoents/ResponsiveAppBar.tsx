import { AppBar, Avatar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Icon from '../static/images/icon.jpg'

const ResponsiveAppBar = () => {
    return (
        <Stack
            sx={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "space-around", border: "1px solid blue", background: "pink", }}
        >
            <Box>
                <Box src={Icon} component='img' />
            </Box>
            <Box sx={{
                display: "flex",
                justifycontent: "space-between",
                gap: "35px",
                // border: '1px solid tomato',
                marginTop:"10px",
                marginBottom:"10px"
            }}>
                <Typography variant="h6" >
                    How it works
                </Typography>
                <Typography variant="h6" >
                    About us
                </Typography>
                <Typography variant="h6" >
                    Categories
                </Typography>
                <Typography variant="h6" >
                    FAQs
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                alignitems: "center",
                gap: "30px",
                justifycontent: "end",
                marginRight:" 88px"
            }}>
                <Typography variant="h6" >
                    Login
                </Typography>
                <Button sx={{ borderBlock: "2px solid black", bgcolor: "black" }}   >
                    Become an icon
                </Button>
            </Box>

        </Stack>

    )
}

export default ResponsiveAppBar