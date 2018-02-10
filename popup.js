$("select[#campusSelect]").on("change", function()
            {
                chrome.storage.sync.set({ mytext: txtValue });
            });