import React from "react";
import { NAVBAR_LINK } from "../../data";
import Logo from "../Logo";
import BtnIconRounded from "../BtnIconRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Profile from "../Profile";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  ">
      <section>
        <Logo />
      </section>

      <section className="flex gap-8 bg-white rounded-full p-4 shadow-sm">
        {NAVBAR_LINK.map((link) => (
          <a
            key={link}
            href={link}
            className={`block font-semibold hover:text-primary ${
              link == "Home" && "text-primary"
            }`}
          >
            {link}
          </a>
        ))}
      </section>

      <section className="flex items-center justify-between gap-8">
        <BtnIconRounded>
          {" "}
          <NotificationsNoneIcon />{" "}
        </BtnIconRounded>
        <BtnIconRounded>
          {" "}
          <BedtimeIcon />{" "}
        </BtnIconRounded>
        <Profile />
      </section>
    </div>
  );
};

export default Navbar;
