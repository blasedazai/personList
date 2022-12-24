var Filter = {
  Apis: {},
  Elements: {
    name: document.getElementById("name"),
    surname: document.getElementById("surname"),
    age: document.getElementById("age"),
    job: document.getElementById("job"),
    weight: document.getElementById("weight"),
    size: document.getElementById("size"),
    button: document.getElementById("submit"),
    personList: document.getElementById("person-list"),
  },
  Status: {
    persons: [],
  },
  Actions: {
    //Sayfa ilk açıldığında istenilen fonksiyonları çalıştrıacak
    init: () => {},

    getValue: () => {
      var name = Filter.Elements.name.value;
      var surname = Filter.Elements.surname.value;
      var age = Filter.Elements.age.value;
      var job = Filter.Elements.job.value;
      var weight = Filter.Elements.weight.value;
      var size = Filter.Elements.size.value;
      debugger;
      var person = { name, surname, age, job, weight, size };
      Filter.Status.persons.push(person);
      Filter.Actions.appendToHtmlProduct();
    },
    appendToHtmlProduct: () => {
      Filter.Elements.personList.innerHTML = "";
      for (let i = 0; i < Filter.Status.persons.length; i++) {
        var person=Filter.Status.persons[i];
        var personHtml =
          "<li>" +
            "<ul class='c-item-02-B'>" +
                "<li>"+person.name+" "+person.surname+"</li>" +
                "<li>"+person.age+"</li>" +
                "<li>"+person.job+"</li>" +
                "<li>"+person.weight+"</li>" +
                "<li>"+person.size+"</li>" +
            "</ul>" +
          "</li>";
        Filter.Elements.personList.innerHTML+=personHtml;
      }
    },
  },
};

Filter.Actions.init();
