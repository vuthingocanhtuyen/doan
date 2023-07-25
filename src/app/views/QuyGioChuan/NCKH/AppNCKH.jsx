import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import BaiBao from "./BaiBao";
import DeTai from "./DeTai";
import Sach from "./Sach";


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppNCKH = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Hệ thống", path: "/dashboard/default" }, { name: "Quy giờ chuẩn NCKH" }]} />
      </Box>

      <SimpleCard title="Bài báo khoa học">
        <BaiBao />
      </SimpleCard>
<br/>
      <SimpleCard title="Đề tài nghiên cứu khoa học các cấp">
        <DeTai />
      </SimpleCard>


      <br/>
      <SimpleCard title="Sách, giáo trình, tài liệu hướng dẫn">
        <Sach />
      </SimpleCard>
    </Container>
  );
};

export default AppNCKH;
