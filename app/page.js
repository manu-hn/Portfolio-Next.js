import Image from 'next/image'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import FooterSection from './components/FooterSection'
export default function Home() {
  return (
    <main className="scroll-smooth flex min-h-screen  flex-col bg-[#121212] ">
      <NavBar />
      <div className="container px-14 py-4 mt-24 mx-auto ">
        <HeaderSection  />
        <AboutSection />

        <ProjectSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  )
}
