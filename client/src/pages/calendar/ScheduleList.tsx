import Stack from "@mui/material/Stack";
import Day from "./component/Day";

export default function ScheduleList(props: any) {
  const { curCalendar, year, month } = props;

  const lastDate = new Date(year, month, 0).getDate();
  const thisMonth = new Array(lastDate).fill([]);

  for (let i = 0; i < curCalendar.length; i++) {
    thisMonth[parseInt(curCalendar[i].date.slice(4)) - 1] =
      curCalendar[i].participants;
  }

  return (
    <Stack sx={{ width: 400, textAlign: "center" }}>
      {thisMonth.map((day: any, idx: number) => {
        const today = (new Date(year, month + 1, idx + 1).getDay() + 1) % 7;
        return (
          <Day key={idx} date={idx + 1} day={today} participants={day}></Day>
        );
      })}
    </Stack>
  );
}
