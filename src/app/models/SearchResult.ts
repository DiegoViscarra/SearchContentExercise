import { Collection } from './Collection'

export interface SearchResult {
    resultCount: number;
    results: Collection[];
}