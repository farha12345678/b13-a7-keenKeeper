import { use } from "react";

import FriendsCard from "../../components/ui/FriendsCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);
console.log(friends)
  return (
   <div>
     <div className="max-w-fit mx-auto my-10">
      <div className="border border-gray-100"></div>
      <p className="my-4">Your Friends</p>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2 gap-2">
        {friends.map((friend) => {
         return <FriendsCard friend={friend}/>
})}
      </div>
    </div>
   </div>
  );
};

export default AllFriends;