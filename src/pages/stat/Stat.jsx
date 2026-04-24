import { useContext } from "react"
import { CallContext } from "../../components/context/CallProvider"
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const Stat = () => {
  const { storedCall } = useContext(CallContext)

  const callCount = storedCall.filter(item => item.type === "call").length
  const textCount = storedCall.filter(item => item.type === "text").length
  const videoCount = storedCall.filter(item => item.type === "video").length

   if (callCount === 0 && textCount === 0 && videoCount === 0) {
    return <p className="text-center mt-10 text-gray-500">No data available</p>
  }

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ]

  return (
   <div className="mx-auto container my-20">
    <h1 className="text-5xl font-bold mb-4">Friendship Analytics</h1>
     <div className="w-full h-100 border border-gray-50 p-10 bg-slate-100 ">
      <h1 className="text-2xl text-[#244D3F]">By Interaction Type</h1>
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={5}
         cornerRadius="50%"
      />
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>
   </div>
  )
}
export default Stat