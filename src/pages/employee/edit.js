import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle, updateEmployee } from "../../api/EmployeeApi";
import { getDepartments } from "../../api/DepartmentApi";
import Header from "../../components/Header";

export default function EmployeeEdit({ route }) {
  console.log(route);
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);
  const [noneEmployee, setNoneEmployee] = useState(false);
  const [loading, setLoading] = useState({ status: false, data: false });

  let history = useHistory();

  const getData = async () => {
    const res = await getEmployeeSingle(route.match.params.id);
    setData(res[0]);
    setNoneEmployee(res[0].current_employee);

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
    const res = await updateEmployee(route.match.params.id, newData);
    setLoading({ status: true, data: "Success, Please Wait..." });
    setTimeout(() => {
      history.push("/employee");
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  if (data && dep) {
    return (
      <>
        <Header name="Edit" />
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
