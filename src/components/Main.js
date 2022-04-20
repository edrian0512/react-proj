import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import '../css/Main.css'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12]
class Main extends React.Component {

    render() {
        // const bg = { backgroundColor: "#05386B", color: "white" }
        // const labelText = "Enter Name:"
        // const buttonText = { text: 'Click me' }
        return (
            <main>
                <div className="cardsMain">
                    <Container maxWidth='sm'>
                        <Typography variant="h2" gutterBottom align="center" color="textPrimary">
                            Appstore
                        </Typography>
                        <Typography variant="h5" gutterBottom align="center" color="textPrimary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad tenetur quasi esse. Enim praesentium quaerat excepturi eaque vitae, in, sit provident at atque laboriosam dolorum! Aliquid error quaerat deserunt!
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item >
                                    <Button href="https://edrian0512.github.io" variant="contained" color="primary">View Services</Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="outlined" color="primary">Contact Us</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <div className="cardsMain">
                        <Container maxWidth='md'>
                            <Grid container spacing={4}>
                                {cards.map((card, index) => {
                                    return (<Grid key={index} item md={3} sm={12}>
                                        <Card>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://placeimg.com/640/480/animals"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Animals
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Animals are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button  size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>)
                                })}
                            </Grid>
                        </Container>
                    </div>
                </div>
            </main>


            /*<div>
                <label htmlFor="name" className="label">{labelText}</label>
                <input type="text" id="name" />
                <button style={bg}>{buttonText.text}</button>
            </div>*/
        )
    }
}

export default Main