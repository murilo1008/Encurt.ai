import { UserButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

export default async function WelcomeBack(){

    const user = await currentUser()

    return(
        <div className="flex w-full items-center">
            <span className="font-bold md:text-xl text-base">😁 Bem vindo de volta {user?.firstName}!</span>
        </div>
    )
}