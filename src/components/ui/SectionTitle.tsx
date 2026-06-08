interface SectionTitle {
  title: string
  description?: string
}

export default function SectionTitle({ title, description }: SectionTitle) {
  return (
    <div className="mt-4 mb-8">
      <div className="mb-3 h-1 w-16 rounded-full bg-yellow-500" />

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-2xl text-white/50">
          {description}
        </p>
      )}
      
    </div>
  )
}