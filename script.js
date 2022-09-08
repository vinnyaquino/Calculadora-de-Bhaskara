function executarCalculo(){
    var a = Number(document.getElementById('entrada1').value);    
    var b = Number(document.getElementById('entrada2').value);    
    var c = Number(document.getElementById('entrada3').value);   
  
    var calculoDelta = (Math.pow(b, 2) + (- 4 * a * c));

    var calculoBhaskara1 = (- b + Math.sqrt(calculoDelta)) / (2 * a);
    var calculoBhaskara2 = (- b - Math.sqrt(calculoDelta)) / (2 * a);
    var resolucao = "O resultado da expressão, tendo Delta como " + calculoDelta + ", é " + calculoBhaskara1 + " e " + calculoBhaskara2;
    
     document.getElementById("resultado").innerHTML = resolucao;




  








}