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
    //set the option and activates the .change() event;
    if($("select[id^=CLASS_SRCH_WRK2_STRM]").length > 0)
    {
        if(!document.PSEnhanceTermManuallyChanged)
        {
            var term;
            $("select[id^=CLASS_SRCH_WRK2_STRM] option").each(function()
            {

                term = $(this).attr("value");
                
            })
            
            $("select[id^=CLASS_SRCH_WRK2_STRM]").val(term);

            $("select[id^=CLASS_SRCH_WRK2_STRM]").trigger("click");
            $("select[id^=CLASS_SRCH_WRK2_STRM]").trigger("change");
            $("select[id^=CLASS_SRCH_WRK2_STRM]").trigger("focus");
            $("select[id^=CLASS_SRCH_WRK2_STRM]").trigger("blur");

            $("select[id^=CLASS_SRCH_WRK2_STRM]").on("change", function()
            {
                document.PSEnhanceTermManuallyChanged = true;
            });
        }
    }
    //test code:
    // console.log($("input[id^=SSR_CLSRCH_WRK_SUBJECT]").length);
    // $("input[id^=SSR_CLSRCH_WRK_SUBJECT]").css("height", "175px");
    // $("input[id^=SSR_CLSRCH_WRK_SUBJECT]").css("background-color", "#FF0000")
}

//Sets the campus automatically to Pittsburgh.  (Could change later to make it a setting in the extension)
PSEnhance.setCampus = function()
{
    //sets the option and activate the .change() event
    //remember to check if elements exist or have already selected a different one.  
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


