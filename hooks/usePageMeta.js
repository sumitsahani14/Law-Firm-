import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

const SITE_URL = 'https://veritas-legal-demo.vercel.app'

/**
 * Sets document title and meta tags for the current route.
 */
export default function usePageMeta({ title, description, path = '', image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Veritas Legal` : 'Veritas Legal'
    document.title = fullTitle

    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
      setMeta('twitter:description', description)
    }

    setMeta('og:title', fullTitle, 'property')
    setMeta('twitter:title', fullTitle)
    setMeta('og:type', 'website', 'property')

    const url = `${SITE_URL}${path}`
    setMeta('og:url', url, 'property')
    setCanonical(url)

    const ogImage =
      image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80'
    setMeta('og:image', ogImage, 'property')
    setMeta('twitter:image', ogImage)
  }, [title, description, path, image])
}
