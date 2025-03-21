import { Section } from "./Section";
import { YouTubeEmbed } from '@next/third-parties/google';

export const Footer = () => {
    return <Section className="max-w-none w-full border-t mt-32 py-12 md:py-14 lg:px-24 flex flex-col gap-4 border-t-accent">
<div className="max-w-2xl flex flex-col gap-4 m-auto">
<p className="text-center">
    Made by
    <a
    href="https://twitter.com/@marclou"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-1 text-accent-foreground underline"
    >
           Médéric
    </a>
</p>
<p className="text-muted-foreground text-center">
    @ {new Date().getFullYear()} ME. All Rights reserved.
 

    </p></div>
    </Section>
}