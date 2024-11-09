import { MoviesResponse, Result } from "../../config/Responses/dataMovies";
import axios, { AxiosInstance } from "axios";
import { Http, Config } from "./Http";
import ShowFilm from "../../screens/ShowFilm";

export class HttpAxios extends Http {
    
    data:AxiosInstance

    constructor({url, key}: Config) {
        super({url, key});
        this.data = axios.create({
            baseURL: this.url,
            timeout: 5000,
            headers: { 'X-Custom-Header': 'foobar' }
        });
    }
    
    async getFilms(route: string): Promise<MoviesResponse> {
        
        return (await this.data.get(
            route,
            {
            params: {api_key:this.key},
            responseType: 'json'
        })).data;
    }
}