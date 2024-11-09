import { Movie } from "../config/entities/Movie";
import { movieMapper } from "../config/mapper/movieMapper";
import { Result } from "../config/Responses/dataMovies";
import { HttpFetch } from "./http/HttpFetch";
import { HttpAxios } from "./http/HttpAxios";

export class FilmAdapter {

    static ROUTES = {
        "now_playing": "/now_playing",
        "popular": "/popular",
    }

    static async getNowPlaying(route:string) : Promise<Movie[]> {
        //const httpFetch = new HttpFetch({url: "https://api.themoviedb.org/3/movie", key: "c76ed6d50b96d2bfc0920abaeade0be3"});
        //const movies =  await httpFetch.getFilms(route);
        const httpAxios = new HttpAxios(({url: "https://api.themoviedb.org/3/movie", key: "c76ed6d50b96d2bfc0920abaeade0be3"}));
        const movies =  await httpAxios.getFilms(route);
        const dataMovies =  movies.results.map((item : Result ) => movieMapper(item));
        return dataMovies;
    }
}