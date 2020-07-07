import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Chip from "@material-ui/core/Chip";
import AttachMoney from "@material-ui/icons/AttachMoney";
import { DeleteProducts } from "data";
import { useNavigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  buttonShopper: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const MediaCard = ({ value, dispatch, setData, data }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { basePrice, name, inventoryQuantity, description, id } = value;

  return (
    <Badge badgeContent={inventoryQuantity} max={999} color="primary">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://images5.alphacoders.com/331/thumb-350-331116.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate("/FormOrders")}
          >
            Ver
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => navigate(`/EditFrom/${id}`, { replace: true })}
          >
            Editar
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => DeleteProducts(id, dispatch, setData, data)}
          >
            Eliminar
          </Button>
        </CardActions>
        <CardActions className={classes.buttonShopper}>
          <Chip
            label={basePrice}
            variant="outlined"
            color="primary"
            icon={<AttachMoney />}
          />
          <Button
            size="medium"
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCart />}
          >
            Comprar
          </Button>
        </CardActions>
      </Card>
    </Badge>
  );
};

export default MediaCard;
