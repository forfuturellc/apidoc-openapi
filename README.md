# apidoc-openapi

> Generate [OpenAPI][openapi] definition file from [apiDoc][apidoc]
> comments in your source code.


<a name="toc"></a>
## toc

* [installation](#install)
* [usage](#usage)
  + [source code](#src)
  + [command-line](#cli)
* [license](#license)


<a name="install"></a>
### installation

```bash
$ npm install @forfuture/apidoc-openapi
```


<a name="usage"></a>
### usage

<a name="src"></a>
#### source code

It is important to note that this tool supports any programming
language that [apiDoc][apidoc] supports. However, we shall use
JavaScript in our documentation.

The tool expects a certain style of writing your apiDoc comments.
For example,

```js
/**
 * @api {put} /users/:userId Update user
 * @apiName UpdateUser
 * @apiGroup Users
 * @apiDescription Update user's information
 *
 * @apiParam {String} userId User's unique ID
 * @apiParam {String} [firstName] User's first name
 * @apiParam {String} [lastName] User's last name
 *
 * @apiSuccess (200) {Object} data Data object
 * @apiSuccess (200) {Boolean} data.ok Set to `true` always
 */
```

1. We have (visually) grouped our comments into 3 groups:
   + **informational** group: identifies and describes the API endpoint.
   + **parameters** group: lists the API parameters e.g query parameters.
   + **responses** group: list the expected responses from the endpoint.
1. In the informational group, ensure you provide:
   + name (`@apiName`)
   + group (`@apiGroup`)
   + description (`@apiDescription`)
1. You **MUST** provide at least 1 success reponse (`@apiSuccess`) in the
   responses group.
1. In the responses group, ensure you provide:
   + HTTP status code e.g. `(200)`


<a name="cli"></a>
#### command-line

You operate the tool from your command-line. For example (in BASH),

```bash
$ apidoc-openapi --help

  Usage: apidoc-openapi [options]

  Options:

    -V, --version         output the version number
    -p, --project <path>  path to apidoc config file
    -s, --src <path>      path to source files
    -o, --out <path>      path to output file
    -v, --verbose         be verbose
    -h, --help            output usage information

```

To generate an OpenAPI definition file:

```bash
$ apidoc-openapi --project ./apidoc.json --src src/ --out ./openapi.json
```


<a name="license"></a>
## license

```
The MIT License (MIT)

Copyright (c) 2018 Forfuture LLC <we@forfuture.co.ke>
```


[apidoc]:http://apidocjs.com
[openapi]:https://www.openapis.org
