/**
 * @fileoverview gRPC-Web generated client stub for metrixio
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.metrixio = require('./auth-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.metrixio.AuthServiceClient =
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
proto.metrixio.AuthServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.metrixio.AuthServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.metrixio.AuthServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.LoginRequest,
 *   !proto.metrixio.AccessToken>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.AccessToken,
  /** @param {!proto.metrixio.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.AccessToken.deserializeBinary
);


/**
 * @param {!proto.metrixio.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.AccessToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.AccessToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/Login',
      request,
      metadata,
      methodInfo_AuthService_Login,
      callback);
};


/**
 * @param {!proto.metrixio.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.AccessToken>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.login =
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
 *   !proto.metrixio.LogoutRequest,
 *   !proto.metrixio.LogoutResponse>}
 */
const methodInfo_AuthService_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.LogoutResponse,
  /** @param {!proto.metrixio.LogoutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.LogoutResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.LogoutRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.LogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.LogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/Logout',
      request,
      metadata,
      methodInfo_AuthService_Logout,
      callback);
};


/**
 * @param {!proto.metrixio.LogoutRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.LogoutResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.logout(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.LogoutAllRequest,
 *   !proto.metrixio.LogoutAllResponse>}
 */
const methodInfo_AuthService_LogoutAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.LogoutAllResponse,
  /** @param {!proto.metrixio.LogoutAllRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.LogoutAllResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.LogoutAllRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.LogoutAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.LogoutAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.logoutAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/LogoutAll',
      request,
      metadata,
      methodInfo_AuthService_LogoutAll,
      callback);
};


/**
 * @param {!proto.metrixio.LogoutAllRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.LogoutAllResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.logoutAll =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.logoutAll(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CreatePermissionsRequest,
 *   !proto.metrixio.PermissionAssignments>}
 */
const methodInfo_AuthService_CreatePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.PermissionAssignments,
  /** @param {!proto.metrixio.CreatePermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.PermissionAssignments.deserializeBinary
);


/**
 * @param {!proto.metrixio.CreatePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.PermissionAssignments)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.PermissionAssignments>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.createPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/CreatePermissions',
      request,
      metadata,
      methodInfo_AuthService_CreatePermissions,
      callback);
};


/**
 * @param {!proto.metrixio.CreatePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.PermissionAssignments>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.createPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.GetPermissionsRequest,
 *   !proto.metrixio.PermissionAssignments>}
 */
const methodInfo_AuthService_GetPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.PermissionAssignments,
  /** @param {!proto.metrixio.GetPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.PermissionAssignments.deserializeBinary
);


/**
 * @param {!proto.metrixio.GetPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.PermissionAssignments)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.PermissionAssignments>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.getPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/GetPermissions',
      request,
      metadata,
      methodInfo_AuthService_GetPermissions,
      callback);
};


/**
 * @param {!proto.metrixio.GetPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.PermissionAssignments>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.getPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.HasPermissionsRequest,
 *   !proto.metrixio.HasPermissionsResponse>}
 */
const methodInfo_AuthService_HasPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.HasPermissionsResponse,
  /** @param {!proto.metrixio.HasPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.HasPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.HasPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.HasPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.HasPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.hasPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/HasPermissions',
      request,
      metadata,
      methodInfo_AuthService_HasPermissions,
      callback);
};


/**
 * @param {!proto.metrixio.HasPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.HasPermissionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.hasPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.hasPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.DeletePermissionsRequest,
 *   !proto.metrixio.DeletePermissionsRequest>}
 */
const methodInfo_AuthService_DeletePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.DeletePermissionsRequest,
  /** @param {!proto.metrixio.DeletePermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.DeletePermissionsRequest.deserializeBinary
);


/**
 * @param {!proto.metrixio.DeletePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.DeletePermissionsRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.DeletePermissionsRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.deletePermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/DeletePermissions',
      request,
      metadata,
      methodInfo_AuthService_DeletePermissions,
      callback);
};


/**
 * @param {!proto.metrixio.DeletePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.DeletePermissionsRequest>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.deletePermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.DeleteSubjectRequest,
 *   !proto.metrixio.DeleteSubjectResponse>}
 */
const methodInfo_AuthService_DeleteSubject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.DeleteSubjectResponse,
  /** @param {!proto.metrixio.DeleteSubjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.DeleteSubjectResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.DeleteSubjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.DeleteSubjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.DeleteSubjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.deleteSubject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/DeleteSubject',
      request,
      metadata,
      methodInfo_AuthService_DeleteSubject,
      callback);
};


/**
 * @param {!proto.metrixio.DeleteSubjectRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.DeleteSubjectResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.deleteSubject =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteSubject(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.CreatePermissionInheritanceRequest,
 *   !proto.metrixio.CreatePermissionInheritanceResponse>}
 */
const methodInfo_AuthService_CreatePermissionInheritance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.CreatePermissionInheritanceResponse,
  /** @param {!proto.metrixio.CreatePermissionInheritanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.CreatePermissionInheritanceResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.CreatePermissionInheritanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.CreatePermissionInheritanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.CreatePermissionInheritanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.createPermissionInheritance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/CreatePermissionInheritance',
      request,
      metadata,
      methodInfo_AuthService_CreatePermissionInheritance,
      callback);
};


/**
 * @param {!proto.metrixio.CreatePermissionInheritanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.CreatePermissionInheritanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.createPermissionInheritance =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createPermissionInheritance(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.DeletePermissionInheritanceRequest,
 *   !proto.metrixio.DeletePermissionInheritanceResponse>}
 */
const methodInfo_AuthService_DeletePermissionInheritance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.DeletePermissionInheritanceResponse,
  /** @param {!proto.metrixio.DeletePermissionInheritanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.DeletePermissionInheritanceResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.DeletePermissionInheritanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.DeletePermissionInheritanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.DeletePermissionInheritanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.deletePermissionInheritance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/DeletePermissionInheritance',
      request,
      metadata,
      methodInfo_AuthService_DeletePermissionInheritance,
      callback);
};


/**
 * @param {!proto.metrixio.DeletePermissionInheritanceRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.DeletePermissionInheritanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.deletePermissionInheritance =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deletePermissionInheritance(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.metrixio;

