"use client";

import * as React from 'react';
import { Checkbox, Tooltip, Button } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import AddCircle from '@mui/icons-material/AddCircle';
import { useRouter } from "next/navigation";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProjectResult() {
  const router = useRouter()

  const handleCancelClick = () => {
    router.back();
  }

  const handleApplyClick = () => {
    router.push('/project/1');
  }

  return (
    <div className="page2">
      <div className="headline">
        <div className="title">Project results</div>
      </div>
      <div className="content">
        <div style={{ width: 480, height: 142, color: '#F67A18', fontSize: 48, fontWeight: '500', wordWrap: 'break-word' }}>Results found:</div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
          <div className="flex-center" style={{ width: 304, height: 71, background: '#F67A18', borderRadius: 46 }}>
            <div style={{ color: 'white', fontSize: 32, fontWeight: '500', wordWrap: 'break-word' }}>Designer</div>
          </div>
          <div style={{ width: 0, height: 65, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ width: 500, height: 0, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '700px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>90%</div>
              </div>
              <img style={{ width: 200,  borderRadius: '50%' }} src="/images/1.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#DF331C', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#DF331C', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#DF331C', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>85%</div>
              </div>
              <a href='/users/321'><img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/2.png" /></a>
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#0DA78B', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
            <div style={{ position: 'relative' }}>
              <Tooltip title="The employee does not have the necessary skills. Additional training materials are recommended." placement="top" arrow>
                <div style={{borderRadius: 46, border: '2px #FDBD18 solid', position: 'absolute', top: 0, left: '-50px' }}>
                  <div className="flex-center" style={{width: 71, height: 37, color: '#FDBD18', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>60%</div>
                </div>
              </Tooltip>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/3.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#FFD231', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#FFD231', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox disabled color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
          <div className="flex-center" style={{ width: 304, height: 71, background: '#F67A18', borderRadius: 46 }}>
            <div style={{ color: 'white', fontSize: 32, fontWeight: '500', wordWrap: 'break-word' }}>Project manager</div>
          </div>
          <div style={{ width: 0, height: 65, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '500px' }}>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '700px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>85%</div>
              </div>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/4.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#0DA78B', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
          <div className="flex-center" style={{ width: 304, height: 71, background: '#F67A18', borderRadius: 46 }}>
            <div style={{ color: 'white', fontSize: 32, fontWeight: '500', wordWrap: 'break-word' }}>Backend Dev</div>
          </div>
          <div style={{ width: 0, height: 65, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ width: 310, height: 0, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: 310 }}>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>85%</div>
              </div>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/5.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#FFD231', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#FFD231', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>95%</div>
              </div>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/6.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#0DA78B', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
          <div className="flex-center" style={{ width: 304, height: 71, background: '#F67A18', borderRadius: 46 }}>
            <div style={{ color: 'white', fontSize: 32, fontWeight: '500', wordWrap: 'break-word' }}>QA</div>
          </div>
          <div style={{ width: 0, height: 65, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ width: 310, height: 0, border: '3px #B0B0B0 solid' }}></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: 310 }}>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
            <div style={{ width: 0, height: 63, border: '3px #B0B0B0 solid' }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
            <div style={{ position: 'relative' }}>
              <Tooltip title="The employee does not have the necessary skills. Additional training materials are recommended." placement="top" arrow>
                <div style={{borderRadius: 46, border: '2px #FDBD18 solid', position: 'absolute', top: 0, left: '-50px' }}>
                  <div className="flex-center" style={{width: 71, height: 37, color: '#FDBD18', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>65%</div>
                </div>
              </Tooltip>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/7.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#0DA78B', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox disabled color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{borderRadius: 46, border: '2px #0DA78B solid', position: 'absolute', top: 0, left: '-50px' }}>
                <div className="flex-center" style={{width: 71, height: 37, color: '#0DA78B', fontSize: 20, fontWeight: '500', wordWrap: 'break-word'}}>90%</div>
              </div>
              <img style={{ width: 200, height: 200, borderRadius: '50%' }} src="/images/8.png" />
              <div  className="flex-center" style={{width: '100%', height: 6, position: 'relative', marginTop: '25px'}}>
                <div style={{width: 40, height: 6, background: '#0DA78B', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
                <div style={{width: 40, height: 6, background: '#D9D9D9', margin: '0 2px'}} />
              </div>
              <Checkbox color='success' sx={{ position: 'absolute', bottom: '30px', right: '10px', '& .MuiSvgIcon-root': { fontSize: 40 }, color: '#0DA78B' }} {...label} icon={<AddCircle />} checkedIcon={<CheckCircle />} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: "flex-end", marginTop: "20px" }}>
          <Button sx={{ mr: 2, borderRadius: 5 }} variant="outlined" onClick={handleCancelClick}>Cancel</Button>
          <Button sx={{ borderRadius: 5 }} variant="contained" onClick={handleApplyClick}>Save</Button>
        </div>
      </div>
    </div>
  )
}