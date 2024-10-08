"use client"

import { type ReactElement, type ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ExpandContentButton(props: {
  title: string;
  children: ReactNode;
}): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {isExpanded && <div className="transition-transform">{props.children}</div>}
      <button
        className="text-orange text-lg font-medium flex flex-row items-baseline gap-2"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {props.title}
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </button>
      ;
    </div>
  );
}
