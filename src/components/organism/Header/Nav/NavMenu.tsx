import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavItemsParams } from '../../../constant'
import DropdownMenu from './DropDownMenu'

interface INavMenuProps {
  data: NavItemsParams
}

export default function List({ data }: INavMenuProps) {
  const [dropdown, setDropdown] = useState<boolean>(false)
  return (
    <>
      <SubItem
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <Link to={data.path}>{data.title}</Link>
        {dropdown && <DropdownMenu data={data.downList} />}
      </SubItem>
    </>
  )
}

const SubItem = styled.li`
  clear: both;
  width: 100%;
  text-align: center;
  margin: 0;
  cursor: pointer;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 300;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
  ul {
    display: flex;
    flex-direction: column;
    justify-contents: center;
    width: 140px;
    list-style: none;
  }
`
