export class HasPermissionsRequest {
  constructor ();
  getResource(): string;
  setResource(a: string): void;
  getPermissionsList(): Permission[];
  setPermissionsList(a: Permission[]): void;
  toObject(): HasPermissionsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HasPermissionsRequest;
}

export namespace HasPermissionsRequest {
  export type AsObject = {
    Resource: string;
    PermissionsList: Permission[];
  }
}

export class HasPermissionsResponse {
  constructor ();
  toObject(): HasPermissionsResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => HasPermissionsResponse;
}

export namespace HasPermissionsResponse {
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

export class LoginResponse {
  constructor ();
  getAccessToken(): string;
  setAccessToken(a: string): void;
  getExpiresIn(): string;
  setExpiresIn(a: string): void;
  toObject(): LoginResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    AccessToken: string;
    ExpiresIn: string;
  }
}

export class Permission {
  constructor ();
  getResource(): string;
  setResource(a: string): void;
  getActionsList(): string[];
  setActionsList(a: string[]): void;
  toObject(): Permission.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Permission;
}

export namespace Permission {
  export type AsObject = {
    Resource: string;
    ActionsList: string[];
  }
}

