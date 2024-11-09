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

        const movies = await httpRequest.getFilms(route);
        const dataMovies = movies.results.map((item: Result) => movieMapper(item));
        return dataMovies;
    }
}