import React, { useState } from "react";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import * as Icons from "@material-ui/icons";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";


// icons sets
import "font-awesome/css/font-awesome.min.css";

export default function TypographyPage () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  var classes = useStyles();

  // local
  var [activeTabId, setActiveTabId] = useState(0);

  return (
  <>
    <PageTitle title="Settings" button={(
      <>
        <Button
      variant="contained"
      size="medium"
      color="secondary"
      onClick={e => handleClick(e)}
    >
      Actions
    </Button>
        <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}><Icons.Print style={{marginRight: 16}}/> Print PDF</MenuItem>
      <MenuItem onClick={handleClose}><Icons.GetApp style={{marginRight: 16}}/> Download</MenuItem>
      <MenuItem onClick={handleClose}><Icons.Email style={{marginRight: 16}}/>Send by mail</MenuItem>
      <MenuItem onClick={handleClose}><Icons.Share style={{marginRight: 16}}/>Share</MenuItem>
    </Menu>
      </>
    )} />
    <Paper className={classes.iconsContainer}>
      <Tabs indicatorColor="primary" textColor="primary" value={activeTabId} onChange={(e, id) => setActiveTabId(id)} className={classes.iconsBar} >
        <Tab label="Icons Setting" classes={{ root: classes.tab }} />
        <Tab label="Button Setting" classes={{ root: classes.tab }} />
        <Tab label="Drawer Setting" classes={{ root: classes.tab }} />
        <Tab label="Email Setting" classes={{ root: classes.tab }} />
        <Tab label="Other Setting" classes={{ root: classes.tab }} />
      </Tabs>

      {activeTabId === 0 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            <Grid className={classes.materailIcon} item md={10} lg={10} sm={10} xs={12} >
              TEST Icons
            </Grid>
          </Grid>
        </div>
      )}

      {activeTabId === 1 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            <Grid className={classes.materailIcon} item md={10} lg={10} sm={10} xs={12} >
              TEST Button
            </Grid>
          </Grid>
        </div>
      )}

      {activeTabId === 2 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            <Grid className={classes.materailIcon} item md={10} lg={10} sm={10} xs={12} >
              TEST Drawer
            </Grid>
          </Grid>
        </div>
      )}

      {activeTabId === 3 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            <Grid className={classes.materailIcon} item md={10} lg={10} sm={10} xs={12} >
              TEST Email
            </Grid>
          </Grid>
        </div>
      )}


      {activeTabId === 4 && (
        <div>
          <Grid container spacing={2} className="icon-list">
            <Grid className={classes.materailIcon} item md={10} lg={10} sm={10} xs={12} >
              TEST Other
            </Grid>
          </Grid>
        </div>
      )}
    </Paper>
  </>
);}
