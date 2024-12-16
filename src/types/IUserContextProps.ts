
export interface IUserContextProps {
  username?: string;
  saveLoginUserToCache: (user: string) => void
}