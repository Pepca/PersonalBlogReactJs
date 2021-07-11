// Media
// POSTS
import Img1 from '../images/Posts/img1.jpg'
import Img2 from '../images/Posts/img2.jpg'
import Video1 from '../videos/Metal_Wind_Chimes_at_Sunset.mp4'
import poster_video1 from '../images/Posts/video1.jpg'

// STORIES
import Story1 from '../images/Stories/story01.png'
import Story2 from '../images/Stories/story02.png'
import Story3 from '../images/Stories/story03.png'
import Story4 from '../images/Stories/story04.png'

// Works
// Media
import works1 from '../images/Works/img1.jpg'
import works2 from '../images/Works/img2.jpg'

export const posts_API = [
  {
    id: 1,
    media: {
      src: '',
      alt: '',
    },
    title: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: '',
  },
  {
    id: 2,
    media: {
      src: Img1,
      alt: Img1,
    },
    title: 'Как писать код быстро и безболезненно?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: 'Создание сайтов',
  },
  {
    id: 3,
    media: {
      src: Video1,
      poster: poster_video1,
    },
    title: 'Купил новый ноутбук за 150 000 руб',
    text: '',
    dateTime: '21.06.2020',
    tag: 'Продвижение видео',
  },
  {
    id: 4,
    media: {
      src: Img2,
      alt: Img2,
    },
    title: 'Как я сходил на FrontEnd Conf 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: 'Создание сайтов',
  },
]

// STORIES
export const stories_API = [
  {
    id: 1,
    title: 'Отдыхаю на природе',
    img: {
      src: Story1,
      alt: 'Story1',
    },
    dateTime: '21.09.2020',
  },
  {
    id: 2,
    title: 'Заканчиваю сложный проект',
    img: {
      src: Story2,
      alt: 'Story2',
    },
    dateTime: '15.09.2020',
  },
  {
    id: 3,
    title: 'Переехал в новую квартиру',
    img: {
      src: Story3,
      alt: 'Story3',
    },
    dateTime: '11.09.2020',
  },
  {
    id: 4,
    title: 'Осень пришла!',
    img: {
      src: Story4,
      alt: 'Story4',
    },
    dateTime: '28.08.2020',
  },
]

// WORKS
export const works_API = [
  {
    id: 1,
    img: {
      src: works1,
      alt: works1,
    },
    title: 'altermono.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    tags: ['дизайн', 'создание сайта', 'SMM'],
    href: '/',
  },
  {
    id: 2,
    img: {
      src: works2,
      alt: works2,
    },
    title: 'codedoco.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.',
    tags: ['дизайн', 'создание сайта', 'SMM'],
    href: '/',
  },
]
