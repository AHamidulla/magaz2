import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

const CategoryPage = () => {
  const [priceRange, setPriceRange] = useState([100, 17000]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Ошибка загрузки данных", err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid item xs={3}>
          <Typography variant="h6" fontWeight="bold">
            Category
          </Typography>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Свитера, Трикотаж"
          />
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Xуди, свитшоты"
          />
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Футболки, поло"
          />
          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" fontWeight="bold">
            Фильтры
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            Цена
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={100}
            max={17000}
          />
          <Typography>Цвет</Typography>
           <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Белый"/>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Красный"/>
          <FormControlLabel
            control={<Checkbox name="checkedC" />}
            label="Черный"/>

        </Grid>
        <Grid item xs={9} container spacing={3}>
            {products.map((product) => (
              <Grid item xs={4} key={product.id}>
                <Card>
                    <CardMedia component="img" image={product.image} alt={product.name} />
                    <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography >{product.name}</Typography>
                        <Typography fontWeight="bold">{product.price} $</Typography>
                    </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default CategoryPage;
