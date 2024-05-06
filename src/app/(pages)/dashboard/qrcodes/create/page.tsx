import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import FormQRCode from "./form-qrcode"

export default async function CreateQRCodes(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className="flex w-full">
            <FormQRCode/>
        </div>
    )
}