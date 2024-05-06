import { Button } from "@/components/ui/button";

export default function Main(){
    return(
        <div className="flex flex-col h-lvh justify-center items-center w-full bg-gradient-to-br from-background from-70% to-primary">
            <h1 className="text-center text-6xl w-2/3 font-extrabold">Links curtos que geram <span className="text-primary">vendas, leads e insights</span></h1>
            <p className="text-center text-2xl w-1/2 mt-5 text-muted-foreground">Saiba exatamente como seus links estão performando e otimize suas campanhas com <span className="text-primary">muito mais eficiência</span>.</p>
            <Button className="mt-16 text-lg">Começar agora</Button>
        </div>
    )
}