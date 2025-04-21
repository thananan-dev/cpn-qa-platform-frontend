import MockData from "../mockData/MockData";

const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let initPostData = [];

      const prevData = localStorage.getItem("posts");

      if (!prevData) {
        initPostData = [...MockData.mockPost];
      } else {
        const { state: posts } = JSON.parse(prevData);
        initPostData = [...posts.posts];
      }
      resolve({
        status: 200,
        data: {
          posts: initPostData,
        },
      });
    }, 1000);
  });
};

const getPostById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let initPostData = [];

      const prevData = localStorage.getItem("posts");

      if (!prevData) {
        initPostData = [...MockData.mockPost];
      } else {
        const { state: posts } = JSON.parse(prevData);
        initPostData = [...posts.posts];
      }

      const post = initPostData.find((post) => post.id == id);

      if (post) {
        resolve({
          status: 200,
          data: {
            post,
          },
        });
      } else {
        reject(Error("Post not found"));
      }
    }, 1000);
  });
};

// eslint-disable-next-line no-unused-vars
const createPost = (_title, _desc) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          message: "Create post success",
        },
      });
    }, 1000);
  });
};

// eslint-disable-next-line no-unused-vars
const addComment = (comment, postId, author) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          message: "Add comment success",
        },
      });
    }, 1000);
  });
};

export default { getPosts, getPostById, createPost, addComment };
