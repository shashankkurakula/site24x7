import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'

const MonitorItem = ({ item }) => {
  const classes = useStyles()

  let properties = {
    backgroundColor: '#2ECC71',
    fontSize: '18px',
    status: 'Available',
    color: 'white',
  }

  if (item.status === 0) {
    properties.backgroundColor = '#E74C3C'
    properties.status = 'Down'
  } else if (item.status === 2) {
    properties.backgroundColor = 'orange'
    properties.status = 'Trouble'
  } else if (item.status === 5) {
    properties.backgroundColor = '#777777'
    properties.status = 'Suspended'
  } else if (item.status === 7) {
    properties.backgroundColor = '#9B59B6'
    properties.status = 'Maintenance'
  }

  return (
    <div className={classes.root}>
      <Tooltip style={{ fontColor: 'red' }} title={properties.status}>
        <Paper style={properties} className={classes.paper}>
          {item.name.slice(10)}
        </Paper>
      </Tooltip>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: '100px',
    height: '100px',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default MonitorItem
