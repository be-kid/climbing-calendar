import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Backdrop from "@mui/material/Backdrop";
import ScheduleCard from "./ScheduleCard";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import ScheduleRegister from "./ScheduleRegister";

const ADD_SCHEDULE = gql`
  mutation ($schedule: {
        date: String!
        name: String!
        branch: String!
        time: String!
        password: String!
      }){
    addSchedule(
      schedule: {
        date: $date
        name: $name
        branch: $branch
        time: $time
        password: $password
      }
    )
  }
`;

export default function Day(props: any) {
  const { year, month, date, day, participants } = props;
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const fullDate = year + month + date.toString().padStart(2, "0");

  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [time, setTime] = useState("");
  const [password, setPassword] = useState("");

  const [addSchedule, { data }] = useMutation(ADD_SCHEDULE);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleName = (event: any) => {
    setName(event.currentTarget.value);
  };
  const handleBranch = (branchName: string) => {
    setBranch(branchName);
  };

  const handleTime = (time: string) => {
    setTime(time);
  };

  const handlePassword = (event: any) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = () => {
    console.log(
      `fullDate:${fullDate}, name:${name}, branch:${branch}, time:${time}, password:${password}`
    );
    const date = fullDate;
    addSchedule({
      variables: {
        date,
        name,
        branch,
        time,
        password,
      },
    });
    // setName("");
    // setBranch("");
    // setStartTime("");
    // setPassword("");
    setOpen(false);
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
            handleStartTime={handleTime}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
        </Backdrop>
      </Box>
    </Stack>
  );
}
