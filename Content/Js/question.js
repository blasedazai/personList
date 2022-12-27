var Filter = {
  Elements: {
    forTrue: document.getElementById("answer-yes"),
    forFalse: document.getElementById("answer-no"),
    nextButton: document.getElementById("next-button"),
    lastButton: document.getElementById("last-button"),
  },
  Status: {
    localStorageValues:[],
    fTrue:[],
    fFalse:[],
  },
  Actions: {
    //Sayfa ilk açıldığında istenilen fonksiyonları çalıştrıacak
    init: () => {
      Filter.Actions.checkLocalStorage();
    },
    checkLocalStorage: () => {
      var answer = localStorage.getItem("question", question);
      if (answer) {
        if (answer === true) {
          Filter.Elements.forTrue.checked = true;
          
        } else if (answer === false) {
          Filter.Elements.forFalse.checked = false;
        }
      }
    },
    nextPage: () => {
      var forTrue = Filter.Elements.forTrue;
      if (forTrue.checked) {
        localStorage.setItem("question" + question, "true");
        Filter.Status.fTrue+=1
      } else {
        localStorage.setItem("question" + question, "false");
        Filter.Status.fFalse+=1
      }
      window.location.href = "/question" + (question + 1) + ".html";
    },
    lastPage: () => {},
    finishTest: ()=>{
      Filter.Status.localStorageValues=localStorage;
      var values=Filter.Status.localStorageValues;
      var value= Object.values(values)
  
      if(value==="True"){
    
        Filter.Status.fTrue+=value
      
      }else{
   
        Filter.Status.fFalse+=value
      }
      window.location.href = "/result.html";
    }
  },
};

Filter.Actions.init();
