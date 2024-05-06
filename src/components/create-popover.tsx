import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LinkIcon, QrCode } from "lucide-react";

export default function CreatePopover(){
    return(
        <Popover>
            <PopoverTrigger asChild>
                <Button className="w-full h-10 rounded-sm font-bold">Criar Novo</Button>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-0">
                <Link href={"/dashboard/links/create"}>
                    <Button variant={"outline"} className="flex gap-2 w-full border-none justify-start rounded-none bg-transparent">
                        <LinkIcon strokeWidth={2} className="w-4 h-4"/> 
                        <span>Link</span>
                    </Button>
                </Link>
                <Link href={"/dashboard/qrcodes/create"}>
                    <Button variant={"outline"} className="flex gap-2 w-full border-none justify-start rounded-none bg-transparent">
                        <QrCode strokeWidth={2} className="w-4 h-4"/> 
                        <span>QR Code</span>
                    </Button>
                </Link>
            </PopoverContent>
        </Popover>
    )
}