describe('input type', function () {
  it('should allow for string', function () {
    sprintf('hello %s, how are you?', 'universe')
      .should.equal('hello universe, how are you?');
  });

  it('should allow for number', function () {
    sprintf('the answer is %d', 42)
      .should.equal('the answer is 42');
  });

  it('should allow for object', function () {
    sprintf('have a %j', { pi: 3.14 })
      .should.equal('have a {"pi":3.14}');
  });
});

describe('input length', function () {
  it('should allow for less than specified', function () {
    sprintf('here is %s and %s', 'one')
      .should.equal('here is one and %s');
  });

  it('should allow for exact number specified', function () {
    sprintf('here is %s, %s, and %d', 'one', 'two', 3)
      .should.equal('here is one, two, and 3');
  });

  it('should allow for more than specified', function () {
    sprintf('here is %s', 'one', 'two', 3, { four: 4 })
      .should.equal('here is one two 3 {"four":4}');
  });
});
