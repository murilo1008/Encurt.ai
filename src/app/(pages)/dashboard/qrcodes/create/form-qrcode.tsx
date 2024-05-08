'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import qrcodeimage from "../../../../../../public/qrcodeimage.png"
import Link from "next/link";
import { useForm } from "react-hook-form";

interface FormData {
    Url?: string;
    Titulo?: string;
    ShortedLink?: string;
}

export default function FormQRCode(){

    const {register, handleSubmit} = useForm()

    function onSubmit(data: FormData){
        const {Url, Titulo, ShortedLink} = data
    }

    return(
        <div className="flex md:flex-row flex-col w-full gap-5">
            <div className="flex flex-col md:w-2/3 w-full md:p-20 p-5">
                <h1 className="md:text-3xl text-xl font-bold">Criar QR Code</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="md:mt-5">
                    <div>
                        <div className="mt-5 space-y-1">
                            <Label htmlFor="url">Url de destino</Label>
                            <Input {...register("Url")} placeholder="http://link-longo.com/encurte"/>
                        </div>
                        <div className="mt-5 space-y-1">
                            <Label htmlFor="url">Título (Opcional)</Label>
                            <Input {...register("Titulo")}/>
                        </div>
                    </div>
                    <div className="w-full border-t mt-10 pt-5">
                        <h1 className="md:text-3xl text-xl font-bold">Link personalizado</h1>
                        <p className="text-muted-foreground text-sm">O link curto direciona os usuários ao site ou conteúdo vinculado ao seu QR Code. Se você atualizar o link curto após criar o QR Code, o código será alterado.</p>
                        <div className="flex md:flex-row flex-col justify-between mt-5 w-full gap-5">
                            <div className="flex flex-col space-y-1 w-full">
                                <Label htmlFor="url">Domínio</Label>
                                <Input disabled value={"encurt.ai"}/>
                            </div>
                            <span className="md:flex hidden text-2xl font-semibold mt-5">/</span>
                            <div className="flex flex-col space-y-1 w-full">
                                <Label htmlFor="url">Seu link curto (opcional)</Label>
                                <Input {...register("ShortedLink")} placeholder="(Aleatório se não for preenchido)"/>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-5 mt-16">
                        <Link href={"/dashboard/qrcodes"}>
                            <Button className="w-40" variant={"outline"}>Cancelar</Button>
                        </Link>

                        <Button className="w-40">Ir para o Design</Button>
                    </div>

                </form>
            </div>

            <div className="flex flex-col gap-2 md:w-1/3 bg-muted pt-20 items-center">
                <span className="text-xl font-semibold">Prévia</span>
                <Image src={qrcodeimage} alt="QR Code Image" width={1080} height={1080} className="h-64 w-64 md:mb-0 mb-20 object-contain"/>
            </div>
        </div>
    )
}