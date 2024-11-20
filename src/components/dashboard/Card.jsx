import { Button } from "@mui/material";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const Card = ({ title, subtitle, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="text-white rounded-lg flex flex-col pt-16 pb-4 shadow-sm">
      <section className="mx-auto my-auto text-center">
        <p className="font-semibold text-xl">{title}</p>
        <p className="font-semibold text-5xl">{subtitle}</p>
      </section>
      <section className="ml-auto mt-auto">
        <Button className="!text-inherit">

        <AddBoxRoundedIcon/>
        </Button>
        {/* <Button sx={{color:bgColor}} className="!bg-white !min-w-0 !text-4xl !p-2">+</Button> */}
      </section>
    </div>
  );
};

export default Card;
