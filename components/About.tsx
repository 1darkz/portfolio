import { Section } from "@/components/ui/Section"

export function About() {
    return (
        <Section id="about" className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                    <p className="text-lg text-muted-foreground">
                        I have a strong background in web development, specializing in React, Next.js, and TypeScript.
                        I love solving complex problems and turning ideas into reality through code.
                    </p>
                    <p className="text-lg text-muted-foreground">
                        When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying the outdoors.
                    </p>
                </div>
            </div>
        </Section>
    )
}
