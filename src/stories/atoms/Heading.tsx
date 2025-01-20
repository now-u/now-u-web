import React from "react";

interface HeadingProps {
  style: "primary" | "secondary" | "tertiary" | "quaternary";
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({
  style,
  eyebrow,
  title,
  subtitle,
}) => {
  switch (style) {
    case "primary":
      return (
        <header>
          <div className="flex flex-col items-start gap-4" role="presentation">
            <p className="text-eyebrow text-txt-secondary uppercase tracking-[8%]">
              {eyebrow}
            </p>
            <h1 className="text-h1 text-txt-primary">{title}</h1>
            <p className="text-h3 text-txt-secondary">{subtitle}</p>
          </div>
        </header>
      );
    case "secondary":
      return (
        <header>
          <div className="flex flex-col items-start gap-4" role="presentation">
            <p className="text-eyebrow text-txt-secondary uppercase tracking-[8%]">
              {eyebrow}
            </p>
            <h2 className="text-h2 text-txt-primary">{title}</h2>
            <p className="text-h4 text-txt-secondary">{subtitle}</p>
          </div>
        </header>
      );
    case "tertiary":
      return (
        <header>
          <div className="flex flex-col items-start gap-2" role="presentation">
            <p className="text-eyebrow text-txt-secondary uppercase tracking-[8%]">
              {eyebrow}
            </p>
            <h3 className="text-h3 text-txt-primary">{title}</h3>
            <p className="text-h5 text-txt-secondary">{subtitle}</p>
          </div>
        </header>
      );
    case "quaternary":
      return (
        <header>
          <div className="flex flex-col items-start gap-2" role="presentation">
            <p className="text-eyebrow text-txt-secondary uppercase tracking-[8%]">
              {eyebrow}
            </p>
            <h4 className="text-h4 text-txt-primary">{title}</h4>
            <p className="text-h6 text-txt-secondary">{subtitle}</p>
          </div>
        </header>
      );
  }
};

export default Heading;
