import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header(){
    return(
        <div className="fixed z-50 flex w-full justify-between items-center md:p-16 p-5 md:px-20">
            <Logo/>
            <ModeToggle/>
        </div>
    )
}