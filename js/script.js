// var element =
// React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {},
//       	React.createElement('li', {},
// 	        React.createElement('h2', {}, 'Harry Potter'),
// 	        React.createElement('p', {}, 'Film o czarodzieju')
//       	),
//     	React.createElement('li', {},
// 	        React.createElement('h2', {}, 'Król Lew'),
// 	        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//       	)
//     )
// );

var movies = [
  	{
	    id: 1,
	    title: 'Harry Potter',
	    desc: 'film o czarodzieju',
	    img: 'src="/images/potter.jpg"'
  	},
  	{
	    id: 2,
	    title: 'Król Lew',
	    desc: 'Film o królu sawanny',
	    img: 'src="/images/lion.jpg"'
  	},
  	  	{
	    id: 3,
	    title: 'Władca Pierścieni',
	    desc: 'film o władcy pierścieni',
	    img: 'src="/images/lord.jpg"'
  	},
  	{
	    id: 4,
	    title: 'Gra o tron',
	    desc: 'Film o królewskich rodach',
	    img: 'src="/images/game.jpg"'
  	}
];

var moviesElements = movies.map(function(movie) {
  	return React.createElement('li', {key: movie.id},
      	React.createElement('h2', {}, movie.title),
      	React.createElement('p', {}, movie.desc),
      	React.createElement('img', {}, movie.img),
    );
});
var element =
React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));