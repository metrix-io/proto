build:
	protoc -I. --go_out=plugins=grpc:. health/*.proto