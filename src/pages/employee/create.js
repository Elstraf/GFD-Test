import { lazy, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle, createEmployee } from "../../api/EmployeeApi";
import { getDepartments } from "../../api/DepartmentApi";
import Header from "../../components/Header";
import { CircularProgress } from "@material-ui/core";
export default function EmployeeCreate({ route }) {
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);
  const [noneEmployee, setNoneEmployee] = useState(false);

  const [loading, setLoading] = useState({ status: false, data: false });

  let history = useHistory();

  const getData = async () => {
    const dep = await getDepartments();
    setDep(dep);
  };

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSave = async (isCurrentEmployee) => {
    setLoading({ status: true, data: "Saving" });
    const newData = data;
    newData["current_employee"] = isCurrentEmployee;
    const res = await createEmployee(newData);
    setLoading({ status: true, data: "Success, Please Wait..." });
    setTimeout(() => {
      history.push("/employee");
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  if (dep) {
    return (
      <>
        <Header name="Create " />
        {loading.status === true && <CircularProgress />}
        <EmployeeForm
          data={data}
          type="edit"
          department={dep}
          handleChange={handleChange}
          handleSave={handleSave}
          noneEmployee={noneEmployee}
        />
      </>
    );
  } else return <>Loading</>;
}
