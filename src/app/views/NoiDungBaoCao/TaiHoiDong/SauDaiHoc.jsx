import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
  } from "@mui/material";
  import { useState } from "react";
  
  const StyledTable = styled(Table)(() => ({
    whiteSpace: "pre",
    "& thead": {
      "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
      "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
  }));
  
  const subscribarList = [
    {
      name: "HĐ bảo về LVTN (số lần Chủ tịch/Thư ký)",
      number: 6,
      time: 20,
      note: " ",
      
    },
    {
      name: "HĐ bảo về LVTN (số lần Uỷ viên)",
      number: 2,
      time: 100,
      note: " ",
    },
    {
      name: "HĐ bảo về LVTN (số lần Phản biện)",
      number: 2,
      time: 100,
      note: " ",
    },
    
  ];
  
  const SauDaiHoc = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
  
    const handleChangePage = (_, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">STT</TableCell>
              <TableCell align="center">Hội đồng</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Số giờ</TableCell>
              <TableCell align="center">Ghi chú</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {
            subscribarList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                <TableRow key={index}>
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell align="center">{subscriber.name}</TableCell>
                    <TableCell align="center">{subscriber.number}</TableCell>
                    <TableCell align="center">{subscriber.time}</TableCell>
                    <TableCell align="center">${subscriber.note}</TableCell>
                </TableRow>
                ))
            }
            <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
           
            <TableCell align="center">
                <strong>
                {subscribarList
                    .map((subscriber) => subscriber.time)
                    .reduce((totalTime, currentTime) => totalTime + currentTime, 0)}
                </strong>
            </TableCell>
            <TableCell align="center"></TableCell>
            </TableRow>
        </TableBody>
        </StyledTable>
  
        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={subscribarList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
    );
  };
  
  export default SauDaiHoc;
  