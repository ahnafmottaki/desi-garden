import { NavLink } from "react-router";

export default function CustomLink({ Element = "li", children, ...props }) {
  return (
    <Element>
      <NavLink
        {...props}
        className={({ isActive }) =>
          ` text-2xl font-medium ${isActive ? "link" : ""}`
        }
      >
        {children}
      </NavLink>
    </Element>
  );
}
