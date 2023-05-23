import Link from 'next/link'
import { FC } from 'react'
import style from './style.module.sass'

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Link href='/'>Logo</Link>
      <button>MENU</button>
    </header>
  )
}

export default Header
