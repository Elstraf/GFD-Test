import { CommitSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle } from "../../api/EmployeeApi";

export default function EmployeeView({ route }) {
  console.log(route);
  const [data, setData] = useState(false);

  const getData = async () => {
    const res = await getEmployeeSingle(route.match.params.id);
    setData(res[0]);
    console.log(res[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <>
        <EmployeeForm data={data} />
      </>
    );
  } else return <>Loading</>;
}
