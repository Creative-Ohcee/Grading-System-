function checkGrade() {
    if (grade.value == "") {
        result.innerHTML = "Enter a valid Grade"
    } else if (grade.value <= 44) {
        result.innerHTML = "F you have failed"
    } else if (grade.value >= 44 && grade.value <= 49) {
        result.innerHTML = "you scored E"
    } else if (grade.value >= 50 && grade.value <= 54) {
        result.innerHTML = "you scored D"
    } else if (grade.value >= 54 && grade.value <= 59) {
        result.innerHTML = "you scored C"
    } else if (grade.value >= 60 && grade.value <= 69) {
        result.innerHTML = "you scored B"
    } else {
        result.innerHTML = "you scored A"
    }
}
