// Add yourself. Insert an object at any point - it doesn't matter if you go before someone else as results are randomized.
const pages = [
  {
    name: 'Wes Bos',
    // Short description
    description: 'Web Developer, Tutorial Maker, Podcaster, BBQ Lover',
    // URL to your /uses page
    url: 'https://wesbos.com/uses',
    twitter: '@wesbos',
    // An emoji that describes you
    emoji: '🔥',
    // emoji of your country's flag
    country: '🇨🇦',
    // apple, windows or linux
    computer: 'apple',
    // iphone or android
    phone: 'iphone',
    // Tags
    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript...
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'YouTuber',
      'JavaScript',
    ],
  },
  {
    name: 'Troy Forster',
    description: 'Consulting Technology Director and CTO for Hire',
    url: 'https://tforster.com/uses',
    twitter: '@tforster',
    emoji: '',
    country: '🇨🇦',
    computer: 'windows',
    phone: 'android',
    tags: [
      'Engineer',
      'Back End',
      'Front End',
      'Consultant',
      'Entrepreneur',
      'JavaScript',
      'C#',
      'PHP',
      'Serverless',
      'SOA',
      'Enterprise',
    ],
  },
  {
    name: 'Kent C. Dodds',
    description: 'JavaScript Software Engineer, speaker, and trainer',
    url: 'https://kentcdodds.com/uses',
    emoji: '🙌',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'android',
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'YouTuber',
      'JavaScript',
      'Testing',
      'React',
      'Speaker',
      'Blogger',
    ],
  },
  {
    name: 'Glenn Reyes',
    description:
      'Independent Software Engineer, trainer & speaker. Into sports & music.',
    url: 'https://glennreyes.com/uses',
    twitter: '@glnnrys',
    emoji: '💃',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Front End',
      'Entrepreneur',
      'Teacher',
      'JavaScript',
      'React',
      'GraphQL',
      'TypeScript',
      'Speaker',
    ],
  },
  {
    name: 'Adam Jahnke',
    description:
      'Caffiend, motorcyclist, climber, recovering perfectionist. I love to make the complex simple.',
    url: 'https://adamyonk.com/uses',
    emoji: '⤫',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Engineer', 'Full Stack', 'JavaScript', 'Ruby'],
  },
  {
    name: 'Andrew Healey',
    description: 'Software Engineer, Writer, Learner!',
    url: 'https://healeycodes.com/uses',
    emoji: '🦉',
    country: '🇬🇧',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Software Engineer', 'Full Stack', 'JavaScript', 'Python', 'Writer'],
  },
  {
    name: 'Scott Tolinski',
    description: 'Web Developer, Tutorial Maker, Podcaster, Bboy',
    url: 'https://kit.com/leveluptutorials/podcasting-screencasting-gear',
    emoji: '💪🏻',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'FrontEnd', 'Entrepreneur', 'Teacher', 'JavaScript'],
  },
  {
    name: 'Josiah Wiebe',
    description: 'Designer & developer, lifelong learner.',
    url: 'https://jwie.be/uses/',
    emoji: '🚴',
    country: '🇨🇦',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Full Stack',
      'Developer',
      'Designer',
      'Python',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    name: 'Benjamin Lannon',
    description: 'Web Developer, Open Source Contributor, Livestreamer',
    url: 'https://lannonbr.com/uses/',
    emoji: '🎤',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'Blogger',
      'Teacher',
      'JavaScript',
      'GraphQL',
    ],
  },
  {
    name: 'Nuno Maduro',
    description: 'Software engineer, Open Source contributor, Speaker',
    url: 'https://nunomaduro.com/uses/',
    emoji: '🏄‍♂️',
    country: '🇵🇹',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Engineer',
      'Developer',
      'Speaker',
      'PHP',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    name: 'Adrian Marin',
    description:
      'Product-Minded Software Engineer, Digital nomad, no-nonsense enjoyer of life, friends and family.',
    url: 'https://adrianthedev.com/uses',
    twitter: '@adrianthedev',
    emoji: '🥑',
    country: '🇷🇴',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Full Stack', 'Entrepreneur', 'Rails', 'TypeScript'],
  },
  {
    name: 'Jahir Fiquitiva',
    description: 'Passionate and Creative Full Stack Developer',
    url: 'https://jahir.dev/uses',
    twitter: '@jahirfiquitiva',
    emoji: '💎',
    country: '🇨🇴',
    computer: 'apple',
    phone: 'iphone',
    tags: [
      'Developer',
      'Full Stack',
      'JavaScript',
      'Kotlin',
      'Python',
      'Kotlin',
      'React',
    ],
  },
  {
    name: 'Brad Garropy',
    description:
      'Self taught frontender at Adobe, into lifting and country music.',
    url: 'https://bradgarropy.com/uses',
    twitter: '@bradgarropy',
    emoji: '🤠',
    country: '🇺🇸',
    computer: 'windows',
    phone: 'android',
    tags: [
      'Developer',
      'Front End',
      'Full Stack',
      'Streamer',
      'YouTuber',
      'Blogger',
      'JavaScript',
      'Python',
    ],
  },
  {
    name: 'Josh Barker',
    description:
      'Front end engineer at Red Ventures. Soccer enthusiast. Lover of stories.',
    url: 'https://joshuabarker.com/uses',
    twitter: '@joshuafbarker',
    emoji: '⚽️',
    country: '🇺🇸',
    computer: 'apple',
    phone: 'iphone',
    tags: ['Developer', 'Front End', 'JavaScript'],
  },
  {
    name: 'Aaron Dunphy',
    // Short description
    description: 'Full Stack Developer, Coffee Lover and Photo Taker',
    // URL to your /uses page
    url: 'https://aarondunphy.com/uses',
    twitter: '@aaronjohndunphy',
    // An emoji that describes you
    emoji: '📷',
    // emoji of your country's flag
    country: '🇬🇧🇦',
    // apple, windows or linux
    computer: 'apple',
    // iphone or android
    phone: 'iphone',
    // Tags
    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript...
    tags: [
      'Developer',
      'Full Stack',
      'Back End',
      'Laravel',
      'PHP',
      'JavaScript',
    ],
  },
   {
    name: 'Mohamed Benhida',
    // Short description
    description: 'Web Developer, Open source contributor.',
    // URL to your /uses page
    url: 'http://mohamedbenhida.com/uses',
    twitter: '@simo_benhida',
    // An emoji that describes you
    emoji: '🔥',
    // emoji of your country's flag
    country: '🇲🇦',
    // apple, windows or linux
    computer: 'apple',
    // iphone or android
    phone: 'iphone',
    // Tags
    // Dev Tags: Engineer, Developer, Designer, Front End, Back End, Full Stack,
    // Other: Tags: Entrepreneur, Teacher, Podcaster, YouTuber, Blogger, Speaker,
    // Language Tags: JavaScript, PHP, Rails, Ruby, TypeScript...
    tags: [
      'Developer',
      'Full Stack',
      'Entrepreneur',
      'Teacher',
      'Back End',
      'Laravel',
      'Vuejs',
      'Tailwindcss',
      'PHP',
      'JavaScript',
    ],
  },
];

export default pages;
