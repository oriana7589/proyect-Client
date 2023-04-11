import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { colors } from "@mui/material";

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ClientView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            hidden: true,
          }}
          /* Implementar estylos en el tabs tanto para el color del botón como del texto seleccionado*/
          sx={{
            "& .MuiTab-root": {
              color: "rgb(26, 40, 133)", // Establecer el color del texto de las pestañas aquí
            },
            "& .Mui-selected": {
              color: "#ffffff",
            },
            "& .Mui-disabled": {
              color: "rgb(255, 255, 255)",
            },
            "& button": { borderRadius: 2 },
            "& button:hover": { backgroundColor: "rgb(26, 40, 133 )" , color: "white" },
            "& button.Mui-selected": { backgroundColor: "rgb(26, 40, 133  )" },
          }}
        >
          <Tab sx={{ m: 1 }} label="TIPO A" {...a11yProps(0)} />
          <Tab sx={{ m: 1 }} label="ULTIMAS COMPRAS" {...a11yProps(1)} />
          <Tab sx={{ m: 1 }} label="ITEMS MAS COMPRADOS" {...a11yProps(2)} />
          <Tab sx={{ m: 1 }} label="COBRANZAS Y DEUDAS" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </Box>
  );
}
