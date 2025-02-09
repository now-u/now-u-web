import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface ContactTileProps {
  icon: IconDefinition;
  email: string;
  emailDescription: string;
}

export function ContactTile(props: ContactTileProps): JSX.Element {
  return (
    <div className="bg-cream w-full p-4 rounded-xl hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-xs">
      <Link href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
        <div className="flex flex-col sm:flex-row">
          <div className="text-center s:w-32 p-12 object-center stroke-1 text-8xl font-light">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="text-center max-w-sm m-auto">
            <h2 className="font-bold mb-2">{props.email}</h2>
            <h3>{props.emailDescription}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
