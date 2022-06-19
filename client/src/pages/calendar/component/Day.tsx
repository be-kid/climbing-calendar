import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ScheduleCard from "./ScheduleCard";

export default function Day(props: any) {
  const { date, day, participants } = props;
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Stack direction="row" spacing={1}>
      <Box sx={{ p: 2, border: "1px solid black" }}>
        <div>{`${date}일`}</div>
        <div>{`${week[day]}요일`}</div>
      </Box>
      {participants.map((participant: any, idx: number) => {
        return (
          <ScheduleCard key={idx} participant={participant}></ScheduleCard>
        );
      })}
    </Stack>
  );
}
