import type { ReactNode } from "react"


interface PageContainerProps {
  children: ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white/3">
      <div className="w-full p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </div>
  )  
}