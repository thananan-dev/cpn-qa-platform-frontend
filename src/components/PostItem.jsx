import CommentIcon from "@mui/icons-material/Comment";
import PollIcon from "@mui/icons-material/Poll";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router";
const PostItem = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <Link to={data.path} style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary">{data.title}</Typography>
        </Link>
        <Typography variant="body1">{data.description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid
          container
          width="100%"
          spacing={1}
          direction="row"
          sx={{
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Grid>
            <IconButton>
              <PollIcon />
            </IconButton>
          </Grid>
          <Grid>
            <Typography variant="body1">{data.vote}</Typography>
          </Grid>

          <Grid>
            <IconButton>
              <CommentIcon />
            </IconButton>
          </Grid>

          <Grid>
            <Typography variant="body1">{data.comments.length}</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default memo(PostItem);
