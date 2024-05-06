'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

export default function SignsButtons(){

    const user = useAuth()

    return(
        <div className="flex gap-3">
            {user.isSignedIn ? (
                <Link href={"/dashboard"} className="group">
                    <Button className="flex items-center gap-1" variant="outline">
                        <span>Dashboard</span>
                        <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 ease-in-out duration-300 group-hover:text-primary"/>
                    </Button>
                </Link>

            ) : (
                <>
                    <div className="md:flex hidden">
                        <SignInButton mode="modal">
                            <Button className="w-24" variant="outline">
                                Entrar
                            </Button>
                        </SignInButton>
                    </div>


                    <div>
                        <SignUpButton mode="modal">
                            <Button className="w-24">
                                Cadastrar
                            </Button>
                        </SignUpButton>
                    </div>

                </>

            )}

        </div>
    )
}