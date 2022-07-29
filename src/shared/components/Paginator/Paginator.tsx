import { FC } from 'react';

import { MAX_CHARACTERS_PER_PAGE } from '@/modules/characters/constants/characters.constants';

interface IPaginatorProps {
  postsPerPage: number;
  totalPosts: number;
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage?: number;
  prevPage?: number | null;
  nextPage?: number | null;
}

export const Paginator: FC<IPaginatorProps> = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage = 1,
  prevPage,
  nextPage,
}) => {
  return (
    <div className="py-2 w-full flex justify-center items-center flex-col" data-testid='paginator'>
      <div>
        <p className="text-sm text-white-100">
          Page<span className="font-medium"> {currentPage} </span>
          <span className="font-medium">
            showing {currentPage * postsPerPage}{' '}
          </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {prevPage && (
            <a
              onClick={() => {
                paginateBack();
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-green-300 bg-white text-sm font-medium text-white-100 hover:bg-pink-100 hover:text-green-200 transition ease-out delay-150 cursor-pointer"
            >
              <span>Previous</span>
            </a>
          )}
          {nextPage && (
            <a
              onClick={() => {
                paginateFront();
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-green-300 bg-white text-sm font-medium text-white-100 hover:bg-pink-100 hover:text-green-200 transition ease-out delay-150 cursor-pointer"
            >
              <span>Next</span>
            </a>
          )}
        </nav>
      </div>
    </div>
  );
};
