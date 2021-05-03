export interface User {
  id: string;
  createdTimestamp: Date;
  username: string;
  enabled: boolean;
  totp: boolean;
  emailVerified: boolean;
  disableableCredentialTypes: [];
  requiredActions: [];
  notBefore: number;
  access: {
    manageGroupMembership: boolean;
    view: boolean;
    mapRoles: boolean;
    impersonate: boolean;
    manage: boolean;
  };
}
