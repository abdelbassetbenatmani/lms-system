import { FC } from "react";

interface HeadingProps {
    title:string;
    description:string;
    keywords:string;
}

export const Heading: FC<HeadingProps> = ({ title,description,keywords }) => {
  return (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>);
};

