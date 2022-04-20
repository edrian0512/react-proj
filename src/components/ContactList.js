import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ContactList = () => {

    const contactList = [
        {
            name: 'Edrian',
            email: 'mr.edrian@gmail.com',
            message: 'Hello Lipa!'
        },
        {
            name: 'Ericka',
            email: 'ericka@gmail.com',
            message: 'Hello Batangas!'
        },
        {
            name: 'Ohyie',
            email: 'ohyie@gmail.com',
            message: 'Hello Philippines'
        }
    ]

    // const contact = contactList.map((item, index) => {
    //     return (<tr key={index}>
    //         <td>
    //             {item.name}
    //         </td>
    //         <td>
    //             {item.email}
    //         </td>
    //         <td>
    //             {item.message}
    //         </td>
    //     </tr>)
    // })


    return (

        <div>
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contact}
                </tbody>
            </table> */}

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
                        {contactList.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="center">{row.name}</TableCell>

                                <TableCell align="center">{row.email}</TableCell>

                                <TableCell align="center">{row.message}</TableCell>

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