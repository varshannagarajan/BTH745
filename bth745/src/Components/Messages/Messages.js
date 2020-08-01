import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    sentMsg: {
        marginTop: '1em',
        marginLeft: '40em',
        backgroundColor: '#CACFC9',
        maxWidth: '15em',
    },
    receivedMsg: {
        marginTop: '1em',
        marginRight: '10em',
        backgroundColor: '#F94D4D',
        maxWidth: '15em',
    },
    parent: {
        width: '50em',
        display: 'flex',
        flexDirection: 'column',
    }
});

function Message(props) {
    const classes = useStyles();
    const allMessages = []
    for (let i in props.props.messages) {
        if (props.props.messages[i].received)
            allMessages.push(
                <Card className={classes.receivedMsg}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            {props.props.messages[i].received}
                        </Typography>
                    </CardContent>
                </Card>
            )
        else
            allMessages.push(
                <Card className={classes.sentMsg}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            {props.props.messages[i].sent}
                        </Typography>
                    </CardContent>
                </Card>
            )
    }
    return (
        <div className={classes.parent}>
            {allMessages}
            <TextField
                autoFocus
                margin="dense"
                id="sendMessage"
                label="Type your message here ..."
                type="text"
                variant="outlined"
            />
        </div>

    );
}

export default function Messages(user) {
    const classes = useStyles();
    return (
        <div>
            {Message(user)}
        </div>
    );
}
