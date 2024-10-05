'use client'

import { theme } from "@/app/constants/theme";
import { Box, Paper, styled, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { InProgress, CheckmarkOutline } from '@carbon/icons-react';

const iconArrowRight = <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999715 11.0837H22.3535M22.3535 11.0837L12.2698 1M22.3535 11.0837L12.2698 21.1675" stroke="#1A4870" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const StyledTableCell = styled(TableCell)(({ theme: themeProp }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1rem',
        backgroundColor: themeProp.palette.primary.main,
        color: themeProp.palette.background.default,
        fontFamily: theme.typography.fontFamily,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1rem',
        color: themeProp.palette.primary.main,
        fontFamily: theme.typography.fontFamily,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme: themeProp }) => ({
    '*': {
        backgroundColor: themeProp.palette.background.default,
        borderColor: themeProp.palette.primary.main,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Status = ({ status }: { status: string }) => (
    status === 'В процессе' ?
        <InProgress size={17} color={theme.palette.warning.main} style={{ marginRight: '0.25rem' }} /> :
        <CheckmarkOutline size={17} color={theme.palette.warning.main} style={{ marginRight: '0.25rem' }} />
)

function createData(
    name: string,
    status: string,
    members: string,
    term: string,
    stack: string,
    actions: string
) {
    return { name, status, members, term, stack, actions };
}

const rows = [
    createData('Первый проект', 'В процессе', '15', '3 месяца', 'React, Node.js, MongoDB, Express...', ''),
    createData('Первый проект', 'В процессе', '15', '3 месяца', 'React, Node.js, MongoDB, Express...', ''),
    createData('Первый проект', 'В процессе', '15', '3 месяца', 'React, Node.js, MongoDB, Express...', ''),
    createData('Первый проект', 'Завершен', '15', '3 месяца', 'React, Node.js, MongoDB, Express...', ''),
    createData('Первый проект', 'В процессе', '15', '3 месяца', 'React, Node.js, MongoDB, Express...', ''),
];

const ProjectsList = () => {
    return (
        <TableContainer component={Paper} sx={{ border: `1px solid ${theme.palette.primary.main}` }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{ fontWeight: '600' }}>Название проекта</StyledTableCell>
                        <StyledTableCell align="left">Прогресс</StyledTableCell>
                        <StyledTableCell align="left">Участники</StyledTableCell>
                        <StyledTableCell align="left">Срок</StyledTableCell>
                        <StyledTableCell align="left">Стэк</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <StyledTableRow key={i}>
                            <StyledTableCell component="th" scope="row" sx={{ fontWeight: '600' }}>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Status status={row.status} />

                                    {row.status}
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.members}</StyledTableCell>
                            <StyledTableCell align="left">{row.term}</StyledTableCell>
                            <StyledTableCell align="left">{row.stack}</StyledTableCell>

                            <StyledTableCell align="right">
                                {iconArrowRight}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProjectsList