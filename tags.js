var _tags = [
	"a", "abbr", "address", "area", "article", "aside", "audio", "b",
	"base", "bdi", "bdo", "blockquote", "body", "br", "button",
	"canvas", "caption", "cite", "code", "col", "colgroup", "command",
	"data", "datagrid", "datalist", "dd", "del", "details", "dfn",
	"div", "dl", "dt", "em", "embed", "eventsource", "fieldset",
	"figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4",
	"h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe",
	"img", "input", "ins", "kbd", "keygen", "label", "legend", "li",
	"link", "mark", "map", "menu", "meta", "meter", "nav", "noscript",
	"object", "ol", "optgroup", "option", "output", "p", "param",
	"pre", "progress", "q", "ruby", "rp", "rt", "s", "samp", "script",
	"section", "select", "small", "source", "span", "strong", "style",
	"sub", "summary", "sup", "table", "tbody", "td", "textarea",
	"tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul",
	"var", "video", "wbr"
];

var tags = {};

for (var i in _tags){
	var _tag = _tags[i];
	tags[_tag] = (function(__tag){
			return function(){
				var _attrs = [];
				var _content = [];
				for (var j = 0; j < arguments.length; j++){
					var arg = arguments[j];
					if (typeof arg === 'object'){
						for (var k in arg){
							_attrs.push(k + " = " + "\"" + arg[k] + "\"");
						}
					}
					else
						_content.push(arg);
				}
				if (_attrs.length > 0)
					attrs = " " + _attrs.join(" ");
				else
					attrs = "";
				return "<" + __tag + attrs + ">" + _content.join("") + "</" + __tag + ">";
			}
	}(_tag))
}
