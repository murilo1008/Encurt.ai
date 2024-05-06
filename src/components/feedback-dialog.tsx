import { MessageCircleMore, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";

export default function FeedbackDialog(){
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <div className="gap-5 h-10 items-center flex bg-background p-4 mx-4 rounded cursor-pointer hover:bg-muted ease-in-out duration-300">
                        <MessageCircleMore strokeWidth={2} className="h-5 w-5"/> 
                        <span className="text-base font-semibold">Feedbacks</span>
                    </div>
                </div>
            </DialogTrigger>

            <form>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Envie um feedback</DialogTitle>
                        <DialogDescription>
                            Fique a vontade para solicitar novas funcionalidades!
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex w-full">
                        <Textarea placeholder="Escreva aqui"/>
                    </div>
                
                    <DialogFooter>
                        <Button type="submit" className="w-24 self-end">Enviar</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}