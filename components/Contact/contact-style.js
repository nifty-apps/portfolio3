import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const contactStyles = makeStyles({ uniqId: 'contact' })(theme => ({
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    zIndex: 1,
    overflow: 'hidden',
    borderRadius: theme.rounded.big,
    background: `linear-gradient(120deg, ${alpha(theme.palette.secondary.main, 0.5)}, ${alpha(theme.palette.primary.main, 0.5)})`,
    backdropFilter: 'saturate(180%) blur(10px)',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
  },
  title: {
    textAlign: 'left',
    '& span': {
      display: 'block',
      color: theme.palette.primary.main
    },
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
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
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
