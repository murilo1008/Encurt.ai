
import { ReactNode } from "react"
import { Metadata } from "next"
import SideBar from "@/components/sidebar"
import HeaderDashboard from "@/components/header-dashboard"


interface HomeLayoutProps {
    children: ReactNode
    title: string
}

export const metadata: Metadata = {
    title: 'Encurta.ai',
    
}

export default function DashboardLayout({ children }: HomeLayoutProps) {
    return (
        <>

            <SideBar/>
            <div className="pl-0 sm:pl-[250px] pt-10 sm:pt-0">
                <HeaderDashboard/>
                <div className="md:mt-20 mt-5">
                    {children}
                </div>
                

            </div>

        </>
    )
}