import NavBar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       <NavBar/>
        {children}
        <Footer/>
      </section>
    )
  }