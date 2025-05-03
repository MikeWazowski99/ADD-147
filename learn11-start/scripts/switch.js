function calculate() {
    // var chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
    let zodiacSign = getZodiac(month, date)
    let chineseZodiac = getChineseZodiac(year)

    document.getElementById("nameout").innerHTML = "Hello " + myname, "!"
    document.getElementById("zodiac").innerHTML = "Your Western Zodiac is " + zodiacSign;
    document.getElementById("chinese").innerHTML = "Your Chinese Zodiac is " + chineseZodiac;

    function getZodiac(month, date) {
        if((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
            return "Aries!";
        }
        if((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
            return "Taurus!";
        }
        if((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
            return "Gemini!";
        }
        if((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
            return "Cancer!";
        }
        if((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
            return "Leo!";
        }
        if((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
            return "Virgo!";
        }
        if((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
            return "Libra!";
        }
        if((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
            return "Scorpio0!";
        }
        if((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
            return "Sagittarius!";
        }
        if((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
            return "Capricorn!";
        }
        if((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
            return "Aquarius!";
        } else {
            return "Pisces ♓";
        }
    }
    
    function getChineseZodiac(year){
        switch((year - 4) % 12){
            case 0:
                return "Rat";
            case 1:
                return "Ox";
            case 2:
                return "Tiger";
            case 3:
                return "Rabbit";
            case 4:
                return "Dragon";
            case 5:
                return "Snake";
            case 6:
                return "Horse";
            case 7:
                return "Goat";
            case 8:
                return "Monkey";
            case 9:
                return "Rooster";
            case 10:
                return "Dog"
            case 11:
                return "Pig"
            default:
                return "This was not included in the list of months or zodiacs"
        }
    }
    // document.getElementById("nameout").innerHTML = myname;
    // document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}