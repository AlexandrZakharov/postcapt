const SIGNIN = 'SIGNIN';
const SIGNOUT =  'SIGNOUT';

const initialState = {
  id: 1,
  fName: "Alexandr",
  lName: "Zakharov",
  email: "alex.zakharov2802@gmail.com",
  avatarUrl:
    "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg",
};

const users = (state = initialState, action) => {
  switch(action.type) {
    case SIGNIN: 
      return action.user
    case SIGNOUT: 
      return null;
    default:
      return state;
  }
};
