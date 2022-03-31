exports.template = function(query){
    console.log("template 함수호출");

    let sum = "";
    
    for(let i = 1; i<=9; i++){
        `<tr><td>${query.num1}*${i}=${parseInt(query.num1)*i}</td></tr>`;
    }
    let res = "<html><body><table border = '1'>"+sum+"</table></body></html>";

        return res;
}
    
    exports.template_grade = function(query){

       
    let avg = ((parseInt(query.java))+(parseInt(query.web))+(parseInt(query.iot))+(parseInt(query.android)))/4;
    let grade = "";
    
    if (avg>=95) {
       grade = "A+";
    }
    else if(90<=avg<95){
        grade = "A";
    }
    else if(85<=avg<90){
        grade = "B+";
    }
    else if(80<=avg<85){
        grade = "B";
    }
    else if(75<=avg<80){
        grade = "C";
    }
    else if(avg<75){
        grade = "F";
    }

    let res = `<html><body>
            Name : ${query.name}<br>
            Java : ${query.java}<br>
            WEB : ${query.web}<br>
            IOT : ${query.iot}<br>
            Android : ${query.android}<br>
            AVG : ${avg}<br>
            GRADE : ${grade}
            </body></html>`;


        return res;
    
    }
    