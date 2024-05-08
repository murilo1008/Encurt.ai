import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewLinkInBio(){
    return(
        <div className="flex flex-col w-full items-center md:pt-40 pt-32 p-5 gap-8">
            <h1 className="text-3xl font-bold text-center">Seja PRO para criar seu link in bio com a <span className="text-primary">Encurt</span>.ai</h1>
            <p className="md:w-[500px] w-full md:text-base text-sm text-center">Crie seu link in bio para suas redes sociais e divulgar em massa os links para seus seguidores. Para isso, faça o upgrade do seu plano!</p>

            <Link href={"/dashboard/upgrade"}>
                <Button>
                    Upgrade
                </Button>
            </Link>
        </div>
    )
}