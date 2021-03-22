import convertDate from '../../scripts/convertDate';

const ADD_COMMENT = "POST-COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const ADD_LIKE = "ADD-LIKE";
const REMOVE_LIKE = "REMOVE-LIKE";

const initialState = [
  {
    id: 1,
    date: "23.02.2021",
    imgUrl: "https://images5.alphacoders.com/927/thumb-1920-927025.png",
    title: "HOTFIX #7",
    text: `We are committed to fixing bugs and crashes and will continue to
    work and improve the game via future updates to make sure you are
    enjoying the game regardless of the platform. <br />
    <br /> We will use this space to inform you about the progress being
    made on Cyberpunk 2077’s further development, including information
    about updates and improvements, free DLCs, and more. <br />
    <br /> Below, you’ll find CD PROJEKT’s co-founder’s personal
    explanation of what the days leading up to the launch of Cyberpunk
    2077 looked like, sharing the studio’s perspective on what happened
    with the game on old-generation consoles.`,
    views: 26140,
    likesCount: 970,
    isLiked: false,
    comments: {
      count: 2,
      payload: [
        {
          id: 1,
          date: "23 feb 19:02",
          avatarUrl:
            "https://static01.nyt.com/images/2021/01/19/sports/00ufc-mcgregor/00ufc-mcgregor-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          name: `Conor McGregor`,
          text: `Good job guys!`,
          likesCount: 10,
        },
        {
          id: 2,
          date: "23 feb 21:34",
          avatarUrl:
            "https://www.afisha.uz/ui/materials/2020/01/0727757_b.jpeg",
          name: `Marshall Mathers`,
          text: `Uh, summa-lumma, dooma-lumma, you assumin' I'm a human.
          What I gotta do to get it through to you I'm superhuman?`,
          likesCount: 8,
        },
      ],
    },
  },
  {
    id: 2,
    date: "24.02.2021",
    imgUrl:
      "https://cdn.gamestatic.net/files/editor_uploads/%D0%9D/901621d288dfbe3157dd2f4602cf04b2.jpeg",
    title: "HOTFIX #8",
    text: `We are committed to fixing bugs and crashes and will continue to
    work and improve the game via future updates to make sure you are
    enjoying the game regardless of the platform. <br />
    <br /> We will use this space to inform you about the progress being
    made on Cyberpunk 2077’s further development, including information
    about updates and improvements, free DLCs, and more. <br />
    <br /> Below, you’ll find CD PROJEKT’s co-founder’s personal
    explanation of what the days leading up to the launch of Cyberpunk
    2077 looked like, sharing the studio’s perspective on what happened
    with the game on old-generation consoles.`,
    views: 32009,
    likesCount: 1250,
    isLiked: false,
    comments: {
      count: 2,
      payload: [
        {
          id: 1,
          date: "24 feb 21:35",
          avatarUrl:
            "https://static01.nyt.com/images/2021/01/19/sports/00ufc-mcgregor/00ufc-mcgregor-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          name: `Conor McGregor`,
          text: `Just a comment`,
          likesCount: 10,
        },
        {
          id: 2,
          date: "24 feb 22:04",
          avatarUrl:
            "https://www.afisha.uz/ui/materials/2020/01/0727757_b.jpeg",
          name: `Marshall Mathers`,
          text: `Uh, summa-lumma, dooma-lumma, you assumin' I'm a human.
          What I gotta do to get it through to you I'm superhuman?`,
          likesCount: 8,
        },
      ],
    },
  },
];

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state.map((post) => {
          if (post.id === action.postId) {
            return {
              ...post,
              comments: {
                count: ++post.comments.count,
                payload: [
                  ...post.comments.payload,
                  {
                    id: post.comments.count,
                    date: convertDate(new Date()),
                    avatarUrl:
                      "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg",
                    name: `Alexandr Zakharov`,
                    text: `${action.text}`,
                    likesCount: 0,
                  },
                ],
              },
            };
          } else return post;
        }),
      ];
    case REMOVE_COMMENT:
      return state;
    case ADD_LIKE:
      return [
        ...state.map((post) => {
          if (post.id === action.postId) {
            return {
              ...post,
              likesCount: ++post.likesCount,
              isLiked: true,
            };
          } else return post;
        }),
      ];
    case REMOVE_LIKE:
      return [
        ...state.map((post) => {
          if (post.id === action.postId) {
            return {
              ...post,
              likesCount: --post.likesCount,
              isLiked: false,
            };
          } else return post;
        }),
      ];
    default:
      return state;
  }
};

// ACTION CREATORS
export const addComment = (postId, text) => {
  return {
    type: ADD_COMMENT,
    postId: postId,
    text: text,
  };
};

export const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId: postId,
    commentId: commentId,
  };
};

export const addLike = (postId) => {
  return {
    type: ADD_LIKE,
    postId: postId,
  };
};

export const removeLike = (postId) => {
  return {
    type: REMOVE_LIKE,
    postId: postId,
  };
};

export default posts;
