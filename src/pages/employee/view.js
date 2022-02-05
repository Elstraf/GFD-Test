import { useEffect, useState } from "react";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle, updateEmployee } from "../../api/EmployeeApi";
import { getDepartments } from "../../api/DepartmentApi";
import Header from "../../components/Header";
export default function EmployeeView({ route }) {
  console.log(route);
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);
  const [noneEmployee, setNoneEmployee] = useState(false);
  const getData = async () => {
    const res = await getEmployeeSingle(route.match.params.id);
    setData(res[0]);
    setNoneEmployee(res[0].current_employee);

    const dep = await getDepartments();
    setDep(dep);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <>
        <Header name="View" />
        <EmployeeForm
          data={data}
          department={dep}
          noneEmployee={noneEmployee}
          type="edit"
        />
      </>
    );
  } else return <>Loading</>;
}
