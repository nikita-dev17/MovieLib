interface ReleaseProps {
  release_date?: string
  first_air_date?: string
  className?: string
}

export default function Release ({ release_date, first_air_date, className="" }: ReleaseProps) {

  const date = release_date || first_air_date

  return (
    <p className={`text-white/60 ${className}`}>
      {date?.slice(0, 4)}
    </p>
  )
}