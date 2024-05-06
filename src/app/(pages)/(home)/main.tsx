import { Button } from "@/components/ui/button";

export default function Main(){
    return(
        <div className="flex flex-col h-lvh justify-center items-center w-full bg-gradient-to-br from-background from-70% to-primary p-5 rounded-b-3xl">
            <h1 className="text-center md:text-6xl text-2xl md:w-2/3 font-extrabold">Links curtos que geram <span className="text-primary">vendas, leads e insights</span></h1>
            <p className="text-center md:text-2xl md:w-1/2 mt-5 text-muted-foreground">Saiba exatamente como seus links estão performando e otimize suas campanhas com <span className="text-primary font-bold">muito mais eficiência</span>.</p>
            <Button className="mt-10 text-lg">Começar agora</Button>
        </div>
    )
}