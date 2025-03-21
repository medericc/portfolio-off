"use client";
import { Section } from "./Section";
import { CustomIcons } from "./icons/CustomIcons";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export const Skills = () => {
    const [pdfUrl, setPdfUrl] = useState("");

    const handleIconClick = (url: string) => {
        setPdfUrl(url);
    };

    return (
        <Section className="flex-col items-start gap-4">
            <Badge variant={"outline"} className="mb-4">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">I love working on</h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="reactjs"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">React JS</h3>
                    <p className="text-sm text-muted-foreground">My main framework is React.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="tailwind"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">Tailwind</h3>
                    <p className="text-sm text-muted-foreground">I like using Tailwind for CSS.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <CustomIcons
                        name="php"
                        className="animate-spin"
                        style={{ animationDuration: "10s" }}
                        size={62}
                    />
                    <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">PHP</h3>
                    <p className="text-sm text-muted-foreground">I like using PHP for backend.</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex flex-col gap-4 cursor-pointer" onClick={() => handleIconClick("python.png")}>
                            <CustomIcons
                                name="django"
                                className="animate-spin"
                                style={{ animationDuration: "10s" }}
                                size={62}
                            />
                            <h3 className="mt-2 mb-1 text-2xl font-semibold tracking-tight">Django</h3>
                            <p className="text-sm text-muted-foreground">I like using Django for backend.</p>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-2xl h-[80vh]">
                        <DialogHeader>
                            <DialogTitle>PDF Viewer</DialogTitle>
                            <DialogDescription>Here is the PDF you requested.</DialogDescription>
                        </DialogHeader>
                        <iframe src={pdfUrl} className="w-full h-full" />
                    </DialogContent>
                </Dialog>
            </div>
        </Section>
    );
};
