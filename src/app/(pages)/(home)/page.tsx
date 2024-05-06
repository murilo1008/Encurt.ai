import { ModeToggle } from "@/components/ui/mode-toggle";
import Header from "./header";
import Main from "./main";
import Goal from "./goal";

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-between">
            <Header/>
            <Main/>
            <Goal/>
        </div>
    )
}