(function($) {
  "use strict";
})(jQuery);


var codehelixUtils = {
		
	updateNav: function(items, page) {
	  var html = "";
	  for(var ndx = 0; ndx < items.length; ndx++){
		  var item = items[ndx];
		  if(item.name.toLowerCase() == page.toLowerCase()){
			  html += '<li class="nav-item">'; 
			  
			  if( item.children != null && item.children.length > 0 ) {
			    html += this.buildMenuIndicator(item);
				html += this.buildMenu( item.children, 'dropdown-menu' );
			  }
			  else {
				html += '<a href="' + item.page + '" class="nav-link link-scroll current">' + item.name + '</a>';
			  }
			  html += '</li>';
		  }
		  else {
			  html += '<li class="nav-item">'; 
			  if( item.children != null && item.children.length > 0 ) {
				html += this.buildMenuIndicator(item);
				html += this.buildMenu( item.children, 'dropdown-menu' );
			  }
			  else {
				html += '<a href="' + item.page + '" class="nav-link link-scroll">' + item.name + '</a>';
			  }
			  html += '</li>';
		  }
	  }
	  $("#navigation").html(html)
	},
	
	
	buildMenuIndicator: function(item) {
		return '<a href="#" class="nav-link link-scroll " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">'
				+ item.name 
				+ ' &nbsp;<span class="caret"></span></a>';
	},
	
	
	buildMenu: function(items, cls) {
	  var html = '<ul class="' + cls + '">';
	  for(var ndx = 0; ndx < items.length; ndx++){
		  var item = items[ndx];
		  html += '<li><a href="' + item.page + '" class="nav-link link-scroll">' + item.name + '</a></li>';
	  }
	  html += "</ul>";
	  return html;
	},
	
	
	updateTemplate: function() {
	  $("#copyright").html('&copy; 2017 <span class="text-primary">CodeHelix.co</span> All Rights Reserved.');
	  // Header 
	  $("#topbar_title" ).html( codeHelixMeta.product.questions );  
	  $("#topbar_social_github" ).attr('href', codeHelixMeta.social.github); 
	  $("#topbar_social_gitter").attr('href', codeHelixMeta.social.gitter); 
	  $("#topbar_social_gplus"    ).attr('href', codeHelixMeta.social.gplus);   
	  $("#topbar_social_twitter"  ).attr('href', codeHelixMeta.social.twitter);   
	  
	  // Footer 
	  $("#footer_aboutus").html(codeHelixMeta.product.about);
	  $("#footer_needhelp").html('For more information on Slate Kit, including source code visit our <a href="https://github.com/slatekit/slatekit">github</a> repository and feel free to email/contact us at <a href="mailto:kishore@codehelix.co">kishore@codehelix.co</a>');
	  $("#footer_addr_city").html(codeHelixMeta.company.address.city);
	  $("#footer_addr_region").html(codeHelixMeta.company.address.region);
	  $("#footer_addr_street").html(codeHelixMeta.company.address.street);
	  $("#footer_addr_country").html(codeHelixMeta.company.address.country);
	  $("#footer_addr_zip").html(codeHelixMeta.company.address.zip);
	  $("#footer_social_github"   ).attr('href', codeHelixMeta.social.github); 
	  $("#footer_social_gitter"   ).attr('href', codeHelixMeta.social.gitter); 
	  $("#footer_social_gplus"    ).attr('href', codeHelixMeta.social.gplus   );   
	  $("#footer_social_twitter"  ).attr('href', codeHelixMeta.social.twitter );   

	}
};


var codeHelixMeta = {
	
  company: 
  {
	  name: "Code Helix",
	  site: "www.codehelix.co",
	  contact: "kishore@codehelix.co",
	  address: 
	  {
		  street: "",
		  city: "Queens",
		  region: "New York",
		  state: "New York",
		  zip: "",
		  country: "U.S.A."
	  }
  },
  
  social: 
  {
	facebook: "http://www.facebook.com",
	linkedin: "http://www.linkedin.com",
	twitter: "https://twitter.com/kishore_reddy",
	gplus: "https://plus.google.com/communities/101712726574147167469",
	gitter: "https://gitter.im/code-helix/slatekit",
	github: "https://github.com/slatekit/slatekit",
  },
  
  
  product: 
  {
	name : "Kiit",
	slogan: "A Kotlin Framework for Apps, APIs, CLIs, Jobs, Mobile and more",
	about: 'Kiit is a product of <a href="http://www.codehelix.co">Code Helix Solutions Inc.</a>.',
	needhelp: 'For more information on Kiit, including source code visit our github repository and feel free to email/contact us at <a href="mailto:kishore@codehelix.co">kishore@codehelix.co</a>',
	questions: 'Questions ? Contact us via <a href="https://github.com/slatekit/slatekit">github</a> or at <a href="http://www.codehelix.co">Code Helix Solutions Inc.</a>'
  },
  
  menu: 
  [
	//{ name: "Home"          ,  page: "index.html"         , children: null },
	{ name: "Intro"         ,  page: "info/intro"         , children: null },
	{ name: "Setup"         ,  page: "info/setup"         , children: null },
	{ name: "Learn"         ,  page: "info/learn"         , children: null },
	{ name: "Features"      ,  page: "core/overview"      , children: null },
	{ name: "Utilities"     ,  page: "utils/overview"     , children: null },
	{ name: "Pricing"       ,  page: "info/pricing"       , children: null },
	//{ name: "Features"      ,  page: "features.html"    , children: null },
	{ name: "Releases"      ,  page: "info/releases"      , children: null },	
	{ name: "Contact"       ,  page: "info/contact"       , children: null },
	{ name: "More"          ,  page: "info/more"          , children: null },
	{ name: "Git"           ,  page: "https://github.com/slatekit/slatekit", children: null }
  ]
};  

console.log("slogan: " + codeHelixMeta.slogan);
console.log("page  : " + _codehelixAppPage);
codehelixUtils.updateNav(codeHelixMeta.menu, _codehelixAppPage);
codehelixUtils.updateTemplate();



