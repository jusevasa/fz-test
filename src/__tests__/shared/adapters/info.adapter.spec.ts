import { Info } from '@/core/types/Info.type';
import { parseToNumberNextAndPrevPage } from '@/shared/adapters';

describe('info.adapter.ts', () => {
  it('should be return info with next and prev page', () => {
    const info: Info = {
      count: 100,
      pages: 10,
      next: 'https://rickandmortyapi.com/api/character/?page=2',
      prev: null,
    };

    const result = parseToNumberNextAndPrevPage(info);

    expect(result.nextPage).toBe(2);
    expect(result.prevPage).toBeFalsy();
  });
});
