import { useEffect, useState } from "react";
import EmployeeForm from "../../modules/forms/EmployeeForm";
import { getEmployeeSingle, createEmployee } from "../../api/EmployeeApi";
import { getDepartments } from "../../api/DepartmentApi";

export default function EmployeeCreate({ route }) {
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);
  const [noneEmployee, setNoneEmployee] = useState(false);

  const getData = async () => {
    const dep = await getDepartments();
    setDep(dep);
  };

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleSave = async (isCurrentEmployee) => {
    const newData = data;
    newData["current_employee"] = isCurrentEmployee;
    const res = await createEmployee(newData);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  if (dep) {
    return (
      <>
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
