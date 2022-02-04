import axios from "axios";

const getEmployeeSingle = async (id) => {
  const res = await axios.get(`http://localhost:3004/employees?id=${id}`);

  return res.data;
};

export { getEmployeeSingle };
