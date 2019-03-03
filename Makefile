.PHONY: proto docgen

# Generate proto files
proto:
	find ./golang -type f -name '*.go'
	protoc -I. --go_out=plugins=grpc:. services/*.proto
	cp -r ./github.com/metrix-io/proto/golang ./
	rm -rf ./github.com

protojs:
	rm -rf ./javascript/*
	protoc -I=. services/*.proto \
      --js_out=import_style=commonjs:javascript \
      --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:javascript

docgen:
	rm -rf ./out
	docker run --rm -v $(shell pwd)/docs:/out -v $(shell pwd):/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md
