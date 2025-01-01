import { UserFriends } from './userFriends';
import { Nft } from './nft';

export interface User {
  id: number;
  name: string;
  avatar: string;
  level: number;
  points: number;
  nftList: Nft[];
  friends: UserFriends[];
}
