import style from './style.module.sass'

const MainBanner = () => {
  return (
    <div className={style.banner}>
      <div className={style.logoImg} />
      <h2 className={style.title}>
        Grow Your Business. <br /> Build Great Products.
      </h2>
      <button className={style.button}>Book a free call</button>
      <div className={style.hands} />
    </div>
  )
}

export default MainBanner
