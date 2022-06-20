import Stack from "@mui/material/Stack";
import Day from "./component/Day";

export default function ScheduleList(props: any) {
  const { curCalendar, year, month } = props;

  // 이번 달의 일 수
  const lastDate = new Date(year, month, 0).getDate();

  // 각 날짜별 스케쥴을 담을 배열
  const thisMonth = new Array(lastDate).fill([]);

  // 해당 날짜의 참여자 정보를 저장
  for (let i = 0; i < curCalendar.length; i++) {
    thisMonth[parseInt(curCalendar[i].date.slice(4)) - 1] =
      curCalendar[i].participants;
  }

  // Day 컴포넌트에 날짜, 요일, 참여자 정보를 전달
  return (
    <Stack sx={{ width: 400, textAlign: "center" }}>
      {thisMonth.map((day: any, idx: number) => {
        const today = (new Date(year, month + 1, idx + 1).getDay() + 1) % 7;
        return (
          <Day
            key={idx}
            year={year}
            month={month}
            date={idx + 1}
            day={today}
            participants={day}
          ></Day>
        );
      })}
    </Stack>
  );
}
