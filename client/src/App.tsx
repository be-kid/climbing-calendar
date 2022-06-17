import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScheduleList from "./pages/calendar/ScheduleList";
import CalendarController from "./pages/calendar/CalendarController";
import { gql, useQuery } from "@apollo/client";
import Stack from "@mui/material/Stack";

const ALL_SCHEDULE = gql`
  query {
    getAllSchedule {
      date
      participants {
        name
        branch
        time
        password
      }
    }
  }
`;

function App() {
  const curYear = new Date().getFullYear().toString().slice(2);
  const curMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");

  const [year, setYear] = useState(curYear);
  const [month, setMonth] = useState(curMonth);

  const { data, loading, error } = useQuery(ALL_SCHEDULE);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }

  const curCalendar = data.getAllSchedule.filter((today: any) => {
    return today.date.slice(0, 4) === year + month;
  });

  console.log(curCalendar);
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
  return (
    <Stack textAlign={"center"}>
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
