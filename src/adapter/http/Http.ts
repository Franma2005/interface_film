import { MoviesResponse, Result } from "../../config/Responses/dataMovies";

export interface Config {
    url : string;
    key: string;
}

export abstract class Http {
    url: string;
    key: string;

    constructor({ url, key} : Config) {
        this.url = url;
        this.key = key;
    }

    abstract getFilms(route:string) : Promise<MoviesResponse>;
}