// APIs
const myData = {
  id: 100,
  name: 'ttaeng_99',
  img: 'myprof.jpeg'
}

const feedData = [
  {
    id: 'feed1',
    profile: {img: 'prof.jpeg', name: 'canon_mj'},
    img: 'prague.jpeg',
    like: [['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina'], ['미나.png', 'mina_is_mina']],
    myComment: '프라하 가고싶다아아아아아아~~ 체코맥주 먹고싶다아아아~~~~ 야경 보고싶다아아아아아아~~~~~',
    follower: [
      {id: 201, name: 'canon_friend', comment: '나도 가고싶다~~~ *못된* 코로나~~', like: false},
      {id: 202, name: 'my_friend', comment: '인정하는 부분', like: false}
    ]
  },
  {
    id: 'feed2',
    profile: {img: 'jyp.jpg', name: 'its_JYP'},
    img: 'snowboard.jpg',
    like: [['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'], ['다현.png', 'tohu_dahyun'],],
    myComment: '겨울에 스키장을 못가다니이이이이이~~ 말도 안된다아앙아아~~~~~~~~',
    follower: [
      {id: 211, name: 'another_one', comment: '스키장은 곤지암이지', like: false},
      {id: 212, name: 'and_another_one', comment: '스키장은 피닉스파크지', like: false}
    ]
  },
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

export { myData, feedData, followersData };