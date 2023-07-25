import { AddBoxSharp } from "@mui/icons-material";
import { Box, Icon, styled, Tooltip } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));



const User = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/material" }, { name: "Phân quyền cho người sử dụng" }]} />
      </Box>
      
     <AddBoxSharp>Phân quyền cho người sử dụng </AddBoxSharp>
    </Container>
  );
};

export default User;
