export class AccessToken {
  constructor ();
  getAccessToken(): string;
  setAccessToken(a: string): void;
  getSubject(): string;
  setSubject(a: string): void;
  getExpiresIn(): number;
  setExpiresIn(a: number): void;
  getExpiresAt(): number;
  setExpiresAt(a: number): void;
  toObject(): AccessToken.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AccessToken;
}

export namespace AccessToken {
  export type AsObject = {
    AccessToken: string;
    Subject: string;
    ExpiresIn: number;
    ExpiresAt: number;
  }
}

export class CreatePermissionInheritanceRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): CreatePermissionInheritanceRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreatePermissionInheritanceRequest;
}

export namespace CreatePermissionInheritanceRequest {
  export type AsObject = {
    Subject: string;
    ParentSubject: string;
  }
}

export class CreatePermissionInheritanceResponse {
  constructor ();
  toObject(): CreatePermissionInheritanceResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreatePermissionInheritanceResponse;
}

export namespace CreatePermissionInheritanceResponse {
  export type AsObject = {
  }
}

export class CreatePermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): CreatePermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreatePermissionsRequest;
}

export namespace CreatePermissionsRequest {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
  }
}

export class DeletePermissionInheritanceRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): DeletePermissionInheritanceRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeletePermissionInheritanceRequest;
}

export namespace DeletePermissionInheritanceRequest {
  export type AsObject = {
    Subject: string;
    ParentSubject: string;
  }
}

export class DeletePermissionInheritanceResponse {
  constructor ();
  toObject(): DeletePermissionInheritanceResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeletePermissionInheritanceResponse;
}

export namespace DeletePermissionInheritanceResponse {
  export type AsObject = {
  }
}

export class DeletePermissionsRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): DeletePermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeletePermissionsRequest;
}

export namespace DeletePermissionsRequest {
  export type AsObject = {
    Subject: string;
    PermissionsList: Permission[];
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

export class LogoutAllRequest {
  constructor ();
  getSubject(): string;
  setSubject(a: string): void;
  toObject(): LogoutAllRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LogoutAllRequest;
}

export namespace LogoutAllRequest {
  export type AsObject = {
    Subject: string;
  }
}

export class LogoutAllResponse {
  constructor ();
  toObject(): LogoutAllResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LogoutAllResponse;
}

export namespace LogoutAllResponse {
  export type AsObject = {
  }
}

export class LogoutRequest {
  constructor ();
  getAccessToken(): string;
  setAccessToken(a: string): void;
  toObject(): LogoutRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
    AccessToken: string;
  }
}

export class LogoutResponse {
  constructor ();
  toObject(): LogoutResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
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

