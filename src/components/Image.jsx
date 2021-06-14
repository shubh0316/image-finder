import { Card, makeStyles } from "@material-ui/core";


const usesStyles = makeStyles({
    image: {
        height: 300,
        width: '100%',
        objectFit: 'cover',
        


        
    }
})
function Images ( { image }) {
   const classes = usesStyles();
   return (
       <Card>
       <img src= {image.largeImageURL} className={classes.image}  />
       </Card>
   )


}


export default Images;