import {
    Box,
    Icon,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";
  
  const StyledTable = styled(Table)(({ theme }) => ({
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
      name: "DV00012",
      date: "Khoa CNTT",
      note: "",
      show: true,
    },
    {
        name: "DV00018",
        date: "Phòng chính trị",
        note: "",
        show: true,
      },
  ];
  
  const TableDonVi = () => {
    return (
        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="left">TT</TableCell>
                <TableCell align="center">Mã đơn vị</TableCell>
                <TableCell align="center">Tên đơn vị</TableCell>
                <TableCell align="center">Ghi chú</TableCell>
                <TableCell align="center">Hiển thị</TableCell>
                
              </TableRow>
            </TableHead>
    
            <TableBody>
              {subscribarList.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{index+1}</TableCell>
                  <TableCell align="center">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.note}</TableCell>
                  <TableCell align="center">${subscriber.show}</TableCell>
                  
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>
      </Box>
    );
  };
  
  export default TableDonVi;
  