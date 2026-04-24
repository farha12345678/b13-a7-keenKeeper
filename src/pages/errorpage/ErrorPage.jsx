import { Link } from "react-router"


const ErrorPage=()=> {
  return (
    <div className="text-center my-20 space-y-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p>Page Not Found</p>
      <Link to='/'><button className="btn bg-[#244D3F] text-white">Back to Home</button></Link>
    </div>
  )
}

export default ErrorPage