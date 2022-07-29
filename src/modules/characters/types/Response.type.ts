import { Info } from '@/core/types/Info.type';
import { Character } from './Character.type';

export type ServiceGetCharacterResponse = {
  info: Info;
  results: Character[];
};

export type ServicePayloadGetCharacter = {
  name?: string;
  page?: number | null;
};
