import axios from "axios";

const getDepartments = async () => {
  const res = await axios.get(`http://localhost:3004/departments`);

  return res.data;
};
const getDepartmentsSingles = async (id) => {
  const res = await axios.get(`http://localhost:3004/departments?id=${id}`);

  return res.data;
};

export { getDepartmentsSingles, getDepartments };
