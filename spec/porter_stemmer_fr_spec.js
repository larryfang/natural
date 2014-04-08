/*
Copyright (c) 2014, Ismaël Héry

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
*/

var stemmer = require('../lib/natural/stemmers/porter_stemmer_fr');
var fs = require('fs');

describe('porter_stemmer', function() {

  /*
  it('should prelude', function() {
    expect(stemmer.prelude('JOUER')).toBe('joUer');
    expect(stemmer.prelude('ennuie')).toBe('ennuIe');
    expect(stemmer.prelude('yeux')).toBe('Yeux');
    expect(stemmer.prelude('quand')).toBe('qUand');
  });

  it('should compute regions', function() {
    expect(stemmer.regions('fameusement').r1).toBe('eusement');
    expect(stemmer.regions('fameusement').r2).toBe('ement');

    expect(stemmer.regions('taii').r1).toBe('');
    expect(stemmer.regions('taii').r2).toBe('');

    expect(stemmer.regions('parade').rv).toBe('ade');
    expect(stemmer.regions('colet').rv).toBe('et');
    expect(stemmer.regions('tapis').rv).toBe('is');

    expect(stemmer.regions('aimer').rv).toBe('er');
    expect(stemmer.regions('adorer').rv).toBe('rer');
    expect(stemmer.regions('voler').rv).toBe('ler');
  });
  */

  it('should stem', function() {
    //expect(stemmer.stem('velofumiste')).toBe('velofum');
    //expect(stemmer.stem('velomateur')).toBe('velom');

    //expect(stemmer.stem('indicatrice')).toBe('indiqU');
    //expect(stemmer.stem('pourissement')).toBe('indiqU');
  });

  var fs = require('fs');

  it('should perform stem', function() {
    var ok = [];
    var ko = [];

    fs.readFileSync('spec/test_data/snowball_fr.txt').toString().split('\n').forEach(function(line) {
      if (line) {
        var fields = line.replace(/(\s)+/g, ' ').split(' ');
        var stemmed = stemmer.stem(fields[0]);

        if (stemmed === fields[1])
          ok.push(fields[0]);
        else
          ko.push(fields[0])
      }
    });

    console.log('ok:', ok.length, 'ko:', ko.length);

  });
});
