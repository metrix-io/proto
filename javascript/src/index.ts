import * as accountService from './proto/account-service_pb';
import * as accountServiceGrpcWeb from './proto/account-service_grpc_web_pb';

// merge everything into one namespace for simplicity and convenience,
// conflicts should be avoided in the proto files.
const proto = { ...accountService, ...accountServiceGrpcWeb, };

export default proto;

