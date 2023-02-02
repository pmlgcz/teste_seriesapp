import { useEffect, useState } from "react";
import API from "../../axios/config";
import ListItems from "../../components/ListItems";
import Section from "../../components/Section";
import "./Home.css"
import PLAYIMG from '../../images/play.png'
import LoadingGIF from '../../images/gif-loading.gif'
import wandinhaIMG from '../../images/wandinha.jpg'


export default function Home() {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    API.get("/series")
    .then(response=>setSeries(response.data))
  }, []);


  return (
    <>
      <div id="MaisVistas">
        <img src={wandinhaIMG}/>
        <h2>Mais vistas</h2>
      </div>
      <Section>
        {series.length === 0 ? (
          <img src={wandinhaIMG} id="LoadingGIF" alt="" />
        ) : (
          series.map((item) => (

            <ListItems nomeSeries={item.series} anoSeries={item.ano} img={item.imagem} id={item.id} Sinopse={item.sinopse} />
            

          ))
        )}
        
      </Section>
    </>
  );
}
