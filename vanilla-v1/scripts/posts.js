const posts = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    lights: 2166,
    imgUrl: "https://cdn.gamestatic.net/files/editor_uploads/%D0%9D/901621d288dfbe3157dd2f4602cf04b2.jpeg",
    text: 'Patch 1.1 for Cyberpunk 2077 is now available on PC, consoles and Stadia!%20In this update we focused on various stability improvements, which you can find outlined in the patch notes below. We will continue this work in patch 1.2 and other upcoming updates. At the same time we will keep fixing the bugs you encounter and listening to your feedback on how to improve the overall game experience.'
  },
  {
    id: 2,
    title: 'Messi vs Real Madrid',
    lights: 45001,
    imgUrl: "https://i.pinimg.com/originals/2a/bb/a2/2abba232c166c5d7458c56ed9ce1c0dc.jpg"
  },
  {
    id: 3,
    title: 'Aston Martin DBS 2018',
    lights: 17087,
    imgUrl: "https://s.auto.drom.ru/i24247/c/photos/fullsize/aston_martin/dbs/aston_martin_dbs_960838.jpg"
  },
]

const contentWrapper = document.querySelector('.content-wrapper')

posts.map((post) => {
  contentWrapper.innerHTML += 
  `
  <div class="content-wrapper__post" id=${post.id}>
    <div class="content-wrapper__post-header">
      <div class="content-wrapper__post-title">${post.title}</div>
        <div class="content-wrapper__post-activity">
          <span>${post.lights}</span>
          <img class="post-lightning" src="assets/icons/lightning.svg" alt="lightning">
        </div>
      </div>
    <div class="content-wrapper__post-img">
      <img class="post-img" src=${post.imgUrl} alt="">
    </div>
  </div>
  `
})



