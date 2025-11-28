import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-featured online store built with Next.js, Stripe, and Tailwind CSS.",
        tags: ["Next.js", "TypeScript", "Stripe"],
        link: "https://github.com/1darkz/GearGrid",
    },
    {
        title: "Neural Network",
        description: "A simple neural network using Python to understand the fundamentals of machine learning.",
        tags: ["Python", "Machine Learning", "Numpy"],
        link: "https://github.com/1darkz/NeuralNetwork",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio site showcasing projects and skills (like this one!).",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        link: "https://github.com/1darkz/portfolio",
    },
]

export function Projects() {
    return (
        <Section id="projects">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl text-center">Featured Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={project.link}>View Project</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    )
}
