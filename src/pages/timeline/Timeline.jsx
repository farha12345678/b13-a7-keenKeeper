import { useContext, useState } from "react"
import { CallContext } from "../../components/context/CallProvider"
import { MdOutlineTextsms, MdOutlineVideocam } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi"

const Timeline = () => {
  const { storedCall } = useContext(CallContext)
  const [filter, setFilter] = useState("all")

  return (
    <div className="container mx-auto my-20">
    <div>
      <h1 className="text-4xl font-semibold my-4">Timeline</h1>
      {/* dropdown */}
      <select
  className="border p-4 rounded mb-5"
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
  <option value="all">Filter Timeline</option>
  <option value="call">Call</option>
  <option value="text">Text</option>
  <option value="video">Video</option>
</select>

        
   {storedCall.length===0 ? <h2 className="font-semibold text-center">No data available</h2> : storedCall.filter(item => filter === "all" || item.type === filter)
    .map((item, ind) => (
    <div key={ind} className="flex items-center gap-3 border inset-shadow-sm border-gray-300 p-4 mb-5 rounded-xl">

     
      {item.type === "call" && <BiPhoneCall className="text-3xl font-semibold text-green-500" />}
      {item.type === "text" && <MdOutlineTextsms className="text-3xl font-semibold text-blue-500" />}
      {item.type === "video" && <MdOutlineVideocam className="text-3xl font-semibold text-purple-500" />}

    
      <div>
        <h1 className="text-gray-600">
  <span className="font-semibold text-black">
    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
  </span>{" "}
  with {item.name}
</h1>
        <p className="text-sm text-gray-500">{item.time}</p>
      </div>

    </div>
  ))
}
    </div>
    </div>
  )
}

export default Timeline