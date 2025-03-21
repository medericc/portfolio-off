import Link from "next/link";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
 
}
export type CertProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
 
}

export const Work = (props: WorkProps) => {
  return (
    <Link 
    href={props.url}
    className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
    
         <img src={props.image} alt={props.title} className="w-8 h-8 object-contain" />
     










      <div>
        <p className="text-base font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
    

      <div className="ml-auto">
       <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    







  </Link> )
}
export const CERT = (props: CertProps) => {
  return (
    <Link 
    href={props.url}
    className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
    
         <img src={props.image} alt={props.title} className="w-8 h-8 object-contain" />
     










      <div>
        <p className="text-base font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
    

      <div className="ml-auto">
       <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    







  </Link> )
}
