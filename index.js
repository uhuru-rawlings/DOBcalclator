const validates = () => {
    var dobs = document.getElementById('DateofBirth').value.trim();
    var gender = document.getElementById('Gender').value.trim();
    if(dobs == "" || gender == ""){
        document.getElementById('error').innerHTML = "Please fill all inputs";
        return false;
    }
    else{
        var alldates = dobs.split('-');
        var year = parseInt(alldates[0]);
        var month = parseInt(alldates[1]);
        var days = parseInt(alldates[2]);
        var yearusable = parseInt(alldates[0].substr(2,4));
        var leapyear = Math.floor((year/100) + 1);
        var exactday = ( ( (leapyear/4) -2*leapyear-1) + ((5*yearusable/4) ) + ((26*(month+1)/10)) + days )%7;
        var indexes = Math.floor(exactday);
         
        var males = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        var daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        
        if(gender == "Male"){
            document.getElementById('names').innerHTML = "Name: " + " " + males[indexes];
            document.getElementById('daysof').innerHTML = "Day Born: " + " " + daysoftheweek[indexes];
        }else{
            document.getElementById('names').innerHTML = "Name: " + " " + females[indexes];
            document.getElementById('daysof').innerHTML = "Day Born: " + " " + daysoftheweek[indexes];
        }
         return false;
    }
}