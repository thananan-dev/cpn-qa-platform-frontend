import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect } from "react";

// nav -> search
// list -> post
// post -> comments

const Dashboard = () => {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const fetchPosts = await fetch("0.0.0.0:8000/api/getAllPost");
        const post = JSON.stringify(fetchPosts);
        console.log({ post });
      } catch (error) {
        console.log({ error });
      }
    };

    fetchApi();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Box display="flex" padding={1} gap={2}>
          <TextField />
          <Button variant="contained">Search</Button>
        </Box>
      </Container>
      <div>List</div>
    </div>
  );
};

export default Dashboard;
