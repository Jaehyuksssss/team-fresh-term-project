import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ListParams } from '../../../constant'

interface Props {
  data?: ListParams[]
}
export default function DropdownMenu({ data }: Props) {
  const [dropdown, setDropdown] = useState(false)

  return (
    <>
      <SubItem onClick={() => setDropdown(!dropdown)}>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <Container key={item.title}>
                  <ListWrapper>
                    <Link to={item.link} onClick={() => setDropdown(false)}>
                      {item.title}
                    </Link>
                  </ListWrapper>
                </Container>
              </>
            )
          })}
      </SubItem>
    </>
  )
}

const SubItem = styled.ul`
  display: table;
  position: absolute;
  top: 40px;
  width: 140px;
  margin: 29px 0 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 2px rgb(0 0 0 / 30%);
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
`
const Container = styled.div`
  display: flex;
`

const ListWrapper = styled.li`
  width: 40px;
`
