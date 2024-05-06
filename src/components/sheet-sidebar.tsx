"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import LinksSidebar from "./links-sidebar"
import {usePathname} from "next/navigation";
import { useEffect, useState } from "react";

export default function SheetSideBar(){
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(() => {
        // Define a função de retorno do useEffect para fechar o Sheet quando o pathname mudar
        if (isOpen && pathname) {
            setIsOpen(false);
        }
    }, [pathname]); // Executa o efeito sempre que o pathname mudar

    const toggleSheet = () => {
        setIsOpen(!isOpen);
    };

    const handleOpenChange = (open: boolean | ((prevState: boolean) => boolean)) => {
        if (isOpen && !open) {
            return;
        }
        setIsOpen(open);
    };


    return(
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetTrigger onClick={toggleSheet} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </SheetTrigger>
                
                <SheetContent className="w-[340px] bg-background">

                    <LinksSidebar/>

                </SheetContent>
            </Sheet>
        </>
    )
}