import type { ReactNode } from "react"


interface PageContainerProps {
  children: ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex min-h-150 max-w-7xl mx-auto bg-white/3">
      <div className="w-full p-8">
        {children}
      </div>
    </div>
  )  
}