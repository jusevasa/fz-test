import { FC, useState } from 'react';

import { SearchIcon } from '@/shared/icons';
import { useDebounce } from '@/shared/hooks';

interface ISearchBar {
  style?: string;
  placeholder?: string;
  onSubmit: (value: string) => void;
}

export const SearchBar: FC<ISearchBar> = ({
  style,
  placeholder = 'Search...',
  onSubmit,
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(debouncedValue);
  };

  return (
    <div className="flex items-center justify-center" data-testid="search-bar">
      <form className={style ? style : 'w-full'} onSubmit={handleSubmit}>
        <div className="relative w-full flex justify-center items-center">
          <input
            type="text"
            className="block w-full px-4 py-2 text-blue-100 bg-white border rounded-full focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40 transition ease-in-out delay-150"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="absolute right-0 pr-8">
            <SearchIcon width="30px" height="30px" color="black" />
          </button>
        </div>
      </form>
    </div>
  );
};
