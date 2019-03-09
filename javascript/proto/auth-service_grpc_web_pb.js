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
 *   !proto.metrixio.LoginResponse>}
 */
const methodInfo_AuthService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.metrixio.LoginResponse,
  /** @param {!proto.metrixio.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.metrixio.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.metrixio.LoginRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.metrixio.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.metrixio.LoginResponse>|undefined}
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
 * @return {!Promise<!proto.metrixio.LoginResponse>}
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
 *   !proto.metrixio.HasPermissionsRequest,
 *   !proto.metrixio.HasPermissionsResponse>}
 */
const methodInfo_AuthService_HasPermission = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.metrixio.AuthServiceClient.prototype.hasPermission =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/metrixio.AuthService/HasPermission',
      request,
      metadata,
      methodInfo_AuthService_HasPermission,
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
proto.metrixio.AuthServicePromiseClient.prototype.hasPermission =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.hasPermission(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.metrixio;

