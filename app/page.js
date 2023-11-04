"use client";

import * as React from "react";
import styles from './page.module.css'
import { Paper, IconButton , Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Loading from "@/components/Loading";
import { api } from "@/utils";

function createData(id, name, members, type, subjects) {
  return { id, name, members, type, subjects };
}

let rows = [];

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    getProjectList(/* set params here */);
  }, []);

  // fetch project list
  const getProjectList = async (params) => {
    setLoading(true);
    setError(undefined);
    const { data, error } = await api.getProjectList(params);
    if (!error) {
      data.data.forEach(el => {
        rows.push(createData(el.id, el.name ,el.members.map(u => u.name).join(', '), el.type, el.subjects));
      });
    } else {
      setError(data);
    }
    setLoading(false);
  };

  const handleClick = (id) => {
    // Define the logic for handling the button click here
    console.log(`Button clicked for row with id ${id}`);
  }

  return (
    <div className={styles.page}>
      <Loading enabled={loading} />
      <div className={styles.headline}>
        <div className={styles.title}>Projects</div>
        <button className={styles.btn}>Create project</button>
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
                    <a href={"/group/"+ row.id}>{row.name}</a>
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
    </div>
  )
}
