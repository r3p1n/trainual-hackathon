"use client";

import * as React from "react";
import styles from './page.module.css'
import { Paper, IconButton , Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Loading from "@/components/Loading";
import { Project } from "@/components/Project";
import { api } from "@/utils";

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Account Executive', 'None', 'Role', 0, 4.0),
  createData(2, 'Members', 237, 9.0, 37, 4.3),
  createData(3, 'Type', 262, 16.0, 24, 6.0),
];

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
      console.warn(data)
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
    <div className={styles.page}>
      <Loading enabled={loading} />
      <div className={styles.headline}>
        <div className={styles.title}>Projects</div>
        <button className={styles.btn} onClick={() => handleNewProject()}>Create project</button>
      </div>
      <div className={styles.content}>
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
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
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
