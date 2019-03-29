var assert = require( 'assert' );
var dictionaryPath =  require( '../app/DictionaryPath' );

describe( 'DictionaryPath', () => {
  describe( 'getShortestTransformation no parameters', () =>  {
    it( 'should return path for default parameters start = lack, end = mock', () => {
      var ladder = dictionaryPath.getShortestTransformation();
      assert.equal( ladder.path, 'lack,lick,sick,sock,mock' );
    });

    it( 'should return length for default parameters start = lack, end = mock', () => {
      var ladder = dictionaryPath.getShortestTransformation();
      assert.equal( ladder.length, 4 );
    });
  });

  describe( 'getShortestTransformation("lack", "hack")', () =>  {
    it( 'should return path: lack, hack', () => {
      var ladder = dictionaryPath.getShortestTransformation( 'lack', 'hack' );
      assert.equal( ladder.path, 'lack,hack' );
    });

    it( 'should return length: 1', () => {
      var ladder = dictionaryPath.getShortestTransformation( 'lack', 'hack' );
      assert.equal( ladder.length, 1 );
    });
  });

  describe( 'setNewDictionary', () =>  {
    it( 'should receive Array as parameter: EMPTY', () => {
      var dictionarySet = dictionaryPath.setNewDictionary();
      assert.equal( dictionarySet, false );
    });
    it( 'should receive Array as parameter: NULL', () => {
      var dictionarySet = dictionaryPath.setNewDictionary( null );
      assert.equal( dictionarySet, false );
    });
    it( 'should receive Array as parameter: NUMBER', () => {
      var dictionarySet = dictionaryPath.setNewDictionary( 1 );
      assert.equal( dictionarySet, false );
    });
    it( 'should receive Array as parameter: OBJECT', () => {
      var dictionarySet = dictionaryPath.setNewDictionary( {} );
      assert.equal( dictionarySet, false );
    });
    it( 'should receive Array as parameter: STRING', () => {
      var dictionarySet = dictionaryPath.setNewDictionary( 'lack' );
      assert.equal( dictionarySet, false );
    });
    it( 'should receive Array as parameter: ARRAY', () => {
      var dictionarySet = dictionaryPath.setNewDictionary( ['mock','hack','lick','sock','lack','sick'] );
      assert.equal( dictionarySet, true );
    });
  });


  describe( 'getShortestTransformation', () =>  {
    it( 'Dictionary in a different order should get same path', () => {

      var ladder = dictionaryPath.getShortestTransformation();
      assert.equal( ladder.path, 'lack,lick,sick,sock,mock' );
    });

    it( 'Dictionary in a different order should get same length', () => {
      var ladder = dictionaryPath.getShortestTransformation();
      assert.equal( ladder.length, 4 );
    });
  });
});