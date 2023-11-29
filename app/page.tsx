import NavBar from "@/components/Navbar"
import Main from "@/components/Main"
import Footer from "@/components/Footer"
import TrendingCourses from "@/components/TrendingCourses"
export default function Home() {
  return (
    <main className="w-full">
      <NavBar/>
      <Main/>
      <TrendingCourses/>
      <Footer/>
    </main>
  )
}
