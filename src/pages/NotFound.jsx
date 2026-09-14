import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import './NotFound.css'

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    path: '/404',
  })

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>This page doesn&rsquo;t exist.</h1>
        <p>The page you&rsquo;re looking for may have moved or no longer exists.</p>
        <Button to="/">Return Home</Button>
      </div>
    </section>
  )
}
