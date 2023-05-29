import { FC } from 'react'
import style from './style.module.sass'

const Banner: FC = () => {
  return (
    <section className={style.banner}>
      <div className={style.shape1} />
      <div className={style.shape2} />
      <h1>
        Let’s create <br /> something great <br /> together.
      </h1>
      <button className={style.button}>
        <div className={style.circle} />
        BOOK A FREE CALL <div className={style.arrowRight} />
      </button>
      <div className={style.leftHand} />
      <div className={style.rightHand} />
      <div className={style.knit} />
    </section>
  )
}

export default Banner
