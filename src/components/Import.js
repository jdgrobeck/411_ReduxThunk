import React, { useState } from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Menu, MenuItem, Paper } from "@mui/material"
import { MoreVert } from "@mui/icons-material"

const Import = (props) => {
    // fill out this component
const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const [deleteIndex, setDeleteIndex] = useState(null);

// function to handle opening the menu
const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setDeleteIndex(index);
};

// function to handle closing the menu
const handleClose = () => {
    if (deleteIndex !== null){
        props.deleteMake(deleteIndex)
        setDeleteIndex(null);
    }

}

const handleMenuClose = () => {
        setAnchorEl(null); // Reset the anchorEl state to null after a short delay
};

    return (
        <div style={{ width: '50%', margin: '0 auto', marginTop: '50px'}}>
        <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
        </Button>
        <h2>COUNT: {props.makes.length}</h2>
        <TableContainer >
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.makes.map((make, idx) =>
              <TableRow key={make.MakeId}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                <Button
                    id={`menu-button-${idx}`} // Use index to generate unique id for each button
                    aria-controls={`menu-${idx}`}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(event) => handleClick(event, idx)}
                >
                    <MoreVert />
                </Button>
                   
                </TableCell>
            </TableRow>  
            )}
            </TableBody>
        </Table>
    </TableContainer>

    <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleMenuClose}
        PaperProps={{
            style: {
                border:'1px solid black',
                boxShadow: 'none'
            }
        }}
        >
        <MenuItem onClick={() => props.deleteMake(deleteIndex)}>Delete</MenuItem>
        </Menu>

        </div>
    )
}

export default Import