import { FiDivideCircle } from "react-icons/fi";
import { Link } from "react-router";


const FriendsCard=({friend})=> {
 
     const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "on-track":
        return "bg-[#244D3F] text-white";
      case "almost due":
        return "bg-[#EFAD44] text-white";
      case "overdue":
        return "bg-[#EF4444] text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  if (!friend) return null;
  return (
    
 <Link to={`/friendsDetails/${friend.id}`}
            key={friend.id}
            className="inset-shadow-sm bg-gray-100 lg:w-44 lg:h-52 p-2 text-center rounded-md text-[11px]"
          >
            <div className="items-center my-4">
              <img
                src={friend.picture}
                className="w-12 h-12 object-cover rounded-full mx-auto mb-1"
              />

              <h4 className="text-lg font-medium">{friend.name}</h4>
              <p className="text-gray-700">{friend.days_since_contact}d ago</p>

              <div className="flex flex-wrap justify-center gap-1 my-1">
                {friend.tags.map((tag, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-2 text-sm rounded-2xl">
                    {tag}
                  </span>
                ))}
              </div>

    
              <p className={`mt-2 inline-block px-2 py-0.5 rounded-full  text-sm ${getStatusStyles(friend.status)}`}>
                {friend.status}
              </p>
            </div>
          </Link>
    
  )
}

export default FriendsCard