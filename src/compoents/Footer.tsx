import { AppBar, Avatar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Icon from '../static/images/icon.jpg'


const Footer = () => {
    return (
        <Stack sx={{
            bottom: "0",
            position:"fixed",
            // borderTop: '1px solid #ddd',
            // height: '60px',
            // lineHeight: '60px',
            // backgroundColor: 'white',
            // alignItems: "center",
            flexDirection: "row",
            // justifyContent: "space-around",
            border: "1px solid blue",
            background: "pink",
            width:"100%"
            
        }}  >
            <Box>
                <Box src={Icon} component='img' />
                <Typography>
                    © 2022 Icon Live, Inc.
                </Typography>
                <Container sx={{
                display: "block",
                textalign: "center",
                }}>
                    <Container>
                        <Typography>
                            Other Pages
                        </Typography>
                        <Typography>
                            About us
                        </Typography>
                        <Typography>
                            Contact us
                        </Typography>
                        <Typography>
                            FAQs
                        </Typography>
                    </Container>

                    <Container sx={{}}>
                        <Typography>
                            Legal
                        </Typography>
                        <Typography>
                            Privacy
                        </Typography>
                        <Typography>
                            Terms and conditions
                        </Typography>
                    </Container>

                    <Container>
                        <Typography>
                            Follow us
                        </Typography>
                    </Container>

                </Container>

            </Box>
        </Stack>
    )
}

export default Footer