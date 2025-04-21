import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const CommentItem = ({ data }) => {
  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <Typography variant="body1">{data?.comment}</Typography>
      </Grid>

      <Grid size={12}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ width: 24, height: 24 }}>{data?.author[0]}</Avatar>
          <Typography variant="caption">Answered by: {data?.author}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommentItem;
