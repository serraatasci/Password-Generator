const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",
    ".","?","/"
];

function generateRandomPassword() {
    let password = "";
    for(let i = 0; i < 15; i++){ // 15 karakter uzunluğunda şifre oluştur
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("password-one").textContent = generateRandomPassword(); // 1. şifre
    document.getElementById("password-two").textContent = generateRandomPassword(); // 2. şifre
});
