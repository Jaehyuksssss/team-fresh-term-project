import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import MapStore from './Pages/MapStore'
import HomeStore from './Pages/HomeStore'
import ServiceStore from './Pages/ServiceStore'
import GlobalStyle from './styles/globalStyles'
import RecruitStore from './Pages/RecruitStore'
import SupportStore from './Pages/SupportStore'

declare global {
  interface Window {
    kakao: any
    naver: any
  }
}
function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<HomeStore />} path="/" />
          <Route element={<MapStore />} path="/about" />
          <Route element={<ServiceStore />} path="/service" />
          <Route element={<RecruitStore />} path="/recruit" />
          <Route element={<SupportStore />} path="/support" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
