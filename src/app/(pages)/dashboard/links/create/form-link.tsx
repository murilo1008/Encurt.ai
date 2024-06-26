'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from 'react-hook-form'
import Link from "next/link";

interface FormData {
    Url?: string;
    Titulo?: string;
    ShortedLink?: string;
}

export default function FormLink(){

    const {register, handleSubmit} = useForm()

    function onSubmit(data: FormData){
        const {Url, Titulo, ShortedLink} = data
    }

    return(
        <div className="flex flex-col md:w-2/3 w-full md:p-20 p-5">
            <h1 className="md:text-3xl text-xl font-bold">Criar novo link</h1>

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
                    <Link href={"/dashboard/links"}>
                        <Button className="w-40" variant={"outline"}>Cancelar</Button>
                    </Link>

                    <Button className="w-40">Criar</Button>
                </div>

            </form>
        </div>
    )
}