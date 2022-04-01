import { useState, useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Typography, CssBaseline, Container, TextField ,Grid, Button } from "@mui/material";
// const API_URL = "http://www.omdbapi.com?apikey=a693c865";

const App = () => {
  //States
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("iron");
  //Methods
  const searchMovies = async (title) => {
    axios({
      url: "http://www.omdbapi.com?apikey=a693c865" + "&s=" + title,
    }).then((response) => {
      const data = response.data;
      //setSearchTerm(title);
      setMovies(data.Search);
    });
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <div className="App">
        <CssBaseline />
        <main>
          <Container maxWidth="sm" style={{ margin: "auto" }}>
            <Typography
              sx={{ color: "blue" }}
              variant="h2"
              align="center"
              color="textPrimary"
              
            >
              
              MovieLand
              
            </Typography>
           
            <TextField
              margin="normal"
              required
              fullWidth
              id="search"
              label="Search For Movies"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              src={SearchIcon} 
              color="secondary"   
            />
            <Button variant ="contained" size= "large">
              show
              </Button>
          </Container>
          {movies?.length > 0 ? (
            <Grid container spacing={3}>
           
              {movies.map((movie) => (
                <Grid item lg={3} md={4} xs={12}>
                <MovieCard movie={movie} />
                </Grid>
              ))}
               
            </Grid>
          ) : (
            <div className="empty">
              <h2>No movies Found</h2>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default App;
