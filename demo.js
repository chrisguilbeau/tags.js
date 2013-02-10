window.onload = init;
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
		)
	);
}

function init(){
	document.body.innerHTML = getBody();
}
