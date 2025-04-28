import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box backgroundColor="secondary.dark" sx={{ width: '100%', borderRadius: "10px", boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)", }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {props.tabHeadings.map((item, index) => {
            return (
              <Tab label={item} {...a11yProps(index)} />
            )
          })}
        </Tabs>
      </Box>
      {props.infoArray.map((item, index) => {
        return (
          <CustomTabPanel value={value} index={index}>
            <Box display="flex" alignItems="center" justifyContent="space-around" gap={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
              <Box display="flex" flexDirection="column" flex="3" gap={1}>
                {
                  item.title &&
                  <Typography variant='h6' color="primary">{item.title}</Typography>
                }
                {
                  item.releaseDate &&
                  <Typography color="text.secondary">Release Date: {item.releaseDate}</Typography>
                }
                <Typography>{item.about}</Typography>
              </Box>
              <Box display="flex" flex="1" width="100%" borderRadius={2} justifyContent="center">
                {
                  item.cover &&
                  <img
                    height={200}
                    width={150}
                    alt={item.title}
                    src={item.cover}
                  />
                }
                {item.icon && item.icon}
              </Box>
            </Box>
          </CustomTabPanel>
        )
      })}
    </Box>
  );
}