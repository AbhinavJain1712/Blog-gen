import React from 'react';
import { 
    Box, 
    styled, 
    Typography, 
    Link, 
    Card, 
    CardContent, 
    Grid, 
    Container, 
    Button,
     CardActionArea,
     CardMedia,
     IconButton,
} from '@mui/material';
import { GitHub, Instagram, Email, CenterFocusStrong} from '@mui/icons-material';
// import {Grid, Container, Button} from "@material-ui/core"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;



const About = () => {

    return (
        <Box>
            <Banner/>
             <Wrapper> 
                <Typography variant="h3">About me</Typography>
                <Text variant="h5"><br />
                   
                </Text>
                <Text variant="h5">
                </Text>
                <Box style={{display : 'flex', marginLeft:'20px', justifyContent : 'center'}}>
                    <Box width = '300px' display='flex' margin='20px' marginRight='30px' padding= '30px' alignItems='center'>
                        <Card variant='outlined'>
                            <CardActionArea>
                                <CardMedia 
                                    image={require('./ekeshwar.jpg')} style={{height:300}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div' alignItems='center'>
                                        Ekeshwar Aditya
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' alignItems='center'>
                                    I am an IT sophomore at IIIT Allahabad, a full stack developer 
                                    with a passion for learning and creating new technologies.
                                    I also take keen interest in competitive programming.
                                    </Typography>
                                    <IconButton>
                                        <Link href="https://www.linkedin.com/in/ekeshwar-aditya-2b5335234/" color="inherit" target="_blank">
                                            <LinkedInIcon/>
                                        </Link>
                                    </IconButton>
                                    <IconButton>
                                        <Link href="https://github.com/ekeshwar247?tab=repositories" color="inherit" target="_blank">
                                            <GitHubIcon/>
                                        </Link>
                                    </IconButton>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                    <Box width='300px' display='flex' margin='20px' marginLeft='90px' padding='30px'>
    <Card variant='outlined'>
        <CardActionArea>
            <CardMedia
                component='img'
                image={require('./Abhinav.jpg')}
                style={{ height: 300, objectFit: 'cover', objectPosition: 'top' }}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' alignItems='center'>
                    Abhinav Jain
                </Typography>
                <Typography variant='body2' color='text.secondary' alignItems='center'>
                    I am a full stack developer and an undergraduate in Electronics and Communications Engineering at BIT Mesra. I also love Competetive Programming. I'm also quite interested in programming competitions.
                </Typography>
                <IconButton>
                    <Link href="https://www.linkedin.com/in/abhinav-jain-ab541424a/" color="inherit" target="_blank">
                        <LinkedInIcon />
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href="https://github.com/AbhinavJain1712" color="inherit" target="_blank">
                        <GitHubIcon />
                    </Link>
                </IconButton>
                {/* <IconButton>
                    <Link href="https://www.instagram.com/sumanshekharbhardwaj/" color="inherit" target="_blank">
                        <InstagramIcon />
                    </Link>
                </IconButton> */}
            </CardContent>
        </CardActionArea>
    </Card>
</Box>

                    
                </Box>
             </Wrapper>
        </Box>
    )
}

export default About;