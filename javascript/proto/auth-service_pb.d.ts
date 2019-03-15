export class AccessToken {
  constructor ();
  getAccessToken(): string;
  setAccessToken(a: string): void;
  getExpiresIn(): string;
  setExpiresIn(a: string): void;
  getExpiresAt(): number;
  setExpiresAt(a: number): void;
  toObject(): AccessToken.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AccessToken;
}

export namespace AccessToken {
  export type AsObject = {
    AccessToken: string;
    ExpiresIn: string;
    ExpiresAt: number;
  }
}

export class DeleteSubjectRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  toObject(): DeleteSubjectRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteSubjectRequest;
}

export namespace DeleteSubjectRequest {
  export type AsObject = {
    Subject: string;
  }
}

export class DeleteSubjectResponse {
  constructor ();
  toObject(): DeleteSubjectResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteSubjectResponse;
}

export namespace DeleteSubjectResponse {
  export type AsObject = {
  }
}

export class GetPermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  toObject(): GetPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
    Subject: string;
  }
}

export class GrantPermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): GrantPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GrantPermissionsRequest;
}

export namespace GrantPermissionsRequest {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
  }
}

export class HasPermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): HasPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HasPermissionsRequest;
}

export namespace HasPermissionsRequest {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
  }
}

export class HasPermissionsResponse {
  constructor ();
  getHasPermissions(): boolean;
  setHasPermissions(a: boolean): void;
  getMissingPermissionsList(): Permission[];
  setMissingPermissionsList(a: Permission[]): void;
  toObject(): HasPermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HasPermissionsResponse;
}

export namespace HasPermissionsResponse {
  export type AsObject = {
    HasPermissions: boolean;
    MissingPermissionsList: Permission[];
  }
}

export class InheritPermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): InheritPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => InheritPermissionsRequest;
}

export namespace InheritPermissionsRequest {
  export type AsObject = {
    Subject: string;
    ParentSubject: string;
  }
}

export class InheritPermissionsResponse {
  constructor ();
  toObject(): InheritPermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => InheritPermissionsResponse;
}

export namespace InheritPermissionsResponse {
  export type AsObject = {
  }
}

export class LoginRequest {
  constructor ();
  getLogin(): string;
  setLogin(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  toObject(): LoginRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    Login: string;
    Password: string;
  }
}

export class Permission {
  constructor ();
  getResource(): string;
  setResource(a: string): void;
  getOperationsList(): string[];
  setOperationsList(a: string[]): void;
  toObject(): Permission.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Permission;
}

export namespace Permission {
  export type AsObject = {
    Resource: string;
    OperationsList: string[];
  }
}

export class PermissionAssignments {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): PermissionAssignments.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PermissionAssignments;
}

export namespace PermissionAssignments {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
  }
}

export class RevokeInheritPermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): RevokeInheritPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RevokeInheritPermissionsRequest;
}

export namespace RevokeInheritPermissionsRequest {
  export type AsObject = {
    Subject: string;
    ParentSubject: string;
  }
}

export class RevokeInheritPermissionsResponse {
  constructor ();
  toObject(): RevokeInheritPermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RevokeInheritPermissionsResponse;
}

export namespace RevokeInheritPermissionsResponse {
  export type AsObject = {
  }
}

export class RevokePermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): RevokePermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RevokePermissionsRequest;
}

export namespace RevokePermissionsRequest {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
  }
}

