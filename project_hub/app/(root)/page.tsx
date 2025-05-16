
import SearchForm from '@/components/SearchForm'
import { Boxes } from '@/components/ui/background-boxes'

export default async function Home() {
  

  return (
    <>
    
    <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    <Boxes />
    <h1 className="heading relative">
      Welcome To ProjectHub
    </h1>
    <p className="sub-heading !max-w-3xl relative">
     Where project meet like-minded people.
    </p>

  <SearchForm/>
 
  </div>



</>
  )
}