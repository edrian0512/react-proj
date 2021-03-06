import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ContactList = (props) => {

    // const contactList = [
    //     {
    //         name: 'Edrian',
    //         email: 'mr.edrian@gmail.com',
    //         message: 'Hello Lipa!'
    //     },
    //     {
    //         name: 'Ericka',
    //         email: 'ericka@gmail.com',
    //         message: 'Hello Batangas!'
    //     },
    //     {
    //         name: 'Ohyie',
    //         email: 'ohyie@gmail.com',
    //         message: 'Hello Philippines'
    //     }
    // ]

    return (

        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.contactsMap.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="center">{row.fName} {row.lName}</TableCell>

                                <TableCell align="center">{row.emailAd}</TableCell>

                                <TableCell align="center">{row.msg}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ContactList

// {object}