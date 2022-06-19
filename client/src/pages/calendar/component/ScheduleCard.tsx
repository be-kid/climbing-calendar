import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
export default function ScheduleCard(props: any) {
  const { participant } = props;
  const { name, branch, time, password } = participant;
  return (
    <Box sx={{ p: 2, border: "1px solid black" }}>
      <div>{name}</div>
      <div>
        {branch}, {time}
      </div>
    </Box>
  );
}
