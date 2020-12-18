$(document).ready(function () {

    let topics = ['dog', 'cat', 'orca', 'software']

    let buttonDiv = $(".buttonsContainer")


    for (let i = 0; i < topics.length; i++) {
        const element = topics[i];
        console.log(element);
        let topicBtns = $('<button>')
        topicBtns.addClass("btn btn-primary")
        topicBtns.attr("data-topic", element)
        topicBtns.attr("id", 'topicBtn')
        topicBtns.text(element)
        $(buttonDiv).append(topicBtns)
    }


    $("#find-topic").on("click", function (event) {

        event.preventDefault()

        let topicValue = $("#topic-input").val();

        console.log(typeof topicValue);
        console.log(topics);
        topics.push(topicValue)

        addNewBtn(topicValue)

    })

    function addNewBtn(param) {
        for (let i = 0; i < topics.length; i++) {
            const element = topics[i];
            let lastElement = topics[topics.length - 1];

            if (i === topics.length - 1) {
                // let buttonDiv = $(".buttonsContainer")
                // let topicBtns = $('<button>')
                let newBtn = $('<button>')
                newBtn.text(lastElement)
                newBtn.addClass("btn btn-primary")
                newBtn.attr("data-topic", lastElement)
                newBtn.attr("id", 'topicBtn')
                $(buttonDiv).append(newBtn)
            }

        }


        $(".btn").on("click", function () {
            // Grabbing and storing the data-topic property value from the button
            let topic = $(this).attr("data-topic");
            // alert('on click works')
            // Constructing a queryURL using the topic name
            let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                topic + "&api_key=dc6zaTOxFJmzC&limit=10";

            // Performing an AJAX request with the queryURL
            $.ajax({
                url: queryURL,
                method: "GET"
            })
                // After data comes back from the request
                .then(function (response) {
                    console.log(queryURL);

                    console.log(response);
                    // storing the data from the AJAX request in the results variable
                    let results = response.data;

                    // Looping through each result item
                    for (let i = 0; i < results.length; i++) {

                        // Creating and storing a div tag
                        let topicDiv = $("<div>");
                        topicDiv.attr("class", "items")

                        // Creating a paragraph tag with the result item's rating
                        let p = $("<p>").text("Rating: " + results[i].rating);

                        // Creating and storing an image tag
                        let topicImage = $("<img>");
                        // Setting the src attribute of the image to a property pulled off the result item
                        topicImage.attr("src", results[i].images.fixed_height.url);
                        // Appending the paragraph and image tag to the topicDiv
                        topicDiv.append(p);
                        topicDiv.append(topicImage);

                        // Prependng the topicDiv to the HTML page in the "#gifs-appear-here" div
                        $(".gifContainer").prepend(topicDiv);
                    }
                });
        });


        // $("#find-topic").on("click", function (event) {

        //     event.preventDefault()

        //     let topicValue = $("#topic-input").val();

        //     console.log(typeof topicValue);
        //     console.log(topics);
        //     topics.push(topicValue)

        //     addNewBtn(topicValue)

        // })

        // function addNewBtn(param) {
        //     for (let i = 0; i < topics.length; i++) {
        //         const element = topics[i];
        //         let lastElement = topics[topics.length - 1];

        //         if (i === topics.length - 1) {
        //             // let buttonDiv = $(".buttonsContainer")
        //             // let topicBtns = $('<button>')
        //             let newBtn = $('<button>')
        //             newBtn.text(lastElement)
        //             newBtn.addClass("btn btn-primary")
        //             newBtn.attr("data-topic", lastElement)
        //             newBtn.attr("id", 'topicBtn')
        //             $(buttonDiv).append(newBtn)
        //         }

        //     }
    }



})

































function testConnection() {
    console.log('STATUS: The JavaScript file is connected and running.');

    // TEST my jquery connection
    //     $(document).ready(function(){
    //         alert('amit')
    //      });
}

testConnection();