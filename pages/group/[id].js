
import * as React from "react";
import styles from '@/app/page.module.css'
import { Paper, IconButton , Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Loading from "@/components/Loading";
import Layout from '@/components/layout';
import { api } from "@/utils";
import { useRouter } from 'next/router'
 
function createData(id, name, members, type, subjects) {
  return { id, name, members, type, subjects };
}

let rows = [];

export default function Group() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const router = useRouter();

  React.useEffect(() => {
    getProjectList({id:router.query.id});
  }, []);

  // fetch project list
  const getProjectList = async (params) => {
    setLoading(true);
    setError(undefined);
    let { data, error } = await api.getProjectList(params);
    if (!error) {
      setError(data);
      console.error(data);
      console.error(data[0]);
      rows.push(createData(data.id, data.name ,data?.members?.map(u => u.name).join(', ') || "", data.type, data.subjects));
      console.error(rows);
      setError(rows);
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
    <div>
      <a href="/"><header></header></a>
      <div>
        <a href="/"><nav></nav></a>
        <div className={styles.page}>
          <Loading enabled={loading} />
          <div className={styles.headline}>
            <div className={styles.title}>{router.query.id}</div>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  )
}