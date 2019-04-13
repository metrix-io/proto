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

export class DisinheritPermissionsRequest {
  constructor ();
  getChildSubject(): string;
  setChildSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): DisinheritPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DisinheritPermissionsRequest;
}

export namespace DisinheritPermissionsRequest {
  export type AsObject = {
    ChildSubject: string;
    ParentSubject: string;
  }
}

export class DisinheritPermissionsResponse {
  constructor ();
  toObject(): DisinheritPermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DisinheritPermissionsResponse;
}

export namespace DisinheritPermissionsResponse {
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
  getChildSubject(): string;
  setChildSubject(a: string): void;
  getParentSubject(): string;
  setParentSubject(a: string): void;
  toObject(): InheritPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => InheritPermissionsRequest;
}

export namespace InheritPermissionsRequest {
  export type AsObject = {
    ChildSubject: string;
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
  toObject(): LogoutRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
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
  getPermissionsList(): PermissionResponse[];
  setPermissionsList(a: PermissionResponse[]): void;
  toObject(): PermissionAssignments.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PermissionAssignments;
}

export namespace PermissionAssignments {
  export type AsObject = {
    Subject: string;
    PermissionsList: PermissionResponse[];
  }
}

export class PermissionResponse {
  constructor ();
  getResource(): string;
  setResource(a: string): void;
  getOperationsList(): string[];
  setOperationsList(a: string[]): void;
  getInheritedFrom(): string;
  setInheritedFrom(a: string): void;
  getCreatedAt(): number;
  setCreatedAt(a: number): void;
  toObject(): PermissionResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PermissionResponse;
}

export namespace PermissionResponse {
  export type AsObject = {
    Resource: string;
    OperationsList: string[];
    InheritedFrom: string;
    CreatedAt: number;
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

export class RevokePermissionsResponse {
  constructor ();
  toObject(): RevokePermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RevokePermissionsResponse;
}

export namespace RevokePermissionsResponse {
  export type AsObject = {
  }
}

