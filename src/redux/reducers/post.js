import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from '../types'

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true,
  country: [
    'Аргентина',
    'Австралия',
    'Австрия',
    'Чили',
    'Франция',
    'Германия',
    'Италия',
    'Новая Зеландия',
    'Португалия',
    'Южная Африка',
    'Испания',
    'США',
  ],
  grade: [
    'ALBARINO',
    'GRUNER VELTLINER',
    'MUSCADET',
    'PINOT GRIS',
    'SAUVIGNON BLANC',
    'SOAVE',
    'VERMENTINO',
    'CHARDONNAY',
    'MARSANNE BLEND',
    'SEMILL0N',
    'VI0GNIER',
    'CHENIN BLANC',
    'GEWURZTRAVCR',
    'MUSCAT BLANC',
    'RIESLING',
    'T0RR0NTES',
    'ROSE',
    'CAMAY',
    'PINOT N0IR',
    'BARBERA',
    'CABERNET FRANC',
    'CARIGNAN',
    'CARMENERE',
    'GRENACHE',
    'MENCIA',
    'MERLOT',
    'MONTEPULCIANO',
    'NEGROAMARO',
    'RHONE/GSM BLEND',
    'SANGIOVESE',
    'VALPOLICELLA BLEND',
    'ZINFANDEL',
    'AGLIANICO',
    'BORDEAUX BLIND',
    'CABERNET SAUVIGNDN',
    'MALBEC',
    'MOURVEDRE',
    'NEBBIOLO',
    'NERO DAVOLA',
    'PETIT VERDOT',
    'PETIT SYRAH',
    'PINOTAGE',
    'SYRAH',
    'TEMPRANILLO',
    'TOURIGA NACIONAL',
    'MADEIRA',
    'MARSALA',
    'PORT',
    'SAUTERNES',
    'SHERRY',
    'VIN SANTO',
  ],
  tastes: [
    {
      title: 'яблоко',
      img: '../../assets/icon/apple.png',
    },
    {
      title: 'банан',
      img: '../../assets/icon/banana.png',
    },
    {
      title: 'черная смородина',
      img: '../../assets/icon/blackcurrant.png',
    },
    {
      title: 'дыня',
      img: '../../assets/icon/cantaloupe.png',
    },
    {
      title: 'вишня',
      img: '../../assets/icon/cherry.png',
    },
    {
      title: 'кокос',
      img: '../../assets/icon/coconut.png',
    },
    {
      title: 'лимон',
      img: '../../assets/icon/lemon.png',
    },
    {
      title: 'цитрус',
      img: '../../assets/icon/citrus.png',
    },
    {
      title: 'орехи',
      img: '../../assets/icon/macadamia-nut.png',
    },
    {
      title: 'манго',
      img: '../../assets/icon/mango.png',
    },
    {
      title: 'персик',
      img: '../../assets/icon/peach.png',
    },
    {
      title: 'груша',
      img: '../../assets/icon/pear.png',
    },
    {
      title: 'ананас',
      img: '../../assets/icon/pineapple.png',
    },
    {
      title: 'гранат',
      img: '../../assets/icon/pomegranate.png',
    },
    {
      title: 'малина',
      img: '../../assets/icon/raspberry.png',
    },
    {
      title: 'клубника',
      img: '../../assets/icon/strawberry.png',
    },
    {
      title: 'арбуз',
      img: '../../assets/icon/watermelon.png',
    },
  ],
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
        loading: false,
      }
    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked
        }
        return post
      })
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post) => post.booked),
      }
    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((p) => p.id !== action.payload),
        bookedPosts: state.bookedPosts.filter((p) => p.id !== action.payload),
      }
    case ADD_POST:
      return { ...state, allPosts: [{ ...action.payload }, ...state.allPosts] }
    default:
      return state
  }
}
