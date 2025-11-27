"use client"

import Link from "next/link"

import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <Section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
                Building digital <br className="hidden sm:inline" />
                <span className="text-primary">experiences that matter.</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
                I'm a aspiring data scientist passionate about creating beautiful, functional, and user-centered data visualizations and models.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex gap-4"
            >
                <Button size="lg" className="gap-2" asChild>
                    <Link href="#projects">
                        View Projects <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="#contact">
                        Contact Me
                    </Link>
                </Button>
            </motion.div>
        </Section>
    )
}
