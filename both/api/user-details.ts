export enum PermissionType {
  CanEditProfile,
}

export interface IUserDetails {
  user: string;
  password: string;
  isAdmin: boolean;
  permissions: PermissionType[];
}
