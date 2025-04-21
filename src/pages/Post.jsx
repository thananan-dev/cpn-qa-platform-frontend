import CommentIcon from "@mui/icons-material/Comment";
import PollIcon from "@mui/icons-material/Poll";
import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import CommentItem from "../components/CommentItem";
import Layout from "../components/Layout";
import usePost from "../hooks/usePost";

const CardSkeletonLoading = () => {
  return (
    <Grid size={12}>
      <Grid>
        <Skeleton animation="wave" height={24} />
      </Grid>
      <Grid>
        <Skeleton animation="wave" height={24} />
      </Grid>

      <Divider
        sx={{
          width: "100%",
          my: 2,
        }}
      />
    </Grid>
  );
};

const SkeletonLoading = () => {
  return (
    <>
      <Skeleton animation="wave" height={60} />

      <Divider
        sx={{
          width: "100%",
          my: 2,
        }}
      />

      <Skeleton animation="wave" height={40} />
      <Skeleton animation="wave" height={40} />
      <Skeleton animation="wave" height={40} />
      <Skeleton animation="wave" height={40} />

      <Grid container spacing={1}>
        <Grid>
          <Skeleton animation="wave" height={40} width={40} />
        </Grid>
        <Grid>
          <Skeleton animation="wave" height={40} width={40} />
        </Grid>
        <Grid>
          <Skeleton animation="wave" height={40} width={40} />
        </Grid>
        <Grid>
          <Skeleton animation="wave" height={40} width={40} />
        </Grid>
      </Grid>

      <Divider
        sx={{
          width: "100%",
          my: 2,
        }}
      />

      <Grid container spacing={1}>
        <CardSkeletonLoading />
        <CardSkeletonLoading />
        <CardSkeletonLoading />
        <CardSkeletonLoading />
        <CardSkeletonLoading />
      </Grid>
    </>
  );
};

const defaultValues = {
  comment: "",
};

const PostContent = ({ post, updateComment }) => {
  const { addComment, isAddCommentLoading } = usePost();

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const watchComment = watch("comment");

  const disabledFields = useMemo(() => {
    return {
      postBtn: !watchComment || isAddCommentLoading,
    };
  }, [watchComment, isAddCommentLoading]);

  const onSubmitPost = ({ comment }) => {
    addComment(comment, post.id, (data) => {
      reset(defaultValues);
      updateComment(data);
    });
  };

  return (
    <Container>
      <Typography variant="h4" color="textPrimary">
        {post?.title}
      </Typography>

      <Divider
        sx={{
          width: "100%",
          my: 2,
        }}
      />

      <Typography variant="subtitle1" color="textSecondary">
        {post?.description}
      </Typography>

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
          <Typography variant="body1">{post?.vote}</Typography>
        </Grid>

        <Grid>
          <IconButton>
            <CommentIcon />
          </IconButton>
        </Grid>

        <Grid>
          <Typography variant="body1">{post?.comments.length}</Typography>
        </Grid>
      </Grid>

      <Divider
        sx={{
          width: "100%",
          my: 2,
        }}
      />

      <Grid container spacing={1}>
        {post?.comments.map((comment) => {
          return (
            <Grid size={12} key={comment.id}>
              <CommentItem data={comment} />
              <Divider
                sx={{
                  width: "100%",
                  my: 2,
                }}
              />
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={1}>
        <Grid container size={12}>
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={4}
                placeholder="Comment ..."
              />
            )}
          />
        </Grid>
        <Grid container size={12} justifyContent="end">
          <Grid>
            <Button
              variant="contained"
              disabled={disabledFields.postBtn}
              loading={isAddCommentLoading}
              onClick={handleSubmit(onSubmitPost)}
            >
              Post Your Answer
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const Post = () => {
  const { id } = useParams();
  const { getPostById, isLoading: isPostLoading } = usePost();

  const [postData, setPostData] = useState(null);

  const updateComment = (newComment) => {
    setPostData((prev) => ({
      ...prev,
      comments: [
        ...prev.comments,
        { id: prev.comments.length + 1, ...newComment },
      ],
    }));
  };

  useEffect(() => {
    if (id) {
      getPostById(id, (data) => {
        setPostData(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Layout>
      {isPostLoading ? (
        <SkeletonLoading />
      ) : (
        <PostContent post={postData} updateComment={updateComment} />
      )}
    </Layout>
  );
};

export default Post;
