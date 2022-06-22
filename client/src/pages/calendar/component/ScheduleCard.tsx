import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteSchedule from "./DeleteSchedule";
import { useState } from "react";
export default function ScheduleCard(props: any) {
  const { date } = props;
  const { name, branch, time, _id } = props.participant;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box width="100px" sx={{ p: 1, border: "1px solid black" }}>
      <div>
        {name} <HighlightOffIcon onClick={handleToggle} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <DeleteSchedule
            handleClose={handleClose}
            date={date}
            _id={_id}
          ></DeleteSchedule>
        </Backdrop>
      </div>
      <div>{`${branch} ${time}시`}</div>
    </Box>
  );
}
