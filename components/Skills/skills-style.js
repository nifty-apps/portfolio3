import { makeStyles } from 'tss-react/mui';

const timelineStyles = makeStyles({ uniqId: 'timeline' })((theme) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1280,
        padding: 0,
      }
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(5)
    }
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      color: theme.palette.text.secondary,
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing()
    },
    '& img': {
      width: 25,
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: 10
  },
  bar: {
    borderRadius: 10,
    backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default timelineStyles;
