// APIs
const myData = {
  id: 100,
  name: 'ttaeng_99',
  img: 'myprof.jpeg'
}

const feedData = [
  {
    id: 'feed1',
    profile: ['prof.jpeg', 'canon_mj'],
    img: 'prague.png',
    like: [['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina']],
    myComment: '프라하 가고싶다아아아~~ 체코맥주 먹고싶다아아아~~~~ 야경 조지고싶다아아아아~~~~~ 체코 그것은 그저 진리~~~~~~',
    follower: [
      {id: 1, name: 'canon_friend', comment: '나도 가고싶다~~~ *못된* 코로나~~', like: false},
      {id: 2, name: 'my_friend', comment: '인정하는 부분', like: false}
    ]
  }
]

const followersData = [
  { id: 1, name: 'canon_mj', following: true},
  { id: 2, name: 'canon_friend', following: true},
  { id: 3, name: 'jeongyeon_love', following: true},
  { id: 4, name: 'sana_no_mossana', following: true},
  { id: 5, name: 'arrow_goddess', following: true},
  { id: 6, name: 'bunnybunny_nayeon', following: true},
  { id: 7, name: 'mina_is_mina', following: true},
  { id: 8, name: 'tohu_dahyun', following: false},
  { id: 9, name: 'momo_is_chulbuzi', following: false},
  { id: 10, name: 'jihyo_dieter', following: false},
] 

export { myData, feedData, followersData }

// // * Instagram 글씨 클릭이벤트
// const textLogo = document.querySelector('.text-logo');
// textLogo.addEventListener('mousedown', () => {textLogo.className = `text-logo focus`})

// // * 더 보기 구현
// const myCmt = document.querySelector('.my-comment');
// loadMyCmt();

// function loadMyCmt() {
//   const showingFeed = feedData[0];
//   myCmt.innerHTML = `
//     <strong class="my-comment-name">${showingFeed.profile[1]}</strong>
//     <span class="my-comment-text">
//       ${showingFeed.myComment.substr(0,18)}<span class="my-comment-dots">...</span><button class="my-comment-more">더 보기</button>
//     </span> 
//   `

//   const cmtText = document.querySelector('.my-comment-text');
//   const cmtMoreBtn = document.querySelector('.my-comment-more');
//   cmtMoreBtn.addEventListener('click', () => {
//     cmtText.innerText = `${showingFeed.myComment}`
//   })
// }



// // 4. [기본구현] 댓글 추가 구현
// const main = document.getElementById('main')
// const folCmtContainer = document.querySelector('.follower-comment-container')
// const cmtForm = document.querySelector('.comment-form')
// const cmtFormIpt = document.querySelector('.comment-form-input')
// const cmtFormBtn = document.querySelector('.comment-form-btn')
// const cmtLikeBtn = document.getElementsByClassName('follower-comment-like')

// updateComment(feedData[0].follower); 
// cmtFormIpt.addEventListener('input', (e) => e.target.value ? cmtFormBtn.classList.add('active') : cmtFormBtn.classList.remove('active'))
// cmtForm.addEventListener('submit', addComment)


// function addComment(e) {
//   e.preventDefault();
//   const feedFol = feedData[0].follower;
//   let newFol = {id: feedFol.length + 1, name: myData.name, comment: cmtFormIpt.value, like: false}
//   feedFol.push(newFol);
//   // console.log(feedFol);
//   cmtFormIpt.value = '';
//   cmtFormBtn.classList.remove('active');
//   updateComment(feedFol);
// }

// function updateComment(arr) {
//   folCmtContainer.innerHTML = '';
//   for (let i = 0 ; i < arr.length ; i++) {
//     const folCmtContent = document.createElement('div');
//     folCmtContent.className = `follower-comment-content content${arr[i].id}`;
//     folCmtContent.innerHTML = `
//     <div class="follower-comment-text">
//       <strong>${arr[i].name}</strong>
//       <span>${arr[i].comment}</span>
//     </div>
//     <button class="like-btn follower-comment-like ${arr[i].like && 'like'}">
//       <svg aria-label="좋아요" class="like-false" fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
//       <svg aria-label="좋아요 취소" class="like-true" fill="#ed4956" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
//     </button>`
//     folCmtContainer.appendChild(folCmtContent);
//   }
//   toggleCmtLike();
// }



// // 6. [추가구현] 댓글 좋아요 기능
// // const main = document.getElementById('main')  --  line 61
// const feedLikeBtn = document.querySelector('.btn-container-like');
// // const cmtLikeBtn = document.getElementsByClassName('follower-comment-like')  --  line 66
// const likeCounter = document.querySelector('.like-counter');

// countLike();
// feedLikeBtn.addEventListener('click', toggleFeedLike);

// function countLike() {
//   const showingFol = feedData[0].like;
//   likeCounter.innerHTML = `
//     <img src="./images/${showingFol[0][0]}" alt="like-first-img" class="like-first-img">
//     <strong class="like-name">${showingFol[0][1]}</strong>&nbsp님&nbsp<strong class="like-count">외 ${showingFol.length}명</strong>이 좋아합니다.
//   `
// }

// function toggleFeedLike() {   
//   const myProfile = [myData.img, myData.name]
//     if(!feedLikeBtn.classList.contains('like')) {
//       feedLikeBtn.classList.add('like')
//       feedData[0].like.unshift(myProfile)
//     } 
//     else {
//       feedLikeBtn.classList.remove('like')
//       feedData[0].like.shift(myProfile)
//     }
//   // console.log(feedData[0].like)
//   countLike();
// }

// function toggleCmtLike() {
//   for (let i=0 ; i<cmtLikeBtn.length ; i++) {
//     cmtLikeBtn[i].addEventListener('click', () => {
//       if (!cmtLikeBtn[i].classList.contains('like')) {
//         cmtLikeBtn[i].classList.add('like');
//         feedData[0].follower[i].like = true;         // !로 수정하려햇으나, 원본이 더 정교함
//       }
//       else {
//         cmtLikeBtn[i].classList.remove('like');
//         feedData[0].follower[i].like = false;
//       }
//       // console.log(feedData[0].follower[i].like);
//     })
//   }
// }



// // 7. [추가구현] ID 검색 기능
// const navSrch = document.querySelector('.nav-search')
// const navSrchInput = document.querySelector('.nav-search-input');
// const navSrchPhdr = document.querySelector('.nav-search-phdr');
// const navSrchEndBtn = document.querySelector('.nav-search-endbtn');
// const srchIdCon = document.querySelector('.search-id-container');

// navSrchPhdr.addEventListener('click', focusOnInput);
// navSrchEndBtn.addEventListener('click', focusOutInput);
// main.addEventListener('click', focusOutInput);
// navSrchInput.addEventListener('input', inputIdSearch);

// function focusOnInput() {
//   navSrch.classList.add('focus');
//   navSrchInput.focus();
// }

// function focusOutInput() {
//   navSrch.classList.remove('focus');
//   navSrchInput.value = '';
//   srchIdCon.classList.remove('show');
// }

// function inputIdSearch() {
//   let idValue = navSrchInput.value.trim();
//   if (idValue) {
//     if (!srchIdCon.classList.contains('show')) {
//       srchIdCon.classList.add('show')
//     };
//     srchIdCon.innerHTML = '';
//     let filteredFollower = followersData.filter(ele => ele['name'].includes(navSrchInput.value));
//     filteredFollower.map((ele) => {
//       const searchId = document.createElement('div');
//       searchId.className = `search-id name-${ele.name}`
//       searchId.innerHTML = `
//       <div class="search-id-left">
//         <strong class="search-id-name">${ele.name}</strong>
//         <p class="search-id-desc">설명입니다.</p>
//       </div>
//       <button class="search-id-btn">${ele.following ? '프로필' : '팔로우'}</button>
//       `
//       srchIdCon.appendChild(searchId);
//     })
//   }
//   else {
//     srchIdCon.classList.remove('show');
//   }
// };



// // 8. [추가구현] nav 프로필 사진 클릭시 메뉴박스 생성
// const profMenu = document.querySelector('.nav-menu-profile');
// profMenu.addEventListener('click', () => profMenu.classList.toggle('show'));