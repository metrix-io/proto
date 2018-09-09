# Protobuf specifications

This directory is the central repository for all protobuf service contracts. Each service contract is defined in a single `.proto` file.

Do not store any generated code here! Instead move these to your service's directory.

## Generate code

To generate a GRPC implementation for a service, run:

```
$ protoc --go_out=plugins=grpc:. proto/*.proto
```
