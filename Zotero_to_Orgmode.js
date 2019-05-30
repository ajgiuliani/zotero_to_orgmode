{
"translatorID":"e5ac0e9f-192b-4b02-a5b1-492a50638c38",
"translatorType":2,
"label":"Zotero to Orgmode",
"creator":"Alexandre Giuliani",
"target":"org",
"minVersion":"1.0",
"maxVersion":"",
"priority":200,
"inRepository":false,
"lastUpdated":"2019-05-30 04:01:00"
}

function doExport() {
    var item;
    while(item = Zotero.nextItem()) {
	Zotero.write("** " + item.creators[0].lastName);
	var date = Zotero.Utilities.strToDate(item.date);
	if (date.year) {
	    Zotero.write(" | " + date.year);
	}
	if (item.title){
	    Zotero.write(" | "+ item.title);
	}
	if (item.journalAbbreviation){
	    Zotero.write(" | " + item.journalAbbreviation + "\n");
	} else {
	    Zotero.write(" | " + item.publicationTitle + "\n");
	}
	Zotero.write(
		     ":PROPERTIES:"+ "\n" +
		     " :Custum_ID: " + item.citekey + "\n" +
		     " :TITLE: " + item.title + "\n" +
		     " :AUTHORS: "
	);

	for (var j in item.creators) {
	    Zotero.write(item.creators[j].lastName + ", ");
	}
	Zotero.write("\n :JOURNAL: " + item.publicationTitle + "\n" +
		     " :YEAR: " + date.year + "\n" +
		     " :VOLUME: " + item.volume  + "\n" +
		     " :PAGES: " + item.pages + "\n" +
		     " :TYPE: " + item.itemType + "\n" +
		     " :DOI: " + "doi:"+ item.DOI + "\n" +
		     " :URI: " + item.uri + "\n" +
		     " :URL: " + item.url + "\n" +
		     " :ABSTRACT: "+ item.abstractNote + "\n" +
		     " :FILES: "
		    );
	for (var i=0; i<item.attachments.length; i++){
	    if(item.attachments[i].mimeType.search(/pdf/i) != -1){
		Zotero.write("file:" + item.attachments[i].path + " ; ");
	    }
	}
	Zotero.write("\n:END:\n");
    }
}
