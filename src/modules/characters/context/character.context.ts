import { Info } from '@/core/types/Info.type';
import { createContext } from 'react';
import { Character } from '../types/Character.type';

interface ICharacterContext {
  characters: Character[];
  info: Info | null;
  setCharacters?: (characters: Character[]) => void;
  setInfo?: (info: Info) => void;
}

const defaultState = {
  characters: [],
  info: null,
};

export const CharacterContext = createContext<ICharacterContext>(defaultState);
