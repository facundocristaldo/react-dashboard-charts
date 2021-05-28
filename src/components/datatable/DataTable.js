import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Box, makeStyles, useTheme } from "@material-ui/core";
import { dataValues, dataStructure, dataTitle } from "../../mockData/dataTable";
import FreeStyleTable from "./freeStyleTable/FreeStyleTable";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    height: "100%"
  },
  freestyleTableVisible: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  materialTableVisible: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

const pageSizeOptions = [5, 10, 15, 20];

export default function DataTable() {
  const classes = useStyles();
  const theme = useTheme();

  const [showSmall, setShowSmall] = useState(false);

  const handleResize = () => {
    const smallViewport = window.innerWidth < theme.breakpoints.width("sm");
    if (smallViewport !== showSmall) {
      setShowSmall(window.innerWidth < theme.breakpoints.width("sm"));
    }
  };

  useEffect(() => {
    handleResize();
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Box className={classes.table}>
      {showSmall ? (
        <FreeStyleTable
          pageSizeOptions={pageSizeOptions}
          structure={dataStructure}
          data={dataValues}
          title={dataTitle}
          filtering={true}
        />
      ) : (
        <MaterialTable
          options={{ pageSizeOptions }}
          columns={dataStructure}
          data={dataValues}
          title={dataTitle}
        />
      )}
    </Box>
  );
}
