'use client'

import { useEffect, useRef, useState } from 'react'
import { CREATOR_DISPLAY_NAME, MOMENTS_SECTION } from '../content/creator'
import { MOMENT_VIDEOS } from '../content/videos'
import PaymentButton from './PaymentButton'
import styles from './RecentMoments.module.css'

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg className={styles.verifiedIcon} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#F472B6" />
      <path
        d="M7.5 12.2l2.8 2.8 6.2-6.4"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type MomentCardProps = {
  src: string
  poster: string
  caption: string
  locked: boolean
}

/** Unlocked preview: poster until in view, then load & play video once. */
function PreviewVideo({ src, poster }: { src: string; poster: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px 0px', threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!shouldLoad) return
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {})
  }, [shouldLoad])

  return (
    <div ref={containerRef} className={styles.mediaInner}>
      {!shouldLoad ? (
        <img src={poster} alt="" className={styles.previewImage} loading="lazy" decoding="async" />
      ) : (
        <video
          ref={videoRef}
          className={styles.video}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
      )}
    </div>
  )
}

function MomentCard({ src, poster, caption, locked }: MomentCardProps) {
  const media = (
    <div className={styles.media}>
      {locked ? (
        <img src={poster} alt="" className={styles.previewImage} loading="lazy" decoding="async" />
      ) : (
        <PreviewVideo src={src} poster={poster} />
      )}
      {locked && (
        <div className={styles.lockOverlay}>
          <div className={styles.lockBadge}>
            <LockIcon />
          </div>
          <span className={styles.lockLabel}>Members only</span>
        </div>
      )}
    </div>
  )

  return (
    <article className={`${styles.card} ${locked ? styles.cardLocked : ''}`}>
      {locked ? (
        <PaymentButton className={styles.cardButton} aria-label="Unlock members-only video">
          {media}
        </PaymentButton>
      ) : (
        media
      )}

      <footer className={styles.cardFooter}>
        <div className={styles.creatorRow}>
          <VerifiedIcon />
          <span className={styles.creatorName}>{CREATOR_DISPLAY_NAME}</span>
        </div>
        <p className={styles.caption}>{caption}</p>
      </footer>
    </article>
  )
}

export default function RecentMoments() {
  return (
    <section className={styles.section} id="moments" aria-labelledby="moments-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="moments-title" className={styles.title}>
            <span className="gradientTitle">{MOMENTS_SECTION.titleLead}</span>{' '}
            <em className={styles.titleEm}>{MOMENTS_SECTION.titleEm}</em>
          </h2>
        </header>

        <div className={styles.grid}>
          {MOMENT_VIDEOS.map((video) => (
            <MomentCard
              key={video.id}
              src={video.src}
              poster={video.poster}
              caption={video.caption}
              locked={video.locked}
            />
          ))}
        </div>

        <PaymentButton className={`${styles.cta} gradientCta`} aria-label="Try for free">
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
          Try for free!
        </PaymentButton>
      </div>
    </section>
  )
}
