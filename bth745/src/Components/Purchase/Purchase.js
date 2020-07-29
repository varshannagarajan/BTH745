import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Purchase() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    const [paymentType, setPaymentType] = useState('');
    const [expireMonth, setExpireMonth] = useState('');
    const [expireYear, setExpireYear] = useState('');
    const [province, setProvince] = useState('');

    const handleChangePayment = (event) => {
        setPaymentType(event.target.value);
    };
    const handleChangeMonth = (event) => {
        setExpireMonth(event.target.value);
    };
    const handleChangeYear = (event) => {
        setExpireYear(event.target.value);
    };
    const handleChangeProvince = (event) => {
        setProvince(event.target.value);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Purchase
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogContent>
                    <DialogTitle id="form-dialog-title">PAYMENT METHOD</DialogTitle>
                    <DialogContentText>
                        Please select a payment method
                    </DialogContentText>

                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="paymentType">Payment Type</InputLabel>
                        <Select
                            labelId="paymentType"
                            id="paymentType"
                            value={paymentType}
                            onChange={handleChangePayment}
                        >
                            <MenuItem value={'Visa'}>Visa</MenuItem>
                            <MenuItem value={'PayPal'}>PayPal</MenuItem>
                            <MenuItem value={'PaySafeCard'}>PaySafeCard</MenuItem>
                            <MenuItem value={'MasterCard'}>MasterCard</MenuItem>
                            <MenuItem value={'American Express'}>American Express</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="expireMonth">Month</InputLabel>
                        <Select
                            labelId="expireMonth"
                            id="expireMonth"
                            value={expireMonth}
                            onChange={handleChangeMonth}
                        >
                            <MenuItem value={'01'}>01</MenuItem>
                            <MenuItem value={'02'}>02</MenuItem>
                            <MenuItem value={'03'}>03</MenuItem>
                            <MenuItem value={'04'}>04</MenuItem>
                            <MenuItem value={'05'}>05</MenuItem>
                            <MenuItem value={'06'}>06</MenuItem>
                            <MenuItem value={'07'}>07</MenuItem>
                            <MenuItem value={'08'}>08</MenuItem>
                            <MenuItem value={'09'}>09</MenuItem>
                            <MenuItem value={'10'}>10</MenuItem>
                            <MenuItem value={'11'}>11</MenuItem>
                            <MenuItem value={'12'}>12</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="expireYear">Year</InputLabel>
                        <Select
                            labelId="expireYear"
                            id="expireYear"
                            value={expireYear}
                            onChange={handleChangeYear}
                        >
                            <MenuItem value={'2021'}>2021</MenuItem>
                            <MenuItem value={'2022'}>2022</MenuItem>
                            <MenuItem value={'2023'}>2023</MenuItem>
                            <MenuItem value={'2024'}>2024</MenuItem>
                            <MenuItem value={'2025'}>2025</MenuItem>
                            <MenuItem value={'2026'}>2026</MenuItem>
                            <MenuItem value={'2027'}>2027</MenuItem>
                            <MenuItem value={'2028'}>2028</MenuItem>
                            <MenuItem value={'2029'}>2029</MenuItem>
                            <MenuItem value={'2030'}>2030</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="expireCode"
                        label="Code"
                        type="text"
                    />

                    <DialogTitle id="form-dialog-title">BILLING INFORMATION</DialogTitle>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First Name"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="Last Name"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="postalCode"
                        label="Postal Code"
                        type="text"
                    />

                    <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="province">Province/Territories</InputLabel>
                        <Select
                            labelId="Province"
                            id="province"
                            value={province}
                            onChange={handleChangeProvince}
                        >
                            <MenuItem value={'Alberta'}>Alberta</MenuItem>
                            <MenuItem value={'British Columbia'}>British Columbia</MenuItem>
                            <MenuItem value={'Manitoba'}>Manitoba</MenuItem>
                            <MenuItem value={'New Brunswick'}>New Brunswick</MenuItem>
                            <MenuItem value={'New Foundland and Labrador'}>New Foundland and Labrador</MenuItem>
                            <MenuItem value={'Northwest Territories'}>Northwest Territories</MenuItem>
                            <MenuItem value={'Nova Scotia'}>Nova Scotia</MenuItem>
                            <MenuItem value={'Nunavut'}>Nunavut</MenuItem>
                            <MenuItem value={'Ontario'}>Ontario</MenuItem>
                            <MenuItem value={'Prince Edward Island'}>Prince Edward Island</MenuItem>
                            <MenuItem value={'Quebec'}>Quebec</MenuItem>
                            <MenuItem value={'Saskatchewan'}>Saskatchewan</MenuItem>
                            <MenuItem value={'Yukon'}>Yukon</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Complete Purchase
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
