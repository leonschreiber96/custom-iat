   define(['pipAPI', 'https://gentle-fudge-eb9646.netlify.app/xxx.js'], function (APIConstructor, iatExtension) {
      var API = new APIConstructor();

      return iatExtension({
         attribute1: {
            name: 'Mężczyzna', //Will appear in the data.
            title: {
               media: { word: 'Mężczyzna' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Mateusz" },
               { word: "Jan" },
               { word: "Tomasz" },
               { word: "Piotr" },
               { word: "Łukasz" },
               { word: "Karol" },
            ],
            //Stimulus css (style)
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         attribute2: {
            name: 'Kobieta', //Will appear in the data.
            title: {
               media: { word: 'Kobieta' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Agnieszka" },
               { word: "Anna" },
               { word: "Katarzyna" },
               { word: "Marta" },
               { word: "Julia" },
               { word: "Agata" },],
            //Stimulus css
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         category1:
         {
            name: 'Praca',
            title: {
               media: { word: 'Praca' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Awans' },
               { word: 'Podwyżka' },
               { word: 'Biznes' },
               { word: 'Kariera' },
               { word: 'Menadżer' },
               { word: 'Biuro' },
               { word: 'Korporacja' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         category2:
         {
            name: 'Rodzina',
            title: {
               media: { word: 'Rodzina' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Małżeństwo' },
               { word: 'Dzieci' },
               { word: 'Ślub' },
               { word: 'Rodzice' },
               { word: 'Dom' },
               { word: 'Przedszkole' },
               { word: 'Żłobek' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         isTouch: false,
         remindErrorText : '<p align="center" style="font-size:1.2em; font-family:arial">' +
			'Jeśli się pomylisz, pojawi się znak <font color="#ff0000"><b>X</b></font>.' +
			'Wciśnij drugi klawisz, żeby kontynuować.<p/>',

			remindErrorTextTouch : '<p align="center" style="font-size:1.2em; font-family:arial">' +
			'Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen.' +
			'Korrigieren Sie den Fehler, indem Sie die andere Seite berühren.<p/>',

			errorCorrection : true, //Should participants correct error responses?
			errorFBDuration : 500, //Duration of error feedback display (relevant only when errorCorrection is false)
			ITIDuration : 250, //Duration between trials.

			fontColor : '#000000', //The default color used for printed messages.
			
			//Text and style for key instructions displayed about the category labels.
			leftKeyText : 'Wciśnij "E" dla', 
			rightKeyText : 'Wciśnij “I" dla', 
         instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Część blockNum z nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Wciśnij klawisz <b>E</b> dla słów należących do kategorii <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Wciśnij klawisz <b>I</b> dla słów należących do kategorii <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'<span style="font-family:arial">Jeśli się pomylisz, pojawi się znak <font color="#ff0000"><b>X</b></font> </span>' +
				'<span style="font-family:arial">. Wciśnij drugi klawisz, żeby kontunuować.<br/></span>' +
				'<u>Wykonaj zadanie szybko</u> ale staraj się być dokładny.<br/><br/></p>'+
				'<p align="center" style="font-family:arial">Wciśnij klawisz <b>spacja</b>, żeby rozpocząć.</font></p></div>',
            instAttributePracticeTouch: [
               '<div>',
                  '<p align="center">',
                     '<u>Teil blockNum von nBlocks</u>',
                  '</p>',
                  '<p align="left" style="margin-left:5px">',
                     '<br/>',
                     'Bewegen Sie Ihren Finger über den <b>linken</b> grünen Bereich für Items aus der Kategorie <font color="#0000ff">leftAttribute</font>.<br/>',
                     'Bewegen Sie Ihren Finger über den <b>rechten</b> grünen Bereich für Items aus der Kategorie <font color="#0000ff">rightAttribute</font>.<br/>',
                     'Es erscheint immer nur ein Item auf einmal.<br/>',
                     '<br/>',
                     'Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen. Berühren Sie die andere Seite. <u>Reagieren Sie so schnell wie möglich</u> und machen Sie dabei so wenig Fehler wie möglich.<br/>',
                  '</p>',
                  '<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
               '</div>'
            ].join('\n'),

instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Część blockNum z nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Wciśnij klawisz <b>E</b> dla słów należących do kategorii <font color="#31940F">leftCategory.</font>' +
				'<br/>Wciśnij klawisz <b>I</b> dla słów należących do kategorii <font color="#31940F">rightCategory</font>.<br/><br/>' +
				'<span style="font-family:arial">Jeśli się pomylisz, pojawi się znak <font color="#ff0000"><b>X</b></font> </span>' +
				'<span style="font-family:arial">. Wciśnij drugi klawisz, żeby kontunuować.<br/></span>' +
				'<u>Wykonaj zadanie szybko</u> ale staraj się być dokładny.<br/><br/></p>'+
				'<p align="center" style="font-family:arial">Wciśnij klawisz <b>spacja</b>, żeby rozpocząć.</font></p></div>',
instCategoriesPracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Teil blockNum von nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px; font-family:arial">',
						'<br/>',
						'Bewegen Sie Ihren Finger über den <b>linken</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">leftCategory</font> gehören.<br/>',
						'Bewegen Sie Ihren Finger über den <b>rechten</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>',
						'Items erscheinen nacheinander.<br/>',
						'<br/>',
						'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. Berühren Sie die andere Seite. <u>Reagieren Sie so schnell wie möglich</u> und seien Sie dabei präzise.<br/>',
					'</p>',
					'<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
				'</div>'
			].join('\n'),

instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Część blockNum z nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Wciśnij klawisz <b>E</b> dla słów należących do kategorii <font color="#31940F">leftCategory</font> lub <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Wciśnij klawisz <b>I</b> dla słów należących do kategorii <font color="#31940F">rightCategory</font> lub <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Każde słowo należy tylko do jednej kategorii.<br/><br/>' +
				'<span style="font-family:arial">Jeśli się pomylisz, pojawi się znak <font color="#ff0000"><b>X</b></font>\. </span>' +
				'<span style="font-family:arial">Wciśnij drugi klawisz, żeby kontunuować.<br/></span>' + 
				'<u>Wykonaj zadanie szybko</u>, ale staraj się być dokładny.<br/><br/></p>' +
				'<p align="center" style="font-family:arial">Wciśnij klawisz <b>spacja</b>, żeby rozpocząć.</font></p></div>',
instFirstCombinedTouch:[
				'<div>',
					'<p align="center">',
						'<u>Teil blockNum von nBlocks</u>',
					'</p>',
					'<br/>',
					'<br/>',

					'<p align="left" style="margin-left:5px">',
						'Berühren Sie den <b>linken</b> grünen Bereich für die Kategorie <font color="#31940F">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>',
						'Berühren Sie den <b>rechten</b> grünen Bereich für die Kategorie <font color="#31940F">rightCategory</font> und für <font color="#0000ff">rightAttribute</font>.<br/>',
						'Jedes Item gehört nur zu einer Kategorie.<br/>',
						'<br/>',
						'Reagieren Sie so schnell wie möglich und seien Sie dabei präzise.<br/>',
					'</p>',
					'<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
				'</div>'
			].join('\n'),

instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Część blockNum z nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Wciśnij klawisz <b>E</b> dla słów należących do kategorii <font color="#31940F">leftCategory</font> lub <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Wciśnij klawisz <b>I</b> dla słów należących do kategorii <font color="#31940F">rightCategory</font> lub <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Każde słowo należy tylko do jednej kategorii.<br/><br/>' +
				'<u>Wykonaj zadanie szybko</u>, ale staraj się być dokładny.<br/><br/></p>' +
				'<p align="center" style="font-family:arial">Wciśnij klawisz <b>spacja</b>, żeby rozpocząć.</font></p></div>',
instSecondCombinedTouch:[
   '<div>',
      '<p align="center">',
         '<u>Teil blockNum von nBlocks</u>',
      '</p>',
      '<br/>',
      '<br/>',

      '<p align="left" style="margin-left:5px">',
         'Berühren Sie den <b>linken</b> grünen Bereich für die Kategorie <font color="#336600">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>',
         'Berühren Sie den <b>rechten</b> grünen Bereich für die Kategorie <font color="#336600">rightCategory</font> und für <font color="#0000ff">rightAttribute</font>.<br/>',
         'Jedes Item gehört nur zu einer Kategorie.<br/>',
         '<br/>',
         'Reagieren Sie so schnell wie möglich und seien Sie dabei präzise.<br/>',
      '</p>',
      '<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
   '</div>'
].join('\n'),

instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Część blockNum z nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Uważaj, słowa zamieniły się miejscami!</b><br/>' +
				'Wciśnij klawisz <b>E</b> dla słów należących do kategorii <font color="#336600">leftCategory</font>.<br/>' +
				'Wciśnij klawisz <b>I</b> dla słów należących do kategorii <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Wykonaj zadanie szybko</u>, ale staraj się być dokładny<br/><br/></p>' +
				'<p align="center" style="font-family:arial;">Wciśnij klawisz <b>spacja</b>, żeby rozpocząć.</font></p></div>',
instSwitchCategoriesTouch: [
				'<div>',
					'<p align="center">',
						'<u>Teil blockNum von nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Achtung, die Bezeichnungen haben die Position gewechselt!<br/>',
						'Berühren Sie den <b>linken</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">leftCategory</font> gehören.<br/>',
						'Berühren Sie den <b>rechten</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>',
						'Items erscheinen nacheinander.<br/>',
						'<br/>',
						'Reagieren Sie so schnell wie möglich und seien Sie dabei präzise.<br/>',
					'</p>',
					'<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
				'</div>'
			].join('\n'),

instThirdCombined : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
instFourthCombined : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
instThirdCombinedTouch : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
instFourthCombinedTouch : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.

showDebriefing:false, //Zeige Feedback im letzten Durchgang? Nur relevant in einem Qualtrics IAT, da wir später in der Umfrage nicht auf das gespeicherte Feedback und den IAT-Score zugreifen können.
//Texte für die Durchgänge, die das Feedback zeigen.
preDebriefingText : 'Drücken Sie die Leertaste, um Ihr Ergebnis zu sehen', //Text im Durchgang, der vor dem Zeigen des Feedbacks kommt.
preDebriefingTouchText : 'Berühren Sie den unteren grünen Bereich, um Ihr Ergebnis zu sehen', //Berührungsversion für den Text im Durchgang, der vor dem Zeigen des Feedbacks kommt.
debriefingTextTop : 'Ihr Ergebnis:', //Wird über dem Feedback-Text angezeigt.
//ACHTUNG: Wir empfehlen nicht, den Teilnehmern ihre Ergebnisse zu zeigen. Der IAT ist ein typisches psychologisches Messinstrument, daher ist er nicht sehr genau.
//Auf der Website von Project Implicit können Sie sehen, dass wir viele Texte hinzugefügt haben, um zu erklären, dass es immer noch viele Unbekannte über die Bedeutung dieser Ergebnisse gibt.
//Wir empfehlen dringend, dass Sie all diese Details in der Debriefing der Studie bereitstellen.
debriefingTextBottom : 'Dieses Ergebnis ist keine definitive Beurteilung Ihrer Einstellungen. Es dient nur zu Bildungszwecken. Drücken Sie die Leertaste, um fortzufahren.', //Wird unter dem Feedback-Text angezeigt.
debriefingTextBottomTouch : 'Dieses Ergebnis ist keine definitive Beurteilung Ihrer Einstellungen. Es dient nur zu Bildungszwecken. Berühren Sie den grünen Bereich, um fortzufahren.',
//Die Standard-Feedback-Nachrichten für jeden Schwellenwert -
//attribute1 und attribute2 werden durch den Namen von attribute1 und attribute2 ersetzt.
//categoryA ist der Name der Kategorie, die mit attribute1 assoziiert wird,
//und categoryB ist der Name der Kategorie, die mit attribute2 assoziiert wird.

//Fehlermeldungen im Feedback
manyErrors: 'Es wurden zu viele Fehler gemacht, um ein Ergebnis festzustellen.',
tooFast: 'Es gab zu viele schnelle Durchgänge, um ein Ergebnis festzustellen.',
notEnough: 'Es gab nicht genügend Durchgänge, um ein Ergebnis festzustellen.'
      });
   });