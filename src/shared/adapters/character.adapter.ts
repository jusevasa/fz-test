import { MAX_CHARACTERS_PER_PAGE } from '@/modules/characters/constants/characters.constants';
import { Character } from '@/modules/characters/types';

export const splitCharacterAdapter = (
  characters: Character[]
): Array<Character> => {
  return characters.slice(0, MAX_CHARACTERS_PER_PAGE);
};
