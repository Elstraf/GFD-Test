import { CommitSharp } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import EmployeeForm from "../../modules/forms/EmployeeForm";

export default function EmployeeView({ route }) {
  console.log(route);
  const [data, setData] = useState(false);

  const getData = async () => {
    const res = axios.get("http://localhost:3004/employees", {
      params: { id: route.match.params.id },
    });
    res.then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <>
        <EmployeeForm />
      </>
    );
  } else return <>Loading</>;
}
