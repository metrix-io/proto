import * as grpcWeb from 'grpc-web';
import {
  AccessToken,
  DeleteSubjectRequest,
  DeleteSubjectResponse,
  GetPermissionsRequest,
  GrantPermissionsRequest,
  HasPermissionsRequest,
  HasPermissionsResponse,
  InheritPermissionsRequest,
  InheritPermissionsResponse,
  LoginRequest,
  Permission,
  PermissionAssignments,
  RevokeInheritPermissionsRequest,
  RevokeInheritPermissionsResponse,
  RevokePermissionsRequest} from './auth-service_pb';

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
               response: RevokePermissionsRequest) => void
  ): grpcWeb.ClientReadableStream<RevokePermissionsRequest>;

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

  revokeInheritPermissions(
    request: RevokeInheritPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: RevokeInheritPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<RevokeInheritPermissionsResponse>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AccessToken>;

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
  ): Promise<RevokePermissionsRequest>;

  deleteSubject(
    request: DeleteSubjectRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteSubjectResponse>;

  inheritPermissions(
    request: InheritPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<InheritPermissionsResponse>;

  revokeInheritPermissions(
    request: RevokeInheritPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<RevokeInheritPermissionsResponse>;

}

