import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewLink(){
    return(
        <div className="flex flex-col w-full items-center md:pt-40 pt-32 p-5 gap-8">
            <h1 className="text-3xl font-bold text-center">Mais cliques no seu link com a <span className="text-primary">Encurt</span>.ai</h1>
            <p className="md:w-[500px] w-full md:text-base text-sm text-center">Encurte links longos e chame a atenção personalizando o que eles dizem. Chega de <span className="font-bold">encurt.ai/3yqawYa</span>, mais <span className="font-bold">encurt.ai/sua-marca</span>.</p>

            <Link href={"/dashboard/links/create"}>
                <Button>
                    Crie um link encurtado
                </Button>
            </Link>
        </div>
    )
}