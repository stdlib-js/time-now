<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# now

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Time in seconds since the epoch.

<section class="installation">

## Installation

```bash
npm install @stdlib/time-now
```

</section>

<section class="usage">

## Usage

```javascript
var now = require( '@stdlib/time-now' );
```

#### now()

Returns the time in **seconds** since the epoch.

```javascript
var ts = now();
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The [Unix epoch][unix-time] is 00:00:00 UTC on 1 January 1970.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var now = require( '@stdlib/time-now' );

var t0 = now();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var t1 = now();
    console.log( 'Seconds elapsed: %d', t1-t0 );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/time-now
```

</section>

<section class="usage">

### Usage

```text
Usage: now [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ now
<number>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-now.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-now

[test-image]: https://github.com/stdlib-js/time-now/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/time-now/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-now/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-now?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-now.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-now/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-now/main/LICENSE

[unix-time]: https://en.wikipedia.org/wiki/Unix_time

</section>

<!-- /.links -->
