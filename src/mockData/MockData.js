const mockPost = [
  {
    id: 1,
    title: "React vs Vue: Battle of Frameworks",
    description:
      "React and Vue are two of the most popular frontend frameworks used by developers today. In this post, we break down their key differences including performance, ecosystem, learning curve, and long-term maintenance. Whether you are a beginner looking for the easiest path or a professional considering scalability and flexibility, this comparison will help you decide which framework suits your needs best.",
    vote: 34,
    path: "/posts/1/react-vs-vue",
    comments: [
      { id: 1, comment: "Great comparison!", author: "Alice" },
      { id: 2, comment: "Vue feels more intuitive to me.", author: "Ben" },
    ],
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description:
      "JavaScript closures are a powerful yet often misunderstood concept. This post demystifies closures by explaining how functions retain access to their lexical scope, even after the outer function has returned. With clear code examples and analogies, you'll understand how closures work and why they’re essential for things like data encapsulation, factory functions, and maintaining private variables in JavaScript.",
    vote: 21,
    path: "/posts/2/js-closures",
    comments: [
      {
        id: 1,
        comment: "Thanks, closures finally make sense!",
        author: "Cindy",
      },
    ],
  },
  {
    id: 3,
    title: "How to Build a REST API with Node.js",
    description:
      "This comprehensive guide walks you through the process of building a fully functional REST API using Node.js. You'll learn how to structure your project, create routes and controllers, use middleware, handle errors, and connect to a database. By the end, you’ll be able to test your endpoints with Postman and understand how to expand your API to include features like authentication and pagination.",
    vote: 40,
    path: "/posts/3/rest-api-node",
    comments: [
      { id: 1, comment: "Very helpful tutorial.", author: "Dan" },
      { id: 2, comment: "Can you do one with Express?", author: "Emily" },
      { id: 3, comment: "Thanks for the Postman example!", author: "Frank" },
      { id: 4, comment: "How to add authentication?", author: "Gina" },
      { id: 5, comment: "I learned a lot from this.", author: "Harry" },
      { id: 6, comment: "Perfect for beginners.", author: "Isabel" },
      { id: 7, comment: "Can you do GraphQL next?", author: "Jack" },
    ],
  },
  {
    id: 4,
    title: "Mastering Async/Await in JavaScript",
    description:
      "Async/await simplifies asynchronous programming by making your code look and behave like synchronous code. In this article, we explore how to use async/await effectively in JavaScript applications. You'll learn about error handling with try/catch, combining multiple async calls with Promise.all, and avoiding common pitfalls like unhandled promises or infinite loops caused by await in the wrong context.",
    vote: 28,
    path: "/posts/4/async-await",
    comments: [
      { id: 1, comment: "Async/await makes life easier!", author: "Kate" },
      { id: 2, comment: "Can you show nested examples?", author: "Leo" },
      { id: 3, comment: "This was gold.", author: "Mila" },
    ],
  },
  {
    id: 5,
    title: "Deploying a Full-Stack App with Vercel",
    description:
      "Vercel provides a seamless way to deploy modern web applications. This guide walks you through deploying a full-stack app, including both frontend and backend components. Learn how to configure environment variables, set up serverless functions, manage custom domains, and optimize performance. Whether you’re deploying a personal project or a production-grade application, Vercel makes it fast and easy.",
    vote: 22,
    path: "/posts/5/deploy-vercel",
    comments: [
      { id: 1, comment: "Deployed mine today!", author: "Nina" },
      { id: 2, comment: "More Firebase examples please.", author: "Oscar" },
      { id: 3, comment: "Nice writeup.", author: "Paul" },
      { id: 4, comment: "Loved how simple this was.", author: "Quinn" },
    ],
  },
];

export default { mockPost };
