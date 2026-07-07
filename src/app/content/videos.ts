import { CREATOR_NAME } from './creator'

export { CREATOR_NAME }

export type MomentVideo = {
  id: string
  src: string
  caption: string
  locked: boolean
}

export const MOMENT_VIDEOS: MomentVideo[] = [
  {
    id: 'preview-morning',
    src: '/content/videos/preview/IMG_8788.MP4',
    caption: 'Morning vibes, just for you ☀️',
    locked: false,
  },
  {
    id: 'preview-day',
    src: '/content/videos/preview/IMG_2037.MOV',
    caption: 'A little glimpse of my day 💕',
    locked: false,
  },
  {
    id: 'locked-1',
    src: '/content/videos/locked/IMG_4668.MOV',
    caption: 'Members only — trust me, it\u2019s worth it',
    locked: true,
  },
  {
    id: 'locked-2',
    src: '/content/videos/locked/IMG_4967.MOV',
    caption: 'Private moment, just us 🔒',
    locked: true,
  },
  {
    id: 'locked-3',
    src: '/content/videos/locked/IMG_5188.MOV',
    caption: 'Late-night energy 🌙',
    locked: true,
  },
  {
    id: 'locked-4',
    src: '/content/videos/locked/IMG_2207.MP4',
    caption: 'Full version inside',
    locked: true,
  },
]
