import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function CalendarController(props: any) {
  const { year, month } = props;

  // 버튼 클릭 핸들러
  const buttonHandler = (event: any) => {
    props.calendarChange(event.currentTarget.id, year, month);
  };
  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>
          <ArrowBackIosNewIcon id="down" onClick={buttonHandler} />
        </Button>
        <Button disabled>{`${year}년 ${month}월`}</Button>
        <Button>
          <ArrowForwardIosIcon id="up" onClick={buttonHandler} />
        </Button>
      </ButtonGroup>
    </div>
  );
}
