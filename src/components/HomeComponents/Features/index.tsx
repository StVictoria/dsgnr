import { IFeature } from '@/interfaces/features'
import { features } from '@/static/features'
import Image from 'next/image'
import { FC } from 'react'
import style from './style.module.sass'

const Features: FC = () => {
  const renderFeatures = () =>
    features.map((feature: IFeature) => (
      <div key={feature.id} className={style.feature}>
        <Image src={feature.icon} alt={feature.title} />
        <p className={style.title}>
          <b>{feature.title}</b>
        </p>
      </div>
    ))

  return <section className={style.features}>{renderFeatures()}</section>
}

export default Features
