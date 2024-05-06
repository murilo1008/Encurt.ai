import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheck, Link, QrCode } from 'lucide-react'

export default function Goal(){
    return(
        <div className="flex flex-col w-full items-center md:mt-40 mt-20 p-5">
            <h1 className="text-center md:text-6xl text-2xl md:w-2/3 font-extrabold">Crie uma conta gratuitamente e coloque a <span className="text-primary">Encurt</span>.ai para trabalhar</h1>

            <Tabs defaultValue="link" className=" md:w-2/3 w-full mt-10">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="link" className="flex gap-2">
                        <Link strokeWidth={1.5} className="w-4 h-4"/>
                        Link Encurtado
                    </TabsTrigger>
                    <TabsTrigger value="qrcode" className="flex gap-2">
                        <QrCode strokeWidth={1.5} className="w-4 h-4"/>
                        QR Code
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="link">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Encurte um link</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Cole um URL</Label>
                                <Input id="name" placeholder="http://link-longo.com/encurte" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className=" md:self-start self-center">Cadastre-se e receba seu link</Button>
                            <div className="flex flex-col items-center w-full mt-10">
                                <p className="text-center md:text-2xl">Não é necessário cartão de crédito. Seu plano gratuito inclui:</p>
                                <div className="flex gap-10 mt-5 ">
                                    <div className="flex items-center gap-1">
                                        <CircleCheck strokeWidth={2} className="w-4 h-4 text-primary"/>
                                        <span>Links Curtos</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CircleCheck strokeWidth={2} className="w-4 h-4 text-primary"/>
                                        <span>QR Codes</span>
                                    </div>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="qrcode">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Crie um QR Code</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Cole um URL</Label>
                                <Input id="name" placeholder="http://link-longo.com/encurte" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button className=" md:self-start self-center">Cadastre-se e receba seu QR Code</Button>
                            <div className="flex flex-col items-center w-full mt-10">
                                <p className="text-center md:text-2xl">Não é necessário cartão de crédito. Seu plano gratuito inclui:</p>
                                <div className="flex gap-10 mt-5 ">
                                    <div className="flex items-center gap-1">
                                        <CircleCheck strokeWidth={2} className="w-4 h-4 text-primary"/>
                                        <span>Links Curtos</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CircleCheck strokeWidth={2} className="w-4 h-4 text-primary"/>
                                        <span>QR Codes</span>
                                    </div>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}