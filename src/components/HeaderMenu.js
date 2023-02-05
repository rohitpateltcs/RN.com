import Link from "next/link";

const HeaderMenu = ({ icon, title, path }) => {
  return (
    <div>
      <div>
        <Link href={path} className="hover:text-red-500">
          <div className="text-2xl sm:hidden">{icon}</div>
          <h2 className="hidden sm:inline font-bold">{title}</h2>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
