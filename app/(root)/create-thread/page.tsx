import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


async function Page(){
  const user=await currentUser();
  
  console.log("user", user);

  if(!user) return null;
  const userInfo =await fetchUser(user.id);

    if(!userInfo?.onbroaded) redirect('/onbroading');

  return (
    <>
  <h1 className="head-text">Create Threads</h1>
  <PostThread userId={userInfo._id}/>
  </>
   )
}

export default Page;