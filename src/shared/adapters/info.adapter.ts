import { Info } from '@/core/types/Info.type';

export const parseToNumberNextAndPrevPage = (info: Info) => {
  info.nextPage = info.next ? parseInt(info.next.split('=')[1]) : null;
  info.prevPage = info.prev ? parseInt(info.prev.split('=')[1]) : null;
  info.currentPage = info.nextPage ? info.nextPage - 1 : 1;
  return info;
};
