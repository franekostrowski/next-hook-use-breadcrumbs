import useBreadcrumbs from "hooks/useBreadcrumbs";
import Link from "next/link";
import React from "react";

const Foo = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div style={{ display: "flex", gap: ".4rem" }}>
      {breadcrumbs.map((breadcrumb) => (
        <Link href={breadcrumb.path} key={breadcrumb.name}>
          {breadcrumb.name}
        </Link>
      ))}
    </div>
  );
};

export default Foo;
