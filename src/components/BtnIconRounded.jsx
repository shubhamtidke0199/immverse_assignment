import { Button } from "@mui/material";

const BtnIconRounded = ({ children }) => {
  return (
    <Button className="!rounded-full !p-2 !min-w-0 !text-primary !bg-white">
      {children}
    </Button>
  );
};

export default BtnIconRounded;
