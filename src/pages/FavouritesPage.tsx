import * as React from "react";
import {
    Typography,
    Container,
    Grid,
    Box,
    Card,
    CardContent,
} from "@mui/material";

function HomePage() {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: 10 }}
            >
                <Grid item xs={12} sm={5}>
                    <Card style={{ backgroundColor: '#0A2239', color: 'white', maxWidth: 400, margin: '0 auto', boxShadow: '12px 10px 10px rgba(0,0,0, .5)', borderRadius: '15px' }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={7}>
                                    <Typography variant="h4" gutterBottom align="left">
                                        Left Title
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="h6" gutterBottom align="right">
                                        Right Title
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" gutterBottom align="center">
                                        Description
                                    </Typography>
                                    <Typography variant="body1" gutterBottom align="center">
                                        Temperature
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} textAlign='center'>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6} md={6}>
                                            122
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            2
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            3
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            4
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={7} justifyContent="center" alignItems="center">
                    <Grid container spacing={2} textAlign="center">
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    
                                        <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />
                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} mb={1}>
                            <Card style={{ color: 'white', backgroundColor: '#0A2239', borderRadius: '15px' }}>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Title 6
                                    </Typography>
                                    <Box component='img'
                                        sx={{
                                            display: 'block',
                                            height: 233,
                                            width: '100%', // Make the image box span the full width
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                            margin: 'auto',
                                        }} src="https://placehold.co/400" />                                    <Typography variant="body1" color="white" sx={{ fontWeight: 'bold' }}>
                                        24°
                                    </Typography>
                                    <Typography variant="caption" color="white">
                                        Sunny
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;
