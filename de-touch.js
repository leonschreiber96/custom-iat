   define(['pipAPI', 'https://gentle-fudge-eb9646.netlify.app/xxx.js'], function (APIConstructor, iatExtension) {
      var API = new APIConstructor();

      return iatExtension({
         attribute1: {
            name: 'Männliche Namen', //Will appear in the data.
            title: {
               media: { word: 'Männliche Namen' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Johannes" },
               { word: "Lukas" },
               { word: "Daniel" },
               { word: "Paul" },
               { word: "Thomas" },
            ],
            //Stimulus css (style)
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         attribute2: {
            name: 'Weibliche Namen', //Will appear in the data.
            title: {
               media: { word: 'Weibliche Namen' }, //Name of the category presented in the task.
               css: { color: '#0000FF', 'font-size': '2.3em', "font-family": "arial" }, //Style of the category title.
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: "Julia" },
               { word: "Michaela" },
               { word: "Anna" },
               { word: "Laura" },
               { word: "Sophie" },],
            //Stimulus css
            stimulusCss: { color: '#0000FF', 'font-size': '1.8em', "font-family": "arial" }
         },
         category1:
         {
            name: 'Karriere',
            title: {
               media: { word: 'Karriere' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Verwaltung' },
               { word: 'Berufstätigkeit' },
               { word: 'Unternehmen' },
               { word: 'Gehalt' },
               { word: 'Büro' },
               { word: 'Verdienst' },
               { word: 'Karriere' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         category2:
         {
            name: 'Familie',
            title: {
               media: { word: 'Familie' },
               css: { color: '#31940F', 'font-size': '2.3em', "font-family": "arial" },
               height: 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia: [ //Stimuli content as PIP's media objects
               { word: 'Zuhause' },
               { word: 'Eltern' },
               { word: 'Kinder' },
               { word: 'Familie' },
               { word: 'Hochzeit' },
               { word: 'Ehe' },
               { word: 'Verwandte' }
            ],
            //Stimulus css
            stimulusCss: { color: '#31940F', 'font-size': '1.8em', "font-family": "arial" }
         },
         isTouch: true,
         remindErrorText : '<p align="center" style="font-size:1.2em; font-family:arial">' +
			'Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen.' +
			'Korrigieren Sie den Fehler, indem Sie die andere Taste drücken.<p/>',

			remindErrorTextTouch : '<p align="center" style="font-size:1.2em; font-family:arial">' +
			'Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen.' +
			'Korrigieren Sie den Fehler, indem Sie die andere Seite berühren.<p/>',

			errorCorrection : true, //Should participants correct error responses?
			errorFBDuration : 500, //Duration of error feedback display (relevant only when errorCorrection is false)
			ITIDuration : 250, //Duration between trials.

			fontColor : '#000000', //The default color used for printed messages.
			
			//Text and style for key instructions displayed about the category labels.
			leftKeyText : 'Drücken sie "E" für', 
			rightKeyText : 'Drücken Sie "I" für', 
         instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Platzieren Sie Ihren linken Finger auf der Taste <b>E</b> für Items aus der Kategorie <font color="#0000ff">leftAttribute.</font>' +
				'<br/>Platzieren Sie Ihren rechten Finger auf der Taste <b>I</b> für Items aus der Kategorie <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
				'Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen. ' +
				'Korrigieren Sie den Fehler, indem Sie die andere Taste drücken.<br/>' +
				'<u>Reagieren Sie so schnell wie möglich</u> und machen Sie dabei so wenig Fehler wie möglich.<br/><br/></p>'+
				'<p align="center" style="font-family:arial">Drücken Sie die <b>Leertaste</b>, um zu beginnen.</font></p></div>',
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
               '<span style="font-family:arial">Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen. Berühren Sie die andere Seite. <u>Reagieren Sie so schnell wie möglich</u> und machen Sie dabei so wenig Fehler wie möglich.<br/></span>',
                  '</p>',
                  '<p align="center" style="font-family:arial">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
               '</div>'
            ].join('\n'),

instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Platzieren Sie Ihren linken Finger auf der Taste <b>E</b> für Items, die zur Kategorie <font color="#336600">leftCategory</font> gehören. ' +
				'<br/>Platzieren Sie Ihren rechten Finger auf der Taste <b>I</b> für Items, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>' +
				'Items erscheinen nacheinander.<br/><br/>' +
				'<span style="font-family:arial">Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>\. </span>' +
				'<span style="font-family:arial">Drücken Sie die andere Taste, um fortzufahren\.<br/></span>' +
				'<u>Reagieren Sie so schnell wie möglich</u> und seien Sie dabei präzise.<br/><br/></p>'+
				'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind, zu beginnen.</font></p></div>',
instCategoriesPracticeTouch: [
				'<div>',
					'<p align="center">',
						'<u>Teil blockNum von nBlocks</u>',
					'</p>',
					'<p align="left" style="margin-left:5px">',
						'<br/>',
						'Bewegen Sie Ihren Finger über den <b>linken</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">leftCategory</font> gehören.<br/>',
						'Bewegen Sie Ihren Finger über den <b>rechten</b> grünen Bereich für Items, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>',
						'Items erscheinen nacheinander.<br/>',
						'<br/>',
						'<span style="font-family:arial">Ein rotes <font color="#ff0000"><b>X</b></font> erscheint, wenn Sie einen Fehler machen. Berühren Sie die andere Seite. <u>Reagieren Sie so schnell wie möglich</u> und machen Sie dabei so wenig Fehler wie möglich.<br/></span>',
					'</p>',
					'<p align="center" style="font-family:arial">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
				'</div>'
			].join('\n'),

instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Benutzen Sie die Taste <b>E</b> für die Kategorie <font color="#336600">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Benutzen Sie die Taste <b>I</b> für die Kategorie <font color="#336600">rightCategory</font> und für  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Jedes Item gehört nur zu einer Kategorie.<br/><br/>' +
				'<span style="font-family:arial">Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>\. </span>' +
				'<span style="font-family:arial">Drücken Sie die andere Taste, um fortzufahren\.<br/></span>' + 
				'<u>Reagieren Sie so schnell wie möglich</u> und seien Sie dabei präzise.<br/><br/></p>' +
				'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind, zu beginnen.</font></p></div>',
instFirstCombinedTouch:[
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
					'<p align="center" style="font-family:arial">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
				'</div>'
			].join('\n'),

instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Dieser Teil gleicht dem Vorherigen.<br/>' +
				'Benutzen Sie die Taste <b>E</b> für die Kategorie <font color="#336600">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Benutzen Sie die Taste <b>I</b> für die Kategorie <font color="#336600">rightCategory</font> und für  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Jedes Item gehört nur zu einer Kategorie.<br/><br/>' +
				'<u>Reagieren Sie so schnell wie möglich</u> und seien Sie dabei präzise.<br/><br/></p>' +
				'<p align="center" style="font-family:arial">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind, zu beginnen.</font></p></div>',
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
				'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Achtung, die Bezeichnungen haben die Position gewechselt!</b><br/>' +
				'Platzieren Sie Ihren linken Finger auf der Taste <b>E</b> für die Kategorie <font color="#336600">leftCategory</font>.<br/>' +
				'Platzieren Sie Ihren rechten Finger auf der Taste <b>I</b> für die Kategorie <font color="#336600">rightCategory</font>.<br/><br/>' +
				'<u>Reagieren Sie so schnell wie möglich</u> und seien Sie dabei präzise.<br/><br/></p>' +
				'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind, zu beginnen.</font></p></div>',
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
					'<p align="center" style="font-family:arial">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
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
fb_strong_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine starke automatische Vorliebe für categoryB gegenüber categoryA hin.',
fb_moderate_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine moderate automatische Vorliebe für categoryB gegenüber categoryA hin.',
fb_slight_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine leichte automatische Vorliebe für categoryB gegenüber categoryA hin.',
fb_equal_CatAvsCatB : 'Ihre Antworten deuten auf keine automatische Vorliebe zwischen categoryA und categoryB hin.',

//Fehlermeldungen im Feedback
manyErrors: 'Es wurden zu viele Fehler gemacht, um ein Ergebnis festzustellen.',
tooFast: 'Es gab zu viele schnelle Durchgänge, um ein Ergebnis festzustellen.',
notEnough: 'Es gab nicht genügend Durchgänge, um ein Ergebnis festzustellen.'
      });
   });