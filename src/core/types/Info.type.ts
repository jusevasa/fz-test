export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
  nextPage?: number | null;
  prevPage?: number | null;
  currentPage?: number;
};
