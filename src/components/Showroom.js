import React from "react";
import './Showroom.css'

class ShowRoom extends React.Component {

    constructor(){
        super();
        this.state = {
            category: '',
            currentCategoryObj: {},
            loading: false,
        }
        this.handleBtn = this.handleBtn.bind(this);
        this.ShowSection = this.ShowSection.bind(this);
        this.FilmHandle = this.FilmHandle.bind(this);
        this.Loading = this.Loading.bind(this);
        this.HandleCategory = this.HandleCategory.bind(this);
        this.SpecieHandle = this.SpecieHandle.bind(this);
        this.PlanetHandle = this.PlanetHandle.bind(this);
        this.VehiclesHandle = this.VehiclesHandle.bind(this);
        this.StarshipHandle = this.StarshipHandle.bind(this);
    }

    Loading(){
        return (
            <h2>Loading</h2>
            )
    }

        
    async fetch(value = '', id){
        const API = `https://swapi.dev/api/${value}/${id}`;
        const response = await fetch(API);
        const responseFetch = await response.json();
        return responseFetch;

    }

    async handleBtn(value, id, category){
        this.setState({ loading: true})
        const apiReturn = await this.fetch(value, id);
        console.log(apiReturn)
        this.setState({
            currentCategoryObj: apiReturn,
            category: category,
            endpoint: value,
            id,
            loading: false,
        })
    }

    ShowSection(){
        const { category } = this.state;
        if(category !== ''){
         return  (
             <section>
                 <div className="next-btn">
                     <button onClick={() => this.changeBtn('preview')} type="button">Anterior</button>
                     <button onClick={() => this.changeBtn('next')}  type="button">Próximo</button>
                 </div>
                 {this.HandleCategory(category)}
             </section>
         );
        }
    }

    HandleCategory(category){
        switch (category){
            case 'filme':
                return this.FilmHandle();
            case 'pessoas':
                return this.PeopleHandle();
            case 'especies':
                return this.SpecieHandle();
            case 'planetas':
                return this.PlanetHandle();
            case 'veiculos':
                return this.VehiclesHandle();
            case 'naves':
                return this.StarshipHandle();
            default:
            console.log('deu ruim')
        }
    }

    FilmHandle(){
        const { currentCategoryObj } = this.state;
        const {title, episode_id, opening_crawl, director, release_date} = currentCategoryObj;
        return (
            <div>
                <h2>Título do filme: <span>{title}</span></h2>
                <h3>Episódio <span>{episode_id}</span></h3>
                <h3>Diretor: <span>{director}</span></h3>
                <h3>Lançamento: <span>{release_date}</span></h3>
                <h3>Sinopse:</h3>
                <p>{opening_crawl}</p>
            </div>
        )
    }

    PeopleHandle(){
        const { currentCategoryObj } = this.state;
        const { name, height, gender, mass, birth_year } = currentCategoryObj;
        return (
            <div>
                <h2>Nome do personagem: <span>{name}</span></h2>
                <h3>Altura <span>{`${height}cm`}</span></h3>
                <h3>Genero: <span>{gender}</span></h3>
                <h3>Massa: <span>{`${mass}kg`}</span></h3>
                <h3>Nascimento <span>{birth_year}</span>:</h3>
            </div>
        )
    }
    SpecieHandle(){
        const { currentCategoryObj } = this.state;
        const { name, classification, designation, average_height, average_lifespan, language } = currentCategoryObj;
        return (
            <div>
                <h2>Nome da espécie: <span>{name}</span></h2>
                <h3>Classificação: <span>{classification}</span></h3>
                <h3>Designação: <span>{designation}</span></h3>
                <h3>Altura média <span>{`${average_height}cm`}</span></h3>
                <h3>Tempo de vida médio: <span>{average_lifespan}</span></h3>
                <h3>Lingua Falada: <span>{language}</span></h3>
            </div>
        )
    }

    PlanetHandle(){
        const { currentCategoryObj } = this.state;
        const { name, rotation_period, orbital_period, diameter, gravity, terrain, climate } = currentCategoryObj;
        return (
            <div>
                <h2>Nome do planeta: <span>{name}</span></h2>
                <h3>Período de rotação: <span>{rotation_period}</span></h3>
                <h3>Período de translação: <span>{orbital_period}</span></h3>
                <h3>Diâmetro <span>{`${diameter}km`}</span></h3>
                <h3>Gravidade: <span>{gravity}</span></h3>
                <h3>Terreno: <span>{terrain}</span></h3>
                <h3>Clima: <span>{climate}</span></h3>
            </div>
        )
    }

    VehiclesHandle(){
        const { currentCategoryObj } = this.state;
        const { name, model, crew } = currentCategoryObj
        return (
            <div>
                <h2>Nome do veiculo: <span>{name}</span></h2>
                <h3>Modelo: <span>{model}</span></h3>
                <h3>Número de tripulação: <span>{crew}</span></h3>
            </div>
        )
    }

    StarshipHandle(){
        const { currentCategoryObj } = this.state;
        const { name, model, crew } = currentCategoryObj
        return (
            <div>
                <h2>Nome do veiculo: <span>{name}</span></h2>
                <h3>Modelo: <span>{model}</span></h3>
                <h3>Número de tripulação: <span>{crew}</span></h3>
            </div>
        )
    }



     changeBtn(value){
        let { id, endpoint, category } = this.state;
        if(value === 'next'){
            id = id + 1
            this.setState({ id: id });
            this.handleBtn(endpoint, id, category);
        }
        else{
            id = id - 1
            this.setState({ id: id });
            this.handleBtn(endpoint, id, category);
        }
    }

    render(){
        const { loading } = this.state;
        return (
            <main>
                <section className="section-btn">
                    <button className="noselect" type="button" onClick={() => this.handleBtn('films',1,'filme')}>filmes</button>
                    <button type="button" onClick={() => this.handleBtn('people',1, 'pessoas')}>Pessoas</button>
                    <button type="button" onClick={() => this.handleBtn('species',1, 'especies')}>Espécies</button>
                    <button type="button" onClick={() => this.handleBtn('planets',1, 'planetas')}>Planetas</button>
                    <button type="button" onClick={() => this.handleBtn('vehicles',4, 'veiculos')}>Veículos</button>
                    <button type="button" onClick={() => this.handleBtn('starships',2, 'naves')}>Naves</button>
                </section>
                <section>
                {loading === false ? this.ShowSection() : this.Loading()}
                </section>
            </main>
        )
    }
}

export default ShowRoom;