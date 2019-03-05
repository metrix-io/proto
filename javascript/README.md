# metrix-io proto

This lib contains pre-generated [grpc-web](https://github.com/grpc/grpc-web) protobuf files.

This library is only a convenience; you can also generate these yourself by parsing the protofiles in [this directory ](https://github.com/metrix-io/proto/tree/master/proto).

Example:

```js
import { AccountServicePromiseClient } from '@metrix-io/proto/account-service-client';
import { CreateAccountRequest } from '@metrix-io/proto/account-service';

const accountService = new AccountServicePromiseClient('https://api.metrix.io', {}, {});

const req = new CreateAccountRequest();
req.setUsername('john');
req.setPassword('Password123');
req.setEmail('john@example.com');
accountService.createAccount(req, {}).then((res) => {
    console.log('Response: ', res);
});
```

## Maintenance and design notes

* Run the makefile from the root directory to generate javascript code and typescript definitions. Because typescript support is somewhat experimental only "commonjs+dts" works properly, the "typescript" method works only partially and should be avoided for now.
* Run the `npm run build` that renames the generated files and moves them to the root dir.
* All services are exported in the same module as naming conflicts should be resolved regardless.
* While I've attempted to setup a npm run buildscript, it's extremely tricky to get protoc compile directories well (see [here](https://github.com/protocolbuffers/protobuf/issues/3028) for an example).
