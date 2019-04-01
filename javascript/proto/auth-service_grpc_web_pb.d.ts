import * as grpcWeb from 'grpc-web';
import {
  AccessToken,
  CreatePermissionInheritanceRequest,
  CreatePermissionInheritanceResponse,
  CreatePermissionsRequest,
  DeletePermissionInheritanceRequest,
  DeletePermissionInheritanceResponse,
  DeletePermissionsRequest,
  DeleteSubjectRequest,
  DeleteSubjectResponse,
  GetPermissionsRequest,
  HasPermissionsRequest,
  HasPermissionsResponse,
  LoginRequest,
  Permission,
  PermissionAssignments} from './auth-service_pb';

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

  createPermissions(
    request: CreatePermissionsRequest,
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

  deletePermissions(
    request: DeletePermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeletePermissionsRequest) => void
  ): grpcWeb.ClientReadableStream<DeletePermissionsRequest>;

  deleteSubject(
    request: DeleteSubjectRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeleteSubjectResponse) => void
  ): grpcWeb.ClientReadableStream<DeleteSubjectResponse>;

  createPermissionInheritance(
    request: CreatePermissionInheritanceRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CreatePermissionInheritanceResponse) => void
  ): grpcWeb.ClientReadableStream<CreatePermissionInheritanceResponse>;

  deletePermissionInheritance(
    request: DeletePermissionInheritanceRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: DeletePermissionInheritanceResponse) => void
  ): grpcWeb.ClientReadableStream<DeletePermissionInheritanceResponse>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata
  ): Promise<AccessToken>;

  createPermissions(
    request: CreatePermissionsRequest,
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

  deletePermissions(
    request: DeletePermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeletePermissionsRequest>;

  deleteSubject(
    request: DeleteSubjectRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeleteSubjectResponse>;

  createPermissionInheritance(
    request: CreatePermissionInheritanceRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CreatePermissionInheritanceResponse>;

  deletePermissionInheritance(
    request: DeletePermissionInheritanceRequest,
    metadata: grpcWeb.Metadata
  ): Promise<DeletePermissionInheritanceResponse>;

}

