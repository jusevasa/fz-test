import { FC } from 'react';

interface ICardCharacterProps {
  gender?: string;
  image?: string;
  name?: string;
  origin?: string;
  status?: string;
}

export const CardCharacter: FC<ICardCharacterProps> = ({
  gender,
  image,
  name,
  origin,
  status,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-grey-200 hover:scale-110 hover:shadow-pink-100 transition ease-in-out delay-75">
      <img className="w-full" src={image} alt="" />
      <div className="px-2 py-4 font-bold text-xl mb-2">{name}</div>
      <div className="px-2 pt-4 pb-2">
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-100 mr-2 mb-2">
          {gender}
        </span>
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-100 mr-2 mb-2">
          {origin}
        </span>
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-blue-100 mr-2 mb-2">
          {status}
        </span>
      </div>
    </div>
  );
};
