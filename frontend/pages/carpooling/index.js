import SearchBar from '../../components/Search/SearchBar';
import { Box, Container, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';

import Filters from '../../components/Carpooling/Filters';
import CardViewSearch from '../../components/Carpooling/CardViewSearch';

const results = [{
  id:1,
  pseudo:"Tartanpion",
  note:4.5,
  date:"25-11-2024",
  numberSeat:2,
  price:3,
  departHour:"08:00",
  endHour:"08:45",
  ecology:false,
},
{
  id:2,
  pseudo:"Gertrude",
  note:4.8,
  date:"28-11-2024",
  numberSeat:2,
  price:4,
  departHour:"08:15",
  endHour:"08:50",
  ecology:true,
},
{
  id:3,
  pseudo:"Cunégonde",
  note:4.9,
  date:"28-11-2024",
  numberSeat:2,
  price:5,
  departHour:"09:15",
  endHour:"09:50",
  ecology:true,
  },]

export default function Carpooling() {

  return (
    <Box flexGrow={1} component={'main'}>
      <Container maxWidth="lg">
        Carpooling page
        <SearchBar/>
        <Grid container spacing={1} mt={5} component={'section'}>
          <Grid size={{ xs:12, md:4}} sx={{ border:0}} component={'aside'}>
            <Filters/>
          </Grid>
          <Grid size={{ xs:12, md:8}} sx={{ border:0}} component={'article'}>
          
            { results.map((result)=>{
              return(
              <CardViewSearch result={result} key={result.id}/>
            )}) }
            
          </Grid>
        </Grid>       
      </Container>
    </Box>
  )
}
