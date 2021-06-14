import { Box, makeStyles, TextField } from "@material-ui/core";
import React from "react";

const usesStyles = makeStyles((theme) => ({
  component: {
    background: "#F6F6F6",
    "& > *": {
      margin: theme.spacing(4),
    },
  },
}));

function BreadCrumb({onTextChange, onCountChange}) {
  const hi = usesStyles();
  return (
    <Box m={3} className={hi.component}>
      <TextField
        label="Search Images"
        onChange={(e) => onTextChange(e.target.value)}
      />
      <TextField
        label="Number of Images"
        onChange={(e) => onCountChange(e.target.value)}
        type="number"
      />
    </Box>
  );
}

export default BreadCrumb;
