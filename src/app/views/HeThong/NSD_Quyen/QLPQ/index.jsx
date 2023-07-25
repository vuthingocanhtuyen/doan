import { AddBoxSharp } from "@mui/icons-material";
import { Box, Icon, styled, Tooltip, Button, Tabs, Tab, CustomTabPanel  } from "@mui/material";


import { Breadcrumb, SimpleCard } from "app/components";

import NavTabs from "./NavTabs";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
  }));



const thamso = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/dashboard/default" }, { name: "Tham số hệ thống" }]} />
      </Box>

      <NavTabs/>

    </Container>
  );
};

export default thamso;
