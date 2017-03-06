export enum PermissionType {
  CanEditProfile,
}

export class UserDetails {
  public user: string;
  public password: string;
  public isAdmin: boolean;
  public permissions: PermissionType[];
}
