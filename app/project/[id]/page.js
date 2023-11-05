"use client";

import * as React from "react";
import PropTypes from 'prop-types';
import { Tabs, Tab , Box, Typography } from '@mui/material';
import { api } from "@/utils";
import { useParams } from 'next/navigation'
 
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function createData(id, name, members, type, subjects) {
  return { id, name, members, type, subjects };
}

let row = {};

export default function Project() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const id = params.id;

  React.useEffect(() => {
    if(!id) {
      return;
    }

    getProjectList({id:id});
  }, [id]);

  // fetch project list
  const getProjectList = async (params) => {
    setLoading(true);
    setError(undefined);
    let { data, error } = await api.getProjectList(params);
    if (!error) {
      setError(data);
      data = data.data;
      row = createData(data.id, data.name ,data?.members|| "", data.type, data.subjects);
      console.error();
      setError(row);
    } else {
      setError(data);
    }
    setLoading(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='page2'>
      <div className="headline" style={{margin: 0}}>
        <div className="title">{ row.name }</div>
      </div>
      <Box sx={{ width: '100%', 'marginLeft': '0px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'rgb(245, 121, 32)', display: 'flex' , justifyContent: 'space-between', backgroundColor: 'white' }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            indicatorColor="rgb(245, 121, 32)"
          >
            <Tab label="Members" {...a11yProps(0)} />
            <Tab label="Content" {...a11yProps(1)} />
            <Tab label="Responsibilities" {...a11yProps(2)} />
          </Tabs>
          { id === "94186" && (
              <div className='flex-center ' style={{ padding: '0 14px' , opacity: '0.6', gap: '20px' }}>
                <div>PERSONAL COMPLIANCE&nbsp;</div>
                <img style={{ width: 44, height: 44 }}  src="/percent.png"></img>
              </div>
            )
          }
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className='content'>
            <div>
              <img src={id === "94186" ? "/images/user/mem2.jpg" : "/images/user/mem.jpg"} />
            </div>
            <div style={{height: 400}}></div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className='content'>
            <div>
              <img  src="/images/user/cont.jpg" />
            </div>
            <div style={{height: 400}}></div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className='content'>
            <div>
              <img  src="/images/user/resp.jpg" />
            </div>
            <div>
              <img  src="/images/user/resp2.jpg" />
            </div>
          </div>
        </CustomTabPanel>
      </Box>
      
    </div>
  )
}