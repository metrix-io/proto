.PHONY: protojs protogo mockgen

protogo:
	find ./golang -type f -name '*.go'
	protoc -I. --go_out=plugins=grpc:. proto/*.proto
	cp -r ./github.com/metrix-io/proto/golang ./
	rm -rf ./github.com

protojs:
	rm -rf ./javascript/proto/*
	protoc -I=. proto/*.proto \
      --js_out=import_style=commonjs:javascript \
      --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:javascript

mockgen: # Generate new mocks for all interfaces within this package
	go get github.com/vektra/mockery
	mockery -output="./golang/mocks" -all

# Create all generated artifacts
gen: protogo protojs mockgen
