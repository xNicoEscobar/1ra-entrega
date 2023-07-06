import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import productImg from '../Assets/monitor-27-165hz.jpg';

function Store() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="monitor 165hz"
                height="160"
                image={productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Monitor HP 165hz
                </Typography>
                <Typography variant="body3" color="text.secondary">
                MONITOR 27" HP X27 FHD 165HZ 1MS HDMI DP
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='/product/1' size="small">Ver producto</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
            <CardMedia
                component="img"
                alt="monitor 165hz"
                height="160"
                image={productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Monitor HP 165hz
                </Typography>
                <Typography variant="body3" color="text.secondary">
                MONITOR 27" HP X27 FHD 165HZ 1MS HDMI DP
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='/product/2' size="small">Ver producto</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
            <CardMedia
                component="img"
                alt="monitor 165hz"
                height="160"
                image={productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Monitor HP 165hz
                </Typography>
                <Typography variant="body3" color="text.secondary">
                MONITOR 27" HP X27 FHD 165HZ 1MS HDMI DP
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='/product/3' size="small">Ver producto</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
            <CardMedia
                component="img"
                alt="monitor 165hz"
                height="160"
                image={productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Monitor HP 165hz
                </Typography>
                <Typography variant="body3" color="text.secondary">
                MONITOR 27" HP X27 FHD 165HZ 1MS HDMI DP
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='/product/4' size="small">Ver producto</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
            <CardMedia
                component="img"
                alt="monitor 165hz"
                height="160"
                image={productImg}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Monitor HP 165hz
                </Typography>
                <Typography variant="body3" color="text.secondary">
                MONITOR 27" HP X27 FHD 165HZ 1MS HDMI DP
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='product/5' size="small">Ver producto</Button>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
        </Card>
    );
}

export default Store;
