$(document).ready(function () {
    $.getJSON("./assets/js/projects.json", function (data) {
        let sdgCounts = {};

        // Count occurrences of each SDG tag
        data.forEach(function (project) {
            if (project.sdg) {
                project.sdg.forEach(function (tag) {
                    if (sdgCounts[tag]) {
                        sdgCounts[tag]++;
                    } else {
                        sdgCounts[tag] = 1;
                    }
                });
            }
        });

        // Output the SDG counts (for debugging)
        console.log("SDG Counts:");
        console.log(sdgCounts);

        // Apply hover effect to each card
        $('.cardSDG').each(function () {
            const cardSDG = $(this);
            const cardNumber = cardSDG.find('.cardNumber');
            const cardText = cardSDG.find('.titleColor')
            const originalText = cardText.text().trim();
            var newText = "<span class='project-in-text'>Projects in</span><br>" + originalText;
            const originalNumber = cardNumber.text().trim(); // Ensure no leading/trailing whitespace affects comparison
            const sdgName = cardSDG.data('sdg'); // Get SDG name from data attribute
            const newNumber = sdgCounts[sdgName] || 0; // Use count for the SDG name or default to 0

            cardSDG.on('mouseenter', function () {
                if(newNumber == 1){
                    newText = "<span class='project-in-text'>Project in</span><br>" + originalText;
                }
                cardText.html(newText);
                cardNumber.text(newNumber);
            });

            cardSDG.on('mouseleave', function () {
                cardText.text(originalText)
                cardNumber.text(originalNumber);
            });
        });
    }).fail(function (jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Error loading JSON file: " + err);
    });
});