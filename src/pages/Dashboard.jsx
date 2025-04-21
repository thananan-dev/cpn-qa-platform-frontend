import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import usePost from "../hooks/usePost";
import postStore from "../stores/postStore";
import authStore from "../stores/authStore";
import { Controller, useForm } from "react-hook-form";

const CardSkeletonLoading = () => {
  return (
    <Grid size={12}>
      <Card>
        <CardContent>
          <Skeleton animation="wave" height={32} />
          <Skeleton animation="wave" height={24} />
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
              <Skeleton animation="wave" height={40} width={40} />
            </Grid>
            <Grid>
              <Skeleton animation="wave" height={40} width={30} />
            </Grid>

            <Grid>
              <Skeleton animation="wave" height={40} width={40} />
            </Grid>

            <Grid>
              <Skeleton animation="wave" height={40} width={30} />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

const SkeletonLoading = () => {
  return (
    <Grid container spacing={1}>
      <CardSkeletonLoading />
      <CardSkeletonLoading />
      <CardSkeletonLoading />
      <CardSkeletonLoading />
      <CardSkeletonLoading />
    </Grid>
  );
};

const PostList = ({ posts }) => {
  return (
    <Grid container spacing={1}>
      {posts.map((post) => {
        return (
          <Grid size={12} key={post.id}>
            <PostItem data={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const defaultValues = {
  title: "",
  description: "",
};

const Dashboard = () => {
  const { user } = authStore((state) => state);
  const { posts } = postStore((state) => state);
  const { getPosts, createPost, isLoading: isPostsLoading } = usePost();

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const watchPostTitle = watch("title");
  const watchPostDescription = watch("description");

  const disabledFields = useMemo(() => {
    return {
      title: isPostsLoading,
      description: isPostsLoading,
      postBtn: !watchPostTitle || !watchPostDescription,
    };
  }, [watchPostTitle, watchPostDescription, isPostsLoading]);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitPost = ({ title, description }) => {
    createPost(title, description, () => {
      reset(defaultValues);
    });
  };

  return (
    <Layout>
      <Typography variant="h5" fontWeight={600} color="textPrimary">
        Welcome to Q&A, {`${user?.firstName} ${user?.lastName}`}
      </Typography>

      <Divider sx={{ marginY: 2 }} />

      <Grid container spacing={1}>
        <Grid container size={12}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Post title"
                disabled={disabledFields.title}
              />
            )}
          />
        </Grid>
        <Grid container size={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                placeholder="Description ..."
                disabled={disabledFields.description}
                multiline
                rows={4}
              />
            )}
          />
        </Grid>
        <Grid container size={12} justifyContent="end">
          <Grid>
            <Button
              variant="contained"
              disabled={disabledFields.postBtn}
              onClick={handleSubmit(onSubmitPost)}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Typography variant="h6" fontWeight={600} color="textPrimary">
        Interesting posts for you
      </Typography>

      {isPostsLoading ? <SkeletonLoading /> : <PostList posts={posts} />}
    </Layout>
  );
};

export default Dashboard;
