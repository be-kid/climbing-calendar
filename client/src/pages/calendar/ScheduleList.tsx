import Stack from "@mui/material/Stack";
import Day from "./component/Day";

export default function ScheduleList(props: any) {
  const { curCalendar, year, month } = props;
  // TODO
  // year, month로 date 생성
  // 요일은 0-일요일 부터 6-토요일까지
  // date 만큼 Day 생성
  // Day에는 해당 날짜의 스케쥴을 넘겨줌

  const lastDate = new Date(year, month, 0).getDate();
  const thisMonth = new Array(lastDate).fill([]);

  for (let i = 0; i < curCalendar.length; i++) {
    thisMonth[parseInt(curCalendar[i].date.slice(4)) - 1] =
      curCalendar[i].participants;
  }

  return (
    <Stack sx={{ width: 400, textAlign: "center" }}>
      {thisMonth.map((day: any, idx: number) => {
        const today = new Date(year, month, idx + 1).getDay();
        return (
          <Day key={idx} date={idx + 1} day={today} participants={day}></Day>
        );
      })}
    </Stack>
  );
}
