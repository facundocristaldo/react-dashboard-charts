import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    marginBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    borderBottom: "1px solid lightgrey",
    "&:first-child": {
      borderTop: "1px solid lightgrey"
    }
  },
  fieldBox: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
    alignItems: "center"
  },
  fieldTitle: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
    maxWidth: "45%",
    overflowWrap: "break-word"
  }
}));
export default function FreeStyleTableRow({ structure, data }) {
  const classes = useStyles();
  return (
    <Box className={classes.containerBox}>
      {structure.map((field, index) => (
        <Box key={index} className={classes.fieldBox}>
          <Typography className={classes.fieldTitle}>{field.title}:</Typography>
          <Typography>{data[field.field]}</Typography>
        </Box>
      ))}
    </Box>
  );
}
