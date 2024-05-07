import HeaderDashboard from "@/components/header-dashboard"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import NewLink from "./new-link"

export default async function Links(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className="flex w-full">
            <NewLink/>
        </div>
    )
}