import {Group} from './group.model';

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

export interface UserForm {
  username: string;
  enabled: boolean;
  emailVerified: boolean;
  email: string;
  groups: Group[];
  credentials: [{
    type: string,
    value: string,
    temporary: boolean
  }];
}
