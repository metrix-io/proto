import * as grpcWeb from 'grpc-web';
import {
  Account,
  CancelAccountRequest,
  CancelAccountResponse,
  CheckEmailRequest,
  CheckEmailResponse,
  CheckUsernameRequest,
  CheckUsernameResponse,
  CreateAccountRequest,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  GetAccountByIDRequest,
  LoginRequest,
  Profile,
  ResendVerificationRequest,
  ResendVerificationResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  VerifyEmailRequest,
  VerifyEmailResponse} from './account-service_pb';

export class AccountServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createAccount(
    request: CreateAccountRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

  checkUsername(
    request: CheckUsernameRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CheckUsernameResponse) => void
  ): grpcWeb.ClientReadableStream<CheckUsernameResponse>;

  checkEmail(
    request: CheckEmailRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CheckEmailResponse) => void
  ): grpcWeb.ClientReadableStream<CheckEmailResponse>;

  getAccountByID(
    request: GetAccountByIDRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Account) => void
  ): grpcWeb.ClientReadableStream<Account>;

  forgotPassword(
    request: ForgotPasswordRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ForgotPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<ForgotPasswordResponse>;

  resetPassword(
    request: ResetPasswordRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ResetPasswordResponse) => void
  ): grpcWeb.ClientReadableStream<ResetPasswordResponse>;

  updatePassword(
    request: UpdatePasswordRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: UpdatePasswordResponse) => void
  ): grpcWeb.ClientReadableStream<UpdatePasswordResponse>;

  verifyEmail(
    request: VerifyEmailRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: VerifyEmailResponse) => void
  ): grpcWeb.ClientReadableStream<VerifyEmailResponse>;

  resendVerification(
    request: ResendVerificationRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: ResendVerificationResponse) => void
  ): grpcWeb.ClientReadableStream<ResendVerificationResponse>;

  cancelAccount(
    request: CancelAccountRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CancelAccountResponse) => void
  ): grpcWeb.ClientReadableStream<CancelAccountResponse>;

}

export class AccountServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  createAccount(
    request: CreateAccountRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Account>;

  checkUsername(
    request: CheckUsernameRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CheckUsernameResponse>;

  checkEmail(
    request: CheckEmailRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CheckEmailResponse>;

  getAccountByID(
    request: GetAccountByIDRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Account>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata
  ): Promise<Account>;

  forgotPassword(
    request: ForgotPasswordRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ForgotPasswordResponse>;

  resetPassword(
    request: ResetPasswordRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ResetPasswordResponse>;

  updatePassword(
    request: UpdatePasswordRequest,
    metadata: grpcWeb.Metadata
  ): Promise<UpdatePasswordResponse>;

  verifyEmail(
    request: VerifyEmailRequest,
    metadata: grpcWeb.Metadata
  ): Promise<VerifyEmailResponse>;

  resendVerification(
    request: ResendVerificationRequest,
    metadata: grpcWeb.Metadata
  ): Promise<ResendVerificationResponse>;

  cancelAccount(
    request: CancelAccountRequest,
    metadata: grpcWeb.Metadata
  ): Promise<CancelAccountResponse>;

}

