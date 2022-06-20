import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

export default function ScheduleRegister(props: any) {
  const branches = [
    {
      value: "SNU",
      label: "설입",
    },
    {
      value: "SL",
      label: "신림",
    },
    {
      value: "YN",
      label: "연남",
    },
    {
      value: "HIU",
      label: "홍대",
    },
    {
      value: "YJ",
      label: "양재",
    },
    {
      value: "IS",
      label: "일산",
    },
    {
      value: "MG",
      label: "마곡",
    },
    {
      value: "Etc",
      label: "기타",
    },
  ];

  const [branchName, setBranchName] = useState("");
  const handleBranchChange = (event: any) => {
    setBranchName(event.currentTarget.value);
    props.handleBranch(branchName);
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
        />
      </div>
      <div>
        <TextField
          id="outlined-select-branch"
          select
          label="Select"
          value={branchName}
          helperText="지점을 고르세요"
        >
          {branches.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={handleBranchChange}
            >
              {option.label}
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
        />
      </div>
      <div>
        <Button
          variant="contained"
          component="span"
          onClick={props.handleClose}
        >
          등록
        </Button>
      </div>
    </Box>
  );
}
