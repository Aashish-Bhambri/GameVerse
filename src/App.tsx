import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }} // only visible on lg+
      >
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
}

export default App;
