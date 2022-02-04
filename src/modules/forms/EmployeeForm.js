import { InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";

export default function EmployeeForm({
  data,
  handleChange,
  department,
  handleDepartmentChange,
}) {
  return (
    <>
      <div className="box">
        <div className="container-fluid">
          <div className="form-row">
            <div className="form-group col-lg-12">
              <h3>New Topic</h3>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-lg-6">
              <TextField
                label="Name"
                name="name"
                value={data.name ? data.name : ""}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </div>
            <div className="form-group col-lg-6">
              <TextField
                label="Surname"
                name="surname"
                value={data.surname ? data.surname : ""}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </div>
            <div className="form-group col-lg-6">
              <InputLabel>Department</InputLabel>
              <Select
                name="department"
                fullWidth
                onChange={(e) => {
                  handleDepartmentChange(e.target.name, e.target.value);
                }}
              >
                {department &&
                  department.map((dep, key) => {
                    return <MenuItem value={dep}>{dep.name}</MenuItem>;
                  })}
              </Select>
            </div>
            <div className="form-group col-lg-1">
              {/*  <Button onClick={handleSave} variant="contained">
                Save
              </Button> */}
            </div>
            <div className="form-group col-lg 8"></div>
          </div>
        </div>
      </div>
    </>
  );
}
