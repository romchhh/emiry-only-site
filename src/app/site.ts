import { CREATOR_NAME } from './content/creator'

export const SITE_NAME = CREATOR_NAME
export const SITE_SHORT_NAME = CREATOR_NAME
export const SITE_HERO_IMAGE = '/content/hero/photo_2026-06-11_11-32-59.jpg'
export const SITE_AVATAR_IMAGE = SITE_HERO_IMAGE

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, '')
  if (!trimmed) return 'https://only-site.vercel.app'
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://only-site.vercel.app',
)

export const SITE_TITLE = `${SITE_NAME} | Exclusive Access`
export const SITE_DESCRIPTION =
  'Emiri Momota — candid moments, private chats, and members-only content you won\u2019t find on social media. Free trial. No card required.'

export const SITE_KEYWORDS = [
  'Emiri Momota',
  'creator',
  'exclusive content',
  'members only',
  'private access',
  'free trial',
  'personal content',
  'behind the scenes',
]

export const SITE_EMAIL = process.env.SITE_CONTACT_EMAIL ?? 'hello@example.com'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#F472B6'

export const ACCESS_LINK =
  process.env.NEXT_PUBLIC_ACCESS_LINK ??
  'https://trk.of-traffic.com/go/01KWXVJ3NJAZVHMVKKJDZDQ5YV'

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '1505895597887530'

export const SITE_NAV = [
  { href: '/#moments', label: 'Preview' },
  { href: '/#about', label: 'About' },
  { href: '/#inside', label: 'Inside' },
  { href: '/#steps', label: 'Join' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'

export const SITE_FAQ = [
  { q: 'Is it really free?', a: 'Yes. You can start with free access — no card required to get in.' },
  {
    q: 'What kind of content is inside?',
    a: 'Candid clips, personal photos, behind-the-scenes moments, and members-only exclusives you won\'t find on social media.',
  },
  {
    q: 'Do you actually reply to messages?',
    a: 'Yes. I read everything and reply personally — no bots, no templates.',
  },
  { q: 'Can I cancel anytime?', a: 'Yes. You\'re free to leave whenever you want.' },
  { q: 'How do I get access?', a: 'Tap Try for free, create an account, and step inside.' },
] as const
