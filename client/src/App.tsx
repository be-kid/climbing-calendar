import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScheduleList from "./pages/calendar/ScheduleList";
import CalendarController from "./pages/calendar/CalendarController";
import { gql, useQuery } from "@apollo/client";
import Stack from "@mui/material/Stack";

// 전체 스케쥴을 불러오는 쿼리
const ALL_SCHEDULE = gql`
  query {
    getAllSchedule {
      date
      participants {
        name
        branch
        time
        _id
      }
    }
  }
`;

function App() {
  // 처음 로딩될 때의 년, 월을 지정
  const curYear = new Date().getFullYear().toString().slice(2);
  const curMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");

  const [year, setYear] = useState(curYear);
  const [month, setMonth] = useState(curMonth);

  // 전체 스케쥴 요청
  const { data, loading, error } = useQuery(ALL_SCHEDULE);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }

  // 현재 보여지는 달의 스케쥴만 필터링
  const curCalendar = data.getAllSchedule.filter((today: any) => {
    return today.date.slice(0, 4) === year + month;
  });

  // console.log(curCalendar);
  // <, > 버튼을 눌렀을 때 월을 +, - 해주는 함수
  const calendarChange = (upOrDown: string, year: string, month: string) => {
    if (upOrDown === "up") {
      if (month === "12") {
        setMonth("01");
        setYear((parseInt(year) + 1).toString());
      } else {
        setMonth((parseInt(month) + 1).toString().padStart(2, "0"));
      }
    } else if (upOrDown === "down") {
      if (month === "01") {
        setMonth("12");
        setYear((parseInt(year) - 1).toString());
      } else {
        setMonth((parseInt(month) - 1).toString().padStart(2, "0"));
      }
    }
  };
  // CalendarController : <, > 버튼으로 달력을 넘김
  // ScheduleList : 1일부터의 스케쥴을 모두 보여주는 리스트
  return (
    <Stack justifyContent="center" alignItems="center">
      <Header />
      <CalendarController
        calendarChange={calendarChange}
        year={year}
        month={month}
      />
      <ScheduleList curCalendar={curCalendar} year={year} month={month} />
      <Footer />
    </Stack>
  );
}

export default App;
