import React, { useEffect, useState } from "react";

import {
  InputLabel,
  MenuItem,
  TextField,
  Button,
  FormControlLabel,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Select } from "@material-ui/core";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";

export default function EmployeeForm({
  data,
  handleChange,
  department,
  type,
  handleSave,
  noneEmployee,
}) {
  const [isCurrentEmployee, setIsCurrentEmployee] = useState(
    type === "edit" ? noneEmployee : false
  );
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

          <div className="row">
            <div className="form-group col-lg-10">
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
            <div className="form-group col-lg-2">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>No</Typography>
                      <Switch
                        onChange={() => {
                          !isCurrentEmployee
                            ? setIsCurrentEmployee(true)
                            : setIsCurrentEmployee(false);
                        }}
                        checked={isCurrentEmployee}
                      />
                      <Typography>Yes</Typography>
                    </Stack>
                  }
                  label="Current Employee?"
                  labelPlacement="top"
                />
              </FormGroup>
            </div>
          </div>
          <div className="form-group col-lg-1">
            <div style={{ paddingTop: 5 }}>
              <Button
                onClick={() => {
                  handleSave(isCurrentEmployee);
                }}
                variant="contained"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
