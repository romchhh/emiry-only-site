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
    caption: 'Slow morning in Tokyo, just for you ☀️',
    locked: false,
  },
  {
    id: 'preview-day',
    src: '/content/videos/preview/IMG_2037.MOV',
    caption: 'A little wine-bar energy before the night 🍷',
    locked: false,
  },
  {
    id: 'locked-1',
    src: '/content/videos/locked/IMG_4668.MOV',
    caption: 'Getting ready for a Tokyo night out 👀',
    locked: true,
  },
  {
    id: 'locked-2',
    src: '/content/videos/locked/IMG_4967.MOV',
    caption: 'Private moment — members only 🔒',
    locked: true,
  },
  {
    id: 'locked-3',
    src: '/content/videos/locked/IMG_5188.MOV',
    caption: 'Late-night vibes after the restaurant 🌙',
    locked: true,
  },
  {
    id: 'locked-4',
    src: '/content/videos/locked/IMG_2207.MP4',
    caption: 'Travel diary — full version inside ✈️',
    locked: true,
  },
]
