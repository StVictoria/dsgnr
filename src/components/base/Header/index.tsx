"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import style from './style.module.sass'
import logo from '../../../assets/logo.svg'
import hamburger from '../../../assets/hamburger.svg'
import { IMenu, menu } from '@/static/menu'
import cn from 'classnames'

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const renderMenu = () =>
    menu.map((item: IMenu) => (
      <li key={item.id}>
        <Link href={item.link}> {item.title}</Link>
      </li>
    ))

  return (
    <header className={style.header}>
      <Link href='/'>
        <Image src={logo} alt='dsgnr.' />
      </Link>
      <div className={style.menuWrapper}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image className={style.menuIcon} src={hamburger} alt='Menu' />
        </button>
        <ul className={cn(style.menuList, {[style.open]: isMenuOpen})}>{renderMenu()}</ul>
      </div>
    </header>
  )
}

export default Header
