import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"

export function Contact() {
    return (
        <Section id="contact" className="bg-muted/50">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <a href="mailto:daniel444almeida@outlook.com">Say Hello</a>
                    </Button>
                </div>
            </div>
        </Section>
    )
}
