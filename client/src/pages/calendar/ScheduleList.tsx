import { gql, useQuery } from "@apollo/client";

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

export default function ScheduleList() {
  const { data, loading, error } = useQuery(ALL_SCHEDULE);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }
  console.log(data);
  return <div></div>;
}
