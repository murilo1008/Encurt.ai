'use client'

import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { Headset } from "lucide-react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface PathToTitleMap {
    [key: string]: string;
}

const pathToTitleMap: PathToTitleMap = {
    '/dashboard': "Home",
    '/dashboard/links': "Links",
    '/dashboard/qrcodes': "QR Codes",
    '/dashboard/analytics': "Análises",
    '/dashboard/settings': "Configurações",
    '/dashboard/links/create': "Criar link",
    '/dashboard/qrcodes/create': "Criar QR Code",
}


export default function HeaderDashboard(){

    const pathaname = usePathname()
    const [title, setTitle] = useState("")

    useEffect(() => {
        setTitle(pathToTitleMap[pathaname] || "")
    }, [pathaname])


    return(
        <div className="fixed top-0 h-20 bg-background md:flex hidden w-full items-center justify-between md:pr-[272px] p-5 ml-[2px] border-b">
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="flex items-center gap-2">
                <Button>Upgrade</Button>
                <Button variant={"ghost"}>
                    <Headset className="w-4 h-4"/>
                </Button>
                <UserButton/>
            </div>
        </div>
    )
}