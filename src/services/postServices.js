import postsApis from "../apis/postsApis";

const getPosts = async () => {
  const response = await postsApis.getPosts();
  return response;
};

const getPostById = async (id) => {
  const response = await postsApis.getPostById(id);
  return response;
};

const createPost = async (title, desc) => {
  const response = await postsApis.createPost(title, desc);
  return response;
};

const addComment = async (comment, postId, author) => {
  const response = await postsApis.addComment(comment, postId, author);
  return response;
};

export default { getPosts, getPostById, createPost, addComment };
