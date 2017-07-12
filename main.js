// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {

        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function () {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------//

let fields = document.getElementById("fields"); //parent node

formData.forEach(function (item) {
  let iTag = document.createElement("i");

  iTag.setAttribute('class', "fa " + item.icon);
  iTag.setAttribute('aria-hidden', true);
  iTag.setAttribute("style", "color: #CCD1D4; padding-left: 15px; padding-top:13px; float:left;");

/*----------------------------- REGULAR INPUT -----------------------------*/
  if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {
    let divWrapper = document.createElement("div");
    let type = document.createElement("input");
    divWrapper.setAttribute('style', 'border:2px solid #CCD1D4; border-radius:3px; margin:10px');
    type.setAttribute('id', item.id);
    type.setAttribute('placeholder', item.label);
    type.setAttribute('style', 'border:none; margin:0px;');

    divWrapper.appendChild(iTag);
    divWrapper.appendChild(type);
    fields.appendChild(divWrapper);
  }
  /*----------------------------- TEXT AREA ------------------------------*/
  if (item.type === 'textarea') {
    let divWrapper = document.createElement("div");
    let textArea = document.createElement("textarea");
    divWrapper.setAttribute('style', 'border:2px solid #CCD1D4; border-radius:3px; margin: 10px;');
    textArea.setAttribute('id', item.id);
    textArea.setAttribute('placeholder', item.label);
    textArea.setAttribute('style', 'border:none; margin:0px; resize:none;');

    divWrapper.appendChild(iTag);
    divWrapper.appendChild(textArea);
    fields.appendChild(divWrapper);
  }
  /*-------------------------- SELECT ------------------------------------*/
  if (item.type === 'select') {
    let divWrapper = document.createElement("div");
    let dropDownOpt = document.createElement("select");
    divWrapper.setAttribute('style', 'border:2px solid #CCD1D4; border-radius:3px; margin: 10px;');
    dropDownOpt.setAttribute('style', 'border:none; margin:0px; width:100%;');

    //add a placeholder value
    let opt1 = document.createElement("option");
    opt1.setAttribute("value"," ");
    let opt1Title = document.createTextNode("Select Language...");
    opt1.appendChild(opt1Title);
    dropDownOpt.appendChild(opt1);

    if (item.options.length !== 0) {
      item.options.forEach(function (a) {
        let opt = document.createElement("option");
        opt.setAttribute("value", a.value);
        var title = document.createTextNode(a.label);
        opt.appendChild(title);
        dropDownOpt.appendChild(opt);
      })
    }
   // divWrapper.appendChild(iTag);
    divWrapper.appendChild(dropDownOpt);
    fields.appendChild(divWrapper);
  }

})