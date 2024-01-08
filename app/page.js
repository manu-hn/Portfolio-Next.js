import Image from 'next/image'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
export default function Home() {
  return (
    <main className="flex min-h-screen justify-start py-6 items-center flex-col bg-[#121212]">
      <NavBar />
      <div className="container px-14 py-4 mt-12 h-[88vh] flex items-center">
        <HeaderSection />
      </div>

    </main>
  )
}
