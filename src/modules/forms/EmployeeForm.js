import { InputLabel, MenuItem, TextField, Button } from "@mui/material";
import { Select } from "@material-ui/core";

export default function EmployeeForm({
  data,
  handleChange,
  department,
  handleDepartmentChange,
  type,
  handleSave,
}) {
  return (
    <>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="form-group col-lg-12">
              <h3>{type === "edit" ? data.name : "New Employee"}</h3>
            </div>
          </div>

          <div className="row">
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
          </div>
          <div className="form-group col-lg-12">
            <InputLabel>Department</InputLabel>
            <Select
              name="department"
              fullWidth
              value={data.department ? data.department : ""}
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            >
              {department &&
                department.map((dep, key) => {
                  return (
                    <MenuItem key={key} value={dep.id}>
                      {dep.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </div>
          <div className="form-group col-lg-1">
            <div style={{ paddingTop: 5 }}>
              <Button onClick={handleSave} variant="contained">
                Save
              </Button>
            </div>
          </div>
          <div className="form-group col-lg 8"></div>
        </div>
      </div>
    </>
  );
}
