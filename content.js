// content.js


var PSEnhance = {};

PSEnhance.makeSearchBetter = function()
{
    PSEnhance.setLatestTerm();
    PSEnhance.setCampus();
}

//Sets the term on the search to the latest one, not the previous one that will be selected by default
PSEnhance.setLatestTerm = function()
{
    //set the option and activate the .change() event;

    //test code:
    console.log($("input[id^=SSR_CLSRCH_WRK_SUBJECT]").length);
    $("input[id^=SSR_CLSRCH_WRK_SUBJECT]").css("height", "175px");
    $("input[id^=SSR_CLSRCH_WRK_SUBJECT]").css("background-color", "#FF0000")
}

//Sets the campus automatically to Pittsburgh.  (Could change later to make it a setting in the extension)
PSEnhance.setCampus = function()
{
    //sets the option and activate the .change() event
    //remember to check if elements exist or have already selected a different one.  
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS]").val("PIT");
	console.log($("select[id^=SSR_CLSRCH_WRK_CAMPUS] option:contains('nbsp')"));
	//Handles issue of default select as nbsp
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS] option[selected='selected']").removeAttr('selected');
	//Makes Pittsburgh campus the defualt selected attribute
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS] option[value=PIT]").attr("selected", "selected");
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS]").trigger("click");
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS]").trigger("change");
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS]").trigger("focus");
	$("select[id^=SSR_CLSRCH_WRK_CAMPUS]").trigger("blur");
}





if($("#ACE_DERIVED_CLSRCH_GROUP2").length > 0 && $("#CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH").length > 0)
{
    //If the page being loaded is the search page
    PSEnhance.makeSearchBetter();
    
}

//if the page dynamically loads the search page later
$('body').on('DOMNodeInserted',function(e){
    
        if($("#ACE_DERIVED_CLSRCH_GROUP2").length > 0 && $("#CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH").length > 0)
        {
            PSEnhance.makeSearchBetter()
            
        }
        
    }
);


