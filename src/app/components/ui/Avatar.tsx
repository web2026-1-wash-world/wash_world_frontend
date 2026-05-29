type AvatarProps = {
  initial: string
}

export function Avatar({ initial }: AvatarProps) {
  return (
    <small className="inline-flex size-9 items-center justify-center rounded-full bg-brand-green text-white font-extrabold uppercase">
      {initial}
    </small>
  )
}
