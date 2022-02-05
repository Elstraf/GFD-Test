import { useEffect, useState } from "react";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle, updateEmployee } from "../../api/EmployeeApi";
import { getDepartments } from "../../api/DepartmentApi";

export default function EmployeeEdit({ route }) {
  console.log(route);
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);

  const getData = async () => {
    const res = await getEmployeeSingle(route.match.params.id);
    setData(res[0]);

    const dep = await getDepartments();
    setDep(dep);
  };

  const handleDepartmentChange = (name, value) => {};

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSave = async () => {
    const res = await updateEmployee(route.match.params.id, data);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  if (data) {
    return (
      <>
        <EmployeeForm
          data={data}
          type="edit"
          department={dep}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </>
    );
  } else return <>Loading</>;
}
