import { set } from 'vue'

export const state = () => ({
  activities: [{
    activityId: 1,
    challenges: [{
      challengeId: 1,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          ca: 'Quin Parc Nacional va visitar el director?',
          de: 'Welchen Nationalpark hat der Direktor besucht?',
          en: 'Which National Park did the director visit?',
          es: '¿Qué Parque Nacional visitó el director?',
          eu: 'Zer Parke Nazional bisitatu du zuzendaria?',
          fr: 'Quel parc national le directeur a-t-il visité?',
          gl: '¿Qué Parque Nacional visitou o director?',
          it: 'Quale Parco Nazionale ha visitato il direttore?',
          ru: 'Какой национальный парк посетил директор?'
        }
      }, {
        type: 'yrn-image',
        imageAlt: {
          ca: 'Memoji del director de l\'IES El Galeón, mostrant un mapa de les Illes Canàries amb els Parcs Nacionals.',
          de: 'Memoji des Direktors des IES El Galeón zeigt eine Karte der Kanarischen Inseln mit den Nationalparks.',
          en: 'Memoji of the director of IES El Galeón, showing a map of the Canary Islands with the National Parks.',
          es: 'Memoji del director del IES El Galeón, mostrando un mapa de las Islas Canarias con los Parques Nacionales.',
          eu: 'IES El Galeón ikasketetako zuzendaria, Kanari uharteetako mapa bat erakusten, Nazioarteko Parkak barne.',
          fr: 'Memoji du directeur de l\'IES El Galeón, montrant une carte des îles Canaries avec les parcs nationaux.',
          gl: 'Memoji do director do IES El Galeón, mostrando un mapa das Illas Canarias cos Parques Nacionais.',
          it: 'Memoji del direttore dell\'IES El Galeón, che mostra una mappa delle Isole Canarie con i Parchi Nazionali.',
          ru: 'Memoji директора IES El Galeón, показывающий карту Канарских островов с национальными парками.'
        },
        imageSrc: '/img/actividad-1/reto-1/imagen-de-cabecera.png',
        linkTitle: {
          ca: 'Fes clic per ampliar el mapa.',
          de: 'Klicken Sie hier, um die Karte zu vergrößern.',
          en: 'Click to enlarge the map.',
          es: 'Haz clic para ampliar el mapa.',
          eu: 'Egin klik hemen maparen tamaina handitzeko.',
          fr: 'Cliquez pour agrandir la carte.',
          gl: 'Fai clic para ampliar o mapa.',
          it: 'Clicca per ingrandire la mappa.',
          ru: 'Нажмите, чтобы увеличить карту.'
        },
        linkUrl: 'https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/files/formidable/ENP-Canarias.pdf'
      }, {
        type: 'yrn-alert-text',
        paragraphs: {
          ca: [
            'Durant el cap de setmana, el nostre director ha visitat un dels Parcs Nacionals de les nostres illes.',
            'Seran capaços d\'esbrinar quin?'
          ],
          de: [
            'Während des Wochenendes hat unser Direktor einen der Nationalparks unserer Inseln besucht.',
            'Werden sie herausfinden können, welcher?'
          ],
          en: [
            'During the weekend, our director visited one of the National Parks of our islands.',
            'Will they be able to figure out which one?'
          ],
          es: [
            'Durante el fin de semana, nuestro director ha visitado uno de los Parques Nacionales de nuestras islas.',
            '¿Serán capaces de averiguar cuál?'
          ],
          eu: [
            'Asteburuan, gure zuzendaria gure uharteetako Nazioarteko Parketako bat bisitatu du.',
            'Zer atera dezakete?'
          ],
          fr: [
            'Pendant le week-end, notre directeur a visité l\'un des parcs nationaux de nos îles.',
            'Pourront-ils découvrir lequel?'
          ],
          gl: [
            'Durante o fin de semana, o noso director visitou un dos Parques Nacionais das nosas illas.',
            'Serán quen de descubrir cal?'
          ],
          it: [
            'Durante il fine settimana, il nostro direttore ha visitato uno dei Parchi Nazionali delle nostre isole.',
            'Riusciranno a capire quale?'
          ],
          ru: [
            'В выходные наш директор посетил один из национальных парков наших островов.',
            'Смогут ли они выяснить, который?'
          ]
        }
      }, {
        type: 'yrn-exercise',
        class: 'yrn-math-problem',
        exerciseId: 1
      }, {
        type: 'yrn-exercise-solution-otp',
        exerciseId: 1
      }],
      exercises: [{
        exerciseId: 1,
        routerRedirection: {
          activityId: 1,
          challengeId: 2
        },
        solution: {
          statement: {
            es: 'Escriban aquí la clave secreta usando las soluciones de las ecuaciones:',
            ca: 'Escriviu ací la clau secreta usant les solucions de les equacions:',
            en: 'Write the secret key here using the solutions of the equations:',
            de: 'Schreiben Sie hier den geheimen Schlüssel unter Verwendung der Lösungen der Gleichungen:',
            ru: 'Напишите сюда секретный ключ, используя решения уравнений:',
            fr: 'Écrivez ici la clé secrète en utilisant les solutions des équations:',
            it: 'Scrivi qui la chiave segreta usando le soluzioni delle equazioni:',
            eu: 'Idatzi hemen sekretu gakoa ekuazioen soluzioak erabiliz:',
            gl: 'Escriba aquí la clave secreta usando as solucións das ecuacións:'
          },
          expected: '1044-271/3222-420-1',
          expectedMask: 'aabcddefffghhiijkll',
          fromUser: ''
        },
        statement: {
          es: 'Resuelvan las siguientes ecuaciones de primer grado para encontrar la clave secreta que necesitan para descubrir la primera pista:',
          ca: 'Resolgueu les següents equacions de primer grau per trobar la clau secreta que necessiteu per descobrir la primera pista:',
          en: 'Solve the following first-degree equations to find the secret key you need to discover the first clue:',
          de: 'Lösen Sie die folgenden Gleichungen ersten Grades, um den geheimen Schlüssel zu finden, den Sie benötigen, um den ersten Hinweis zu entdecken:',
          ru: 'Решите следующие уравнения первой степени, чтобы найти секретный ключ, который вам нужен для обнаружения первой подсказки:',
          fr: 'Résolvez les équations du premier degré suivantes pour trouver la clé secrète dont vous avez besoin pour découvrir la première indice:',
          it: 'Risolvete le seguenti equazioni di primo grado per trovare la chiave segreta necessaria per scoprire la prima traccia:',
          eu: 'Zuzendu azpiko lehen graduaren ekuazioak, sekretu gakoa aurkitu ahal izateko lehenengo pistaren pista:',
          gl: 'Resolva as seguintes ecuacións de primeiro grao para atopar a chave secreta que necesitan para descubrir a primeira pista:'
        },
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'b',
          statement: '7 = x + 3',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'c',
          statement: '8x – 5x = x + 8',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'd',
          statement: '3x = 9x + 12',
          solution: {
            expected: -2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'e',
          statement: '3x + 6 = 2x + 13',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'f',
          statement: '5x – 7 = 2 – 4x',
          solution: {
            expected: '1/3',
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'g',
          statement: '5x – 8 + 2x = 7 + 4x – 9',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'h',
          statement: '3x + x + 4 = 2x + 30',
          solution: {
            expected: 22,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'i',
          statement: '4x + 7 – x = 5 + 2x',
          solution: {
            expected: -4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'j',
          statement: '4 – 2x + 13 = 10 – 9x + 7',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'k',
          statement: '7x – 10 + x – 2 = 6x – 3 + 3x – 1',
          solution: {
            expected: 0,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'l',
          statement: '5x – 7 + 2x = 3x – 3 + 4x – 5 + x',
          solution: {
            expected: -1,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }, {
      challengeId: 2,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          ca: 'Veient la imatge, ja sabeu quin Parc Nacional va visitar el director?',
          de: 'Beim Anblick des Bildes, wisst ihr schon, welchen Nationalpark der Direktor besucht hat?',
          en: 'Looking at the image, do you already know which National Park the director visited?',
          es: 'Viendo la imagen, ¿ya saben qué Parque Nacional visitó el director?',
          eu: 'Irudia ikustean, jadanik badakizu zuzendariak zein Parke Nazional bisitatu duen?',
          fr: 'En regardant l\'image, savez-vous déjà quel parc national le directeur a visité?',
          gl: 'Ao ver a imaxe, xa sabes que Parque Nacional visitou o director?',
          it: 'Guardando l\'immagine, già sai quale Parco Nazionale ha visitato il direttore?',
          ru: 'Глядя на изображение, вы уже знаете, какой национальный парк посетил директор?'
        }
      }, {
        type: 'yrn-image-simple',
        alt: {
          ca: 'Imatge del Parc Natural que va visitar el director.',
          de: 'Bild des Naturparks, den der Direktor besucht hat.',
          en: 'Image of the Natural Park that the director visited.',
          es: 'Imagen del Parque Natural que visitó el director.',
          eu: 'Zuzendariak bisitatu zuen Natural Parkea irudia.',
          fr: 'Image du parc naturel que le directeur a visité.',
          gl: 'Imaxe do Parque Natural que o director visitou.',
          it: 'Immagine del Parco Naturale che il direttore ha visitato.',
          ru: 'Изображение природного парка, который посетил директор.'
        },
        src: '/img/actividad-1/reto-2/imagen-de-cabecera.png'
      }, {
        type: 'yrn-exercise-solution-otp',
        exerciseId: 1
      }, {
        type: 'yrn-exercise-solution-fill-text-gaps',
        exerciseId: 2
      }, {
        type: 'yrn-exercise',
        class: 'yrn-math-problem',
        exerciseId: 2
      }],
      exercises: [{
        exerciseId: 1,
        solution: {
          statement: {
            ca: 'Escriviu ací la resposta:',
            de: 'Schreiben Sie hier die Antwort:',
            en: 'Write the answer here:',
            es: 'Escriban aquí la respuesta:',
            eu: 'Idatzi hemen erantzuna:',
            fr: 'Écrivez la réponse ici :',
            gl: 'Escribe aquí a resposta:',
            it: 'Scrivi la risposta qui:',
            ru: 'Напишите ответ здесь:'
          },
          expected: 'El Teide',
          fromUser: ''
        }
      }, {
        exerciseId: 2,
        routerRedirection: {
          activityId: 1,
          challengeId: 3
        },
        solution: {
          statement: {
            ca: 'Al nostre director li costa recordar números enters però, estranyament, li resulta molt fàcil recordar equacions. Ha memoritzat les següents equacions de primer grau, resolgueu-les i es revelarán les dades en blanc del següent text:',
            de: 'Unser Direktor hat Schwierigkeiten, sich an ganze Zahlen zu erinnern, aber seltsamerweise fällt es ihm sehr leicht, Gleichungen zu merken. Er hat die folgenden Gleichungen ersten Grades auswendig gelernt, löst sie und die Daten im nächsten Text werden sichtbar:',
            en: 'Our director has trouble remembering whole numbers, but strangely, he finds it very easy to remember equations. He has memorized the following first-degree equations, solve them, and the blank data in the next text will be revealed:',
            es: 'A nuestro director le cuesta recordar números enteros, pero extrañamente, le resulta muy fácil recordar ecuaciones. Ha memorizado las siguientes ecuaciones de primer grado, resuélvanlas y se revelarán los datos en blanco del siguiente texto:',
            eu: 'Gure zuzendariak zenbaki osoak gogoratzeak zailtasuna du, baina ohiz, ekuazioak gogoratzea oso erraza zaio. Azken mailako ekuazio hauek memoriatu ditu, beren konplexutasuna ulertzeko, eta hurrengo testuaren hutsuneak agerikoak izango dira:',
            fr: 'Notre directeur a du mal à se souvenir des nombres entiers, mais étrangement, il trouve très facile de se souvenir des équations. Il a mémorisé les équations du premier degré suivantes, résolvez-les et les données en blanc du texte suivant seront révélées :',
            gl: 'O noso director ten dificultades para lembrar números enteiros, pero curiosamente, resultálle moi fácil lembrar ecuacións. Memorizou as seguintes ecuacións de primeiro grao, resólveas e revelaranse os datos en branco do seguinte texto:',
            it: 'Il nostro direttore ha difficoltà a ricordare i numeri interi, ma stranamente trova molto facile ricordare le equazioni. Ha memorizzato le seguenti equazioni di primo grado, risolvetle e i dati vuoti nel testo successivo saranno rivelati:',
            ru: 'Нашему директору трудно запоминать целые числа, но странно, что ему очень легко запомнить уравнения. Он выучил следующие уравнения первой степени, решите и оголтелые данные в следующем тексте будут раскрываться:'
          },
          textToFillGaps: {
            // eslint-disable-next-line no-template-curly-in-string
            es: 'Este Parque Nacional, situado en la isla de Tenerife, fue el primero reconocido del Archipiélago Canario, en el año ${{ a }}${{ b }}${{ c }}${{ d }} y está presidido por El Teide (${{ e }}${{ f }}${{ a }}${{ g }} metros), el pico más alto de España. Con numerosas especies endémicas y una extensión de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectáreas, es, a día de hoy, el Parque Nacional más visitado de Canarias, de España y de Europa ya que alberga uno de los más impresionantes espectáculos geológicos del mundo por la dificultad de encontrar en un espacio tan reducido, un conjunto de estas características.',
            // eslint-disable-next-line no-template-curly-in-string
            ca: 'Aquest Parc Nacional, situat a l\'illa de Tenerife, va ser el primer reconegut de l\'Arxipèlag Canari, l\'any ${{ a }}${{ b }}${{ c }}${{ d }} i està presidit pel Teide (${{ e }}${{ f }}${{ a }}${{ g }} metres), el pic més alt d\'Espanya. Amb nombroses espècies endèmiques i una extensió de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectàrees, és, a dia d\'avui, el Parc Nacional més visitat de Canàries, d\'Espanya i d\'Europa ja que alberga un dels més impresionants espectacles geològics del món per la dificultat de trobar en un espai tan reduït un conjunt d\'aquestes característiques.',
            // eslint-disable-next-line no-template-curly-in-string
            de: 'Dieser Nationalpark, der sich auf der Insel Teneriffa befindet, wurde im Jahr ${{ a }}${{ b }}${{ c }}${{ d }} als erster auf den Kanarischen Inseln anerkannt und wird vom Teide ({{ e }}${{ f }}${{ a }}${{ g }} Meter), dem höchsten Gipfel Spaniens, präsidiert. Mit zahlreichen endemischen Arten und einer Ausdehnung von ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} Hektar ist er heute der meistbesuchte Nationalpark der Kanaren, Spaniens und Europas, da er eine der beeindruckendsten geologischen Shows der Welt beherbergt, aufgrund der Schwierigkeit, in einem so begrenzten Raum eine solche Vielfalt zu finden.',
            // eslint-disable-next-line no-template-curly-in-string
            en: 'This National Park, located on the island of Tenerife, was the first recognized in the Canary Archipelago, in the year ${{ a }}${{ b }}${{ c }}${{ d }} and is presided over by El Teide (${{ e }}${{ f }}${{ a }}${{ g }} meters), the highest peak in Spain. With numerous endemic species and an extension of ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectares, it is, to this day, the most visited National Park in the Canary Islands, Spain, and Europe as it hosts one of the most impressive geological spectacles in the world, due to the difficulty of finding in such a reduced space, a set of these characteristics.',
            // eslint-disable-next-line no-template-curly-in-string
            eu: 'Tenerife uhartean kokatutako Parke Nazional hau, Kanariar Arxipelagoan lehenengo agertu zen, ${{ a }}${{ b }}${{ c }}${{ d }} urtean, eta El Teidek (${{ e }}${{ f }}${{ a }}${{ g }} metro) zuzendua du. Espainiako mendi altuena da. Espezie endemiko ugarirekin eta ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hektareko zabalerarekin, gaur egun Kanarietako, Espainiako eta Europako Parke Nazionalik bisitatuenetarikoa da, munduko geologia ikusgarrienetakoenetako bat ospatzen baitu, espazio hain estu batean, ezaugarrien talde bat aurkitzearen zailtasunagatik.',
            // eslint-disable-next-line no-template-curly-in-string
            fr: 'Ce parc national, situé sur l\'île de Tenerife, a été le premier reconnu de l\'archipel des Canaries, en ${{ a }}${{ b }}${{ c }}${{ d }} et est présidé par El Teide ({{ e }}${{ f }}${{ a }}${{ g }} mètres), le plus haut sommet d\'Espagne. Avec de nombreuses espèces endémiques et une superficie de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectares, c\'est, à ce jour, le parc national le plus visité des îles Canaries, d\'Espagne et d\'Europe, car il abrite l\'un des spectacles géologiques les plus impressionnants du monde en raison de la difficulté de trouver dans un espace aussi réduit, un ensemble de ces caractéristiques.',
            // eslint-disable-next-line no-template-curly-in-string
            gl: 'Este Parque Nacional, situado na illa de Tenerife, foi o primeiro recoñecido do Arquipélago Canario, no ano ${{ a }}${{ b }}${{ c }}${{ d }} e está presidido polo Teide (${{ e }}${{ f }}${{ a }}${{ g }} metros), o pico máis alto de España. Con numerosas especies endémicas e unha extensión de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectáreas, é, a día de hoxe, o Parque Nacional máis visitado das Canarias, de España e de Europa xa que alberga un dos máis impresionantes espectáculos xeolóxicos do mundo pola dificultade de atopar nun espazo tan reducido, un conxunto destas características.',
            // eslint-disable-next-line no-template-curly-in-string
            it: 'Questo Parco Nazionale, situato sull\'isola di Tenerife, è stato il primo riconosciuto nell\'Arcipelago delle Canarie, nell\'anno ${{ a }}${{ b }}${{ c }}${{ d }} ed è presieduto da El Teide ({{ e }}${{ f }}${{ a }}${{ g }} metri), la vetta più alta della Spagna. Con numerose specie endemiche e un\'estensione di ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} ettari, è, fino ad oggi, il Parco Nazionale più visitato delle Canarie, della Spagna e dell\'Europa in quanto ospita uno degli spettacoli geologici più impressionanti al mondo, data la difficoltà di trovare in uno spazio così ridotto, un insieme di queste caratteristiche.',
            // eslint-disable-next-line no-template-curly-in-string
            ru: 'Этот национальный парк, расположенный на острове Тенерифе, был первым, признанным на Канарских островах в ${{ a }}${{ b }}${{ c }}${{ d }} году, и возглавляется Эль Тейде ({{ e }}${{ f }}${{ a }}${{ g }} метров), самой высокой вершиной Испании. С многочисленными эндемичными видами и площадью ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} гектаров, это, до сих пор, самый посещаемый национальный парк Канарских островов, Испании и Европы, поскольку здесь находится одно из самых впечатляющих геологических зрелищ в мире, из-за сложности найти в таком ограниченном пространстве набор этих характеристик.'
          },
          expected: [{ a: '1' }, { b: '9' }, { c: '5' }, { d: '4' }, { e: '3' }, { f: '7' }, { g: '8'}],
          fromUser: []
        },
        statement: {
          ca: 'Resolgueu les següents equacions de primer grau per descobrir les dades més rellevants del Parc Natural que va visitar.',
          de: 'Lösen Sie die folgenden Gleichungen ersten Grades, um die relevantesten Daten des Naturparks zu entdecken, den er besucht hat.',
          en: 'Solve the following first-degree equations to discover the most relevant data from the Natural Park he visited.',
          es: 'Resuelvan las siguientes ecuaciones de primer grado para descubrir los datos más relevantes del Parque Natural que visitó.',
          eu: 'Lehen graduaren ekuazioak konpontzi, zuzeneko gakoa aurkitzeko behar duzun sekretuak aurkitu behar duzu.',
          fr: 'Résolvez les équations du premier degré suivantes pour découvrir les données les plus pertinentes du parc naturel qu\'il a visité.',
          gl: 'Resolve as seguintes ecuacións de primeiro grao para atopar os datos máis relevantes do Parque Natural que visitou.',
          it: 'Risolvere le seguenti equazioni di primo grado per scoprire i dati più rilevanti del Parco Naturale che ha visitato.',
          ru: 'Решите следующие уравнения первой степени, чтобы открыть наиболее актуальные данные из природного парка, который он посетил.'
        },
        sections: [{
          sectionId: 'a',
          statement: 'x + 2 = 3',
          solution: {
            expected: 1,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'b',
          statement: '27 = 3x',
          solution: {
            expected: 9,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'c',
          statement: '6x − 3 = 4x + 7',
          solution: {
            expected: 5,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'd',
          statement: '2x + 9 = 3x + 5',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'e',
          statement: '7 − 2x + 5 − 3x = −3',
          solution: {
            expected: 3,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'f',
          statement: '4x + 7 = 35',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'g',
          statement: '-3 − x = −2x + 5',
          solution: {
            expected: 8,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }
      ]
    }]
  }, {
    activityId: 2,
    challenges: [{
      challengeId: 1,
      exercises: [{
        exerciseId: 1,
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }]
  }, {
    activityId: 3,
    challenges: [{
      challengeId: 1,
      exercises: [{
        exerciseId: 1,
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }]
  }],
  backgroundImage: '/img/background.png',
  indexPage: {
    author: 'Yurena Cabrera Hernández',
    image: {
      imageAlt: {
        es: 'Memoji de Yurena.',
        ca: 'Memoji de Yurena.',
        en: 'Yurena\'s Memoji.',
        de: 'Yurenas Memoji.',
        ru: 'Мемоджи Юрены.',
        fr: 'Memoji de Yurena.',
        it: 'Memoji di Yurena.',
        eu: 'Yurena-ren Memoji-a.',
        gl: 'Memoji de Yurena.'
      },
      imageSrc: '/img/index/profe-yure.png'
    },
    password: {
      statement: {
        es: 'Para empezar, introduce el código secreto que te proporcionará tu profesor:',
        ca: 'Per començar, introdueix el codi secret que et proporcionarà el teu professor:',
        en: 'To begin, enter the secret code provided by your teacher:',
        de: 'Um zu beginnen, geben Sie den geheimen Code ein, den Ihnen Ihr Lehrer gegeben hat:',
        ru: 'Для начала введите секретный код, который предоставит вам ваш учитель:',
        fr: 'Pour commencer, entrez le code secret fourni par votre professeur:',
        it: 'Per iniziare, inserisci il codice segreto fornito dal tuo insegnante:',
        eu: 'Hasi hasteko, sartu zure irakasleak emandako kode sekretua:',
        gl: 'Para comezar, introduce o código secreto que che proporcionará o teu profesor:'
      },
      expected: '141592',
      fromUser: ''
    },
    subtitle: {
      es: 'Flora + Fauna = Álgebra',
      ca: 'Flora + Fauna = Àlgebra',
      en: 'Flora + Fauna = Algebra',
      de: 'Flora + Fauna = Algebra',
      ru: 'Флора + Фауна = Алгебра',
      fr: 'Flore + Faune = Algèbre',
      it: 'Flora + Fauna = Algebra',
      eu: 'Landareak + Fauna = Álgebra',
      gl: 'Flora + Fauna = Álxebra'
    },
    title: {
      es: 'Situación de aprendizaje',
      ca: 'Situació d\'aprenentatge',
      en: 'Learning Situation',
      de: 'Lernsituation',
      ru: 'Образовательная ситуация',
      fr: 'Situation d\'apprentissage',
      it: 'Situazione di apprendimento',
      eu: 'Ikasketa-egoera',
      gl: 'Situação de aprendizaxe'
    }
  },
  languages: [{
    code: 'es',
    flagCode: 'es',
    name: {
      es: 'Español',
      ca: 'Castellà',
      en: 'Spanish',
      de: 'Spanisch',
      ru: 'Испанский',
      fr: 'Espagnol',
      it: 'Spagnolo',
      eu: 'Espainiera',
      gl: 'Español'
    }
  }, {
    code: 'ca',
    flagCode: 'es-ca',
    name: {
      es: 'Catalán',
      ca: 'Català',
      en: 'Catalan',
      de: 'Katalanisch',
      ru: 'Каталанский',
      fr: 'Catalan',
      it: 'Catalano',
      eu: 'Katalana',
      gl: 'Catalán'
    }
  }, {
    code: 'en',
    flagCode: 'gb',
    name: {
      es: 'Inglés',
      ca: 'Anglés',
      en: 'English',
      de: 'Englisch',
      ru: 'Английский',
      fr: 'Anglais',
      it: 'Inglese',
      eu: 'Ingelesa',
      gl: 'Inglés'
    }
  }, {
    code: 'de',
    flagCode: 'de',
    name: {
      es: 'Alemán',
      ca: 'Alemany',
      en: 'German',
      de: 'Deutsch',
      ru: 'Немецкий',
      fr: 'Allemand',
      it: 'Tedesco',
      eu: 'Alemaniarra',
      gl: 'Alemán'
    }
  }, {
    code: 'fr',
    flagCode: 'fr',
    name: {
      es: 'Francés',
      ca: 'Francès',
      en: 'French',
      de: 'Französisch',
      ru: 'Французский',
      fr: 'Francese',
      it: 'Francese',
      eu: 'Frantsesa',
      gl: 'Francés'
    }
  }, {
    code: 'it',
    flagCode: 'it',
    name: {
      es: 'Italiano',
      ca: 'Italià',
      en: 'Italian',
      de: 'Italienisch',
      ru: 'Итальянский',
      fr: 'Italien',
      it: 'Italiano',
      eu: 'Italiera',
      gl: 'Italiano'
    }
  }, {
    code: 'ru',
    flagCode: 'ru',
    name: {
      es: 'Ruso',
      ca: 'Rus',
      en: 'Russian',
      de: 'Russisch',
      ru: 'Русский',
      fr: 'Russe',
      it: 'Russo',
      eu: 'Errusiera',
      gl: 'Ruso'
    }
  }, {
    code: 'eu',
    flagCode: 'es-eu',
    name: {
      es: 'Vasco',
      ca: 'Basc',
      en: 'Basque',
      de: 'Baskisch',
      ru: 'Баскский',
      fr: 'Basque',
      it: 'Basco',
      eu: 'Euskara',
      gl: 'Vasco'
    }
  }, {
    code: 'gl',
    flagCode: 'es-gl',
    name: {
      ca: 'Gallec',
      es: 'Gallego',
      en: 'Galician',
      de: 'Galizisch',
      ru: 'Галисийский',
      fr: 'Galicien',
      it: 'Galiziano',
      eu: 'Galiziarra',
      gl: 'Galego'
    }
  }]
})

export const mutations = {
  addOrUpdateSection(state, payload) {
    // eslint-disable-next-line eqeqeq
    const activityIndex = state.activities?.findIndex(a => a.activityId == payload.activityId)

    if (activityIndex !== -1) {
      // eslint-disable-next-line eqeqeq
      const challengeIndex = state.activities[activityIndex].challenges?.findIndex(ch => ch.challengeId == payload.challengeId)

      if (challengeIndex !== -1) {
        // eslint-disable-next-line eqeqeq
        const exerciseIndex = state.activities[activityIndex].challenges[challengeIndex].exercises?.findIndex(e => e.exerciseId == payload.exerciseId)

        if (exerciseIndex !== -1) {
          // eslint-disable-next-line eqeqeq
          const sectionIndex = state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections?.findIndex(s => s.sectionId == payload.section.sectionId)

          if (sectionIndex !== -1) {
            // Update section
            set(
              state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections,
              sectionIndex,
              payload.section
            )
          } else {
            // Add section
            state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections.push(payload.section)
          }
        }
      }
    }
  },
  setExerciseSolutionFromUser(state, { activityId, challengeId, exerciseId, solution }) {
    // eslint-disable-next-line eqeqeq
    const activity = state.activities.find((a) => a.activityId == activityId);

    if (activity) {
      // eslint-disable-next-line eqeqeq
      const challenge = activity.challenges.find((c) => c.challengeId == challengeId);

      if (challenge) {
        // eslint-disable-next-line eqeqeq
        const exercise = challenge.exercises.find((ex) => ex.exerciseId == exerciseId);

        if (exercise && exercise.solution) {
          set(exercise.solution, 'fromUser', solution)
        }
      }
    }
  },
  setPasswordFromUser(state, payload) {
    if (state.indexPage?.password) {
      set(state.indexPage.password, 'fromUser', payload)
    }
  }
}

export const getters = {
  getActivityIds(state) {
    const activityIds = []

    state.activities.forEach(activity => {
      activityIds.push(activity.activityId)
    })

    return activityIds
  },
  getChallenge: (state) => (activityId, challengeId) => {
    let challenge = null
    // eslint-disable-next-line eqeqeq
    const activity = state.activities.find((a) => a.activityId == activityId)

    if (activity) {
      challenge =  activity.challenges.find(
        // eslint-disable-next-line eqeqeq
        (ch) => ch.challengeId == challengeId
      ) ?? null

      if (!challenge) {
        // eslint-disable-next-line no-console
        console.error(`Challenge "${challengeId}" not found on Activity "${activityId}".`)
      }
    }

    return challenge
  },
  getExercise: (state, getters) => (activityId, challengeId, exerciseId) => {
    let exercise = null
    const challenge = getters.getChallenge(activityId, challengeId)

    if (challenge) {
      exercise = challenge.exercises?.find(
        // eslint-disable-next-line eqeqeq
        e => e.exerciseId == exerciseId
      ) ?? null

      if (!exercise) {
        // eslint-disable-next-line no-console
        console.error(`Exercise "${exerciseId}" not found on Activity "${activityId}"` +
        `, Challenge "${challengeId}".`)
      }
    }

    return exercise
  },
  getExerciseSectionsWellSolved: (state, getters) => (activityId, challengeId, exerciseId) => {
    const sections = getters.getExercise(activityId, challengeId, exerciseId)?.sections
    if (window?.Array?.isArray(sections)) {
      return sections.filter(section => {
        // eslint-disable-next-line eqeqeq
        return section.solution?.expected == section.solution?.fromUser
      })
    } else {
      return []
    }
  },
  getExerciseSection: (state, getters) => (activityId, challengeId, exerciseId, sectionId) => {
    let section = null
    const exercise = getters.getExercise(activityId, challengeId, exerciseId)

    if (exercise) {
      section = exercise.sections?.find(
        // eslint-disable-next-line eqeqeq
        s => s.sectionId == sectionId
      ) ?? null
    
      if (!section) {
        // eslint-disable-next-line no-console
        console.error(`Section "${sectionId}" not found on Activity "${activityId}"` +
        `, Challenge "${challengeId}", Exercise "${exerciseId}".`)
      }
    }

    return section
  }
}
