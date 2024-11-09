import { Movie } from "../config/entities/Movie";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpFetch } from "./http/HttpFetch";
import { HttpAxios } from "./http/HttpAxios";
import { urlRequest } from "../config/Config";
import { Route } from "@react-navigation/native";

export class FilmAdapter {

    static ROUTES = {
        "now_playing": "/now_playing",
        "popular": "/popular",
    }

    static async getNowPlaying(route: string): Promise<Movie[]> {
        if(!Reflect.has(FilmAdapter.ROUTES, route)) route = FilmAdapter.ROUTES.popular;
        
        let httpRequest;

        switch (urlRequest.tool) {
            case "axios":
                httpRequest = new HttpAxios(({ url: urlRequest.url, key: urlRequest.key }));
                break;
            case "fetch":
                httpRequest = new HttpFetch(({ url: urlRequest.url, key: urlRequest.key }));
                break;
            default:
                httpRequest = new HttpFetch(({ url: urlRequest.url, key: urlRequest.key }));
                break;
        }

        /**
         * * Comentario explicativo:
         * El otro día al final de clase estabamos confusos porque no sabiamos que tipo de valor era movie. Explicacioón
         * 1) httpRequest.getFilms(route); devuelve una Promesa
         * 2) Gracias al await esperamos a que se resuelva la promesa. Caso positivo retorna MoviesResponse, caso negativo lanza una excepcion rejected
         * 3) Finalmente a la hora de devolver el valor el método al ser async envolverá en una promesa a dataMovies
         */
        const movies = await httpRequest.getFilms(route);
        const dataMovies = movies.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
}