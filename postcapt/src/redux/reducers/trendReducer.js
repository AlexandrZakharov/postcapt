const initialState = {
  trendPostsList: [
    {
      id: 1,
      title: "Cyberpunk 2077",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis necessitatibus, officiis nam placeat beatae aperiam voluptatibus, illo perferendis quis at quo, culpa exercitationem ea tempore saepe harum molestiae! Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at sunt illo quis, dicta modi illum, exercitationem voluptates nobis nesciunt quam! Debitis aliquid corrupti repellendus officiis odit animi veritatis pariatur. Eligendi ipsa esse recusandae repudiandae quisquam et id, laborum qui consequuntur numquam unde doloremque eos maiores eveniet. Assumenda amet dolor, accusamus nostrum at veniam velit blanditiis, earum, tempora corporis esse! Id ducimus culpa sequi magnam tenetur ipsam provident fuga eum neque at unde dolorum maiores blanditiis voluptate laboriosam architecto quibusdam laborum cum iusto non, modi nesciunt est. Magnam, saepe quaerat!",
      img:
        "https://cdn.gamestatic.net/files/editor_uploads/%D0%9D/901621d288dfbe3157dd2f4602cf04b2.jpeg",
      comments: "Comment",
    },
    {
      id: 2,
      title: "Aston Martin DBS 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis necessitatibus, officiis nam placeat beatae aperiam voluptatibus, illo perferendis quis at quo, culpa exercitationem ea tempore saepe harum molestiae! Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at sunt illo quis, dicta modi illum, exercitationem voluptates nobis nesciunt quam! Debitis aliquid corrupti repellendus officiis odit animi veritatis pariatur. Eligendi ipsa esse recusandae repudiandae quisquam et id, laborum qui consequuntur numquam unde doloremque eos maiores eveniet. Assumenda amet dolor, accusamus nostrum at veniam velit blanditiis, earum, tempora corporis esse! Id ducimus culpa sequi magnam tenetur ipsam provident fuga eum neque at unde dolorum maiores blanditiis voluptate laboriosam architecto quibusdam laborum cum iusto non, modi nesciunt est. Magnam, saepe quaerat!",
      img:
        "https://s.auto.drom.ru/i24247/c/photos/fullsize/aston_martin/dbs/aston_martin_dbs_960838.jpg",
      comments: "Comment",
    },
    {
      id: 3,
      title: "Messi vs Real Madrid",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis necessitatibus, officiis nam placeat beatae aperiam voluptatibus, illo perferendis quis at quo, culpa exercitationem ea tempore saepe harum molestiae! Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at sunt illo quis, dicta modi illum, exercitationem voluptates nobis nesciunt quam! Debitis aliquid corrupti repellendus officiis odit animi veritatis pariatur. Eligendi ipsa esse recusandae repudiandae quisquam et id, laborum qui consequuntur numquam unde doloremque eos maiores eveniet. Assumenda amet dolor, accusamus nostrum at veniam velit blanditiis, earum, tempora corporis esse! Id ducimus culpa sequi magnam tenetur ipsam provident fuga eum neque at unde dolorum maiores blanditiis voluptate laboriosam architecto quibusdam laborum cum iusto non, modi nesciunt est. Magnam, saepe quaerat!",
      img:
        "https://i.pinimg.com/originals/2a/bb/a2/2abba232c166c5d7458c56ed9ce1c0dc.jpg",
      comments: "Comment",
    },
    {
      id: 4,
      title: "Aventon Mataro 2018",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veritatis necessitatibus, officiis nam placeat beatae aperiam voluptatibus, illo perferendis quis at quo, culpa exercitationem ea tempore saepe harum molestiae! Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at sunt illo quis, dicta modi illum, exercitationem voluptates nobis nesciunt quam! Debitis aliquid corrupti repellendus officiis odit animi veritatis pariatur. Eligendi ipsa esse recusandae repudiandae quisquam et id, laborum qui consequuntur numquam unde doloremque eos maiores eveniet. Assumenda amet dolor, accusamus nostrum at veniam velit blanditiis, earum, tempora corporis esse! Id ducimus culpa sequi magnam tenetur ipsam provident fuga eum neque at unde dolorum maiores blanditiis voluptate laboriosam architecto quibusdam laborum cum iusto non, modi nesciunt est. Magnam, saepe quaerat!",
      img: "https://i.ytimg.com/vi/_VVMLLNkVf4/maxresdefault.jpg",
      comments: "Comment",
    },
  ],
  postWidth: 1000,
  postMarginRight: 160,
};

export const trendReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default trendReducer;
