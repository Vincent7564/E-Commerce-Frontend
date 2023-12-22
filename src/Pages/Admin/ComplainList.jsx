import { Fragment } from "react";
import { useNavigate  } from "react-router";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "../Admin/OrderList.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrderList() {
    let MENU_TITLE = ""

    const MENU_NEW = "MENU_NEW"
    const MENU_ON_PROCESS = "MENU_ON_PROCESS"
    const MENU_CLOSED = "MENU_CLOSED"

    const TITLE_NEW = "New"
    const TITLE_ON_PROCESS = "On Process"
    const TITLE_CLOSED = "Closed"


    const [menu, setMenu] = useState(MENU_NEW)
    const [title, setTitle] = useState(TITLE_NEW)
    
    React.useEffect(() => {
        switch(menu){
            case MENU_NEW:
                MENU_TITLE = TITLE_NEW;
              break;
            case MENU_ON_PROCESS:
                MENU_TITLE = TITLE_ON_PROCESS;
                break;
            case MENU_CLOSED:
                MENU_TITLE = TITLE_CLOSED;
                break;
        }

        setTitle(MENU_TITLE)
        }, [menu]);
        
        function createData(
            complainNo,
            orderNo,
            complainDate,
            orderDate,
            custName,
            custPhone,
        ) {
            return { complainNo, orderNo, complainDate, orderDate, custName, custPhone };
        }

        const rows = [
            createData('Frozen yoghurt', 'Frozen yoghurt', 159, 123, 6.0, 24),
            createData('Frozen yoghurt', 'Frozen yoghurt', 159, 123, 6.0, 24),
            createData('Frozen yoghurt', 'Frozen yoghurt', 159, 123, 6.0, 24),
            createData('Frozen yoghurt', 'Frozen yoghurt', 159, 123, 6.0, 24),
        ];

    return (
        <>
            <div className=" flex justify-center font-sans mb-3">
                <h1 className=" text-[30px] font-medium font-sans">
                    Complain List
                </h1>
            </div>
            <div className=" flex justify-center font-sans mb-3">
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_NEW)}>{TITLE_NEW}</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_ON_PROCESS)}>{TITLE_ON_PROCESS}</button>
                <button className="btnMenu rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => setMenu(MENU_CLOSED)}>{TITLE_CLOSED}</button>
            </div>

            <div className="bg-white">
                <div className=" flex justify-center font-sans my-3 py-3">
                    <h1 className=" text-[30px] font-medium font-sans">
                        {title}
                    </h1>
                </div>
                <div className="px-5 pb-5 mb-5">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell><b>Complain No</b></TableCell>
                                <TableCell><b>Order No</b></TableCell>
                                <TableCell align="right"><b>Complain Date</b></TableCell>
                                <TableCell align="right"><b>Order Date</b></TableCell>
                                <TableCell align="right"><b>Customer Name</b></TableCell>
                                <TableCell align="right"><b>Customer Phone</b></TableCell>
                                <TableCell align="center"><b>Process</b></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.complainNo}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.orderNo}
                                </TableCell>
                                <TableCell align="right">{row.complainDate}</TableCell>
                                <TableCell align="right">{row.orderDate}</TableCell>
                                <TableCell align="right">{row.custName}</TableCell>
                                <TableCell align="right">{row.custPhone}</TableCell>
                                <TableCell align="right">
                                    <button className="rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-accent py-2 px-5 mx-2" onClick={() => test()}>Next</button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

