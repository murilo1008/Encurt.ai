import { Sparkles, Newspaper, MonitorPlay, LayoutGrid, PencilRuler, LinkIcon, QrCode, Home, LineChart, MessageCircleMore, Settings } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Logo from "./logo";
import { ModeToggle } from "./ui/mode-toggle";
import CreatePopover from "./create-popover";
import FeedbackDialog from "./feedback-dialog";

export default function LinksSidebar(){

    return(
        <aside className=" w-[250px] bg-background">

            <div className="h-10 items-center hidden justify-between mx-8 mt-5 sm:flex">
                <Link href='/'>
                    <div className="cursor-pointer flex-row">
                        <Logo/>
                        
                    </div>
                </Link>

                    
            </div>

            <div className="flex flex-col gap-2 mt-5">

                <div className="p-4">
                    <CreatePopover/>
                </div>


                <Link href='/dashboard'>
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300 ">
                        <Home strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">Home</span>
                    </div>
                </Link>
                <Link href='/dashboard/links'>
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300 ">
                        <LinkIcon strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">Links</span>
                    </div>
                </Link>
                <Link href='/dashboard/qrcodes'>
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300 ">
                        <QrCode strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">QR Codes</span>
                    </div>
                </Link>
                <Link href='/dashboard/analytics'>
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300 ">
                        <LineChart strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">Análises</span>
                    </div>
                </Link>

                <FeedbackDialog/>
                
                <Link href='/dashboard/settings' className=" mt-40">
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300">
                        <Settings strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">Configurações</span>
                    </div>
                </Link>
                
                    

                <div className="mt-0 h-12 items-center flex p-4 gap-4 mx-4  ">
                    <UserButton afterSignOutUrl="/"/>
                    <ModeToggle />
                    
                </div>
                
            </div>

            
        </aside>
    )
}