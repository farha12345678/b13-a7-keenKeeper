import { FaPlus } from "react-icons/fa"
import AllFriends from "./AllFriends"


const Homepage =()=> {
  return (
   
      <div className="my-20">
      <div className="container mx-auto flex flex-col items-center space-y-4 mb-5 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold">Friends to keep close in your life</h1>
        <p className='text-sm font-light text-gray-700'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<button className="flex items-center gap-1 bg-[#244D3F] text-white btn"><FaPlus />Add a Friend</button>
  {/* card */}
      <div className="lg:flex items-stretch space-y-4 lg:gap-2">
        <div className="inset-shadow-sm bg-gray-100 h-24 p-4 w-42 space-y-2">
          <h4 className="text-[#244D3F] font-semibold text-xl">10</h4>
          <p className="text-sm text-gray-700">Total Friends</p>
        </div>
         <div className="inset-shadow-sm bg-gray-100 h-24 w-42 p-4 space-y-2">
          <h4 className="text-[#244D3F] font-semibold text-xl">3</h4>
          <p className="text-sm text-gray-700">On Track</p>
        </div>
         <div className="inset-shadow-sm bg-gray-100 h-24 w-42 p-4 space-y-2">
          <h4 className="text-[#244D3F] font-semibold text-xl">6</h4>
          <p className="text-sm text-gray-700">Need Attention</p>
        </div>
         <div className="inset-shadow-sm bg-gray-100 h-24 w-42 p-4 space-y-2">
          <h4 className="text-[#244D3F] font-semibold text-xl">12</h4>
          <p className="text-sm text-gray-700">Interactions This Month</p>
        </div>
      </div>
     
      </div>
<AllFriends/>
    </div>
   
  )
}

export default Homepage