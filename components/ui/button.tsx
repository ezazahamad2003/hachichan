import * as React from "react"
import clsx from "clsx"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg px-4 py-2"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => (
  <button ref={ref} className={clsx(baseClasses, className)} {...props} />
))

Button.displayName = "Button"

