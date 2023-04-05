function checkGrade() {
    if (grade.value == "") {
        alert("Enter a valid Grade");
    } else if (grade.value <= 44) {
        alert("F you have failed");
    } else if (grade.value >= 44 && grade.value <= 49) {
        alert("you scored E");
    } else if (grade.value >= 50 && grade.value <= 54) {
        alert("you scored D");
    } else if (grade.value >= 54 && grade.value <= 59) {
        alert("you scored C");
    } else if (grade.value >= 60 && grade.value <= 69) {
        alert("you scored B");
    } else {
        alert("you scored A");
    }
}
