var arrayTime = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]

//displays date at in jumbotron header
$('#currentDay').text(moment().format("dddd, MMMM Do"))

//layout rows with attributes
arrayTime.forEach(function (e, i) {
    $('.container')
        .append($('<div>').addClass('time-block')
            .append($('<div>').addClass('row')
                .append($('<div>').addClass('hour col-2 ').text(e)
                )
                .append($('<textarea>').addClass('textarea col-8').attr('id', i)
                )
                .append($('<div>').addClass('saveBtn col-2')
                    .append($('<i>').addClass("fas fa-save fa-2x ")
                    )
                )
            )
        )
})

//initial call on load
setMomentColors()

//set past, present, and future classes
function setMomentColors() {
    arrayTime.forEach(function (e, i) {
        if (moment().get('hour') - 8 > i) {
            $("#" + i).addClass('past')
        }
        if (moment().get('hour') - 8 < i) {
            $("#" + i).addClass('future')
        }
        if (moment().get('hour') - 8 == i) {
            $("#" + i).addClass('present')
        }
    })
}

//Reset colors when hour changes
var hourOnLoad = moment().hour()
setInterval(function () {
    if (moment().hour() !== hourOnLoad) {
        hourOnLoad = moment().hour()
        setMomentColors()
    }
}, 5000);

//pull local storage array or create on if its empty
var savedText = JSON.parse(localStorage.getItem("localSave"))
if (savedText === null) {
    savedText = []
}

//put in saved text on load
savedText.forEach(function (e, i) {
    if (e !== null) {
        $("#" + i).text(savedText[i])
    }
})

//save content when button is clicked
$('.container').on("click", ".saveBtn", function () {
    let textareaSelect = $(this).siblings().eq(1)
    savedText[textareaSelect.attr("id")] = textareaSelect.val()
    // save text value at the index value of "id"
    localStorage.setItem("localSave", JSON.stringify(savedText))
})





