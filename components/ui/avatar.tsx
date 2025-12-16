import * as React from "react"
import clsx from "clsx"

type AvatarProps = React.HTMLAttributes<HTMLDivElement>
type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted", className)}
    {...props}
  />
))

Avatar.displayName = "Avatar"

export const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={clsx("aspect-square h-full w-full", className)}
      {...props}
    />
  )
)
AvatarImage.displayName = "AvatarImage"

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={clsx(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground",
      className,
    )}
    {...props}
  />
))

AvatarFallback.displayName = "AvatarFallback"

