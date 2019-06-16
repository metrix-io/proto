import * as jspb from "google-protobuf"

export class LoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class LogoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
  }
}

export class LogoutAllRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutAllRequest): LogoutAllRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutAllRequest;
  static deserializeBinaryFromReader(message: LogoutAllRequest, reader: jspb.BinaryReader): LogoutAllRequest;
}

export namespace LogoutAllRequest {
  export type AsObject = {
    subject: string,
  }
}

export class LogoutAllResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutAllResponse): LogoutAllResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutAllResponse;
  static deserializeBinaryFromReader(message: LogoutAllResponse, reader: jspb.BinaryReader): LogoutAllResponse;
}

export namespace LogoutAllResponse {
  export type AsObject = {
  }
}

export class AccessToken extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getExpiresIn(): number;
  setExpiresIn(value: number): void;

  getExpiresAt(): number;
  setExpiresAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessToken.AsObject;
  static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
  static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessToken;
  static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
  export type AsObject = {
    accessToken: string,
    subject: string,
    expiresIn: number,
    expiresAt: number,
  }
}

export class Permission extends jspb.Message {
  getResource(): string;
  setResource(value: string): void;

  getOperationsList(): Array<string>;
  setOperationsList(value: Array<string>): void;
  clearOperationsList(): void;
  addOperations(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    resource: string,
    operationsList: Array<string>,
  }
}

export class PermissionResponse extends jspb.Message {
  getResource(): string;
  setResource(value: string): void;

  getOperationsList(): Array<string>;
  setOperationsList(value: Array<string>): void;
  clearOperationsList(): void;
  addOperations(value: string, index?: number): void;

  getInheritedFrom(): string;
  setInheritedFrom(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionResponse): PermissionResponse.AsObject;
  static serializeBinaryToWriter(message: PermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionResponse;
  static deserializeBinaryFromReader(message: PermissionResponse, reader: jspb.BinaryReader): PermissionResponse;
}

export namespace PermissionResponse {
  export type AsObject = {
    resource: string,
    operationsList: Array<string>,
    inheritedFrom: string,
    createdAt: number,
  }
}

export class PermissionAssignments extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getPermissionsList(): Array<PermissionResponse>;
  setPermissionsList(value: Array<PermissionResponse>): void;
  clearPermissionsList(): void;
  addPermissions(value?: PermissionResponse, index?: number): PermissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionAssignments.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionAssignments): PermissionAssignments.AsObject;
  static serializeBinaryToWriter(message: PermissionAssignments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionAssignments;
  static deserializeBinaryFromReader(message: PermissionAssignments, reader: jspb.BinaryReader): PermissionAssignments;
}

export namespace PermissionAssignments {
  export type AsObject = {
    subject: string,
    permissionsList: Array<PermissionResponse.AsObject>,
  }
}

export class GrantPermissionsRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  clearPermissionsList(): void;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GrantPermissionsRequest): GrantPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: GrantPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantPermissionsRequest;
  static deserializeBinaryFromReader(message: GrantPermissionsRequest, reader: jspb.BinaryReader): GrantPermissionsRequest;
}

export namespace GrantPermissionsRequest {
  export type AsObject = {
    subject: string,
    permissionsList: Array<Permission.AsObject>,
  }
}

export class GrantPermissionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GrantPermissionsResponse): GrantPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: GrantPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantPermissionsResponse;
  static deserializeBinaryFromReader(message: GrantPermissionsResponse, reader: jspb.BinaryReader): GrantPermissionsResponse;
}

export namespace GrantPermissionsResponse {
  export type AsObject = {
  }
}

export class RevokePermissionsRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  clearPermissionsList(): void;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokePermissionsRequest): RevokePermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: RevokePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokePermissionsRequest;
  static deserializeBinaryFromReader(message: RevokePermissionsRequest, reader: jspb.BinaryReader): RevokePermissionsRequest;
}

export namespace RevokePermissionsRequest {
  export type AsObject = {
    subject: string,
    permissionsList: Array<Permission.AsObject>,
  }
}

export class RevokePermissionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokePermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokePermissionsResponse): RevokePermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: RevokePermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokePermissionsResponse;
  static deserializeBinaryFromReader(message: RevokePermissionsResponse, reader: jspb.BinaryReader): RevokePermissionsResponse;
}

export namespace RevokePermissionsResponse {
  export type AsObject = {
  }
}

export class GetPermissionsRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
    subject: string,
  }
}

export class HasPermissionsRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  clearPermissionsList(): void;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HasPermissionsRequest): HasPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: HasPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasPermissionsRequest;
  static deserializeBinaryFromReader(message: HasPermissionsRequest, reader: jspb.BinaryReader): HasPermissionsRequest;
}

export namespace HasPermissionsRequest {
  export type AsObject = {
    subject: string,
    permissionsList: Array<Permission.AsObject>,
  }
}

export class HasPermissionsResponse extends jspb.Message {
  getHasPermissions(): boolean;
  setHasPermissions(value: boolean): void;

  getMissingPermissionsList(): Array<Permission>;
  setMissingPermissionsList(value: Array<Permission>): void;
  clearMissingPermissionsList(): void;
  addMissingPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HasPermissionsResponse): HasPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: HasPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HasPermissionsResponse;
  static deserializeBinaryFromReader(message: HasPermissionsResponse, reader: jspb.BinaryReader): HasPermissionsResponse;
}

export namespace HasPermissionsResponse {
  export type AsObject = {
    hasPermissions: boolean,
    missingPermissionsList: Array<Permission.AsObject>,
  }
}

export class InheritPermissionsRequest extends jspb.Message {
  getChildSubject(): string;
  setChildSubject(value: string): void;

  getParentSubject(): string;
  setParentSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InheritPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InheritPermissionsRequest): InheritPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: InheritPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InheritPermissionsRequest;
  static deserializeBinaryFromReader(message: InheritPermissionsRequest, reader: jspb.BinaryReader): InheritPermissionsRequest;
}

export namespace InheritPermissionsRequest {
  export type AsObject = {
    childSubject: string,
    parentSubject: string,
  }
}

export class InheritPermissionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InheritPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InheritPermissionsResponse): InheritPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: InheritPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InheritPermissionsResponse;
  static deserializeBinaryFromReader(message: InheritPermissionsResponse, reader: jspb.BinaryReader): InheritPermissionsResponse;
}

export namespace InheritPermissionsResponse {
  export type AsObject = {
  }
}

export class DisinheritPermissionsRequest extends jspb.Message {
  getChildSubject(): string;
  setChildSubject(value: string): void;

  getParentSubject(): string;
  setParentSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisinheritPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisinheritPermissionsRequest): DisinheritPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: DisinheritPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisinheritPermissionsRequest;
  static deserializeBinaryFromReader(message: DisinheritPermissionsRequest, reader: jspb.BinaryReader): DisinheritPermissionsRequest;
}

export namespace DisinheritPermissionsRequest {
  export type AsObject = {
    childSubject: string,
    parentSubject: string,
  }
}

export class DisinheritPermissionsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisinheritPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisinheritPermissionsResponse): DisinheritPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: DisinheritPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisinheritPermissionsResponse;
  static deserializeBinaryFromReader(message: DisinheritPermissionsResponse, reader: jspb.BinaryReader): DisinheritPermissionsResponse;
}

export namespace DisinheritPermissionsResponse {
  export type AsObject = {
  }
}

export class DeleteSubjectRequest extends jspb.Message {
  getSubject(): string;
  setSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubjectRequest): DeleteSubjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSubjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubjectRequest;
  static deserializeBinaryFromReader(message: DeleteSubjectRequest, reader: jspb.BinaryReader): DeleteSubjectRequest;
}

export namespace DeleteSubjectRequest {
  export type AsObject = {
    subject: string,
  }
}

export class DeleteSubjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSubjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSubjectResponse): DeleteSubjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSubjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSubjectResponse;
  static deserializeBinaryFromReader(message: DeleteSubjectResponse, reader: jspb.BinaryReader): DeleteSubjectResponse;
}

export namespace DeleteSubjectResponse {
  export type AsObject = {
  }
}

