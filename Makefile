.PHONY: proto docgen

# Generate proto files
proto:
	protoc -I. --go_out=plugins=grpc:. *.proto

docgen:
	rm -rf ./out
	docker run --rm -v $(pwd)/out:/out -v $(pwd):/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md