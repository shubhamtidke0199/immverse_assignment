import React from "react";
import { SIDEBAR_LINKS } from "../data";

const Sidebar = () => {
  return (
    <div className="w-fit bg-white shadow-sm rounded-lg pr-16 pl-6 py-8 h-full">
      <section className="grid gap-6  ">
        {SIDEBAR_LINKS.map((link) => (
          <a
            key={link.text}
            href={link.text}
            className={`flex items-center gap-4 hover:text-primary  ${
              link.text == "Dashboard" && "text-primary"
            } `}
          >
            <link.icon />

            {link?.text}
          </a>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
