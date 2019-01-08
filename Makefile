.PHONY: proto

# Generate proto files
proto:
	protoc -I. --go_out=plugins=grpc:. *.proto
