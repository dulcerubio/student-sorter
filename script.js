var studentsArray = [
"Alma Pineda", "Erick Munguia",
"Abraham Albiso", "Beverly Bribiesca",
"RJay Matias", "Steven Munoz",
"Camila Melara", "Jaaaasssmine Rosas",
"Gerrod Milton", "Erick Alas",
"Edgardo Alas", "Estefania Lopez",
"Dulce Rubio", "Jefferson Fon Nieto",
"Hashby Marroquin", "Lizbeth Alcaraz",
"Jeder Ramos Aguilar"




] 

function sortStudentsIntoGroups(students,groupSize){
 console.log('There are'+ students.length + 'students in the list') 
 var groups=[]
 var currentGroup=[]
    
    while(students.length > 0) {
        var randomNumber = Math.floor(Math.random()* students.length)
        var randomStudent = students [randomNumber]
        
        currentGroup.push(randomStudent)
        students.splice(randomNumber,1)
        
        if(currentGroup.length>=groupSize) {
            groups.push(currentGroup)
            currentGroup = []
        }
    
        
    }
    
    if(currentGroup.length > 0) {
        groups.push(currentGroup)
    }
   groups.forEach(function(group,idx){
       console.log('Group #'+ (idx + 1) + ":"+ group)
})
}
sortStudentsIntoGroups(studentsArray,3)
