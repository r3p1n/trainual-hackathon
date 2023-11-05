"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  Button, TextField, Autocomplete, Stack, Chip,
} from "@mui/material";
import { api } from "@/utils";

let allMember = [];
let allRoles = [];
let allResponsibilities = [];

export const Project = (props) => {
  const { onCloseClick } = props;

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const [roles, setRoles] = React.useState([]);
  const [role, setRole] = React.useState("");
  const [responsibilities, setResponsibilities] = React.useState([]);

  const router = useRouter()

  React.useEffect(() => {
    const mount = async () => {
      await getMembersList(/* set params here */);
      await getRoleList(/* set params here */);
    }
    mount();
  }, []);

  React.useEffect(() => {
    const fetch = async () => {
      if (role) {
        await getResponsibilityList({ name: role });
      } else {
        setResponsibilities([]);
      }
    }
    fetch();
  }, [role]);

  // fetch role list
  const getMembersList = async (params) => {
    setLoading(true);
    setError(undefined);
    const { data, error } = await api.getMembersList(params);
    if (!error) {
      allMember = data.data
    } else {
      setError(data);
    }
    setLoading(false);
  };

  // fetch role list
  const getRoleList = async (params) => {
    setLoading(true);
    setError(undefined);
    const { data, error } = await api.getRoleList(params);
    if (!error) {
      allRoles = data.data
    } else {
      setError(data);
    }
    setLoading(false);
  };

  // fetch responsibility list
  const getResponsibilityList = async (params) => {
    setLoading(true);
    setError(undefined);
    const { data, error } = await api.getResponsibilityList(params);
    if (!error) {
      allResponsibilities = data.responsibilies
    } else {
      setError(data);
    }
    setLoading(false);
  };

  
  const handleAddRoleClick = () => {
    setRoles([...roles, role]);
    setRole("");
    setResponsibilities([]);
  }

  const handleCancelClick = () => {
    onCloseClick();
  }

  const handleApplyClick = () => {
    router.push('/project-result');
  };

  return (
    <div style={{ minWidth: "600px" }}>
      <div style={{ margin: "10px" }} >
        <p style={{ fontSize: "20px" }}>Project name</p>
        <TextField id="outlined-basic" variant="outlined" fullWidth />
        <p style={{ fontSize: "20px" }}>Add project members</p>
        <Autocomplete
          multiple
          options={allMember}
          // value={members}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search by name"
            />
          )}
        />
 
        <p style={{ fontSize: "20px" }}>Add by role and responsibilities</p>
        <Stack direction="row" spacing={1}>
          {
            roles.map((value) => <Chip label={value} />)
          }
        </Stack>
        <div>
          <Autocomplete
            sx={{ my: "10px" }}
            options={allRoles}
            value={role}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by roles"
              />
            )}
            onChange={(e, data) => {
              setRole(data);
            }}
          />

          <Autocomplete
            sx={{ mb: "10px" }}
            multiple
            options={allResponsibilities}
            value={responsibilities}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search by responsibilities"
              />
            )}
            onChange={(e, data) => {
              setResponsibilities(data);
            }}
          />
          <Button sx={{ borderRadius: 5 }} variant="contained" onClick={handleAddRoleClick}>Add</Button>
        </div>
        <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: "20px" }}>
          <Button sx={{ mr: 2, borderRadius: 5 }} variant="outlined" onClick={handleCancelClick}>Cancel</Button>
          <Button sx={{ borderRadius: 5 }} variant="contained" onClick={handleApplyClick}>Save</Button>
        </div>
        
      </div>
    </div>
  );
};