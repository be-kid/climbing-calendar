import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ChangeEvent, useState } from "react";

export default function ScheduleRegister(props: any) {
  const branches = [
    {
      value: "설입",
      label: "설입",
    },
    {
      value: "신림",
      label: "신림",
    },
    {
      value: "연남",
      label: "연남",
    },
    {
      value: "홍대",
      label: "홍대",
    },
    {
      value: "양재",
      label: "양재",
    },
    {
      value: "일산",
      label: "일산",
    },
    {
      value: "마곡",
      label: "마곡",
    },
    {
      value: "기타",
      label: "기타",
    },
  ];

  const startTimes = [
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
  ];

  const [branchName, setBranchName] = useState("");
  const [startTime, setStartTime] = useState("0");

  const handleBranchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBranchName(event.target.value);
    props.handleBranch(event.target.value);
  };

  const handleStartTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
    props.handleStartTime(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        backgroundColor: "white",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          label="Name"
          onChange={props.handleName}
          helperText="이름을 입력하세요"
        />
      </div>
      <div>
        <TextField
          id="outlined-select-branch"
          select
          label="Select"
          value={branchName}
          onChange={handleBranchChange}
          helperText="지점을 고르세요"
        >
          {branches.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <TextField
          id="outlined-select-startTime"
          select
          label="Select"
          value={startTime}
          onChange={handleStartTimeChange}
          helperText="시작 시간을 고르세요"
        >
          {startTimes.map((time) => (
            <MenuItem key={time} value={time}>
              {time}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          helperText="스케쥴 삭제에 쓰이는 비번입니다.
          실제로 쓰는 비번을 넣지마세요;"
          onChange={props.handlePassword}
        />
      </div>
      <div>
        <Button
          variant="contained"
          component="span"
          onClick={async () => {
            await props.handleSubmit();
          }}
          sx={{ margin: "5px" }}
        >
          등록
        </Button>
        <Button
          variant="contained"
          component="span"
          onClick={props.handleClose}
          sx={{ margin: "5px" }}
        >
          취소
        </Button>
      </div>
    </Box>
  );
}
