import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Backdrop from "@mui/material/Backdrop";
import ScheduleCard from "./ScheduleCard";
import { gql } from "@apollo/client";
import { useState } from "react";
import ScheduleRegister from "./ScheduleRegister";

export default function Day(props: any) {
  const { year, month, date, day, participants } = props;
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const fullDate = year + month + date.toString().padStart(2, "0");

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  // const ADD_SCHEDULE = gql`
  //    {
  //     addSchedule(schedule: {
  //       date: ${req_date},
  //       name: ${}
  //     })
  //   }
  // `

  const handleName = (event: any) => {
    setName(event.currentTarget.value);
  };
  const handleBranch = (branchName: string) => {
    setBranch(branchName);
  };

  const handleStartTime = (event: any) => {
    setStartTime(event.currentTarget.value);
  };

  const handleEndTime = (event: any) => {
    setEndTime(event.currentTarget.value);
  };

  const handlePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  // ScheduleCard -> 이름, 지점, 시간으로 참여 정보를 알려줌
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
      <Box sx={{ p: 2 }}>
        <AddCircleIcon color="primary" onClick={handleToggle}>
          add_circle
        </AddCircleIcon>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <ScheduleRegister
            handleName={handleName}
            handleBranch={handleBranch}
            handleStartTime={handleStartTime}
            handleEndTime={handleEndTime}
            handlePassword={handlePassword}
            handleClose={handleClose}
          />
        </Backdrop>
      </Box>
    </Stack>
  );
}
