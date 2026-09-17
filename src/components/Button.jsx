import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Button.css'

/**
 * Reusable button/link component.
 * variant: 'primary' | 'secondary' | 'ghost'
 * to: internal route (renders <Link>)
 * href: external link (renders <a>)
 * onClick: renders <button> when no `to`/`href` given
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  icon = true,
  disabled = false,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="btn__icon" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {content}
    </button>
  )
}
