import Button from "../../components/Button";
import { useState, useEffect } from "react";
import api, { baseURL } from "../../api";
import { currencyFormat } from "../../assets/utils";
import "./menu.scss";

const Menu = () => {
  const [products = [], setProducts] = useState();
  const [categoryActive, setCategoryActive] = useState("");
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    if (loading) {
      api.get("api/products?populate=*")
        .then(({ data }: any) => {
          const category = data.data[0].attributes.categoryId.data.attributes.categoryId;
          setProducts(
            data.data.map((item: any) => ({
              name: item.attributes.name,
              image: `${baseURL}${item.attributes.image.data.attributes.url}`,
              ingredients: item.attributes.ingredients,
              price: currencyFormat(item.attributes.price),
              categoryId: {
                name: item.attributes.categoryId.data.attributes.name,
                id: item.attributes.categoryId.data.attributes.categoryId,
              },
            }))
          );
          /* eslint-disable */
          setCategoryActive(category);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getProducts();
  });
  let categories = products.reduce((acc: any, { categoryId }: any) => {
    if(!acc.find((i: any) => i.id === categoryId.id)) {
      acc.push(categoryId)
    }
    return acc
  }, [])
  let productsByCategory = products.filter(
    (product: any) => product.categoryId.id === categoryActive
  );
  return (
    <main className="menu" id="menu">
      <section className="container my-4">
        <h1 className="menu--title mb-4">Cardápio</h1>
        {!loading ? (
          <div>
            <div className="menu__categories mb-2">
              {categories.map((category: any, index: number) => (
                <Button
                  primary={categoryActive === category.id}
                  onClick={() => {
                    setCategoryActive(category.id);
                  }}
                  key={index}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            {productsByCategory.map((product: any, index) => (
              <div key={index} className="menu__list flex align-center">
                <img src={product.image} alt={product.name} />
                <div className="menu__list--items">
                  <div className="menu__list--item">
                    <span>Nome:</span>
                    <span>{product.name}</span>
                  </div>
                  {product.ingredients ? (
                    <div className="menu__list--item">
                      <span>Ingredientes:</span>
                      <span>{product.ingredients}</span>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="menu__list--item">
                    <span>Preço:</span>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
};

export default Menu;
