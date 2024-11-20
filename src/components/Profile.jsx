import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Profile = () => {
  return (
    <div className="flex items-center justify-between gap-8 bg-white rounded-full p-1 shadow-sm">
      <section className="flex items-center gap-2">
        <div className="min-w-10 max-w-10 max-h-10 min-h-10 bg-primary rounded-full">
          {/* <img alt="user avatar"  /> */}
        </div>
        <p className="font-semibold">Avinash</p>
      </section>

      <KeyboardArrowDownIcon className="text-primary" />
    </div>
  );
};

export default Profile;
