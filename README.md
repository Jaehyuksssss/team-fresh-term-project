Team fresh 사이트를 클론한 프로젝트

- 원본 사이트 : [팀프레시](https://www.teamfresh.co.kr/)
- 개발 인원 : 1인 (임재혁)
- 구현 페이지 : Home , 회사소개 , service 페이지
- 그 외에는 empty 문구로 처리 (recruit , support 페이지)

## 실행 방법

```
npm install
npm start

//.env파일을 만들어 PORT=17481를 추가해주세요
```

## 구현사항

### HOME , SERVICE PAGE , ABOUT PAGE-지도

1. Home - Slider , Service Introduction , 핵심역량
2. Service - 배송가능지역 조회
3. About - kakao api 를 통한 지도 구현

## Layout

- 반복되는 `헤더, 바디, 푸터` 템플릿화
- components/templates/Layout

* Team-fresh Homepage를 참고하여 , API로 부터 다음과 같은 정보를 받을 수 있다고 가정, mock 데이터를 만들어 작업( constant.ts)

```jsx
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
]
...

```

### 3. slider 생성

1. Slider의 index와 button의 인덱스가 맞으면 스타일을 주어 활성화가 되게 함.
2. setInterval 함수로 2초마다 슬라이더 화면이 바뀌도록 구현

```jsx
<SlidePagination>
  {Array.from({ length: 3 }).map((item, index) => (
    <button
      onClick={() => moveDot(index + 1)}
      className={slideIndex === index + 1 ? 'dot-active' : 'dot'}
    ></button>
  ))}
</SlidePagination>
```

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    setSlideIndex((slideIndex) => (slideIndex === len ? 1 : slideIndex + 1))
  }, 2000)
  return () => clearInterval(interval)
}, [slideIndex])
```

```jsx
{
  DATA_SLIDER.map(({ id, srcImg }) => {
    return (
      <div
        key={id}
        className={slideIndex === id ? 'slide-active-anim' : 'slide'}
      >
        <img src={srcImg} />
      </div>
    )
  })
}
```

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/Slider.gif?raw=true"  width="642" alt="image">
<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/readmeSlide.png?raw=true"  width="642" alt="image">

### 4.video

- IFrame tag를 사용하여 video를 가져옴.

```jsx
<Movie>
  <iframe
    title="team-fresh video"
    width="100vh"
    height="100vh"
    src="//player.vimeo.com/video/700346662?quality=1080p&amp;autopause=0&amp;playsinline=1&amp;autoplay=1&amp;loop=1&amp;background=1"
    allow="autoplay"
  />
</Movie>
```

### 5. Nav 드롭다운 구현 , Nav scroll 감지 후 헤더 색상 변경

- Team-fresh의 navbar에 있는 데이터를 활용하여 메뉴 위 hover 시 드롭다운 메뉴 구현

- scroll시에 nav는 고정이 되고 움직이면 색상이 변경되도록 구현

- NAV_ITEM에 downList가 있는 '서비스소개' 와 '고겍지원에만' true값을 주어 category 유무에 따라 다른 뷰 구현

- recoil에 초깃값을 window.pageXOffset으로 주었고 useEffect 안에서 addEventListener로 스크롤 이벤트를 감지후에 감지를 하면 addEventListener (안에 있는 콜백함수 handleScroll) 을 실행시킴
  useEffect에서 return 후 removeEventListener로 clean up을 함

```jsx
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
    path: '/About',
    cName: 'nav-item',
    isDropDown: false,
  },
  {
    id: 2,
    tag: 'service',
    title: '서비스소개',
    path: '../Pages/Menu/Service',
    cName: 'nav-item',
    isDropDown: true,
    downList: [
      {
        title: '물류',
        link: '/distribute',
      },
      {
        title: '유통',
        link: '/circulate',
      },
      {
        title: '프렌차이즈',
        link: '/franchise',
      },
      {
        title: '보험',
        link: '/insurance',
      },
    ],
  ...

```

```jsx
//Handlescroll.ts
export const HandleScroll = atom({
  key: 'scrollHandle',
  default: window.pageXOffset,
})
```

```jsx
useEffect(() => {
  const handleScroll = () => {
    const moving = window.pageYOffset
    setVisible(position > moving)
    setPosition(moving)
  }
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [position, setPosition, setVisible])
```

## 6. Service Instroduction (서비스 소개) 구현

- 작은 이미지를 누르면 해당 이미지에 해당하는 정보와 thumbnail 이미지를 나오게 하기 위해서
  Recoil을 사용함.

- DetailSmallImg 컴포넌트에서 이미지를 onClick시에 clickHandler을 통해
  해당되는 small image의 id 값을 저장을 했고 그 저장된 해당 인덱스 값들을 useRecoilState로 각각 컴포넌트로 가져와 보이게 함.

- 해당되는 이미지가 클릭 된 상태에서 아래에 있는 반 화살표 모양의 링크버튼을 누르면 각각에 맞는 path로 이동이 되게 구현

```jsx
import { atom } from 'recoil'

export const clickedSmallImg = atom({
  key: 'ClickImg',
  default: 0,
})
```

```jsx
export default function DetailBtn() {
  const [number, setNumber] = useRecoilState(clickedSmallImg)
  return (
    <>
      <Link to={SERVICE_INTRODUCTION[number].path}>
        <ImgBtn src="/images/arrow.png" alt=" asdasd" />
      </Link>
    </>
  )
}
```

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/Check.gif?raw=true"  width="642" alt="image">

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/readmeIntro.png?raw=true"  width="642" alt="image">

## 7. 핵심역량 컴포넌트 - PointerContents.tsx

- mouse hover시 mouse가 들어간 곳의 img에 포커스가 맞춰지게 하기 위해서
  onMouseEnter를 사용했고 hoverHandler 함수를 사용하여 e , id 값을 recoil의 state에 저장.

- transition을 주어서 animation 효과를 줌.

```jsx
type CustomMouseEvent = MouseEvent<HTMLElement>
export default function PointContents() {
  const [number, setNumber] = useRecoilState(pointImg)
  const hoverHandler = (e: CustomMouseEvent, numbers: number) => {
    setNumber(numbers)
  }

  return (
    <>
      <ImageContainer>
        {POINT_IMAGE.map((v) => {
          console.log(v)
          return (
            <Introduce key={v.content}>
              <Introduce key={v.content}>
                {v.id === number ? (
                  <Container>
                    <Img
                      onMouseEnter={(e) => hoverHandler(e, v.id)}
                      src={v.src}
                      alt="img"
                      style={{
                        width: '600px',
                        transition: 'all 0.4s ease 0s',
                      }}
                    />
                    <ActiveWrapper
                      style={{
                        width: '500px',
                        transition: 'all 0.4s ease 0s',
                        position: 'absolute',
                        borderBottom: '2px solid white',
                        overflow: 'hidden',
                        marginBottom: '30px',
                        marginLeft: '10px',
                      }}
                    >
                      {v.title}
                    </ActiveWrapper>
                  </Container>
                ) : (
                  <Container>
                    <Img
                      onMouseEnter={(e) => hoverHandler(e, v.id)}
                      src={v.src}
                      alt="img"
                      style={{
                        width: '200px',
                        opacity: '0.2',
                        // background: 'black',
                        transition: 'all 0.4s ease 0s',
                      }}
                    />
                    <TitleWrapper
                      style={{
                        transition: 'all 0.4s ease 0s',
                        position: 'absolute',
                        marginBottom: '30px',
                        marginLeft: '10px',
                      }}
                    >
                      {v.title}
                    </TitleWrapper>
                  </Container>
                )}
              </Introduce>
            </Introduce>
          )
        })}
      </ImageContainer>
    </>
  )
}
```

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/readmepower.png?raw=true"  width="642" alt="image">

## 8. service page - 배송조회 api

- DaumPostCode 라이브러리를 설치하여 구현.

```jsx
const handle = {
  // 버튼 클릭 이벤트
  clickButton: () => {
    setOpenPostcode((current) => !current)
  },

  // 주소 선택 이벤트
  selectAddress: async (data: postProps) => {
    console.log(typeof data)
    console.log(`
                우편번호: ${data.zonecode}
                주소: ${data.address},
            `)
    const result = await axios({
      method: 'post',
      url:
       '...'
      data: {
        addrBasic: data,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setOpenPostcode(false)
    setResponseSucess(result.status)
    setsearchResult(data)
    console.log(result)
  },
}
```

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/delieveyCheck.png?raw=true"  width="642" alt="image">
<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/modal.png?raw=true"  width="642" alt="image">

## 9. 카카오 지도를 통한 지도 구현

- kakao map api를 통해 팀프레시 본사와 센터가 있는 위치를 지도로 구현
  (본사 ,통과형 물류센터 - 하남센터 ,하남센터 , 보관 물류센터)

- public 의 index.html에 카카오지도 javascript 키를 발급받아 추가 함.

- 위도와 경도를 계산하여 markup 구현

- title onClick시에 각각에 맞는 id를 저장하고 그에 맞는 지도가 나옴 (본사와 하남센터만 구현)

```jsx
<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=..."
></script>
```

<img src="https://github.com/Jaehyuksssss/my-Gatsby-blog/blob/master/my_blog/contents/Image/Readme.gif?raw=true"  width="642" alt="image">
