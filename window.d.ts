// window.d.ts

declare global {
  interface Window {
    kakao: any
  }
}

window.kakao = window.kakao || 'SomeValue'
