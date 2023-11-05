"use client";

import * as React from "react";
import { Paper, IconButton , Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Loading from "@/components/Loading";
import { Project } from "@/components/Project";
import { api } from "@/utils";

function createData(id, name, members, type, subjects) {
  return { id, name, members, type, subjects };
}

let rows = [];

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const [openProjectDialog, setOpenProjectDialog] = React.useState(false);

  React.useEffect(() => {
    getProjectList(/* set params here */);
  }, []);

  // fetch project list
  const getProjectList = async (params) => {
    setLoading(true);
    setError(undefined);
    const { data, error } = await api.getProjectList(params);
    if (!error) {
      rows = [];
      data.data.forEach(el => {
        rows.push(createData(el.id, el.name ,el.members.map(u => u.name).join(', '), el.type, el.subjects));
      });
    } else {
      setError(data);
    }
    setLoading(false);
  };

  const handleNewProject = () => {
    setOpenProjectDialog(true);
  }

  const handleProjectCloseClick = () => {
    setOpenProjectDialog(false);
  };

  const handleClick = (id) => {
    
  }

  return (
    <div className="page2">
      <Loading enabled={loading} />
      <div className="headline">
        <div className="title">Projects</div>
        <button className="btn" onClick={() => handleNewProject()}>Create project</button>
      </div>
      <div className="content">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Subjects</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a href={"/project/"+ row.id}>{row.name}</a>
                  </TableCell>
                  <TableCell>{row.members}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.subjects}</TableCell>
                  <TableCell align="right">
                    <IconButton  variant="contained" onClick={() => handleClick(row.id)}><CreateIcon /></IconButton >
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        open={openProjectDialog}
        PaperProps={{ elevation: 1 }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Project onCloseClick={handleProjectCloseClick} />
      </Dialog>
    </div>
  )
}
