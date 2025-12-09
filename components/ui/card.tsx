import * as React from "react"
import clsx from "clsx"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
))

Card.displayName = "Card"

