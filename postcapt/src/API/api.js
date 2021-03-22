const UserAPI = {
  signup({ firstName, lastName, email, password }) {
    return fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    }).then((res) => res.json());
  },
  signin({ email, password }) {
    return fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  },
};

export default UserAPI;
