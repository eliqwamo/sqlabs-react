import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: Platform}[];
    metacritic: number;
  }
  

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: selectedGenre?.id});

export default useGames;