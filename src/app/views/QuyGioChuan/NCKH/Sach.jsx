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
      name: "john doe",
      date: "18 january, 2019",
      amount: 1000,
      status: "close",
      company: "ABC Fintech LTD.",
    },
    {
      name: "kessy bryan",
      date: "10 january, 2019",
      amount: 9000,
      status: "open",
      company: "My Fintech LTD.",
    },
    {
      name: "james cassegne",
      date: "8 january, 2019",
      amount: 5000,
      status: "close",
      company: "Collboy Tech LTD.",
    },
    {
      name: "lucy brown",
      date: "1 january, 2019",
      amount: 89000,
      status: "open",
      company: "ABC Fintech LTD.",
    },
    {
      name: "lucy brown",
      date: "1 january, 2019",
      amount: 89000,
      status: "open",
      company: "ABC Fintech LTD.",
    },
    {
      name: "lucy brown",
      date: "1 january, 2019",
      amount: 89000,
      status: "open",
      company: "ABC Fintech LTD.",
    },
  ];
  
  const Sach = () => {
    return (
        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="left">TT</TableCell>
                <TableCell align="center">Nội dung công việc</TableCell>
                <TableCell align="center">Đơn vị tính</TableCell>
                <TableCell align="center">Quy ra giờ chuẩn</TableCell>
                <TableCell align="center">Ghi chú</TableCell>
                
              </TableRow>
            </TableHead>
    
            <TableBody>
              {subscribarList.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{index+1}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.status}</TableCell>
                  <TableCell align="center">${subscriber.amount}</TableCell>
                  
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>
      </Box>
    );
  };
  
  export default Sach;
  