import React, { useEffect, useState } from "react";
import { Box, Card, Typography, makeStyles } from "@material-ui/core";
import FreeStyleTableSearch from "./FreeStyleTableSearch";
import FreeStyleTableRow from "./FreeStyleTableRow";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: theme.spacing(1)
  }
}));

export default function FreeStyleTable({
  pageSizeOptions = [10],
  structure,
  data,
  title = "",
  filtering = true
}) {
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const classes = useStyles();

  useEffect(() => {
    if (filterValue === "") {
      setFilteredData(data);
      return;
    }
    let newFilteredData = data.filter(
      (row) =>
        structure.filter((field) =>
          row[field.field].toString().includes(filterValue)
        ).length > 0
    );
    setFilteredData(newFilteredData);
  }, [filterValue, data, structure]);

  return (
    <Card>
      <Box className={classes.containerBox}>
        <Typography variant="h6">{title}</Typography>
        {filtering && (
          <FreeStyleTableSearch
            value={filterValue}
            handleValueChange={(val) => setFilterValue(val)}
          />
        )}
        <Box>
          {filteredData.map((row, index) => (
            <FreeStyleTableRow key={index} data={row} structure={structure} />
          ))}
        </Box>
      </Box>
    </Card>
  );
}
