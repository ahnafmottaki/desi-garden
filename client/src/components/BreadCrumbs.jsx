import React from "react";
import { Link, useLocation } from "react-router";

const BreadCrumbs = () => {
  const location = useLocation();
  const fields = location.pathname.split("/").slice(1);
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {fields.map((field, index) => {
          return (
            <li key={field}>
              <Link
                to={"/" + fields.slice(0, index + 1).join("/")}
                className="font-medium"
              >
                {field}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
