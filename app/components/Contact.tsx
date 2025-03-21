import { Badge } from "@/components/ui/badge"
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex-col items-start gap-4">
            <Badge variant={"outline"} className="mb-4">Contact</Badge>
            <h2 className="mb-4 pb-2 text-3xl font-semibold tracking-tight first:mt-8">I will be happy to work with you.</h2>
            <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard
                    className="flex-1"
                    url="https://flowbite.com/blocks/marketing/feature/"
                    name="Médéric"
                    image="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                    mediumImage="https://th.bing.com/th/id/R.660f10b742658236a5d84335bb69a7a7?rik=xUX65Q%2fTmhGVsA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKin%2fo9G%2fKino9G7pT.png&ehk=05nNScAFF03pcIzQZzKkx2VHg23YrsFZClTGpVXhRUI%3d&risl=&pid=ImgRaw&r=0"
                    description="+3313843216"
                />
                <ContactCard
                    className="flex-1"
                    url="https://flowbite.com/blocks/marketing/feature/"
                    name="Médéric"
                    image="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                    mediumImage="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"
                    description="Join Me"
                />
                <ContactCard
                    className="flex-1"
                    url="mailto:bordenave.mederic2@gmail.com"
                    name="Médéric"
                    image="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                    mediumImage="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png"
                    description="Send mails."
                />
                
            </div>
        </Section>
    );
};
