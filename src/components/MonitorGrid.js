import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MonitorItem from './MonitorItem'
import Spinner from './Spinner'
import Grid from '@material-ui/core/Grid'

const MonitorGrid = ({ isLoading, items }) => {
  const classes = useStyles()

  return isLoading ? (
    <Spinner isLoading={true} />
  ) : (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(items).map((item, index) => (
          <Grid key={items[item.monitor_id]} item xs={3}>
            <MonitorItem key={index} item={items[item]} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default MonitorGrid
