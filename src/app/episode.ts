import { Anime } from "./anime";

export class Episode {

    constructor(
        public id: number, 
        public episodeNumber: number, 
        public airedDate: string, 
        public videoLink: string, 
        public anime: Anime)
    {

    }
}