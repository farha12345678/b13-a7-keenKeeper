import React, { useContext, useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router'
import { CallContext } from '../../components/context/CallProvider';
import { toast } from 'react-toastify';

const FriendsDetails=()=> {
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
    const {id} = useParams()
    const friends = useLoaderData()
    
    const expectedFriends = friends.find((friend)=> friend.id == (id))
  // call function
  const {storedCall, setStoredCall} = useContext(CallContext)
  const handleAction = (type) => {
  const newEntry = {
    id: expectedFriends.id,
    name: expectedFriends.name,
    picture: expectedFriends.picture,
    type: type, 
    time: new Date().toLocaleString()
  }
toast.success(`${type} with ${expectedFriends.name}`, {
  autoClose: 2000,
});
  setStoredCall([...storedCall, newEntry])
}
  return (
    <div className='container mx-auto max-w-fit my-20'>
        {/* main */}
       <div className='flex flex-col lg:flex-row gap-4'>
        {/* left */}
<div>
<div className='inset-shadow-sm bg-gray-100 lg:w-72 lg:h-60 p-2 text-center rounded-md text-[11px]'>
    <div className="items-center my-4">
              <img
                src={`/${expectedFriends.picture}`}
                className="w-12 h-12 object-cover rounded-full mx-auto mb-1"
              />

              <h4 className="text-lg font-medium">{expectedFriends.name}</h4>
              <p className="text-gray-700">{expectedFriends.days_since_contact}d ago</p>

              <div className="flex flex-wrap justify-center gap-1 my-1">
                {expectedFriends.tags.map((tag, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-2 text-sm rounded-2xl">
                    {tag}
                  </span>
                ))}
              </div>

    
              <p className={`mt-2 inline-block px-2 py-0.5 rounded-full  text-sm ${getStatusStyles(expectedFriends.status)}`}>
                {expectedFriends.status}
              </p>
              <p className='mt-2'>"{expectedFriends.bio}"</p>
              <p className='mt-2'>Email:{expectedFriends.email}</p>
            </div>
</div>
{/* button */}
<div className='grid gap-2'>
    <button className='w-full inset-shadow-sm bg-gray-100 p-2 mt-2 btn '>Snooze 2 weeks</button>
        <button className='w-full inset-shadow-sm bg-gray-100 p-2 btn '>Archive</button>
            <button className='w-full inset-shadow-sm bg-gray-100 p-2 btn '>Delete</button>
</div>
</div>
{/* right */}
<div>
  {/* 3card */}
  <div className='flex flex-col lg:flex-row items-center text-center gap-4'>
<div className='inset-shadow-sm bg-gray-100 w-42 lg:h-24 p-5'>
  <h1 className='text-xl font-semibold'>{expectedFriends.days_since_contact}</h1>
  <p className='text-sm text-gray-600'>Days Since Contact</p>
</div>
<div className='inset-shadow-sm bg-gray-100 w-42 lg:h-24 p-5'>
  <h1 className='text-xl font-semibold'>{expectedFriends.goal}</h1>
  <p className='text-sm text-gray-600'>Goal</p>
</div>
<div className='inset-shadow-sm bg-gray-100 w-42 lg:h-24 p-5'>
  <h1 className='text-xl font-semibold'>{expectedFriends.next_due_date}</h1>
  <p className='text-sm text-gray-600'>Next Due</p>
</div>
  </div>
  {/* 2nd card */}
  <div className='inset-shadow-sm bg-gray-100 w-full mt-4 h-28 p-5 space-y-2'>
<div className='flex justify-between'>
  <h1>Relationship Goal</h1>
  <button className='px-4 bg-white cursor-pointer'>Edit</button>
</div>
<p className='text-gray-600'>Connect every <span className='text-black font-semibold'>{expectedFriends.goal} days</span></p>
  </div>
  {/* 3rd card */}
 <div className='inset-shadow-sm bg-gray-100 mt-4 w-full h-36 p-4 flex flex-col justify-center'>
  
  {/* title */}
  <p className='text-left mb-2 font-medium'>Quick Check-in</p>

  {/* buttons */}
  <div className='flex gap-4 justify-center'>
    
   <button 
  onClick={() => handleAction("call")}
  className='inset-shadow-sm border border-gray-200 rounded-md bg-white w-36 h-16 flex flex-col justify-center items-center'>
  <BiPhoneCall className="text-xl" />
  <p>Call</p>
</button>

<button 
  onClick={() => handleAction("text")}
  className='inset-shadow-sm border border-gray-200 rounded-md bg-white w-36 h-16 flex flex-col justify-center items-center'>
  <MdOutlineTextsms className="text-xl" />
  <p>Text</p>
</button>

<button 
  onClick={() => handleAction("video")}
  className='inset-shadow-sm border border-gray-200 rounded-md bg-white w-36 h-16 flex flex-col justify-center items-center'>
  <MdOutlineVideocam className="text-xl" />
  <p>Video</p>
</button>

  </div>

</div>
</div>
       </div>
    </div>
  )
}

export default FriendsDetails