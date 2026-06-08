import { useEffect } from "react";

export default function useDocumentTitle(title: string) {
  return (
    useEffect(() => {
      document.title = title
    }, [title])
  )
}