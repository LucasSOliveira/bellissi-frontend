import hero from "../../assets/images/hero.svg"

import pizza from "../../assets/images/pizza.png"
import wine from "../../assets/images/wine.png"
import bruschetta from "../../assets/images/bruschetta.png"

import Button from "../../components/Button";
import './home.scss'
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    { title: 'Pizza', img: pizza },
    { title: 'Vinho', img: wine },
    { title: 'Bruschetta', img: bruschetta },
  ]
  return (
    <main className="home container" id="home">
      <section className="flex align-center justify-between my-5">
        <div className="home__presentation">
          <h1 className="mb-2 font-family-02">
            Deixe seu dia
            <br />
            mais gostoso!
          </h1>
          <p className="mb-4">
            A melhor comida italiana da sua vida. Bellissi oferece os melhores
            pratos de uma das mais conhecidas culinárias do mundo.
          </p>
          <Link to="/menu">
          <Button primary>
            Cardápio
          </Button>
          </Link>
        </div>
        <img className="home__hero" src={hero} alt="hero" />
      </section>
      <section className="my-5">
        <h2 className="text-italic font-family-02">Categorias</h2>
        <div className="home__cards flex justify-between my-5 flex-wrap">
          {cards.map(card => (
            <div className="home__cards--card flex align-center justify-center flex-col text-center border-width-default my-1 p-3">
              <img src={card.img} alt={`${card.title}`} />
              <span className="mt-2">{card.title}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
