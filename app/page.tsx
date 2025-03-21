
import { Hero } from "./components/Hero";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className ="h-full" >

<Header/>
<Spacing height={1}/>
<Hero />
<Spacing height={1}/>
<Status/>
<Spacing height={1}/>
<Contact/>
<Spacing height={1}/>
<Footer />
    </main>
  );
}
