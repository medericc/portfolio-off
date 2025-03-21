import { PropsWithChildren } from 'react';
import classNames from 'classnames';

export type SectionProps = PropsWithChildren<{
    className?: string;
}>;

export const Section = (props: SectionProps) => {
    return (
        <section
            className={classNames(
                "md:my-10 lg:my-14 max-w-4xl m-auto lg:px-6 px-4 my-16",
                props.className
            )}
        >
            {props.children}
        </section>
    );
};
