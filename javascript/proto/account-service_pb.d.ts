import * as jspb from "google-protobuf"

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getEmailVerified(): boolean;
  setEmailVerified(value: boolean): void;

  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): void;

  getPhoneNumberVerified(): boolean;
  setPhoneNumberVerified(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  getCancelledAt(): number;
  setCancelledAt(value: number): void;

  getLastLoginAt(): number;
  setLastLoginAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    subject: string,
    username: string,
    email: string,
    emailVerified: boolean,
    profile?: Profile.AsObject,
    phoneNumber: string,
    phoneNumberVerified: boolean,
    createdAt: number,
    updatedAt: number,
    cancelledAt: number,
    lastLoginAt: number,
  }
}

export class Profile extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getMiddleName(): string;
  setMiddleName(value: string): void;

  getNickname(): string;
  setNickname(value: string): void;

  getProfile(): string;
  setProfile(value: string): void;

  getPicture(): string;
  setPicture(value: string): void;

  getWebsite(): string;
  setWebsite(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getBirthdate(): string;
  setBirthdate(value: string): void;

  getZoneinfo(): string;
  setZoneinfo(value: string): void;

  getLocale(): string;
  setLocale(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    name: string,
    firstName: string,
    lastName: string,
    middleName: string,
    nickname: string,
    profile: string,
    picture: string,
    website: string,
    gender: string,
    birthdate: string,
    zoneinfo: string,
    locale: string,
  }
}

export class Email extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getIsVerified(): boolean;
  setIsVerified(value: boolean): void;

  getIsPrimary(): boolean;
  setIsPrimary(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    id: string,
    accountId: string,
    email: string,
    isVerified: boolean,
    isPrimary: boolean,
    createdAt: number,
    updatedAt: number,
  }
}

export class GetAccountByIDRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountByIDRequest): GetAccountByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountByIDRequest;
  static deserializeBinaryFromReader(message: GetAccountByIDRequest, reader: jspb.BinaryReader): GetAccountByIDRequest;
}

export namespace GetAccountByIDRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class CreateAccountRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: string,
    profile?: Profile.AsObject,
  }
}

export class UpdateAccountRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getProfile(): Profile | undefined;
  setProfile(value?: Profile): void;
  hasProfile(): boolean;
  clearProfile(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    accountId: string,
    profile?: Profile.AsObject,
  }
}

export class UpdateAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountResponse): UpdateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountResponse;
  static deserializeBinaryFromReader(message: UpdateAccountResponse, reader: jspb.BinaryReader): UpdateAccountResponse;
}

export namespace UpdateAccountResponse {
  export type AsObject = {
  }
}

export class CheckCredentialsRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckCredentialsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckCredentialsRequest): CheckCredentialsRequest.AsObject;
  static serializeBinaryToWriter(message: CheckCredentialsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckCredentialsRequest;
  static deserializeBinaryFromReader(message: CheckCredentialsRequest, reader: jspb.BinaryReader): CheckCredentialsRequest;
}

export namespace CheckCredentialsRequest {
  export type AsObject = {
    login: string,
    password: string,
  }
}

export class ForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class ForgotPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
  }
}

export class CheckResetTokenRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResetTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResetTokenRequest): CheckResetTokenRequest.AsObject;
  static serializeBinaryToWriter(message: CheckResetTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResetTokenRequest;
  static deserializeBinaryFromReader(message: CheckResetTokenRequest, reader: jspb.BinaryReader): CheckResetTokenRequest;
}

export namespace CheckResetTokenRequest {
  export type AsObject = {
    resetToken: string,
  }
}

export class CheckResetTokenResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResetTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResetTokenResponse): CheckResetTokenResponse.AsObject;
  static serializeBinaryToWriter(message: CheckResetTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResetTokenResponse;
  static deserializeBinaryFromReader(message: CheckResetTokenResponse, reader: jspb.BinaryReader): CheckResetTokenResponse;
}

export namespace CheckResetTokenResponse {
  export type AsObject = {
    isValid: boolean,
  }
}

export class ResetPasswordRequest extends jspb.Message {
  getResetToken(): string;
  setResetToken(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    resetToken: string,
    newPassword: string,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
  }
}

export class UpdatePasswordRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordRequest): UpdatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordRequest;
  static deserializeBinaryFromReader(message: UpdatePasswordRequest, reader: jspb.BinaryReader): UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    accountId: string,
    password: string,
    newPassword: string,
  }
}

export class UpdatePasswordResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordResponse): UpdatePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordResponse;
  static deserializeBinaryFromReader(message: UpdatePasswordResponse, reader: jspb.BinaryReader): UpdatePasswordResponse;
}

export namespace UpdatePasswordResponse {
  export type AsObject = {
  }
}

export class VerifyEmailRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    token: string,
  }
}

export class VerifyEmailResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
  static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
  }
}

export class ResendVerificationRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerificationRequest): ResendVerificationRequest.AsObject;
  static serializeBinaryToWriter(message: ResendVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerificationRequest;
  static deserializeBinaryFromReader(message: ResendVerificationRequest, reader: jspb.BinaryReader): ResendVerificationRequest;
}

export namespace ResendVerificationRequest {
  export type AsObject = {
    email: string,
  }
}

export class ResendVerificationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerificationResponse): ResendVerificationResponse.AsObject;
  static serializeBinaryToWriter(message: ResendVerificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerificationResponse;
  static deserializeBinaryFromReader(message: ResendVerificationResponse, reader: jspb.BinaryReader): ResendVerificationResponse;
}

export namespace ResendVerificationResponse {
  export type AsObject = {
  }
}

export class CancelAccountRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelAccountRequest): CancelAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CancelAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelAccountRequest;
  static deserializeBinaryFromReader(message: CancelAccountRequest, reader: jspb.BinaryReader): CancelAccountRequest;
}

export namespace CancelAccountRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class CancelAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelAccountResponse): CancelAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CancelAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelAccountResponse;
  static deserializeBinaryFromReader(message: CancelAccountResponse, reader: jspb.BinaryReader): CancelAccountResponse;
}

export namespace CancelAccountResponse {
  export type AsObject = {
  }
}

export class CheckUsernameRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUsernameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUsernameRequest): CheckUsernameRequest.AsObject;
  static serializeBinaryToWriter(message: CheckUsernameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUsernameRequest;
  static deserializeBinaryFromReader(message: CheckUsernameRequest, reader: jspb.BinaryReader): CheckUsernameRequest;
}

export namespace CheckUsernameRequest {
  export type AsObject = {
    username: string,
  }
}

export class CheckUsernameResponse extends jspb.Message {
  getIsAvailable(): boolean;
  setIsAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUsernameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUsernameResponse): CheckUsernameResponse.AsObject;
  static serializeBinaryToWriter(message: CheckUsernameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUsernameResponse;
  static deserializeBinaryFromReader(message: CheckUsernameResponse, reader: jspb.BinaryReader): CheckUsernameResponse;
}

export namespace CheckUsernameResponse {
  export type AsObject = {
    isAvailable: boolean,
  }
}

export class CheckEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailRequest): CheckEmailRequest.AsObject;
  static serializeBinaryToWriter(message: CheckEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailRequest;
  static deserializeBinaryFromReader(message: CheckEmailRequest, reader: jspb.BinaryReader): CheckEmailRequest;
}

export namespace CheckEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class CheckEmailResponse extends jspb.Message {
  getIsAvailable(): boolean;
  setIsAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckEmailResponse): CheckEmailResponse.AsObject;
  static serializeBinaryToWriter(message: CheckEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckEmailResponse;
  static deserializeBinaryFromReader(message: CheckEmailResponse, reader: jspb.BinaryReader): CheckEmailResponse;
}

export namespace CheckEmailResponse {
  export type AsObject = {
    isAvailable: boolean,
  }
}

