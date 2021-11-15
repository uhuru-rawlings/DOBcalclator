const validates = () => {
    var dobs = document.getElementById('DateofBirth').value.trim();
    var gender = document.getElementById('Gender').value.trim();
    if(dobs == "" || gender == ""){
        document.getElementById('error').innerHTML = "Please fill all inputs";
        return false;
    }
    else{
     
        var indexes = new Date(dobs).getDay();
      
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