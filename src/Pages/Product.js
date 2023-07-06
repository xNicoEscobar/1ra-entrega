import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import productImg from '../Assets/monitor-27-165hz.jpg';

function Product() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={productImg}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Especificaciones de la pantalla

                        Tamaño de pantalla (diagonal) 27"

                        Área de pantalla (métrica) 59,67 x 33,57 cm

                        Relación ancho-alto 16:9

                        Resolución (nativa) FHD (1920 x 1080)

                        Resoluciones admitidas 640 x 480; 720 x 400; 800 x 600; 1024 x 768; 1280 x 720; 1280 x 800; 1280 x 1024; 1440 x 900; 1600 x 900; 1680 x 1050; 1920 x 1080

                        Distancia entre píxeles 0,311 mm

                        Brillo 400 nits

                        Relación de contraste 1000:1

                        Tiempo de respuesta 1 ms GtG (con Overdrive)

                        Frecuencia de escaneo de pantalla (horizontal) 30-210 KHz

                        Frecuencia de escaneo de pantalla (vertical) 60-165 Hz

                        Controles en pantalla Salida; Información; Administración; Control de alimentación; Control de entrada; Control de menú; Juegos; Imagen; Color

                        Funciones de la pantalla Rotación de pivote; Modo low blue light; Antirreflectante; Altura ajustable; AMD Freesync™ Premium; Compatible con consola de juegos

                        Montaje VESA 100 mm x 100 mm (soporte no incluido)
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Agregar al carrito
                </Button>
            </CardActions>
        </Card>
    );
}

export default Product;