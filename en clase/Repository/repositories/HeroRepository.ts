import { BaseRepository } from "./base/BaseRepository";
import { Hero } from "../entities/Hero"

export class HeroRepository extends BaseRepository<Hero>{
    // here, we can create all especific stuffs of Spartan Repository
    countOfHeros(): Promise<number> {
        return this._collection.countDocuments({})
    }
}