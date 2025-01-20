import Brand from "@/components/home/brand/Brand"
import Browse from "@/components/home/browse/Browse"
import Hero from "@/components/home/hero/Hero"
import NewArrival from "@/components/home/newarrival/NewArrival"
import Testimonial from "@/components/home/testimonial/Testimonial"
import TopSelling from "@/components/home/topSelling/TopSelling"


const Home = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <NewArrival />
      <TopSelling />
      <Browse />
      <Testimonial />
    </div>
  )
}

export default Home