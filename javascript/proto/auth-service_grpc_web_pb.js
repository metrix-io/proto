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
 *   !proto.metrixio.GrantPermissionsRequest,
 *   !proto.metrixio.PermissionAssignments>}
 */
const methodInfo_AuthService_GrantPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.PermissionAssignments,
  /** @param {!proto.metrixio.GrantPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.PermissionAssignments.deserializeBinary
);


/**
 * @param {!proto.metrixio.GrantPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.PermissionAssignments)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.PermissionAssignments>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.grantPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/GrantPermissions',
      request,
      metadata,
      methodInfo_AuthService_GrantPermissions,
      callback);
};


/**
 * @param {!proto.metrixio.GrantPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.PermissionAssignments>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.grantPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.grantPermissions(
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
 *   !proto.metrixio.RevokePermissionsRequest,
 *   !proto.metrixio.RevokePermissionsRequest>}
 */
const methodInfo_AuthService_RevokePermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.RevokePermissionsRequest,
  /** @param {!proto.metrixio.RevokePermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.RevokePermissionsRequest.deserializeBinary
);


/**
 * @param {!proto.metrixio.RevokePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.RevokePermissionsRequest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.RevokePermissionsRequest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.revokePermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/RevokePermissions',
      request,
      metadata,
      methodInfo_AuthService_RevokePermissions,
      callback);
};


/**
 * @param {!proto.metrixio.RevokePermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.RevokePermissionsRequest>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.revokePermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.revokePermissions(
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
 *   !proto.metrixio.InheritPermissionsRequest,
 *   !proto.metrixio.InheritPermissionsResponse>}
 */
const methodInfo_AuthService_InheritPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.InheritPermissionsResponse,
  /** @param {!proto.metrixio.InheritPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.InheritPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.InheritPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.InheritPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.InheritPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.inheritPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/InheritPermissions',
      request,
      metadata,
      methodInfo_AuthService_InheritPermissions,
      callback);
};


/**
 * @param {!proto.metrixio.InheritPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.InheritPermissionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.inheritPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.inheritPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.metrixio.RemoveInheritPermissionsRequest,
 *   !proto.metrixio.RemoveInheritPermissionsResponse>}
 */
const methodInfo_AuthService_RemoveInheritPermissions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.RemoveInheritPermissionsResponse,
  /** @param {!proto.metrixio.RemoveInheritPermissionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.RemoveInheritPermissionsResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.RemoveInheritPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.RemoveInheritPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.RemoveInheritPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServiceClient.prototype.removeInheritPermissions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/RemoveInheritPermissions',
      request,
      metadata,
      methodInfo_AuthService_RemoveInheritPermissions,
      callback);
};


/**
 * @param {!proto.metrixio.RemoveInheritPermissionsRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.metrixio.RemoveInheritPermissionsResponse>}
 *     The XHR Node Readable Stream
 */
proto.metrixio.AuthServicePromiseClient.prototype.removeInheritPermissions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.removeInheritPermissions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.metrixio;

