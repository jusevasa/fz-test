import axios from 'axios';

import { Character } from '@/modules/characters/types';
import { loadAbort } from '@/shared/utilities/load-abort-axios.utility';
import { ServicePayloadGetCharacter } from '@/modules/characters/types/Response.type';

export const getCharacters = ({ name, page }: ServicePayloadGetCharacter) => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>(`${import.meta.env.VITE_API_URL}/character/`, {
      params: { name, page },
    }),
    controller,
  };
};
