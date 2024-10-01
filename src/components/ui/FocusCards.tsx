import Grid from '@mui/material/Grid2';
import CustomCard from './Cards';

export const Cards = () => {
  const cards = [
    {
      title: 'Digital Art',
      src: 'https://hostedpics.s3.us-east-2.amazonaws.com/greeneye.png',
      description:'',
      navURL:'portfolio/digitalart', 
      },
    {
      title: 'AR Experiment',
      src: 'https://hostedpics.s3.us-east-2.amazonaws.com/image.png',
      description:'',
      navURL:'portfolio/AR', 
      },
    {
      title: 'Nutriciency Web App',
      src: 'https://hostedpics.s3.us-east-2.amazonaws.com/image2.png',
      description:'',
      navURL:'portfolio/nutriciency' }
  ];

  return (
  <div style={{ position: 'absolute', zIndex: 1 }}>
  <Grid container padding={12} rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {Array.from(cards).map((card, index) => (
    <Grid key={index} size={{xs: 1, sm: 2, md: 3}}>
        <CustomCard {...card}/>
    </Grid>
  ))}
</Grid></div>);
}; 

export default Cards;