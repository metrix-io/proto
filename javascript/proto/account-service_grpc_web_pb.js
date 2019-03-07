/**
 * @fileoverview gRPC-Web generated client stub for metrixio
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.metrixio = require('./account-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.metrixio.AccountServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.metrixio.AccountServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.metrixio.AccountServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.metrixio.AccountServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CreateAccountRequest,
 *   !proto.metrixio.Account>}
 */
const methodInfo_AccountService_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.Account,
  /** @param {!proto.metrixio.CreateAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.Account.deserializeBinary
);


/**
 * @param {!proto.metrixio.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/CreateAccount',
      request,
      metadata,
      methodInfo_AccountService_CreateAccount,
      callback);
};


/**
 * @param {!proto.metrixio.CreateAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.Account>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.createAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CheckUsernameRequest,
 *   !proto.metrixio.CheckUsernameResponse>}
 */
const methodInfo_AccountService_CheckUsername = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.CheckUsernameResponse,
  /** @param {!proto.metrixio.CheckUsernameRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.CheckUsernameResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.CheckUsernameRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.CheckUsernameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.CheckUsernameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.checkUsername =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/CheckUsername',
      request,
      metadata,
      methodInfo_AccountService_CheckUsername,
      callback);
};


/**
 * @param {!proto.metrixio.CheckUsernameRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.CheckUsernameResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.checkUsername =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.checkUsername(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CheckEmailRequest,
 *   !proto.metrixio.CheckEmailResponse>}
 */
const methodInfo_AccountService_CheckEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.CheckEmailResponse,
  /** @param {!proto.metrixio.CheckEmailRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.CheckEmailResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.CheckEmailRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.CheckEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.CheckEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.checkEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/CheckEmail',
      request,
      metadata,
      methodInfo_AccountService_CheckEmail,
      callback);
};


/**
 * @param {!proto.metrixio.CheckEmailRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.CheckEmailResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.checkEmail =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.checkEmail(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.GetAccountByIDRequest,
 *   !proto.metrixio.Account>}
 */
const methodInfo_AccountService_GetAccountByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.Account,
  /** @param {!proto.metrixio.GetAccountByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.Account.deserializeBinary
);


/**
 * @param {!proto.metrixio.GetAccountByIDRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.getAccountByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/GetAccountByID',
      request,
      metadata,
      methodInfo_AccountService_GetAccountByID,
      callback);
};


/**
 * @param {!proto.metrixio.GetAccountByIDRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.Account>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.getAccountByID =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccountByID(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.LoginRequest,
 *   !proto.metrixio.Account>}
 */
const methodInfo_AccountService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.Account,
  /** @param {!proto.metrixio.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.Account.deserializeBinary
);


/**
 * @param {!proto.metrixio.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/Login',
      request,
      metadata,
      methodInfo_AccountService_Login,
      callback);
};


/**
 * @param {!proto.metrixio.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.Account>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.login =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.login(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.ForgotPasswordRequest,
 *   !proto.metrixio.ForgotPasswordResponse>}
 */
const methodInfo_AccountService_ForgotPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.ForgotPasswordResponse,
  /** @param {!proto.metrixio.ForgotPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.ForgotPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.ForgotPasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.ForgotPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.ForgotPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.forgotPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/ForgotPassword',
      request,
      metadata,
      methodInfo_AccountService_ForgotPassword,
      callback);
};


/**
 * @param {!proto.metrixio.ForgotPasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.ForgotPasswordResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.forgotPassword =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.forgotPassword(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.ResetPasswordRequest,
 *   !proto.metrixio.ResetPasswordResponse>}
 */
const methodInfo_AccountService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.ResetPasswordResponse,
  /** @param {!proto.metrixio.ResetPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.ResetPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.ResetPasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.ResetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.ResetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/ResetPassword',
      request,
      metadata,
      methodInfo_AccountService_ResetPassword,
      callback);
};


/**
 * @param {!proto.metrixio.ResetPasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.ResetPasswordResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resetPassword(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.UpdatePasswordRequest,
 *   !proto.metrixio.UpdatePasswordResponse>}
 */
const methodInfo_AccountService_UpdatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.UpdatePasswordResponse,
  /** @param {!proto.metrixio.UpdatePasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.UpdatePasswordResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.UpdatePasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.UpdatePasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.UpdatePasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/UpdatePassword',
      request,
      metadata,
      methodInfo_AccountService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.metrixio.UpdatePasswordRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.UpdatePasswordResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.updatePassword(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.VerifyEmailRequest,
 *   !proto.metrixio.VerifyEmailResponse>}
 */
const methodInfo_AccountService_VerifyEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.VerifyEmailResponse,
  /** @param {!proto.metrixio.VerifyEmailRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.VerifyEmailResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.VerifyEmailRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.VerifyEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.VerifyEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.verifyEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/VerifyEmail',
      request,
      metadata,
      methodInfo_AccountService_VerifyEmail,
      callback);
};


/**
 * @param {!proto.metrixio.VerifyEmailRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.VerifyEmailResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.verifyEmail =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.verifyEmail(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.ResendVerificationRequest,
 *   !proto.metrixio.ResendVerificationResponse>}
 */
const methodInfo_AccountService_ResendVerification = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.ResendVerificationResponse,
  /** @param {!proto.metrixio.ResendVerificationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.ResendVerificationResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.ResendVerificationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.ResendVerificationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.ResendVerificationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.resendVerification =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/ResendVerification',
      request,
      metadata,
      methodInfo_AccountService_ResendVerification,
      callback);
};


/**
 * @param {!proto.metrixio.ResendVerificationRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.ResendVerificationResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.resendVerification =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.resendVerification(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CancelAccountRequest,
 *   !proto.metrixio.CancelAccountResponse>}
 */
const methodInfo_AccountService_CancelAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.CancelAccountResponse,
  /** @param {!proto.metrixio.CancelAccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.CancelAccountResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.CancelAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.CancelAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.CancelAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServiceClient.prototype.cancelAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AccountService/CancelAccount',
      request,
      metadata,
      methodInfo_AccountService_CancelAccount,
      callback);
};


/**
 * @param {!proto.metrixio.CancelAccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.CancelAccountResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AccountServicePromiseClient.prototype.cancelAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.cancelAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.metrixio;

