import React from 'react'
import styled from 'styled-components'
import { FOOTER_INFO, FooterContentsParams } from '../../constant'

import FooterList from './FooterList'

export default function Footer() {
  return (
    <>
      <MainFooter>
        <FooterContents>
          <Logo>
            <img src="/images/logo.jpg" alt="logo" />
          </Logo>
          <CompanyInfo>
            <ul>
              {FOOTER_INFO.map((info: FooterContentsParams) => {
                return <FooterList key={info.id} data={info} />
              })}
              <CopyRight>
                Copyrightⓒ All Rights Reserved.{' '}
                <a href="./admin.php" target="_blank">
                  TeamFresh Co.,Ltd.
                </a>
              </CopyRight>
            </ul>
          </CompanyInfo>
          <SnsLink>
            <ul>
              <li>
                <a href="https://www.facebook.com/teamfresh.timf/">
                  <i className="xi-facebook" />
                </a>
              </li>
              <li>
                <a href="https://brunch.co.kr/@f2784a16dd71437#articles">
                  <img src="/images/sns_brunch.png" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCe04X8Shi4hQnUPvhE2TYHA">
                  <i className="xi-youtube-play" />
                </a>
              </li>
            </ul>
          </SnsLink>
        </FooterContents>
      </MainFooter>
    </>
  )
}

const MainFooter = styled.footer`
  display: table;
  width: 100%;
  text-align: center;
  background: #191919;
  padding: 50px 0;
  margin: 0;
`

const FooterContents = styled.div`
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
`

const Logo = styled.div`
  float: left;
  margin: 0 0 30px;
  img {
    width: 100px;
  }
`

const CompanyInfo = styled.div`
  clear: both;
  float: left;
  width: 100%;
  text-align: left;
  font-size: 0;
  ul {
    margin: 0;
    padding: 0;
  }
`

const CopyRight = styled.li`
  width: 100%;
  margin: 10px 0 0 0;
  display: inline-block;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: #ccc;
  a {
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 16px;
    text-decoration: none;
    color: #ccc;
  }
`
const SnsLink = styled.div`
  clear: both;
  float: left;
  width: 100%;
  margin: 30px 0 0 0;
  ul {
    padding: 0;
    margin: 0;
    li {
      float: left;
      width: 40px;
      height: 40px;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 100%;
      overflow: hidden;
      padding: 6px 0 0 0;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
      :first-child:hover {
        background-color: #18539a;
      }
      :last-child:hover {
        background-color: #ff0100;
      }
      i {
        color: #fff;
        font-size: 27px;
      }
      img {
        height: 27px;
        margin: 1px 0 0 0;
      }
    }
  }
`
