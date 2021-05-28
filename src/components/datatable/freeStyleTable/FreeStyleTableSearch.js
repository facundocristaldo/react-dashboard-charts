import React from "react";
import { Box, Container, Input, makeStyles } from "@material-ui/core";
import { Clear, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end"
  },
  containerBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  },
  search: { position: "absolute" },
  searchInput: { padding: `${theme.spacing(0.5)}px ${theme.spacing(3)}px` },
  cleanSearch: { position: "absolute", right: 0, color: "rgba(0, 0, 0, 0.26)" }
}));

export default function FreeStyleTableSearch({ value, handleValueChange }) {
  const classes = useStyles();
  const clearInput = () => {
    handleValueChange("");
  };
  return (
    <Container className={classes.container}>
      <Box className={classes.containerBox}>
        <Search className={classes.search} />
        <Input
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          placeholder="Search"
          className={classes.searchInput}
        />
        <Clear className={classes.cleanSearch} onClick={clearInput} />
      </Box>
    </Container>
  );
}
