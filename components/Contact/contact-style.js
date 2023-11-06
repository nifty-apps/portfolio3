import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const contactStyles = makeStyles({ uniqId: 'contact' })(theme => ({
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.7)}, ${alpha(theme.palette.secondary.main, 0.7)})` : `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.9)}, ${alpha(theme.palette.secondary.main, 0.9)})`,
    backdropFilter: 'saturate(180%) blur(10px)',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
    color: theme.palette.common.white
  },
  title: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.light
    },
    color: theme.palette.common.white
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0)
    },
    '& button': {
      [theme.breakpoints.down('md')]: {
        width: '100%'
      },
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
