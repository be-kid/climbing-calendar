import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { gql, useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";

const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($schedule: DeleteScheduleInput) {
    deleteSchedule(schedule: $schedule)
  }
`;

export default function DeleteSchedule(props: any) {
  const { _id, date } = props;

  const [deleteSchedule, { data }] = useMutation(DELETE_SCHEDULE);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleDeleteButton = async () => {
    await deleteSchedule({
      variables: {
        schedule: {
          _id,
          date,
          password,
        },
      },
    });
    props.handleClose();
    window.location.replace("/");
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
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          helperText="삭제하려면 처음 입력한 비번을 입력하세요"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          component="span"
          onClick={handleDeleteButton}
          sx={{ margin: "5px" }}
        >
          삭제
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
