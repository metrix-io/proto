.PHONY: proto docgen

# Generate proto files
proto:
	find ./golang -type f -name '*.go'
	protoc -I. --go_out=plugins=grpc:. accounts/*.proto
	cp -r ./github.com/metrix-io/proto/golang ./
	rm -rf ./github.com

protojs:
	protoc -I=. *.proto \
      --js_out=import_style=commonjs:. \
      --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:.

docgen:
	rm -rf ./out
	docker run --rm -v $(shell pwd)/docs:/out -v $(shell pwd):/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md