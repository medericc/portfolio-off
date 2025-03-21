import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons"; // Import du type pour react-icons

export type SideProjectProps = {
  Logo: LucideIcon | IconType; // Accepte les icônes de lucide-react et react-icons
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-3 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <div>
        <span className="text-accent-foreground rounded-sm">
          <props.Logo size={25} /> {/* Rend correctement toutes les icônes */}
        </span>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
