
# ivh.pluckAndJoin

[![Build Status](https://secure.travis-ci.org/iVantage/angular-ivh-pluck-and-join.png?branch=master)](https://travis-ci.org/iVantage/angular-ivh-pluck-and-join)

> An AngularJS filter to pluck and join.


## Installation

Install with bower:

```
bower install --save angular-ivh-pluck-and-join
```


## Usage

Add this module as a dependency to your app:

```
angular.module('myApp', ['ivh.pluckAndJoin']);
```

You now have access to the `ivhPluckAndJoin` filter:

### API

#### `ivhPluckAndJoinFilter(Array collection, String property[, String delimiter=' ,'])`

Collects `property` from each item in `collection` and returns them joined by
`delimiter`.

### Example

```html
<!--
scope = {
  items: [
    {name: 'Justin', age: 28},
    {name: 'Bella', age .75}
  ]
}
-->

<p>{{items | ivhPluckAndJoin:'name'}}</p>

<!--
Produces:

<p>Justin, Bella</p>

You can also use a custom delimiter:
-->

<p>{{items | ivhPluckAndJoin:'name':' - '}}</p>

<!--
Produces:

<p>Justin - Bella</p>
-->
```


## Testing

Use `npm test` to run the full suite of linting, style checks, and unit tests.

Or, run each individually:

- Use `grunt jshint` for linting
- Use `grunt jscs` for coding style checks
- Use `grunt jasmine` to unit tests

For ease of development the `grunt watch` task will run each of the above as
needed when you make changes to source files.


## Changelog

2015-08-09 v0.1.0 Initial release


## License

MIT
