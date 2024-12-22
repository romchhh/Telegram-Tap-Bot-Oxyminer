import { Nft } from '../types/nft';
export const NftItem = ({ nft }: { nft: Nft }) => {
  return (
    <li className="nft-list-item" key={nft.id}>
      <img src={nft.image} alt="" />
      <div className="nft-list-item-name">{nft.name}</div>
      <div className="nft-date">{nft.gettingDate}</div>
    </li>
  );
};
