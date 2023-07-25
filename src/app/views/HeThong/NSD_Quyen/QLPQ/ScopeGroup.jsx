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
        stt: 1,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 2,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 3,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 4,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 5,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 6,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 7,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 8,
        id: "TITLE",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
      {
        stt: 9,
        id: "Param",
        name: "Tiêu đề hệ thống",
        price: "UNIV",
        note: "ABC Fintech LTD.",
      },
  ];
  
  const ScopeGroup = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleChangePage = (_, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Box width="100%" overflow="auto">
        {/* <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">STT</TableCell>
              <TableCell align="center">Mã</TableCell>
              <TableCell align="center">Tên</TableCell>
              <TableCell align="center">Hiển thị</TableCell>
              <TableCell align="center">All unversity</TableCell>
              <TableCell align="center">Admin</TableCell>
              <TableCell align="center">Staff</TableCell>
              <TableCell align="center">Ghi chú</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribarList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.stt}</TableCell>
                  <TableCell align="center">{subscriber.id}</TableCell>
                  <TableCell align="center">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.price}</TableCell>
                  <TableCell align="center">${subscriber.note}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Icon color="error">close</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
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
        /> */}

        <div> Phạm vi nhóm </div>
      </Box>
    );
  };
  
  export default ScopeGroup;
  