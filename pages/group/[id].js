
import * as React from "react";
import PropTypes from 'prop-types';
import { Tabs, Tab , Box, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Loading from "@/components/Loading";
import Layout from '@/components/layout';
import { api } from "@/utils";
import { useRouter } from 'next/router'
 
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
          <Typography>{children}</Typography>
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

export default function Group() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const id = router.query.id;

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
      row = createData(data.id, data.name ,data?.members?.map(u => u.name).join(', ') || "", data.type, data.subjects);
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
    <div>
      <a href="/"><header></header></a>
      <div>
        <a href="/"><nav></nav></a>
        <div className='page'>
          <Loading enabled={loading} />
          <div className='headline' style={{ 'border-bottom': 'inherit' }}>
            <div className='title'>{row.name}</div>

          </div>  
          <Box sx={{ width: '100%', 'marginLeft': '0px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'rgb(245, 121, 32)' }}>
              <Tabs 
              value={value} 
              onChange={handleChange} 
              indicatorColor="rgb(245, 121, 32)"
              >
                <div style={{ width: '100%' , 'display': 'flex' , 'justify-content' : 'space-between' , 'padding': '10px 0px' }}>
                  <div>
                    <Tab label="Members" {...a11yProps(0)} />
                    <Tab label="Content" {...a11yProps(1)} />
                    <Tab label="Responsibilities" {...a11yProps(2)} />
                  </div>
                  <div className='flex-center ' style={{ padding: '0 14px' , opacity: '0.6', gap: '20px' }}>
                    <div style={{ 'align-self': 'center' }}>PERSONAL COMPLIANCE&nbsp;</div>
                    <img style={{ width: 44, height: 44 }}  src="/percent.png"></img>
                  </div>
                </div>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Members
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Responsibilities
            </CustomTabPanel>
          </Box>
          <div className='content'></div>
        </div>
      </div>
    </div>
  )
}