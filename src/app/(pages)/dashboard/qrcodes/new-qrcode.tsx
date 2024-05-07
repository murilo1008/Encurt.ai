import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewQRCode(){
    return(
        <div className="flex flex-col w-full items-center md:pt-40 pt-32 p-5 gap-8">
            <h1 className="text-3xl font-bold text-center">Conecte com seus clientes com a <span className="text-primary">Encurt</span>.ai</h1>
            <p className="md:w-[500px] w-full md:text-base text-sm text-center">Crie um QR Code a partir de qualquer link curto. Em seguida, edite, personalize e rastreie seus códigos QR aqui.</p>

            <Link href={"/dashboard/qrcodes/create"}>
                <Button>
                    Crie um QR Code
                </Button>
            </Link>
        </div>
    )
}