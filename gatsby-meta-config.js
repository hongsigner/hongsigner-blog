module.exports = {
  title: `hongsigner`,
  description: `브랜드 및 프로덕트 디자인을 하고 있는 홍민의 입니다.`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://hongsigner.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `hongsigner/hongsigner-blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-61B1PXRCSQ', // Google Analytics Tracking ID
  author: {
    name: `홍민의`,
    bio: {
      role: `디자이너`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hongsigner`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/%EB%AF%BC%EC%9D%98-%ED%99%8D-406b0b106/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `hongsigner@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '2022.11 ~ 2023.01',
        activity: '마켓닥터 웹사이트 및 앱 디자인',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: 'https://marketdoctor.ai',
        },
      },
        // ========================================================
      {
        date: '2022.06 ~',
        activity: '프롬나드에이아이에서 디자이너로써 먼치스킬(MunchSkill) SaaS를 만드는 중',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: 'https://munchskill.com',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2015.09 ~ 2022.06',
        activity: '제노플랜 코리아에서 디자이너로 근무',
        links: {
          post: '',
          github: '',
          demo: 'https://genoplan.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
