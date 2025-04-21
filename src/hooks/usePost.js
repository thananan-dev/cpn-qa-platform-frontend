import { useState } from "react";
import { toast } from "react-toastify";
import postServices from "../services/postServices";
import postStore from "../stores/postStore";
import StringUtils from "../utils/StringUtils";

const usePost = () => {
  const { posts, setPosts, addPost, addPostComment } = postStore(
    (state) => state
  );

  const [isLoading, setLoading] = useState(false);
  const [isAddCommentLoading, setIsAddCommentLoading] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true);

      const response = await postServices.getPosts();
      setPosts(response.data.posts);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  const getPostById = async (id, onSuccess) => {
    try {
      setLoading(true);

      const response = await postServices.getPostById(id);

      setLoading(false);
      onSuccess(response.data.post);
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  const createPost = async (title, description, onSuccess) => {
    try {
      setLoading(true);

      await postServices.createPost(title, description);

      const generatedId = posts.length + 1;
      const generatedPath = StringUtils.removeSpecialChars(title)
        .replaceAll(" ", "-")
        .toLowerCase();

      const mockCreatePost = {
        id: generatedId,
        title,
        description,
        vote: 0,
        path: `/posts/${generatedId}/${generatedPath}`,
        comments: [],
      };

      addPost(mockCreatePost);

      setLoading(false);
      onSuccess();
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  const addComment = async (comment, postId, onSuccess) => {
    try {
      setIsAddCommentLoading(true);

      const jsonData = localStorage.getItem("credential");
      const jsonPostsData = localStorage.getItem("posts");

      const { state: user } = JSON.parse(jsonData);
      const { state: posts } = JSON.parse(jsonPostsData);

      // Check exist mock data from localStorage
      // Find last id and add a new comment
      const post = posts.posts.find((item) => item.id == postId);

      const author = `${user?.user.firstName} ${user?.user.lastName}`;

      await postServices.addComment(comment, postId, author);

      const mockResponseData = {
        id: post.comments.length + 1,
        comment,
        author,
      };

      addPostComment(mockResponseData, postId);

      setIsAddCommentLoading(false);
      onSuccess(mockResponseData);
    } catch (error) {
      setIsAddCommentLoading(false);
      toast(error.message, {
        position: "top-center",
        type: "error",
      });
    }
  };

  return {
    isLoading,
    isAddCommentLoading,
    getPosts,
    getPostById,
    createPost,
    addComment,
  };
};

export default usePost;
