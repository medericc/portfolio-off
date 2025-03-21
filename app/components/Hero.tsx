import { Section } from "./Section";

import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Médéric</h2>
                <h3 className="text-3xl font-caption">Software Engineer</h3>
                <p className="text-base">
                    My <Link href="www.twitter.com"><Code className="inline-flex items-center gap-1 font-bold">PORTFOLIO</Code></Link>
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img
                    src="https://yt3.ggpht.com/-_WPbqawy-4bRFPhSClf10d1ln54YTPSrqOZgg-0Reg09mgw1l7Mjxw9Vxz_Xvu-LjMcABtBsQ=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                    className="w-full h-auto max-w-xs max-md:w-56 rounded-full object-cover"
                    alt="img"
                />
            </div>
        </Section>
    );
};
