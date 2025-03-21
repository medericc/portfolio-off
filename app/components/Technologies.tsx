import { Card } from "@/components/ui/card";
import { SiNextdotjs, SiFlutter, SiPostgresql  , SiPython } from "react-icons/si";

const TECHNOLOGIES = [
  { name: "Next JS", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Flask", icon: SiPython },
  { name: "SQL", icon: SiPostgresql   },
 
];

export const Technologies = () => {
  return (
    <Card className="p-4 mt-4">
      <h2 className="text-xl font-bold m-auto">Mes frameworks préférés</h2>
      <div className="flex justify-around mt-1">
        {TECHNOLOGIES.map((tech, index) => (
          <div key={index} className="text-center">
            <tech.icon className="text-4xl mb-2 m-auto" />
            <p className="font-semibold">{tech.name}</p>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
