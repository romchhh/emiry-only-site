'use client'
import Image from 'next/image'
import {
  CREATOR_DISPLAY_NAME,
  CREATOR_NAME,
  HERO_COPY,
} from '../content/creator'
import { SITE_AVATAR_IMAGE, SITE_HERO_IMAGE } from '../site'
import PaymentButton from './PaymentButton'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero aria-label="Landing">
      <div className={styles.bg}>
        <div className={styles.bgFrame}>
          <Image
            src={SITE_HERO_IMAGE}
            alt={`${CREATOR_NAME} — exclusive content`}
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
        </div>
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.contentZone}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <Image
                src={SITE_AVATAR_IMAGE}
                alt=""
                fill
                sizes="52px"
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.profileMeta}>
              <span className={styles.profileName}>{CREATOR_DISPLAY_NAME}</span>
            </div>
          </div>

          <div className={styles.textBlock}>
            <span className={styles.onlineBadge}>
              <span className={styles.onlineDot} aria-hidden="true" />
              {HERO_COPY.badge}
            </span>

            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>{HERO_COPY.headline[0]}</span>
              <span className={`${styles.headlineLine} ${styles.accent}`}>{HERO_COPY.headline[1]}</span>
            </h1>

            <p className={styles.subhead}>
              {HERO_COPY.subhead[0]}
              <br />
              <span className={styles.accent}>{HERO_COPY.subhead[1]}</span>
            </p>
          </div>

          <div className={styles.ctaBlock}>
            <PaymentButton className={`${styles.ctaButton} gradientCta`} aria-label="Try for free">
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
              {HERO_COPY.cta}
            </PaymentButton>
            <p className={styles.disclaimer}>{HERO_COPY.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
