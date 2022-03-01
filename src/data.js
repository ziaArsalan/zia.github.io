import portfolio from "./img/portfolio.png"
import snapthathome from "./img/snapthathome.png"
import rently from "./img/rently.png"
import zaraebrahim from "./img/zara-ebrahim.png"
import codingschool from "./img/codingschool.png"
import beasty from "./img/beasty.png"
import monsterhub from "./img/monsterhub.png"
import zod from "./img/zod.png"
import walletly from "./img/walletly.png"

import Adeel from "./img/adeel.jpeg"
import Hoogsteder from "./img/hoogsteder.jpeg"
import Rupert from "./img/rupert.jpeg"
import Brams from "./img/bram.jpeg"
import Jose from "./img/jose.jpeg"

export const products = [
  {
    id: 1,
    img: portfolio,
    link: "https://ziaarsalan.github.io",
  },
  {
    id: 2,
    img: snapthathome,
    link: "https://snapthathome.com.au/",
  },
  {
    id: 3,
    img: rently,
    link: "https://www.rently.pk/",
  },
  {
    id: 4,
    img: zaraebrahim,
    link: "https://zahraebrahim.com/",
  },
  {
    id: 5,
    img: codingschool,
    link: "https://the-cs.org/",
  },
  {
    id: 6,
    img: beasty,
    link: "https://beasty.app/",
  },
  {
    id: 7,
    img: monsterhub,
    link: "https://monsterhub.io/",
  },
  {
    id: 8,
    img: zod,
    link: "https://zod.media/",
  },
  {
    id: 9,
    img: walletly,
    link: "https://walletly.ai/",
  },
]

export const reviews = [
  {
    name    : 'Adeel Khan (CEO Monsterhub)',
    avatar  : Adeel,
    link    : 'https://www.facebook.com/adeel.khan2',
    reviews : [
      {
        review : 'Zia you have made an international coverrage',
        date   : 'feb, 2020'
      },
      {
        review : 'Zia is our integration specialist',
        date   : 'Sep, 2020'
      }
    ]
  },
  {
    name    : 'Rupert Samuel (Entrepreneur)',
    avatar  : Rupert,
    link    : 'https://www.facebook.com/Rupertsamuelbook',
    reviews : [
      {
        review : 'Meet Zia, He is top developer for walletly',
        date   : 'Aug, 2019'
      },
      {
        review : 'Zia Arsalan Welldone on walletscan api with manychat',
        date   : 'Mar, 2020'
      }
    ]
  },
  {
    name    : 'Hoogsteder Dominique',
    avatar  : Hoogsteder,
    link    : 'https://www.facebook.com/dhoogst',
    reviews : [
      {
        review : 'Great work Zia Arsalan, Maybe we can make an appointment together?',
        date   : 'Jun, 2020'
      },
      {
        review : 'I need your expertise to create an unique template with loyalty points.',
        date   : 'Jun, 2020'
      }
    ]
  },
  {
    name    : 'Bram Lamens',
    avatar  : Brams,
    link    : 'https://www.facebook.com/pixelclass',
    reviews : [
      {
        review : 'Great work guys',
        date   : 'Jun, 2020'
      }
    ]
  },
  {
    name    : 'Jose Luis Nieto',
    avatar  : Jose,
    link    : 'https://www.facebook.com/joseluis.nietor',
    reviews : [
      {
        review : 'Congratulations, you have done it without Interogromat. You are a crack !!',
        date   : 'Jul, 2020'
      }
    ]
  }
]

export const social = [
  {
      name : 'github',
      link : 'https://github.com/ziaarsalan',
      icon : 'fa6-brands:github-square'
  },
  {
      name : 'email',
      link : 'mailto:ziaarsalan94@yahoo.com',
      icon : 'ic:round-email'
  },
  {
      name : 'whatsapp',
      link : 'https://wa.me/+923475214748',
      icon : 'fa6-brands:whatsapp-square'
  },
  {
      name : 'linkedin',
      link : 'https://www.linkedin.com/in/ziaarsalan/',
      icon : 'fa6-brands:linkedin'
  },
  {
      name : 'facebook',
      link : 'https://www.facebook.com/zia.arsalan',
      icon : 'fa6-brands:facebook-square'
  },
  {
      name : 'upwork',
      link : 'https://www.upwork.com/freelancers/~0178899ba493a3f67a',
      icon : 'simple-icons:upwork'
  }
]

export const technologies = {
  forntend: [
    {
        name: 'html5',
        icon: 'fa6-brands:html5'
    },
    {
        name: 'css3',
        icon: 'fa6-brands:css3'
    },
    {
        name: 'sass',
        icon: 'mdi:sass'
    },
    {
        name: 'javascript',
        icon: 'mdi:language-javascript'
    },
    {
        name: 'angular',
        icon: 'fa6-brands:angular'
    },
    {
        name: 'react',
        icon: 'fa6-brands:react'
    }
  ],
  backend: [
    {
        name: 'node',
        icon: 'fa6-brands:node-js'
    },
    {
      name: 'php',
      icon: 'fa6-brands:php'
    },
    {
      name: 'python',
      icon: 'fa6-brands:python'
    }
  ],
  database: [
    {
        name: 'firebase',
        icon: 'mdi:firebase'
    },
    {
        name: 'mongodb',
        icon: 'cib:mongodb'
    }
  ],
  server: [
    {
        name: 'amazon',
        icon: 'cib:amazon-aws'
    },
    {
        name: 'ubuntu',
        icon: 'fa6-brands:ubuntu'
    },
    {
        name: 'nginx',
        icon: 'simple-icons:nginx'
    },
    {
        name: 'docker',
        icon: 'fa6-brands:docker'
    },
    {
        name: 'jenkins',
        icon: 'fa6-brands:jenkins'
    }
  ],
  other: [
    {
        name: 'package manager',
        icon: 'fa6-brands:npm'
    },
    {
        name: 'git',
        icon: 'fa6-brands:git-alt'
    },
    {
        name: 'bitbucket',
        icon: 'fa6-brands:bitbucket'
    },
    {
        name: 'chatbots',
        icon: 'mdi:robot'
    }
  ]
}