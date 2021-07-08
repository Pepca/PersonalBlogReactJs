// Media
import Img1 from '../../images/Posts/img1.jpg'
import Img2 from '../../images/Posts/img2.jpg'
import Video1 from '../../videos/Metal_Wind_Chimes_at_Sunset.mp4'
import poster_video1 from '../../images/Posts/video1.jpg'

export const DATA_POSTS = [
  {
    id: 1,
    media: {
      src: '',
      alt: ''
    },
    title: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: ''
  },
  {
    id: 2,
    media: {
      src: Img1,
      alt: Img1
    },
    title: 'Как писать код быстро и безболезненно?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: 'Создание сайтов'
  },
  {
    id: 3,
    media: {
      src: Video1,
      poster: poster_video1
    },
    title: 'Купил новый ноутбук за 150 000 руб',
    text: '',
    dateTime: '21.06.2020',
    tag: 'Продвижение видео'
  },
  {
    id: 4,
    media: {
      src: Img2,
      alt: Img2
    },
    title: 'Как я сходил на FrontEnd Conf 2021',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    dateTime: '21.06.2020',
    tag: 'Создание сайтов'
  }
]
