export default function Tabs({ children, ...props }) {
  return (
    <ul
      {...props}
      tabIndex={0}
      className="menu menu-sm bg-gray-700 dropdown-content  rounded-box z-1 mt-3 w-50 p-2 shadow"
    >
      {children}
    </ul>
  );
}
