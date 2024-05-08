import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import NewLinkInBio from "./new-link-in-bio"

export default async function LinkInBio(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className="flex w-full">
            <NewLinkInBio/>
        </div>
    )
}