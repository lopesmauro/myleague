import Navbar from "../components/Navbar"
import { CardTounment } from "../components/Card"
import { DialogDemo } from "../components/Dialog"
import { Banner } from "../components/Banner"
import '../assets/css/banner.css'

const Home = () => {  
  return (
    <div className="w-full h-full">
      <Navbar/>
      <Banner/>

      <div className="px-10 py-10">
        <div className="flex justify-between mb-10">
          <DialogDemo/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div className="flex justify-center">
            <CardTounment />
          </div>
          <div className="flex justify-center">
            <CardTounment />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Home;
