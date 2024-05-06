import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import FormLink from "./form-link"

export default async function CreateLinks(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className="flex flex-col items-center w-full ">
            <FormLink/>
        </div>
    )
}