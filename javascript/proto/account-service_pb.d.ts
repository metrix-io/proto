export class Account {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getSubject(): string;
  setSubject(a: string): void;
  getUsername(): string;
  setUsername(a: string): void;
  getEmail(): string;
  setEmail(a: string): void;
  getEmailVerified(): boolean;
  setEmailVerified(a: boolean): void;
  getProfile(): Profile;
  setProfile(a: Profile): void;
  getPhoneNumber(): string;
  setPhoneNumber(a: string): void;
  getPhoneNumberVerified(): boolean;
  setPhoneNumberVerified(a: boolean): void;
  getCreatedAt(): number;
  setCreatedAt(a: number): void;
  getUpdatedAt(): number;
  setUpdatedAt(a: number): void;
  getCancelledAt(): number;
  setCancelledAt(a: number): void;
  getLastLoginAt(): number;
  setLastLoginAt(a: number): void;
  toObject(): Account.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Account;
}

export namespace Account {
  export type AsObject = {
    Id: string;
    Subject: string;
    Username: string;
    Email: string;
    EmailVerified: boolean;
    Profile: Profile;
    PhoneNumber: string;
    PhoneNumberVerified: boolean;
    CreatedAt: number;
    UpdatedAt: number;
    CancelledAt: number;
    LastLoginAt: number;
  }
}

export class CancelAccountRequest {
  constructor ();
  getAccountId(): string;
  setAccountId(a: string): void;
  toObject(): CancelAccountRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CancelAccountRequest;
}

export namespace CancelAccountRequest {
  export type AsObject = {
    AccountId: string;
  }
}

export class CancelAccountResponse {
  constructor ();
  toObject(): CancelAccountResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CancelAccountResponse;
}

export namespace CancelAccountResponse {
  export type AsObject = {
  }
}

export class CheckCredentialsRequest {
  constructor ();
  getLogin(): string;
  setLogin(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  toObject(): CheckCredentialsRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckCredentialsRequest;
}

export namespace CheckCredentialsRequest {
  export type AsObject = {
    Login: string;
    Password: string;
  }
}

export class CheckEmailRequest {
  constructor ();
  getEmail(): string;
  setEmail(a: string): void;
  toObject(): CheckEmailRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckEmailRequest;
}

export namespace CheckEmailRequest {
  export type AsObject = {
    Email: string;
  }
}

export class CheckEmailResponse {
  constructor ();
  getIsAvailable(): boolean;
  setIsAvailable(a: boolean): void;
  toObject(): CheckEmailResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckEmailResponse;
}

export namespace CheckEmailResponse {
  export type AsObject = {
    IsAvailable: boolean;
  }
}

export class CheckResetTokenRequest {
  constructor ();
  getResetToken(): string;
  setResetToken(a: string): void;
  toObject(): CheckResetTokenRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckResetTokenRequest;
}

export namespace CheckResetTokenRequest {
  export type AsObject = {
    ResetToken: string;
  }
}

export class CheckResetTokenResponse {
  constructor ();
  getIsValid(): boolean;
  setIsValid(a: boolean): void;
  toObject(): CheckResetTokenResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckResetTokenResponse;
}

export namespace CheckResetTokenResponse {
  export type AsObject = {
    IsValid: boolean;
  }
}

export class CheckUsernameRequest {
  constructor ();
  getUsername(): string;
  setUsername(a: string): void;
  toObject(): CheckUsernameRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckUsernameRequest;
}

export namespace CheckUsernameRequest {
  export type AsObject = {
    Username: string;
  }
}

export class CheckUsernameResponse {
  constructor ();
  getIsAvailable(): boolean;
  setIsAvailable(a: boolean): void;
  toObject(): CheckUsernameResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CheckUsernameResponse;
}

export namespace CheckUsernameResponse {
  export type AsObject = {
    IsAvailable: boolean;
  }
}

export class CreateAccountRequest {
  constructor ();
  getEmail(): string;
  setEmail(a: string): void;
  getUsername(): string;
  setUsername(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getProfile(): Profile;
  setProfile(a: Profile): void;
  toObject(): CreateAccountRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    Email: string;
    Username: string;
    Password: string;
    Profile: Profile;
  }
}

export class ForgotPasswordRequest {
  constructor ();
  getEmail(): string;
  setEmail(a: string): void;
  toObject(): ForgotPasswordRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    Email: string;
  }
}

export class ForgotPasswordResponse {
  constructor ();
  toObject(): ForgotPasswordResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
  }
}

export class GetAccountByIDRequest {
  constructor ();
  getAccountId(): string;
  setAccountId(a: string): void;
  toObject(): GetAccountByIDRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetAccountByIDRequest;
}

export namespace GetAccountByIDRequest {
  export type AsObject = {
    AccountId: string;
  }
}

export class Profile {
  constructor ();
  getName(): string;
  setName(a: string): void;
  getFirstName(): string;
  setFirstName(a: string): void;
  getLastName(): string;
  setLastName(a: string): void;
  getMiddleName(): string;
  setMiddleName(a: string): void;
  getNickname(): string;
  setNickname(a: string): void;
  getProfile(): string;
  setProfile(a: string): void;
  getPicture(): string;
  setPicture(a: string): void;
  getWebsite(): string;
  setWebsite(a: string): void;
  getGender(): string;
  setGender(a: string): void;
  getBirthdate(): string;
  setBirthdate(a: string): void;
  getZoneinfo(): string;
  setZoneinfo(a: string): void;
  getLocale(): string;
  setLocale(a: string): void;
  toObject(): Profile.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Profile;
}

export namespace Profile {
  export type AsObject = {
    Name: string;
    FirstName: string;
    LastName: string;
    MiddleName: string;
    Nickname: string;
    Profile: string;
    Picture: string;
    Website: string;
    Gender: string;
    Birthdate: string;
    Zoneinfo: string;
    Locale: string;
  }
}

export class ResendVerificationRequest {
  constructor ();
  getEmail(): string;
  setEmail(a: string): void;
  toObject(): ResendVerificationRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ResendVerificationRequest;
}

export namespace ResendVerificationRequest {
  export type AsObject = {
    Email: string;
  }
}

export class ResendVerificationResponse {
  constructor ();
  toObject(): ResendVerificationResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ResendVerificationResponse;
}

export namespace ResendVerificationResponse {
  export type AsObject = {
  }
}

export class ResetPasswordRequest {
  constructor ();
  getResetToken(): string;
  setResetToken(a: string): void;
  getNewPassword(): string;
  setNewPassword(a: string): void;
  toObject(): ResetPasswordRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    ResetToken: string;
    NewPassword: string;
  }
}

export class ResetPasswordResponse {
  constructor ();
  toObject(): ResetPasswordResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
  }
}

export class UpdatePasswordRequest {
  constructor ();
  getAccountId(): string;
  setAccountId(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getNewPassword(): string;
  setNewPassword(a: string): void;
  toObject(): UpdatePasswordRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    AccountId: string;
    Password: string;
    NewPassword: string;
  }
}

export class UpdatePasswordResponse {
  constructor ();
  toObject(): UpdatePasswordResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdatePasswordResponse;
}

export namespace UpdatePasswordResponse {
  export type AsObject = {
  }
}

export class VerifyEmailRequest {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  toObject(): VerifyEmailRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    Token: string;
  }
}

export class VerifyEmailResponse {
  constructor ();
  toObject(): VerifyEmailResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
  }
}

