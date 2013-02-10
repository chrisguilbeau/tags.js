window.onload = init;
const RANDOM = Math.floor(Math.random() * 11)
var t = tags;

function getBody(){
	return t.div(
		{"class" : "demo"},
		t.h1('This is a heading'),
		t.hr(),
		t.p(
			'A paragraph is a collection of scentences that express ',
			'a complete idea. This would be an example of one.'
		),
		t.pre(
			"alert(\"The pre tag is useful for displaying code.\");"
		),
		t.div(
			t.button(
				{onclick : "alert(1);"},
				"This is a button"
			)
		),
		t.span('Next is an example of expanding an array into elements'),
		t.seq(
			[1,2,3,4,5,6].map(function(i){return t.div('N:' + i.toString());})
		),
		t.div(
			{style: (RANDOM > 5) ? 'background: red;' : t.absent},
			'This div is either red or not'
		)
	);
}

function init(){
	document.body.innerHTML = getBody();
}
