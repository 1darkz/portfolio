import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by Daniel. The source code is available on{" "}
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/1darkz" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/danielalmeidaportela/" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
