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
    <div className="">
      <div className={`pb-4 transition-all
      ${isExpanded ? "block": "hidden"}`}>{props.children}</div>
      <button
        className="text-left text-orange text-lg font-medium flex flex-row items-baseline gap-2"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {props.title}
        <FontAwesomeIcon size="xs" icon={isExpanded ? faChevronUp : faChevronDown} />
      </button>
    </div>
  );
}
