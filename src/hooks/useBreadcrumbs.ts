import { NextRouter, useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

type RouteType = {
  path: string;
  name: string;
};

/**
 * @function React hook for quick and elegant breadcrumbs generation. Made for Next.js
 * @returns Array with breadcrumbs
 */
export default function useBreadcrumbs(): Array<RouteType> {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<RouteType>>([]);

  const router: NextRouter = useRouter();

  const routeObjects = useCallback(() => {
    const routeObjects: Array<RouteType> = [{ path: "/", name: "Home" }];

    const pathname = router.pathname;
    const paths = pathname.slice(1).split("/");

    paths.forEach((path, i) => {
      if (path === "") return;

      const newRoute = {
        path: "/" + paths.slice(0, i + 1).join("/"),
        name: capitalizeString(paths.slice(0, i + 1).at(-1)!),
      };

      routeObjects.push(newRoute);
    });

    return routeObjects;
  }, [router.pathname]);

  function capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setBreadcrumbs(routeObjects);
  }, [routeObjects]);

  return breadcrumbs;
}
