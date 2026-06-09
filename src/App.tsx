import AppRouter from "./app/AppRouter"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-18">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
