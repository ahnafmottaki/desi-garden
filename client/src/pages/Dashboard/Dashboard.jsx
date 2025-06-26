import { useState } from "react";
import logo from "/logo.png";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { SiBookstack } from "react-icons/si";
import { motion } from "motion/react";
import { Link, Outlet } from "react-router";
import useAuthContext from "../../contexts/AuthContext/AuthContext";

const DashBoard = () => {
  return (
    <div className="flex text-black bg-indigo-50">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          link={"/dashboard"}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={SiBookstack}
          title="View Tips"
          link={"/dashboard/viewtips"}
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          Icon={FiMonitor}
          title="View Site"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiShoppingCart}
          title="Products"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiTag}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiUsers}
          title="Members"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, link, setSelected, open, notifs }) => {
  return (
    <Link to={link}>
      <motion.button
        layout
        onClick={() => setSelected(title)}
        className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
          selected === title
            ? "bg-indigo-100 text-indigo-800"
            : "text-slate-500 hover:bg-slate-100"
        }`}
      >
        <motion.div
          layout
          className="grid h-full w-10 place-content-center text-lg"
        >
          <Icon />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            {title}
          </motion.span>
        )}

        {notifs && open && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            style={{ y: "-50%" }}
            transition={{ delay: 0.5 }}
            className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
          >
            {notifs}
          </motion.span>
        )}
      </motion.button>
    </Link>
  );
};

const TitleSection = ({ open }) => {
  const { user } = useAuthContext();
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">Desi Garder</span>
              <span className="block text-xs text-slate-500">
                {user.displayName}
              </span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md hover:border-indigo-400 border border-transparent"
    >
      <img src={logo} className="w-full h-full rounded-sm " />
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => (
  <div className="h-[200vh] w-full">
    <Outlet />
  </div>
);

export default DashBoard;
