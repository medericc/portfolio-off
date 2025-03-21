import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, MessageCircle, Rss, StickyNote, ArrowUpRight, LucideIcon, Weight, Atom, Music, ListMusic, Wind, Database } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";
import { Technologies } from "./Technologies";
import { SiFlutter, SiPython } from "react-icons/si";


export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">

      <div className="flex-[3] w-full">

        <Card className="w-full p-4 flex flex-col gap-2 w-full">
        <div className="flex-[2] w-full flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
        <Technologies />
      </div>
      <div className="flex-[2] w-full flex flex-col gap-6">
        <Card className="p-3 flex-1">
          <p className="m-1 text-lg text-muted-foreground">School</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-3 flex-1">
          <p className="m-1 text-lg text-muted-foreground">Hobbies</p>
          <div className="flex flex-col gap-4">
            {CERT.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Wind, // Next.js + Tailwind CSS
    title: "Application Next.Js",
    description: "Next.Js et Tailwind CSS",
    url: "https://livrebiblique.vercel.app/",
  },
  {
    Logo: SiFlutter, // Flutter
    title: "Flutter",
    description: "Application en Dart",
    url: "/",
  },
  {
    Logo: SiPython, // Python (Backend)
    title: "Backend Python",
    description: "Backend d'un jeu",
    url: "https://github.com/medericc/EuroBasketBack",
  },
];



const CERT: CertProps[] = [
  
  {
    image: "oceanologie.png",
    title: "Océanographie",
    role: "Certificat",  
    url: "/oceanologie.png",
  },
  {
    image: "/cert.png",
    title: "Écologie",
    role: "Certificat",
    url: "/eco.pdf",
  },
  {
    image: "géopolitique.png",
    title: "Géopolitique",
    role: "Certificat",
    url: "/géopolitique.png",
  },
];

const WORKS: WorkProps[] = [

  {
    image: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Logo_OpenClassrooms.png",
    title: "OCR",
    role: "Intégrateur",
    date: "2023 - 2024",
    url: "https://openclassrooms.com/fr/",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFoHD1bTHjSxTczRK4W6fnz9agLahElcs8CW-Ms1-SqqRe7RxsZF7u0O2UrSTzUeDshX0&usqp=CAU",
    title: "B.T.S.",
    role: "Informatique",
    date: "2021 - 2023",
    url: "https://openclassrooms.com/fr/",
  },
];
