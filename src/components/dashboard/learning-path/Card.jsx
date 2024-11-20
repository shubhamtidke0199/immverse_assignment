import TableChartIcon from "@mui/icons-material/TableChart";
import { Button } from "@mui/material";

const Card = ({title,date}) => {
  return (
    <div className="flex items-center justify-between px-4 py-6 shadow-lg rounded-xl">
      <section className="flex items-center gap-2">
        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
          <TableChartIcon className="!text-4xl text-white" />
        </div>
        <div>
          <header className="text-xl font-bold">{title}</header>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </section>
      <Button className="!bg-primary !normal-case !text-white !rounded-xl">Start</Button>
    </div>
  );
};

export default Card;
