import type { ReactElement } from "react";

export type TestimonialType = {
    avatar: string;
    name: string;
    text: string;
}
export type TestimonialProps = {
    // onClick is optional and can be used to handle click events on the testimonial item
    onClick?: (avatar: string, name: string, text: string) => void;
} & TestimonialType;

export function TestimonialItem({ avatar, name, text, onClick }: TestimonialProps) {
    return (
        <li className="testimonials-item">
            <div className="content-card" onClick={() => {
                if (onClick) {
                    onClick(avatar, name, text);
                    console.log(`Clicked on testimonial: ${name}`);
                }
            }}>
                <figure className="testimonials-avatar-box">
                    <img
                        src={avatar}
                        alt={name}
                        width="60"
                    />
                </figure>
                <h4 className="h4 testimonials-item-title" >
                    {name}
                </h4>
                <div className="testimonials-text">
                    <p>{text}</p>
                </div>
            </div>
        </li>
    );
}

export function TestimonialList({
    children,
}: {
    children?: ReactElement<typeof TestimonialItem>[] | ReactElement<typeof TestimonialItem>;
}) {
    return <ul className="testimonials-list has-scrollbar">{children}</ul>;
}
