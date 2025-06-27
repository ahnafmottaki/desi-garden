import { Suspense, useEffect, useRef, useState } from "react";
import logo from "/logo.png";
import {
  FiChevronDown,
  FiChevronsRight,
  FiHome,
  FiMonitor,
  FiShoppingCart,
} from "react-icons/fi";
import { SiBookstack } from "react-icons/si";
import { motion } from "motion/react";
import { Await, Link, Outlet, useLoaderData } from "react-router";
import useAuthContext from "../../contexts/AuthContext/AuthContext";
import MyButton from "../../components/MyButton";
import BreadCrumbs from "../../components/BreadCrumbs";
import Loader from "../../components/Loader";

const DashBoard = () => {
  const { allDataPromise } = useLoaderData();
  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={allDataPromise}>
        {(allData) => (
          <div className="flex" data-theme="light">
            <Sidebar allData={allData} />
            <ExampleContent />
          </div>
        )}
      </Await>
    </Suspense>
  );
};

const Sidebar = ({ allData }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className={`sticky  text-black top-0  h-screen shrink-0 border-r border-slate-300 bg-white p-2 ${
        open ? " w-[225px] max-sm:w-[56px]  " : "fit-content"
      }`}
      // style={{
      //   width: open ? "225px" : "fit-content",
      // }}
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
          notifs={allData.tips_count}
        />
        <Option
          Icon={FiShoppingCart}
          title="My Tips"
          link={"/dashboard/mygardentips"}
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiMonitor}
          title="View Gardeners"
          link={"/dashboard/gardeners"}
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={allData.gardeners_count}
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
            className="text-xs font-medium max-sm:hidden"
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
            className="absolute max-sm:hidden right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
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
    <div className="mb-3  border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="max-sm:hidden"
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
      className="absolute max-sm:hidden bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
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

const ExampleContent = () => {
  const { user } = useAuthContext();
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= headerRef.current.offsetHeight) {
        return setIsSticky(true);
      }
      setIsSticky(false);
    };
  });
  return (
    <div className="h-[screen] overflow-auto  w-full pt-[56px] relative">
      <h1
        ref={headerRef}
        className={`${
          isSticky ? "sticky" : ""
        } text-right absolute w-full  bg-slate-100 px-4 rounded-sm flex justify-between  items-center py-2  font-medium text-slate-500 top-0 right-0 z-50 `}
      >
        <div className="w-10 aspect-square rounded-full overflow-hidden">
          <img src={user.photoURL} alt={user.displayName} className="" />
        </div>
        <Link to="/">
          <MyButton>Go Back</MyButton>
        </Link>
      </h1>
      <div className="my-5 pl-4">
        <BreadCrumbs />
      </div>
      <Outlet />
    </div>
  );
};

export default DashBoard;
