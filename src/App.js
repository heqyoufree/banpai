/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import backgroundImage from './background.jpg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './assets/groupData';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import worldNews from './assets/world.json';
import nationNews from './assets/nation.json';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        height: 'calc(100vh)'
      }}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '80%',
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [open0, setOpen0] = React.useState(false);
  const handleClickOpen0 = () => {
    setOpen0(true);
  };
  const handleClose0 = () => {
    setOpen0(false);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };
  const [open6, setOpen6] = React.useState(false);
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };
  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };
  const [open8, setOpen8] = React.useState(false);
  const handleClickOpen8 = () => {
    setOpen8(true);
  };
  const handleClose8 = () => {
    setOpen8(false);
  };
  const [open9, setOpen9] = React.useState(false);
  const handleClickOpen9 = () => {
    setOpen9(true);
  };
  const handleClose9 = () => {
    setOpen9(false);
  };
  const [open10, setOpen10] = React.useState(false);
  const handleClickOpen10 = () => {
    setOpen10(true);
  };
  const handleClose10 = () => {
    setOpen10(false);
  };
  const [open11, setOpen11] = React.useState(false);
  const handleClickOpen11 = () => {
    setOpen11(true);
  };
  const handleClose11 = () => {
    setOpen11(false);
  };
  const [open12, setOpen12] = React.useState(false);
  const handleClickOpen12 = () => {
    setOpen12(true);
  };
  const handleClose12 = () => {
    setOpen12(false);
  };
  const [open13, setOpen13] = React.useState(false);
  const handleClickOpen13 = () => {
    setOpen13(true);
  };
  const handleClose13 = () => {
    setOpen13(false);
  };
  const [open14, setOpen14] = React.useState(false);
  const handleClickOpen14 = () => {
    setOpen14(true);
  };
  const handleClose14 = () => {
    setOpen14(false);
  };
  const [open15, setOpen15] = React.useState(false);
  const handleClickOpen15 = () => {
    setOpen15(true);
  };
  const handleClose15 = () => {
    setOpen15(false);
  };
  const [open16, setOpen16] = React.useState(false);
  const handleClickOpen16 = () => {
    setOpen16(true);
  };
  const handleClose16 = () => {
    setOpen16(false);
  };
  const [open17, setOpen17] = React.useState(false);
  const handleClickOpen17 = () => {
    setOpen17(true);
  };
  const handleClose17 = () => {
    setOpen17(false);
  };
  const [open18, setOpen18] = React.useState(false);
  const handleClickOpen18 = () => {
    setOpen18(true);
  };
  const handleClose18 = () => {
    setOpen18(false);
  };
  const [open19, setOpen19] = React.useState(false);
  const handleClickOpen19 = () => {
    setOpen19(true);
  };
  const handleClose19 = () => {
    setOpen19(false);
  };
  const [open20, setOpen20] = React.useState(false);
  const handleClickOpen20 = () => {
    setOpen20(true);
  };
  const handleClose20 = () => {
    setOpen20(false);
  };
  const [open21, setOpen21] = React.useState(false);
  const handleClickOpen21 = () => {
    setOpen21(true);
  };
  const handleClose21 = () => {
    setOpen21(false);
  };
  const [open22, setOpen22] = React.useState(false);
  const handleClickOpen22 = () => {
    setOpen22(true);
  };
  const handleClose22 = () => {
    setOpen22(false);
  };
  const [open23, setOpen23] = React.useState(false);
  const handleClickOpen23 = () => {
    setOpen23(true);
  };
  const handleClose23 = () => {
    setOpen23(false);
  };
  const [open24, setOpen24] = React.useState(false);
  const handleClickOpen24 = () => {
    setOpen24(true);
  };
  const handleClose24 = () => {
    setOpen24(false);
  };
  const [open25, setOpen25] = React.useState(false);
  const handleClickOpen25 = () => {
    setOpen25(true);
  };
  const handleClose25 = () => {
    setOpen25(false);
  };
  const [open26, setOpen26] = React.useState(false);
  const handleClickOpen26 = () => {
    setOpen26(true);
  };
  const handleClose26 = () => {
    setOpen26(false);
  };
  const [open27, setOpen27] = React.useState(false);
  const handleClickOpen27 = () => {
    setOpen27(true);
  };
  const handleClose27 = () => {
    setOpen27(false);
  };
  const [open28, setOpen28] = React.useState(false);
  const handleClickOpen28 = () => {
    setOpen28(true);
  };
  const handleClose28 = () => {
    setOpen28(false);
  };
  const [open29, setOpen29] = React.useState(false);
  const handleClickOpen29 = () => {
    setOpen29(true);
  };
  const handleClose29 = () => {
    setOpen29(false);
  };
  const [open30, setOpen30] = React.useState(false);
  const handleClickOpen30 = () => {
    setOpen30(true);
  };
  const handleClose30 = () => {
    setOpen30(false);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="班级" {...a11yProps(0)}/>
          <Tab label="班干部名单" {...a11yProps(1)} />
          <Tab label="电子班牌人员分工" {...a11yProps(2)} />
          <Tab label="小组风采" {...a11yProps(3)} />
          <Tab label="国际新闻" {...a11yProps(4)} />
          <Tab label="国内新闻" {...a11yProps(5)} />
          <Tab label="校内新闻" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        班级名片（添加图片）
        {/* <img src={require('./asstes/classCard.jpg')} />*/}
      </TabPanel>
      <TabPanel value={value} index={1}>
        班干部名单（测试数据）
        <TableContainer component={Paper}>
          <Table className={classes.root} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        电子班牌人员分工（测试数据）
        <TableContainer component={Paper}>
          <Table className={classes.root} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        小组风采（测试图片）
        <div 
          className={classes.gridList}
          style={{
            margin: '0 auto',
          }}
          >
          <GridList cellHeight={200} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            </GridListTile>
            {tileData.map((tile, index) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>{tile.slogan}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.name}`} className={classes.icon} onClick={eval(`handleClickOpen${index + 20}`)}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          {tileData.map((tile, index) => {
            return (
              <Dialog onClose={eval(`handleClose${index + 20}`)} aria-labelledby="customized-dialog-title" open={eval(`open${index + 20}`)} fullWidth maxWidth='lg'>
                <DialogTitle id="customized-dialog-title">
                  {tile.name}
                </DialogTitle>
                <DialogContent dividers>
                  <div
                  style={{
                    matgin: '0 auto',
                  }}
                  >
                    <img src={tile.img} alt={tile.name} />
                    <p>小组名称：{tile.name}</p>
                    <p>小组口号：{tile.slogan}</p>
                    <p>小组目标：{tile.aim}</p>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        国际新闻（爬虫爬取，自动更新）
        <div
          className={classes.root}
          style={{
            margin: '0 auto'
          }}
          >
          <List>
            {[...new Array(10)].map((_value, index) => {
              return (
                <ListItem button onClick={eval(`handleClickOpen${index}`)}>
                  <ListItemText
                    primary={worldNews[index].title}
                    secondary={
                      <React.Fragment>
                        <Typography 
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {worldNews[index].summary}
                        </Typography>
                        {`  --${worldNews[index].source}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
          {[...new Array(10)].map((_value, index) => {
            return (
              <Dialog onClose={eval(`handleClose${index}`)} aria-labelledby="customized-dialog-title" open={eval(`open${index}`)} fullWidth maxWidth='lg'>
                <DialogTitle id="customized-dialog-title">
                  {worldNews[index].title}
                </DialogTitle>
                <DialogContent dividers>
                  <iframe src={worldNews[index].link} title={`worldNews${index}`} sandbox="" height="700px" width="100%" frameborder="0"></iframe>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        国内新闻（爬虫爬取，自动更新）
        <div
          className={classes.root}
          style={{
            margin: '0 auto'
          }}
          >
          <List>
            {[...new Array(10)].map((_value, index) => {
              return (
                <ListItem button onClick={eval(`handleClickOpen${index + 10}`)}>
                  <ListItemText
                    primary={nationNews[index].title}
                    secondary={
                      <React.Fragment>
                        <Typography 
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {nationNews[index].summary}
                        </Typography>
                        {`  --${nationNews[index].source}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
          {[...new Array(10)].map((_value, index) => {
            return (
              <Dialog onClose={eval(`handleClose${index + 10}`)} aria-labelledby="customized-dialog-title" open={eval(`open${index + 10}`)} fullWidth maxWidth='lg'>
                <DialogTitle id="customized-dialog-title">
                  {nationNews[index].title}
                </DialogTitle>
                <DialogContent dividers>
                  <iframe src={nationNews[index].link} title={`nationNews${index}`} sandbox="" height="700px" width="100%" frameborder="0"></iframe>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        校内新闻（手动更新）
      </TabPanel>
    </div>
  );
}