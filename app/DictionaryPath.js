const DictionaryPath = () => {
	let dictionary = ['lack','hack','lick','sick','sock','mock'];

	let getShortestTransformation = (start = 'lack', end = 'mock', dict = dictionary) => {
		if( dict.filter( value => value === start ) && dict.filter( value => value === end ) ) {
			queue = [];
			queue.push({
				path: [start],
				lastWord: start
			});

			dict = dict.filter( ( value ) => value !== start );

			while( queue.length !== 0 && queue[queue.length-1].lastWord !== end ){
				ladder = queue.shift();

				if( ladder.lastWord === end ) {
					return ladder;
				}

				for( var i = 0, len = dict.length; i < len; i++ ) {
					let word = dict[i];

					if( differByOne( word, ladder.lastWord ) ) {
						let newPath = [ ...ladder.path ];
						newPath.push( word );

						queue.push({
							path: newPath,
							lastWord: word
						});

						if ( word === end ) {
							break;
						}
					}
				}
			}


			if( queue && queue[queue.length-1].lastWord === end ) {
				let pathFound = queue.pop();

				return {
					length: pathFound.path.length - 1,
					path: pathFound.path.join(",")
				};
			}
		}

  		return null;
	};

	let differByOne = ( word, word2 ) => {
		let diffCount = 0;

		for( let i = 0, len = word.length; i < len; i++ ) {
			if( word[i] !== word2[i] ) {
				diffCount++;
			}
		}

		return diffCount == 1;
	};


	let setNewDictionary = ( newDictionary ) => {
		if ( !newDictionary || !Array.isArray( newDictionary ) ) return false;

		dictionary = [ ...newDictionary ];
		return true;
	};

	return {
		getShortestTransformation,
		setNewDictionary
	}
}

module.exports = DictionaryPath();