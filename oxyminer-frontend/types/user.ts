import { UserFriends } from './userFriends';
import { Nft } from './nft';
export interface User {
  id: number;
  name: string;
  avatar: string;
  friends: UserFriends[];
  points: number;
  level: number;
  nftList: Nft[];
}
