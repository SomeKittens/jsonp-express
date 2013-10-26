# JSONP

This package adds a `jsonp` method to `req`.  This is useful for keeping things simple while developing simple API's with express.  Install as you would any node package: `npm install jsonp-express`

## Use

    // in app.js
    var jsonp = require('jsonp-express');

    app.use(jsonp);

    // in your routing
    var datums = fancyCalculations();
    res.jsonp(datums);

`res.jsonp` expects several things to be true:
  - `req.query.callback` is equal to the function the end user wants to be called.
  - The variable passed to `req.jsonp` should be either a non-null JavaScript object or a JSON string.  `jsonp-express` will automatically striginfy objects, so don't worry about always converting it yourself.

## TODO
Add some more examples.  Everyone loves examples.

## License
 The MIT License (MIT)

Copyright (c) 2013 Randall Koutnik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.