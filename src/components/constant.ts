type tagType = 'intro' | 'service' | 'recurit' | 'customer'

export interface ListParams {
  title: string
  link: string
}

export interface NavItemsParams {
  id: number
  tag: tagType
  title: string
  path: string
  cName: string
  isDropDown: boolean
  downList?: ListParams[]
}
export const NAV_ITEMS: NavItemsParams[] = [
  {
    id: 1,
    tag: 'intro',
    title: '회사소개',
    path: '/about',
    cName: 'nav-item',
    isDropDown: false,
  },
  {
    id: 2,
    tag: 'service',
    title: '서비스소개',
    path: '/service',
    cName: 'nav-item',
    isDropDown: true,
    downList: [
      {
        title: '물류',
        link: '/service',
      },
      {
        title: '유통',
        link: '/service',
      },
      {
        title: '프렌차이즈',
        link: '/service',
      },
      {
        title: '보험',
        link: '/service',
      },
    ],
  },
  {
    id: 3,
    tag: 'recurit',
    title: '인재채용',
    path: '/recruit',
    cName: 'nav-item',
    isDropDown: false,
  },
  {
    id: 4,
    tag: 'customer',
    title: '고객지원',
    path: '/support',
    cName: 'nav-item',
    isDropDown: true,
    downList: [
      {
        title: '공지사항',
        link: '/support',
      },
      {
        title: '팀프뉴스',
        link: '/support',
      },
      {
        title: '문의하기',
        link: '/support',
      },
      {
        title: '자주 묻는 질문',
        link: '/support',
      },
    ],
  },
]

export const SERVICE_DROP_DOWN = [
  {
    id: 1,
    title: '물류',
    path: '/src/Pages/SubMenu/Distribute.tsx',
    cName: 'submenu-item',
  },
  {
    id: 2,
    title: '유통',
    path: '/src/Pages/SubMenu/Distribute/Circulation',
    cName: 'submenu-item',
  },
  {
    id: 3,
    title: '프렌차이즈',
    path: '/src/Pages/SubMenu/Distribute/Franchise',
    cName: 'submenu-item',
  },
  {
    id: 4,
    title: '보험',
    path: '/src/Pages/SubMenu/Distribute/Insurance',
    cName: 'submenu-item',
  },
]

export const CUSTOMER_DROP_DOWN = [
  {
    id: 1,
    title: '공지사항',
    path: '/src/Pages/SubMenu/Notice',
    cName: 'submenu-item',
  },
  {
    id: 2,
    title: '팀프뉴스',
    path: '/src/Pages/SubMenu/News',
    cName: 'submenu-item',
  },
  {
    id: 3,
    title: '문의하기',
    path: '/src/Pages/SubMenu/Cs',
    cName: 'submenu-item',
  },
  {
    id: 4,
    title: '자주 묻는 질문',
    path: 'src/Pages/SubMenu/Faq',
    cName: 'submenu-item',
  },
]

export const DATA_SLIDER = [
  {
    id: 1,
    srcImg: '/images/Img1.jpeg',
    alt: '첫번째 슬라이드',
  },
  {
    id: 2,
    srcImg: '/images/Img2.jpeg',
    alt: '두번째 슬라이드',
  },
  {
    id: 3,
    srcImg: '/images/Img3.jpeg',
    alt: '세번째 슬라이드',
  },
]
export interface MainLinkParams {
  id: number
  src: string
}

export const LINK_LIST: MainLinkParams[] = [
  {
    id: 1,
    src: '/images/main_linkimg01.png',
  },
  {
    id: 2,
    src: '/images/main_linkimg02.png',
  },
  {
    id: 3,
    src: '/images/main_linkimg03.png',
  },
]

export interface FooterContentsParams {
  id: number
  content: string
}

export const FOOTER_INFO: FooterContentsParams[] = [
  {
    id: 1,
    content: '(주)팀프레시',
  },
  {
    id: 2,
    content: '사업자번호 561-88-01138',
  },
  {
    id: 3,
    content: '대표 이성일',
  },
  {
    id: 4,
    content: '서울특별시 송파구 위례성대로 12길 15-1',
  },
  {
    id: 5,
    content: '전화 02-423-0525',
  },
  {
    id: 6,
    content: '팩스 02-3432-0525',
  },
  {
    id: 7,
    content: '메일 info@timf.co.kr',
  },
  {
    id: 8,
    content: '영업 및 제휴 문의 sales@timf.co.kr',
  },
]

export interface IntroductionParams {
  id: number
  content: string
  path: string
  thumbnailImg: string
  smallImg: string
  title: string
  subtitle: string
}

export const SERVICE_INTRODUCTION: IntroductionParams[] = [
  {
    id: 0,
    content: '물류',
    path: '/distribute',
    smallImg: '/images/movie_icon03.png',
    thumbnailImg: '/images/thumb01.png',
    title: '상품의 관리,<br>보관부터 배송까지<br>완벽하게',
    subtitle:
      '이커머스 운영에 최적화된 풀필먼트 센터와<br>새벽배송망을 보유한 팀프레시의<br>이커머스 전문 물류 서비스를 제공받으세요.',
  },
  {
    id: 1,
    content: '유통',
    path: '/circulate',
    smallImg: '/images/movie_icon04.png',
    thumbnailImg: '/images/thumb02.png',
    title: '식자재 제안,<br>업장 운영 형태에 맞는<br>최적의 형태로',
    subtitle:
      '주기적인 단가 관리 시스템을 통해<br>합리적인 가격의 상품을 제공하고,<br>자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.',
  },
  {
    id: 2,
    content: '프랜차이즈',
    path: '/franchise',
    smallImg: '/images/movie_icon06.png',
    thumbnailImg: '/images/thumb03.png',
    title: '외식 창업,<br>적은 자본으로<br>빠르고 간편하게',
    subtitle:
      '외식 전문 브랜드 팀프에프앤비가<br>소형, 소자본으로도 쉽고 편리하게<br>점포를 운영할 수 있도록<br>가맹 패키지를 제안해드립니다.',
  },
  {
    id: 3,
    content: '유통',
    path: '/insurance',
    smallImg: '/images/movie_icon07.png',
    thumbnailImg: '/images/thumb04.png',
    title: '기업 대상 전문 보험,<br>상해보험부터 재산종합보험까지<br>똑똑하게',
    subtitle:
      '기업 전문 보험 GA와 만나<br>팀프인슈어런스가 탄생했습니다.<br>기업 맞춤형, 최적의 보험 상품을 추천받아보세요.',
  },
]

export interface MovieImageParams {
  id: number
  src: string
  content: string
}

export const MOVIE_IMAGE: MovieImageParams[] = [
  {
    id: 0,
    src: '/images/movie_icon01.png',
    content: '새벽배송',
  },
  {
    id: 1,
    src: '/images/movie_icon02.png',
    content: '보관',
  },
  {
    id: 2,
    src: '/images/movie_icon03.png',
    content: '출고',
  },
  {
    id: 3,
    src: '/images/movie_icon04.png',
    content: '화물주선',
  },
  {
    id: 4,
    src: '/images/movie_icon05.png',
    content: '식자재 유통',
  },
  {
    id: 5,
    src: '/images/movie_icon06.png',
    content: '프랜차이즈',
  },
  {
    id: 6,
    src: '/images/movie_icon07.png',
    content: '보험',
  },
  {
    id: 7,
    src: '/images/movie_icon08.png',
    content: '고객',
  },
]

export interface PointImageParams {
  id: number
  src: string
  title: string
  content: string
}

export const POINT_IMAGE: PointImageParams[] = [
  {
    id: 0,
    src: '/images/pointimg01.png',
    title: '특허 보유 TMS',
    content:
      '새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템 * TMS : Transportation Management System',
  },
  {
    id: 1,
    src: '/images/pointimg02.png',
    title: '국내 1위 새벽배송',
    content: '대한민국 1위 안정된 새벽배송망 구축',
  },
  {
    id: 2,
    src: '/images/pointimg03.png',
    title: '24시간 관제',
    content: '24시간 현장 관제를 통해 상품을 안전하게 배송 완료',
  },
  {
    id: 3,
    src: '/images/pointimg04.png',
    title: '라이선스 보유 차량망',
    content: '합법적으로 허가 받은 차량만을 섭외해 운영',
  },
]

export interface LocationParams {
  id: number
  title: string
  subTitle: string
}

export const KaKaoMapTitle: LocationParams[] = [
  {
    id: 0,
    title: '본사',
    subTitle:
      '새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템 * TMS : Transportation Management System',
  },
  {
    id: 1,
    title: '통과형 물류센터',
    subTitle: '대한민국 1위 안정된 새벽배송망 구축',
  },
  {
    id: 2,
    title: '허브 물류센터',
    subTitle: '24시간 현장 관제를 통해 상품을 안전하게 배송 완료',
  },
  {
    id: 3,
    title: '보관물류센터',
    subTitle: '합법적으로 허가 받은 차량만을 섭외해 운영',
  },
]
