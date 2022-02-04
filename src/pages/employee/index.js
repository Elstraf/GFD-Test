import { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";
export default function EmployeeIndex() {
  const [data, setData] = useState(false);
  const [dep, setDep] = useState(false);

  const getData = async () => {
    const res = axios.get("http://localhost:3004/employees");
    res.then((result) => {
      console.log(result);
      setData(result.data);
    });

    const dep = axios.get("http://localhost:3004/departments");
    dep.then((res) => {
      console.log(res);
      setDep(res.data);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "current_employee", headerName: "Currently Employee", flex: 1 },
    {
      field: "",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <>
          <Link to={{ pathname: `/employee/view/${params.id}` }}>
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
              >
                View
              </Button>
            </strong>
          </Link>
          <Link to={{ pathname: `/employee/edit/${params.id}` }}>
            <strong>
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
              >
                Edit
              </Button>
            </strong>
          </Link>
        </>
      ),
    },
  ];

  const options = {
    pageSize: 15,
    rowCount: 1,
    rowsPerPageOptions: [15],
    handlePageChange: null,
    autoHeight: false,
    height: "350",
  };

  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <>
        <DataTable
          columns={columns}
          options={options}
          rows={data}
          height={500}
        />
      </>
    );
  } else return <>Loading</>;
}
