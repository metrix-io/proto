import * as grpcWeb from 'grpc-web';
import {
  HasPermissionsRequest,
  HasPermissionsResponse,
  LoginRequest,
  LoginResponse,
  Permission} from './auth-service_pb';

export class AuthServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void
  ): grpcWeb.ClientReadableStream<LoginResponse>;

  hasPermission(
    request: HasPermissionsRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HasPermissionsResponse) => void
  ): grpcWeb.ClientReadableStream<HasPermissionsResponse>;

}

export class AuthServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata
  ): Promise<LoginResponse>;

  hasPermission(
    request: HasPermissionsRequest,
    metadata: grpcWeb.Metadata
  ): Promise<HasPermissionsResponse>;

}

