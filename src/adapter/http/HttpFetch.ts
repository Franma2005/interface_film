import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import { Http } from "./Http";

export class HttpFetch extends Http {
    async getFilms(route:string): Promise<MoviesResponse> {
        const data = await fetch(`${this.url}${route}?api_key=${this.key}`);
        const jsonData: MoviesResponse = await data.json();
        return jsonData;
    }
}