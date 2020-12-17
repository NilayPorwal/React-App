import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import "../App.css"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(10)
    }
}))

const SearchResult = ({searchResult=[], fetchData}) => {
    const classes = useStyles()
 
 return (
    <div className={classes.root}>
        <Grid
            container
            spacing={10}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
            {searchResult.map(elem => (
                <Grid item xs={12} sm={6} md={2} key={searchResult.indexOf(elem)}>
                    <Card>
                        <img src={elem.image_url} width="100%" height="200"  />
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {elem.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        {searchResult.length >0&&
        <button class="btn"  onClick={fetchData}>Load More</button>}
  
  </div>

  );
}

export default SearchResult