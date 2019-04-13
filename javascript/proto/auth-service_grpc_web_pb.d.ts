import * as grpcWeb from 'grpc-web';
import {
  AccessToken,
  DeleteSubjectRequest,
  DeleteSubjectResponse,
  DisinheritPermissionsRequest,
  DisinheritPermissionsResponse,
  GetPermissionsRequest,
  GrantPermissionsRequest,
  HasPermissionsRequest,
  HasPermissionsResponse,
  InheritPermissionsRequest,
  InheritPermissionsResponse,
  LoginRequest,
  LogoutAllRequest,
  LogoutAllResponse,
  LogoutRequest,
  LogoutResponse,
  Permission,
  PermissionAssignments,
  PermissionResponse,
  RevokePermissionsRequest,
  RevokePermissionsResponse} from './auth-service_pb';

export class AuthServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: AccessToken) => void
  ): grpcWeb.ClientReadableStream<AccessToken>;

  logout(
    request: LogoutRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: LogoutResponse) => void
  ): grpcWeb.ClientReadableStream<LogoutResponse>;

  logoutAll(
    request: LogoutAllRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: LogoutAllResponse) => void
  ): grpcWeb.ClientReadableStream<LogoutAllResponse>;

  grantPermissions(
    request: GrantPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: PermissionAssignments) => void
  ): grpcWeb.ClientReadableStream<PermissionAssignments>;

  getPermissions(
    request: GetPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: PermissionAssignments) => void
  ): grpcWeb.ClientReadableStream<PermissionAssignments>;

  hasPermissions(
    request: HasPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HasPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<HasPermissionsResponse>;

  revokePermissions(
    request: RevokePermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: RevokePermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<RevokePermissionsResponse>;

  deleteSubject(
    request: DeleteSubjectRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteSubjectResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteSubjectResponse>;

  inheritPermissions(
    request: InheritPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: InheritPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<InheritPermissionsResponse>;

  disinheritPermissions(
    request: DisinheritPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DisinheritPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<DisinheritPermissionsResponse>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AccessToken>;

  logout(
    request: LogoutRequest,
    metadata: grpcWeb.Metadata
  ): Promise<LogoutResponse>;

  logoutAll(
    request: LogoutAllRequest,
    metadata: grpcWeb.Metadata
  ): Promise<LogoutAllResponse>;

  grantPermissions(
    request: GrantPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<PermissionAssignments>;

  getPermissions(
    request: GetPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<PermissionAssignments>;

  hasPermissions(
    request: HasPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HasPermissionsResponse>;

  revokePermissions(
    request: RevokePermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<RevokePermissionsResponse>;

  deleteSubject(
    request: DeleteSubjectRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteSubjectResponse>;

  inheritPermissions(
    request: InheritPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<InheritPermissionsResponse>;

  disinheritPermissions(
    request: DisinheritPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DisinheritPermissionsResponse>;

}

