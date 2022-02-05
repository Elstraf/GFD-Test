import axios from "axios";

const getEmployees = async () => {
  const res = await axios.get(`http://localhost:3004/employees`);

  return res.data;
};
const getEmployeeSingle = async (id) => {
  const res = await axios.get(`http://localhost:3004/employees?id=${id}`);

  return res.data;
};
const updateEmployee = async (id, obj) => {
  const res = await axios.put(`http://localhost:3004/employees/${id}`, obj);

  return res;
};
const createEmployee = async (obj) => {
  const res = await axios.post(`http://localhost:3004/employees`, obj);

  return res;
};

export { getEmployeeSingle, getEmployees, updateEmployee, createEmployee };
