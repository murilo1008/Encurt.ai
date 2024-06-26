import HeaderDashboard from "@/components/header-dashboard"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import NewQRCode from "./new-qrcode"

export default async function QRCodes(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className="flex w-full">
            <NewQRCode/>
        </div>
    )
}