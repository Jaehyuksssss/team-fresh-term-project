import * as React from 'react'
import DaumPostcode from 'react-daum-postcode'
import styled from 'styled-components'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import {
  OpenDaumPostCode,
  responseCode,
  SearchResult,
} from '../../../../Pages/ServiceStore/components/recoil/ServiceStore'
import DeliveryMore from './DeliveryMore'

export interface postProps {
  zonecode: string
  address: string
}

const DaumPostModal = (): JSX.Element => {
  /**
   * useState
   */
  const [openPostcode, setOpenPostcode] = useRecoilState(OpenDaumPostCode)
  const [responseSuccess, setResponseSucess] = useRecoilState(responseCode)
  const [searchResult, setsearchResult] = useRecoilState(SearchResult)
  console.log(searchResult)
  // console.log(responseSuccess);
  // console.log(openPostcode);
  /**
   * handler
   */
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
          'https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
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

  return (
    <PopUpContainer>
      {!openPostcode ? (
        <Button
          onClick={handle.clickButton}
          style={{
            display: responseSuccess === 200 && !openPostcode ? 'none' : '',
            cursor: responseSuccess === 200 ? 'not-allowed' : 'pointer',
          }}
        >
          +
        </Button>
      ) : (
        <CloseButton onClick={() => handle.clickButton()}>x</CloseButton>
      )}
      {openPostcode && (
        <DaumPostcode onComplete={handle.selectAddress} autoClose={false} />
      )}
      {/* {responseSuccess === 200 && !openPostcode ? <DeliveryMore /> : null} */}
    </PopUpContainer>
  )
}

export default DaumPostModal

const PopUpContainer = styled.div`
  width: 400px;
  height: 400px;
`

const Button = styled.div`
  display: flex;
  position: relative;
  width: 60px;
  height: 60px;
  font-family: Pretendard;
  text-align: center;
  font-weight: 100;
  font-size: 60px;
  line-height: 60px;
  color: rgb(255, 255, 255);
  background: rgb(2, 32, 74);
  margin: 30px 0px 0px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`
const CloseButton = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  font-family: Pretendard;
  text-align: center;
  cursor: pointer;
  align-items: center;
`
