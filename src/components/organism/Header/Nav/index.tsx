import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavItemsParams, NAV_ITEMS } from '../../../constant'
import flex from '../../../../styles/flex'
import Logo from '../../../atoms/Logo'
import NavMenu from './NavMenu'
import { useRecoilState } from 'recoil'
import { HandleScroll, Visible } from '../../../recoil/HandleScroll'

export default function Nav() {
  const [visible, setVisible] = useRecoilState(Visible)

  return (
    <>
      <Container
        style={{
          background: visible ? 'black' : 'rgba(2, 21, 48, 0.9)',
          borderBottom: visible ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <Header>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <NavItems>
            {NAV_ITEMS.map((item: NavItemsParams) => {
              return (
                <MenuWrapper key={item.id}>
                  <NavMenu data={item} />
                </MenuWrapper>
              )
            })}
          </NavItems>
        </Header>
      </Container>
    </>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 65px;
  padding: 0;
  text-align: center;
  z-index: 100;
  position: fixed;
`
const Header = styled.div`
  ${flex('space-between', 'center')}
  width: 100%;
  margin: 0 auto;
`
const LogoWrapper = styled.div`
  margin-left: 100px;
`
const NavItems = styled.ul`
  display: flex;
  color: white;
  justify-content: space-between;
  ul {
    list-style: none;
    width: 140px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 15px;
  }
  li {
    display: flex;
    justify-content: center;
    width: 150px;
    list-style: none;
  }
  a {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    padding: 5px 0;
  }
`
const MenuWrapper = styled.div``
