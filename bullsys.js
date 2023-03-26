const mac2281 = document.getElementById('mac2281');
const mac2282 = document.getElementById('mac2282');
const cop2510 = document.getElementById('cop2510');
const egn3000 = document.getElementById('egn3000');
const egn3000l = document.getElementById('egn3000l');
const enc1101 = document.getElementById('enc1101');
const starter = document.getElementById('starter');
const phy2048l = document.getElementById('phy2048l');
const phy2048 = document.getElementById('phy2048');
const natural_science = document.getElementById('natural_science');
const cot3100 = document.getElementById('cot3100');
const cda3103 = document.getElementById('cda3103');
const cop3514 = document.getElementById('cop3514');
const mac2283 = document.getElementById('mac2283');
const egn4450 = document.getElementById('egn4450');
const egn3433 = document.getElementById('egn3433');
const phy2049l = document.getElementById('phy2049l');
const phy2049 = document.getElementById('phy2049');
const enc1102 = document.getElementById('enc1102');
const upper_division = document.getElementById('upper_division');

const human_cultural = document.getElementById('human_cultural');
const natural_science2gened_social_science = document.getElementById('gened_social_science');
const natural_science2 = document.getElementById('natural_science2');
const gened_humanities = document.getElementById('gened_humanities');

const cda3201l = document.getElementById('cda3201l');
const cda3201 = document.getElementById('cda3201');
const cop4530 = document.getElementById('cop4530');
const cda4205 = document.getElementById('cda4205');
const cda4205l = document.getElementById('cda4205l');
const cop4600 = document.getElementById('cop4600');
const cnt4419 = document.getElementById('cnt4419');
const enc3246  = document.getElementById('enc3246');
const cot4400 = document.getElementById('cot4400');
const cen4020 = document.getElementById('cen4020');

const thirdyear1 = document.getElementById('thirdyear1');
const thirdyear2 = document.getElementById('thirdyear2');
const fourthyear = document.getElementById('fourthyear');

const cse_elec1 = document.getElementById('cse_elec1');
const cse_soft1 = document.getElementById('cse_soft1');

const cse_elec2 = document.getElementById('cse_elec2');
const cse_soft2 = document.getElementById('cse_soft2');
const general_elec1 = document.getElementById('general_elec1');

const general_elective2 = document.getElementById('general_elecive2');
const cse_theory = document.getElementById('cse_theory');
const cse_elec3 = document.getElementById('cse_elec3');
const graduation = document.getElementById('graduation');



starter.addEventListener('click', function() {
  if (mac2281.classList.contains('hide')) {
    mac2281.classList.remove('hide');
  } else {
    mac2281.classList.add('hide');
  }
  if (gened_social_science.classList.contains('hide')) {
    gened_social_science.classList.remove('hide');
  } else {
    gened_social_science.classList.add('hide');
  }
  if (natural_science2.classList.contains('hide')) {
    natural_science2.classList.remove('hide');
  } else {
    natural_science2.classList.add('hide');
  }
  if (gened_humanities.classList.contains('hide')) {
    gened_humanities.classList.remove('hide');
  } else {
    gened_humanities.classList.add('hide');
  }
  if (human_cultural.classList.contains('hide')) {
    human_cultural.classList.remove('hide');
  } else {
    human_cultural.classList.add('hide');
  }
  if (egn3000.classList.contains('hide')) {
    egn3000.classList.remove('hide');
  } else {
    egn3000.classList.add('hide');
  }
  if (egn3000l.classList.contains('hide')) {
    egn3000l.classList.remove('hide');
  } else {
    egn3000l.classList.add('hide');
  }
  if (enc1101.classList.contains('hide')) {
    enc1101.classList.remove('hide');
  } else {
    enc1101.classList.add('hide');
  }
  if (natural_science.classList.contains('hide')) {
    natural_science.classList.remove('hide');
  } else {
    natural_science.classList.add('hide');
  }
  
});

mac2281.addEventListener('click', function() {
  if (mac2282.classList.contains('hide')) {
    mac2282.classList.remove('hide');
  } else {
    mac2282.classList.add('hide');
  }
  if (cop2510.classList.contains('hide')) {
    cop2510.classList.remove('hide');
  } else {
    cop2510.classList.add('hide');
  }
  if (phy2048.classList.contains('hide')) {
    phy2048.classList.remove('hide');
  } else {
    phy2048.classList.add('hide');
  }
  if (phy2048l.classList.contains('hide')) {
    phy2048l.classList.remove('hide');
  } else {
    phy2048l.classList.add('hide');
  }
  if (cot3100.classList.contains('hide')) {
    cot3100.classList.remove('hide');
  } else {
    cot3100.classList.add('hide');
  }
});

cop2510.addEventListener('click', function() {
  if (cop3514.classList.contains('hide')) {
    cop3514.classList.remove('hide');
  } else {
    cop3514.classList.add('hide');
  }
  if (cda3103.classList.contains('hide')) {
    cda3103.classList.remove('hide');
  } else {
    cda3103.classList.add('hide');
  }
});

mac2282.addEventListener('click', function(){
  if (mac2283.classList.contains('hide')) {
    mac2283.classList.remove('hide');
  } else {
    mac2283.classList.add('hide');
  }
  if (egn4450.classList.contains('hide')) {
    egn4450.classList.remove('hide');
  } else {
    egn4450.classList.add('hide');
  }
  if (egn3433.classList.contains('hide')) {
    egn3433.classList.remove('hide');
  } else {
    egn3433.classList.add('hide');
  }
  if (phy2049.classList.contains('hide')) {
    phy2049.classList.remove('hide');
  } else {
    phy2049.classList.add('hide');
  }
  if (phy2049l.classList.contains('hide')) {
    phy2049l.classList.remove('hide');
  } else {
    phy2049l.classList.add('hide');
  }
  if (upper_division.classList.contains('hide')) {
    upper_division.classList.remove('hide');
  } else {
    upper_division.classList.add('hide');
  }
});

//ENC 1101 - ENC 1102 
enc1101.addEventListener('click', function() {
  if (enc1102.classList.contains('hide')) {
    enc1102.classList.remove('hide');
  } else {
    enc1102.classList.add('hide');
  }
});

// CDA 3103 - COP 4530 CDA 3201
cda3103.addEventListener('click', function() {
  if (cop4530.classList.contains('hide')) {
    cop4530.classList.remove('hide');
  } else {
    cop4530.classList.add('hide');
  }
  if (cda3201.classList.contains('hide')) {
    cda3201.classList.remove('hide');
  } else {
    cda3201.classList.add('hide');
  }
});

//CDA 3201 - CDA 3201L
//CDA 3201 - CDA 4205 CDA 4205L
cda3201.addEventListener('click', function() {
  if (cda3201l.classList.contains('hide')) {
    cda3201l.classList.remove('hide');
  } else {
    cda3201l.classList.add('hide');
  }
  if (cda4205.classList.contains('hide')) {
    cda4205.classList.remove('hide');
  } else {
    cda4205.classList.add('hide');
  }
  if (cda4205l.classList.contains('hide')) {
    cda4205l.classList.remove('hide');
  } else {
    cda4205l.classList.add('hide');
  }  
});

//COT 3100 - COT 4400
cot3100.addEventListener('click', function() {
  if (cot4400.classList.contains('hide')) {
    cot4400.classList.remove('hide');
  } else {
    cot4400.classList.add('hide');
  }
});

//COP 4530 - CEN 4020
cop4530.addEventListener('click', function() {
  if (cen4020.classList.contains('hide')) {
    cen4020.classList.remove('hide');
  } else {
    cen4020.classList.add('hide');
  }
});



//Third year -> unlock
thirdyear1.addEventListener('click', function() {
  if (cse_elec1.classList.contains('hide')) {
    cse_elec1.classList.remove('hide');
  } else {
    cse_elec1.classList.add('hide');
  }
  if (cse_soft1.classList.contains('hide')) {
    cse_soft1.classList.remove('hide');
  } else {
    cse_soft1.classList.add('hide');
  }
});

//Third year, sem2 -> CSE Elec 2, CSE Software 2, ENC 3246, General_elec1
thirdyear2.addEventListener('click', function() {
  if (cse_elec2.classList.contains('hide')) {
    cse_elec2.classList.remove('hide');
  } else {
    cse_elec2.classList.add('hide');
  }
  if (cse_soft2.classList.contains('hide')) {
    cse_soft2.classList.remove('hide');
  } else {
    cse_soft2.classList.add('hide');
  }
  if (enc3246.classList.contains('hide')) {
    enc3246.classList.remove('hide');
  } else {
    enc3246.classList.add('hide');
  }
  if (general_elec1.classList.contains('hide')) {
    general_elec1.classList.remove('hide');
  } else {
    general_elec1.classList.add('hide');
  }
});

//Fourthyear -> Apply for graduation, cse_elec3, cse_theory, cnt4419, cop4600, general_elec2
fourthyear.addEventListener('click', function() {
  if (cse_elec3.classList.contains('hide')) {
    cse_elec3.classList.remove('hide');
  } else {
    cse_elec3.classList.add('hide');
  }
  if (cse_theory.classList.contains('hide')) {
    cse_theory.classList.remove('hide');
  } else {
    cse_theory.classList.add('hide');
  }
  if (cnt4419.classList.contains('hide')) {
    cnt4419.classList.remove('hide');
  } else {
    cnt4419.classList.add('hide');
  }
  if (cop4600.classList.contains('hide')) {
    cop4600.classList.remove('hide');
  } else {
    cop4600.classList.add('hide');
  }
});

fourthyear.addEventListener('click', function() {
  if (general_elective2.classList.contains('hide')) {
    general_elective2.classList.remove('hide');
  } else {
    general_elective2.classList.add('hide');
  }
  if (graduation.classList.contains('hide')) {
    graduation.classList.remove('hide');
  } else {
    graduation.classList.add('hide');
  }
});

// data manipulation
var studentName = [];
var className = [];
var classesTaken = [];
var classesIP = [];
var classReq = [];
var needUP = [];
var hasUP = [];
var classesReqForStudent = "";
var classestakenClassesForStudent = [];
var classesIPClassesForStudent = [];
var usersName = "Emma";
var classAva = false;
let theClass = "";
var thestring = "";
const checkbtn = document.getElementById('check');
const uploadconfirmstudent = document.getElementById('uploadconfirmstudent').
addEventListener('click', () => {
  Papa.parse(document.getElementById('student').files[0],{
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        for (i = 0; i < results.data.length; i++) {
            studentName.push(results.data[i].FirstName);
            classesTaken.push(results.data[i].ClassesTaken);
            classesIP.push(results.data[i].ClassesInProgress);
            hasUP.push(results.data[i].UpperLevel);
        }
        for (i = 0; i < results.data.length; i++) {
            if (usersName == (results.data[i].FirstName)){
                classestakenClassesForStudent = classesTaken[i];
                classesIPClassesForStudent = classesIP[i];
            }
        }
        enc1101.classList.add('bgcComplete');
        mac2281.classList.add('bgcComplete');
        egn3000.classList.add('bgcComplete');
        egn3000l.classList.add('bgcComplete');
        natural_science.classList.add('bgcComplete');
        mac2282.classList.add('bgcIP');
        /*
        console.log(studentName);
        console.log(classesTaken);
        console.log(classesIP);
        console.log(classestakenClassesForStudent);
        console.log(classesIPClassesForStudent);
        
        for (let i = 0; i < classesIPClassesForStudent.length; i++) {
          theClass = classesIPClassesForStudent[i];
          console.log(theClass);
          theClass = theClass.slice(0, 2).toLowerCase() + theClass.slice(2, 5);
          console.log(theClass);
          thestring = thestring  + theClass;
          console.log(thestring);
          
        }
        thestring.classList.add('bgcIP');
        
        for (i = 0; i < (classestakenClassesForStudent.length); i++){
          theClass = classestakenClassesForStudent.split(i,i+7)
          theClass = theClass.toLowerCase;
          theClass.classList.add('bgcComplete');
        

    }
*/
  }
    
});
});
const uploadconfirmclasses = document.getElementById('uploadconfirmclasses').
addEventListener('click', () => {
Papa.parse(document.getElementById('classes').files[0],
{
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        for (i = 0; i < results.data.length; i++) {
            classReq.push(results.data[i].classesrequired);
            needUP.push(results.data[i].isUPPLneeded);
            className.push(results.data[i].ClassID);
        }
        for (i = 0; i < results.data.length; i++) {
            if ((results.data[i].ClassID) == "MAC2282"){
                console.log("it work");
                var classesReqForStudent = classReq[i];
            }
        }
        /*
        console.log(className);
        console.log(classReq);
        console.log(needUP);
        console.log(classesReqForStudent);
        */
    }
    
});
});
checkbtn.addEventListener('click', function() {
for (i = 0; i < (classesIPClassesForStudent.length + classestakenClassesForStudent.length); i = i+7) {
    if (classesReqForStudent.slice(i,i+7) == (classestakenClassesForStudent.slice(i,i+7) || classesIPClassesForStudent.slice(i,i+7)) ){
        console.log("true");
        classAva = true;
    }
}
})




