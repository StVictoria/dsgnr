import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import style from './style.module.sass'
import logo from '../../../assets/logo.svg'
import { whatWeDo, whoWeAre } from '@/static/footerLinks'
import { ILink } from '@/interfaces/link'
import { ISocial, socials } from '@/static/socials'

const Footer: FC = () => {
  const renderLinks = (links: ILink[]) =>
    links.map((item) => (
      <li key={item.id}>
        <Link href={item.link}>{item.title}</Link>
      </li>
    ))

  const renderSocials = () =>
    socials.map((social: ISocial) => (
      <Link key={social.id} href={social.link}>
        <Image src={social.icon} alt={social.title} />
      </Link>
    ))

  return (
    <footer className={style.footer}>
      <section className={style.mainBlock}>
        <div className={style.mainInfo}>
          <Link href='/'>
            <Image className={style.logo} src={logo} alt='dsgnr.' />
          </Link>
          <p className={style.projectDescr}>
            Dsgnr. is an award winning creative and design agency based in New
            York, USA.
          </p>
          <button className={style.emailButton}>
            <div className={style.emailIcon} /> info@dsgnr.com
          </button>
        </div>

        <div className={style.links}>
          <div className={style.listWrapper}>
            <h2 className={style.linksTitle}>What we do</h2>
            <ul className={style.linksList}>{renderLinks(whatWeDo)}</ul>
          </div>
          <div className={style.listWrapper}>
            <h2 className={style.linksTitle}>Who we are</h2>
            <ul className={style.linksList}>{renderLinks(whoWeAre)}</ul>
          </div>
        </div>
      </section>

      <section className={style.info}>
        <div className={style.legal}>
          <Link href='/privacy-policy'>Privacy Policy</Link>
          <Link href='/terms'>Terms</Link>
        </div>
        <div className={style.socials}>{renderSocials()}</div>
      </section>

      <p className={style.copyrights}>
        Made with ❤️ by{' '}
        <Link href='https://moyin.gumroad.com/' target='_blank'>
          <u>moyin</u>
        </Link>
      </p>
    </footer>
  )
}

export default Footer
