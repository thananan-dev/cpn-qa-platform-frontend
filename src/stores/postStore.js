import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const postStore = create(
  devtools(
    persist(
      (set, get) => ({
        posts: [],
        setPosts: (posts) => set({ posts }),
        addPost: (post) => {
          const prevState = get().posts;
          return set({ posts: [...prevState, post] });
        },
        addPostComment: (newComment, postId) => {
          const prevState = get().posts;

          const updatedComment = prevState.map((post) => {
            if (post.id !== postId) {
              return post;
            }

            return {
              ...post,
              comments: [...post.comments, { ...newComment }],
            };
          });

          return set({ posts: updatedComment });
        },
      }),
      {
        name: "posts",
      }
    )
  )
);

export default postStore;
