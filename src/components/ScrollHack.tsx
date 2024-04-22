'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollHack(): JSX.Element {
	// Next links scrolling to the top of the page seem to be dodgy for
	// us and others, see https://github.com/vercel/next.js/issues/45187
	// This is a temporary hack which we can hopefully remove if we/they
	// find a better fix
	const pathname = usePathname();

	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}
