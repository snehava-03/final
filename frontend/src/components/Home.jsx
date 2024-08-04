import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Import Grid component
import axios from 'axios'; // Import axios for HTTP requests

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:3001/get')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345, marginTop: 20 }}>
            <CardMedia
              component="img"
              height="140"
              image={card.img_url}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {card.title}
                
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
              {card.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary">Update</Button>
              <Button variant="contained" color="secondary">Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
