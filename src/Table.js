import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import { Col, Container, Row, Card } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#324A9F",
        color: "#ffffff",
        padding: '9px 16px',
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        padding: '8px 24px',
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.footer}`]: {
        padding: '11px 24px',
        fontWeight: 'bold'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: 0,
    overflow: 'hidden',
}));


function createData(name, east, west, north, south) {
    const total = east + west + north + south;
    return { name, east, west, north, south, total };
}

const rows = [
    createData('00-04 Hr', 159, 6.0, 24, 4),
    createData('04-08 Hr', 237, 9.0, 37, 4),
    createData('08-12 Hr', 262, 16.0, 24, 6),
    createData('12-24 Hr', 305, 37, 67, 4),
    createData('Beyond 24 Hr', 356, 16, 49, 3),
];

// Calculate column totals
const columnTotals = rows.reduce(
    (acc, row) => {
        acc.east += row.east;
        acc.west += row.west;
        acc.north += row.north;
        acc.south += row.south;
        acc.total += row.total;
        return acc;
    },
    { east: 0, west: 0, north: 0, south: 0, total: 0 }
);

export default function CustomizedTables() {
    return (<>
        <Typography className='mb-1 ms-3'>
            Region Wise and Hourly Bucket
        </Typography>
        <CustomTableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Hour Bucket</StyledTableCell>
                        <StyledTableCell align="right">East</StyledTableCell>
                        <StyledTableCell align="right">West</StyledTableCell>
                        <StyledTableCell align="right">North</StyledTableCell>
                        <StyledTableCell align="right">South</StyledTableCell>
                        <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.east}</StyledTableCell>
                            <StyledTableCell align="right">{row.west}</StyledTableCell>
                            <StyledTableCell align="right">{row.north}</StyledTableCell>
                            <StyledTableCell align="right">{row.south}</StyledTableCell>
                            <StyledTableCell align="right">{row.total}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <StyledTableCell>Total</StyledTableCell>
                        <StyledTableCell align="right">{columnTotals.east}</StyledTableCell>
                        <StyledTableCell align="right">{columnTotals.west}</StyledTableCell>
                        <StyledTableCell align="right">{columnTotals.north}</StyledTableCell>
                        <StyledTableCell align="right">{columnTotals.south}</StyledTableCell>
                        <StyledTableCell align="right">{columnTotals.total}</StyledTableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </CustomTableContainer>
    </>
    );
}
