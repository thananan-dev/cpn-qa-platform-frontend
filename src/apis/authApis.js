const mockUsers = [
  {
    firsName: "Admin",
    lastName: "Developer",
    username: "adminDev",
    email: "adminDev@mail.com",
    password: "1234",
  },
  {
    firsName: "Admin",
    lastName: "Tester",
    username: "adminTester",
    email: "adminTester@mail.com",
    password: "1234",
  },
];

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        resolve({
          status: 200,
          data: {
            user: {
              firstName: user.firsName,
              lastName: user.lastName,
              username: user.username,
              email: user.email,
            },
            token: "token",
          },
        });
      } else {
        reject(Error("Something went wrong. Please try again"));
      }
    }, 1000);
  });
};

const signup = (firstName, lastName, username, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user) => user.username === username || user.email === email
      );

      if (!user) {
        mockUsers.push({
          firstName,
          lastName,
          username,
          email,
          password,
        });

        resolve({
          status: 200,
          data: {
            user: {
              firstName,
              lastName,
              username,
              email,
            },
            token: "token",
          },
        });
      } else {
        reject(Error("Account already exists."));
      }
    }, 1000);
  });
};

export default { login, signup };
