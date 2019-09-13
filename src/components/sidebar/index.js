import React from 'react'

import * as S from './styled'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.NavList>
        <S.NavLink title="User" to="/">
          <S.IconUser />
        </S.NavLink>
        <S.NavLink title="Plan" to="/">
          <S.IconCreditCard />
        </S.NavLink>
        <S.NavLink title="Divided date" to="/">
          <S.IconCalendar />
        </S.NavLink>
        <S.NavLink title="Messages" to="/">
          <S.IconEnvelope />
        </S.NavLink>
      </S.NavList>
    </S.Sidebar>
  )
}

export default Sidebar
