import { MAX_CHARACTERS_PER_PAGE } from '@/modules/characters/constants/characters.constants';
import { splitCharacterAdapter } from '@/shared/adapters';
import { ARRAY_CHARACTERS_MOCK } from '../../../mocks';

describe('character.adapter.ts', () => {
  it('should be return max lenght elements', () => {
    expect(splitCharacterAdapter(ARRAY_CHARACTERS_MOCK).length).toBe(
      MAX_CHARACTERS_PER_PAGE
    );
  });
});
