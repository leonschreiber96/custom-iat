   define(['pipAPI', 'https://gentle-fudge-eb9646.netlify.app/xxx.js'], function (APIConstructor, iatExtension) {
      var API = new APIConstructor();

      return iatExtension({
         attribute1: {
            name: 'Male Names', //Will appear in the data.
            title: {
               media: { word: 'Male names' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Ben" },
               { word: "Paul" },
               { word: "Daniel" },
               { word: "John" },
               { word: "Jeffrey" },
            ],
            //Stimulus css (style)
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         attribute2: {
            name: 'Female Names', //Will appear in the data.
            title: {
               media: { word: 'Female names' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Rebecca" },
               { word: "Michelle" },
               { word: "Emily" },
               { word: "Julia" },
               { word: "Anna" },],
            //Stimulus css
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         category1:
         {
            name: 'Career',
            title: {
               media: { word: 'Career' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Career' },
               { word: 'Corporation' },
               { word: 'Salary' },
               { word: 'Office' },
               { word: 'Professional' },
               { word: 'Management' },
               { word: 'Business' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         category2:
         {
            name: 'Family',
            title: {
               media: { word: 'Family' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Wedding' },
               { word: 'Marriage' },
               { word: 'Parents' },
               { word: 'Relatives' },
               { word: 'Family' },
               { word: 'Home' },
               { word: 'Children' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         isTouch: false,
      });
   });