import React from "react";

const ProfileHeader = () => {
  return (
    <div className="bg-[#009CD8] rounded-xl flex items-center gap-2 px-10 py-8 shadow-lg">
      <section className="min-w-24 max-w-24 min-h-24 max-h-24 rounded-full bg-primary"></section>
      <section >
        <p className="text-white font-semibold text-3xl">Avishkar Watmode</p>
        <p className="text-gray-200">Student</p>
      </section>
    </div>
  );
};

export default ProfileHeader;
