import { FC, useEffect, useRef, useState } from 'react';

import { Info } from '@/core/types/Info.type';
import useFetchAndLoad from '@/shared/hooks/useFetchAndLoad';
import {
  splitCharacterAdapter,
  parseToNumberNextAndPrevPage,
} from '@/shared/adapters';
import { SearchBar } from '@/shared/components/SearchBar/SearchBar';
import { LayoutSpinner } from '@/shared/components/Spinner/LayoutSpinner';
import { getCharacters } from '@/services/character.service';
import { CardCharacter } from './components/CardCharacter/CardCharacter';
import { CharacterContext } from './context/character.context';
import { Character } from './types';
import { Paginator } from '@/shared/components/Paginator/Paginator';

export interface ICharacterProps {}

const Characters: FC<ICharacterProps> = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [page, setPage] = useState<number | null>();
  const [name, setName] = useState<string>();
  const cache = useRef<any>({});

  useEffect(() => {
    initData();
  }, [page, name]);

  const handleSearch = (search: string) => {
    setName(search);
    setPage(1);
  };

  const initData = async () => {
    //validate if exist in cache
    if (cache.current[`${name}${page}`]) {
      updateState({
        characters: cache.current[`${name}${page}`].results,
        info: cache.current[`${name}${page}`].info,
      });
      return;
    }
    const res = await callEndpoint(getCharacters({ name, page }));
    cache.current[`${name}${page}`] = res.data;
    updateState({ characters: res.data.results, info: res.data.info });
  };

  const handlePaginateNext = () => {
    setPage(info?.nextPage);
  };

  const handlePaginateBack = () => {
    setPage(info?.prevPage);
  };

  const updateState = ({
    characters,
    info,
  }: {
    characters: Character[];
    info: Info;
  }) => {
    setCharacters(splitCharacterAdapter(characters));
    setInfo(parseToNumberNextAndPrevPage(info));
  };

  return (
    <>
      <CharacterContext.Provider
        value={{
          characters,
          info,
          setCharacters,
          setInfo,
        }}
      >
        <section className="container mx-auto pt-5 px-2">
          <SearchBar onSubmit={(e) => handleSearch(e)} />
          {info && (
            <Paginator
              postsPerPage={characters.length}
              totalPosts={info.count}
              paginateFront={handlePaginateNext}
              paginateBack={handlePaginateBack}
              currentPage={info.currentPage}
              prevPage={info.prevPage}
              nextPage={info.nextPage}
            />
          )}
          <div className="grid md:grid-cols-4 gap-5 mt-5 pb-5 sm:grid-cols-1 justify-center">
            {characters.map((character) => (
              <CardCharacter
                key={character.id}
                gender={character.gender}
                image={character.image}
                name={character.name}
                origin={character.origin.name}
                status={character.status}
              />
            ))}
          </div>
        </section>
        {loading && <LayoutSpinner />}
      </CharacterContext.Provider>
    </>
  );
};

export default Characters;
