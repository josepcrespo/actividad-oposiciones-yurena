import { set } from 'vue'

export const state = () => ({
  activities: [{
    activityId: 1,
    challenges: [{
      challengeId: 1,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          ar: 'ما هو الحديقة الوطنية التي زارها المدير؟',
          ca: 'Quin Parc Nacional va visitar el director?',
          de: 'Welchen Nationalpark hat der Direktor besucht?',
          en: 'Which National Park did the director visit?',
          es: '¿Qué Parque Nacional visitó el director?',
          eu: 'Zer Parke Nazional bisitatu du zuzendaria?',
          fr: 'Quel parc national le directeur a-t-il visité?',
          gl: '¿Qué Parque Nacional visitou o director?',
          it: 'Quale Parco Nazionale ha visitato il direttore?',
          ja: 'ディレクターはどの国立公園を訪れましたか？',
          pt: 'Qual Parque Nacional o diretor visitou?',
          ro: 'Ce parc național a vizitat directorul?',
          ru: 'Какой национальный парк посетил директор?',
          zh: '主任访问了哪个国家公园？'
        }
      }, {
        type: 'yrn-image',
        imageAlt: {
          ar: 'Memoji لمدير IES El Galeón ، يظهر خريطة جزر الكناري مع الحدائق الوطنية',
          ca: 'Memoji del director de l\'IES El Galeón, mostrant un mapa de les Illes Canàries amb els Parcs Nacionals.',
          de: 'Memoji des Direktors des IES El Galeón zeigt eine Karte der Kanarischen Inseln mit den Nationalparks.',
          en: 'Memoji of the director of IES El Galeón, showing a map of the Canary Islands with the National Parks.',
          es: 'Memoji del director del IES El Galeón, mostrando un mapa de las Islas Canarias con los Parques Nacionales.',
          eu: 'IES El Galeón ikasketetako zuzendaria, Kanari uharteetako mapa bat erakusten, Nazioarteko Parkak barne.',
          fr: 'Memoji du directeur de l\'IES El Galeón, montrant une carte des îles Canaries avec les parcs nationaux.',
          gl: 'Memoji do director do IES El Galeón, mostrando un mapa das Illas Canarias cos Parques Nacionais.',
          it: 'Memoji del direttore dell\'IES El Galeón, che mostra una mappa delle Isole Canarie con i Parchi Nazionali.',
          ja: 'IES El GaleónのディレクターのMemoji、カナリア諸島の地図を表示して国立公園を示しています。',
          pt: 'Memoji do diretor do IES El Galeón, mostrando um mapa das Ilhas Canárias com os Parques Nacionais.',
          ro: 'Memoji al directorului IES El Galeón, arătând o hartă a Insulelor Canare cu Parcurile Naționale.',
          ru: 'Memoji директора IES El Galeón, показывающий карту Канарских островов с национальными парками.',
          zh: 'IES El Galeón的主任Memoji，展示了加那利群岛的地图，标有国家公园。'
        },
        imageSrc: '/img/actividad-1/reto-1/imagen-de-cabecera.png',
        linkTitle: {
          ar: 'انقر لتكبير الخريطة.',
          ca: 'Fes clic per ampliar el mapa.',
          de: 'Klicken Sie hier, um die Karte zu vergrößern.',
          en: 'Click to enlarge the map.',
          es: 'Haz clic para ampliar el mapa.',
          eu: 'Egin klik hemen maparen tamaina handitzeko.',
          fr: 'Cliquez pour agrandir la carte.',
          gl: 'Fai clic para ampliar o mapa.',
          it: 'Clicca per ingrandire la mappa.',
          ja: '地図を拡大するにはクリックしてください。',
          pt: 'Clique para ampliar o mapa.',
          ro: 'Faceți clic pentru a mări harta.',
          ru: 'Нажмите, чтобы увеличить карту.',
          zh: '点击以放大地图。'
        },
        linkUrl: 'https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/files/formidable/ENP-Canarias.pdf'
      }, {
        type: 'yrn-alert-text',
        paragraphs: {
          ar: [
            'خلال عطلة نهاية الأسبوع، زار مديرنا أحد الحدائق الوطنية في جزرنا.',
            'هل سيكونون قادرين على معرفة أي واحد؟'
          ],
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
          ja: [
            '週末には、当社のディレクターが島の国立公園の1つを訪れました。',
            '彼らはそれがどれかを見分けることができるでしょうか？'
          ],
          pt: [
            'Durante o fim de semana, nosso diretor visitou um dos Parques Nacionais de nossas ilhas.',
            'Eles serão capazes de descobrir qual?'
          ],
          ro: [
            'În timpul weekendului, directorul nostru a vizitat unul dintre Parcurile Naționale ale insulelor noastre.',
            'Vor reuși să afle care?'
          ],
          ru: [
            'В выходные наш директор посетил один из национальных парков наших островов.',
            'Смогут ли они выяснить, который?'
          ],
          zh: [
            '在周末，我们的主任参观了我们岛上的一个国家公园。',
            '他们能弄清楚是哪一个吗？'
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
            ar: ':الكتابة هنا مفتاح السر باستخدام حلول المعادلات',
            ca: 'Escriviu ací la clau secreta usant les solucions de les equacions:',
            de: 'Schreiben Sie hier den geheimen Schlüssel unter Verwendung der Lösungen der Gleichungen:',
            en: 'Write the secret key here using the solutions of the equations:',
            es: 'Escriban aquí la clave secreta usando las soluciones de las ecuaciones:',
            eu: 'Idatzi hemen sekretu gakoa ekuazioen soluzioak erabiliz:',
            fr: 'Écrivez ici la clé secrète en utilisant les solutions des équations:',
            gl: 'Escriba aquí la clave secreta usando as solucións das ecuacións:',
            it: 'Scrivi qui la chiave segreta usando le soluzioni delle equazioni:',
            ja: 'ここに方程式の解を使用して秘密鍵を書いてください:',
            pt: 'Escreva a chave secreta aqui usando as soluções das equações:',
            ro: 'Scrieți aici cheia secretă folosind soluțiile ecuațiilor:',
            ru: 'Напишите сюда секретный ключ, используя решения уравнений:',
            zh: '使用方程式的解在此处写入秘钥：'
          },
          expected: '1044-271/3222-420-1',
          expectedMask: 'aabcddefffghhiijkll',
          fromUser: ''
        },
        statement: {
          ar: ':حل المعادلات من الدرجة الأولى التالية للعثور على المفتاح السري الذي تحتاجونه لاكتشاف أول إشارة',
          ca: 'Resolgueu les següents equacions de primer grau per trobar la clau secreta que necessiteu per descobrir la primera pista:',
          de: 'Lösen Sie die folgenden Gleichungen ersten Grades, um den geheimen Schlüssel zu finden, den Sie benötigen, um den ersten Hinweis zu entdecken:',
          en: 'Solve the following first-degree equations to find the secret key you need to discover the first clue:',
          es: 'Resuelvan las siguientes ecuaciones de primer grado para encontrar la clave secreta que necesitan para descubrir la primera pista:',
          eu: 'Zuzendu azpiko lehen graduaren ekuazioak, sekretu gakoa aurkitu ahal izateko lehenengo pistaren pista:',
          fr: 'Résolvez les équations du premier degré suivantes pour trouver la clé secrète dont vous avez besoin pour découvrir la première indice:',
          gl: 'Resolva as seguintes ecuacións de primeiro grao para atopar a chave secreta que necesitan para descubrir a primeira pista:',
          it: 'Risolvete le seguenti equazioni di primo grado per trovare la chiave segreta necessaria per scoprire la prima traccia:',
          ja: '最初の手がかりを発見するために必要な秘密のキーを見つけるために、次の一次方程式を解いてください：',
          pt: 'Resolva as seguintes equações de primeiro grau para encontrar a chave secreta que você precisa para descobrir a primeira pista:',
          ro: 'Rezolvați următoarele ecuații de gradul întâi pentru a găsi cheia secretă de care aveți nevoie pentru a descoperi prima indiciu:',
          ru: 'Решите следующие уравнения первой степени, чтобы найти секретный ключ, который вам нужен для обнаружения первой подсказки:',
          zh: '解以下一次方程，找到您需要发现第一个线索的秘密密钥：'
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
          sectionId: 'c',
          statement: '8x – 5x = x + 8',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'd',
          statement: '3x = 9x + 12',
          solution: {
            expected: -2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'e',
          statement: '3x + 6 = 2x + 13',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'f',
          statement: '5x – 7 = 2 – 4x',
          solution: {
            expected: '1/3',
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'g',
          statement: '5x – 8 + 2x = 7 + 4x – 9',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'h',
          statement: '3x + x + 4 = 2x + 30',
          solution: {
            expected: 22,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'i',
          statement: '4x + 7 – x = 5 + 2x',
          solution: {
            expected: -4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'j',
          statement: '4 – 2x + 13 = 10 – 9x + 7',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'k',
          statement: '7x – 10 + x – 2 = 6x – 3 + 3x – 1',
          solution: {
            expected: 0,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
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
          ar: 'بالنظر إلى الصورة، هل تعرف بالفعل أي حديقة وطنية زارها المدير؟',
          ca: 'Veient la imatge, ja sabeu quin Parc Nacional va visitar el director?',
          de: 'Beim Anblick des Bildes, wisst ihr schon, welchen Nationalpark der Direktor besucht hat?',
          en: 'Looking at the image, do you already know which National Park the director visited?',
          es: 'Viendo la imagen, ¿ya saben qué Parque Nacional visitó el director?',
          eu: 'Irudia ikustean, jadanik badakizu zuzendariak zein Parke Nazional bisitatu duen?',
          fr: 'En regardant l\'image, savez-vous déjà quel parc national le directeur a visité?',
          gl: 'Ao ver a imaxe, xa sabes que Parque Nacional visitou o director?',
          it: 'Guardando l\'immagine, già sai quale Parco Nazionale ha visitato il direttore?',
          ja: '画像を見て、あなたはすでにディレクターが訪れた国立公園を知っていますか？',
          pt: 'Olhando para a imagem, já sabem qual Parque Nacional o diretor visitou?',
          ro: 'Privind imaginea, știți deja ce Parc Național a vizitat directorul?',
          ru: 'Глядя на изображение, вы уже знаете, какой национальный парк посетил директор?',
          zh: '看着这张图片，你们已经知道主任参观了哪个国家公园吗？'
        }
      }, {
        type: 'yrn-image-simple',
        alt: {
          // TODO: cambiar todas las traducciones: "Parque Natural", por "Parque Nacional".
          ar: '.صورة للحديقة الطبيعية التي زارها المخرج',
          ca: 'Imatge del Parc Natural que va visitar el director.',
          de: 'Bild des Naturparks, den der Direktor besucht hat.',
          en: 'Image of the Natural Park that the director visited.',
          es: 'Imagen del Parque Natural que visitó el director.',
          eu: 'Zuzendariak bisitatu zuen Natural Parkea irudia.',
          fr: 'Image du parc naturel que le directeur a visité.',
          gl: 'Imaxe do Parque Natural que o director visitou.',
          it: 'Immagine del Parco Naturale che il direttore ha visitato.',
          ja: 'ディレクターが訪れた自然公園の画像。',
          pt: 'Imagem do Parque Natural que o diretor visitou.',
          ro: 'Imaginea Parcului Natural pe care directorul l-a vizitat.',
          ru: 'Изображение природного парка, который посетил директор.',
          zh: '董事访问的自然公园的图像。'
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
            ar: ':اكتب الجواب هنا',
            ca: 'Escriviu ací la resposta:',
            de: 'Schreiben Sie hier die Antwort:',
            en: 'Write the answer here:',
            es: 'Escriban aquí la respuesta:',
            eu: 'Idatzi hemen erantzuna:',
            fr: 'Écrivez la réponse ici :',
            gl: 'Escribe aquí a resposta:',
            it: 'Scrivi la risposta qui:',
            ja: 'ここに回答を書いてください:',
            pt: 'Escreva a resposta aqui:',
            ro: 'Scrieți răspunsul aici:',
            ru: 'Напишите ответ здесь:',
            zh: '在这里写答案：'
          },
          expected: 'El Teide',
          fromUser: ''
        }
      }, {
        exerciseId: 2,
        solution: {
          statement: {
            ar: ':يواجه مديرنا صعوبة في تذكر الأعداد الصحيحة، ولكن الغريب أنه يجد أنه من السهل جدًا تذكر المعادلات. لقد حفظت معادلات الدرجة الأولى التالية، قم بحلها وستظهر البيانات الفارغة للنص التالي',
            ca: 'Al nostre director li costa recordar números enters però, estranyament, li resulta molt fàcil recordar equacions. Ha memoritzat les següents equacions de primer grau, resolgueu-les i es revelarán les dades en blanc del següent text:',
            de: 'Unser Direktor hat Schwierigkeiten, sich an ganze Zahlen zu erinnern, aber seltsamerweise fällt es ihm sehr leicht, Gleichungen zu merken. Er hat die folgenden Gleichungen ersten Grades auswendig gelernt, löst sie und die Daten im nächsten Text werden sichtbar:',
            en: 'Our director has trouble remembering whole numbers, but strangely, he finds it very easy to remember equations. He has memorized the following first-degree equations, solve them, and the blank data in the next text will be revealed:',
            es: 'A nuestro director le cuesta recordar números enteros, pero extrañamente, le resulta muy fácil recordar ecuaciones. Ha memorizado las siguientes ecuaciones de primer grado, resuélvanlas y se revelarán los datos en blanco del siguiente texto:',
            eu: 'Gure zuzendariak zenbaki osoak gogoratzeak zailtasuna du, baina ohiz, ekuazioak gogoratzea oso erraza zaio. Azken mailako ekuazio hauek memoriatu ditu, beren konplexutasuna ulertzeko, eta hurrengo testuaren hutsuneak agerikoak izango dira:',
            fr: 'Notre directeur a du mal à se souvenir des nombres entiers, mais étrangement, il trouve très facile de se souvenir des équations. Il a mémorisé les équations du premier degré suivantes, résolvez-les et les données en blanc du texte suivant seront révélées :',
            gl: 'O noso director ten dificultades para lembrar números enteiros, pero curiosamente, resultálle moi fácil lembrar ecuacións. Memorizou as seguintes ecuacións de primeiro grao, resólveas e revelaranse os datos en branco do seguinte texto:',
            it: 'Il nostro direttore ha difficoltà a ricordare i numeri interi, ma stranamente trova molto facile ricordare le equazioni. Ha memorizzato le seguenti equazioni di primo grado, risolvetle e i dati vuoti nel testo successivo saranno rivelati:',
            ja: 'この画像を見て、あなたはすでにディレクターがどの国立公園を訪れたかを知っていますか？',
            pt: 'Ao ver a imagem, você já sabe qual Parque Nacional o diretor visitou?',
            ro: 'Privind imaginea, știți deja ce Parc Național a vizitat directorul?',
            ru: 'Нашему директору трудно запоминать целые числа, но странно, что ему очень легко запомнить уравнения. Он выучил следующие уравнения первой степени, решите и оголтелые данные в следующем тексте будут раскрываться:',
            zh: '我们的主任很难记住整数，但奇怪的是，他发现记住方程式很容易。 你已经记住了下面的一次方程，求解它们，就会显示出下面文本的空白数据:'
          },
          textToFillGaps: {
            // eslint-disable-next-line no-template-curly-in-string
            ar: 'هذه الحديقة الوطنية، التي تقع في جزيرة تينيريفي، كانت أول حديقة معترف بها في أرخبيل الكناري، في العام ${{ a }}${{ b }}${{ c }}${{ d }} وتترأسها عبر تيد (${{ e }}${{ f }}${{ a }}${{ g }} متر)، وهي أعلى قمة في إسبانيا. مع العديد من الأنواع المستوطنة ومساحة ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} هكتار، أصبحت اليوم الحديقة الوطنية الأكثر زيارة في جزر الكناري وإسبانيا وأوروبا حيث أنها تضم ​​واحدة من أكثر المناظر الجيولوجية إثارة للإعجاب في العالم بسبب صعوبة العثور على مجموعة من هذه الخصائص في مثل هذه المساحة الصغيرة.',
            // eslint-disable-next-line no-template-curly-in-string
            ca: 'Aquest Parc Nacional, situat a l\'illa de Tenerife, va ser el primer reconegut de l\'Arxipèlag Canari, l\'any ${{ a }}${{ b }}${{ c }}${{ d }} i està presidit pel Teide (${{ e }}${{ f }}${{ a }}${{ g }} metres), el pic més alt d\'Espanya. Amb nombroses espècies endèmiques i una extensió de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectàrees, és, a dia d\'avui, el Parc Nacional més visitat de Canàries, d\'Espanya i d\'Europa ja que alberga un dels més impresionants espectacles geològics del món per la dificultat de trobar en un espai tan reduït un conjunt d\'aquestes característiques.',
            // eslint-disable-next-line no-template-curly-in-string
            de: 'Dieser Nationalpark, der sich auf der Insel Teneriffa befindet, wurde im Jahr ${{ a }}${{ b }}${{ c }}${{ d }} als erster auf den Kanarischen Inseln anerkannt und wird vom Teide ({{ e }}${{ f }}${{ a }}${{ g }} Meter), dem höchsten Gipfel Spaniens, präsidiert. Mit zahlreichen endemischen Arten und einer Ausdehnung von ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} Hektar ist er heute der meistbesuchte Nationalpark der Kanaren, Spaniens und Europas, da er eine der beeindruckendsten geologischen Shows der Welt beherbergt, aufgrund der Schwierigkeit, in einem so begrenzten Raum eine solche Vielfalt zu finden.',
            // eslint-disable-next-line no-template-curly-in-string
            en: 'This National Park, located on the island of Tenerife, was the first recognized in the Canary Archipelago, in the year ${{ a }}${{ b }}${{ c }}${{ d }} and is presided over by El Teide (${{ e }}${{ f }}${{ a }}${{ g }} meters), the highest peak in Spain. With numerous endemic species and an extension of ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectares, it is, to this day, the most visited National Park in the Canary Islands, Spain, and Europe as it hosts one of the most impressive geological spectacles in the world, due to the difficulty of finding in such a reduced space, a set of these characteristics.',
            // eslint-disable-next-line no-template-curly-in-string
            es: 'Este Parque Nacional, situado en la isla de Tenerife, fue el primer reconocido del Archipiélago Canario, en el año ${{ a }}${{ b }}${{ c }}${{ d }} y está presidido por el Teide (${{ e }}${{ f }}${{ a }}${{ g }} metros), el pico más alto de España. Con numerosas especies endémicas y una extensión de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectáreas, es, a día de hoy, el Parque Nacional más visitado de Canarias, España y Europa ya que alberga uno de los más impresionantes espectáculos geológicos del mundo por la dificultad de encontrar en un espacio tan reducido un conjunto de estas características.',
            // eslint-disable-next-line no-template-curly-in-string
            eu: 'Tenerife uhartean kokatutako Parke Nazional hau, Kanariar Arxipelagoan lehenengo agertu zen, ${{ a }}${{ b }}${{ c }}${{ d }} urtean, eta El Teidek (${{ e }}${{ f }}${{ a }}${{ g }} metro) zuzendua du. Espainiako mendi altuena da. Espezie endemiko ugarirekin eta ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hektareko zabalerarekin, gaur egun Kanarietako, Espainiako eta Europako Parke Nazionalik bisitatuenetarikoa da, munduko geologia ikusgarrienetakoenetako bat ospatzen baitu, espazio hain estu batean, ezaugarrien talde bat aurkitzearen zailtasunagatik.',
            // eslint-disable-next-line no-template-curly-in-string
            fr: 'Ce parc national, situé sur l\'île de Tenerife, a été le premier reconnu de l\'archipel des Canaries, en ${{ a }}${{ b }}${{ c }}${{ d }} et est présidé par El Teide ({{ e }}${{ f }}${{ a }}${{ g }} mètres), le plus haut sommet d\'Espagne. Avec de nombreuses espèces endémiques et une superficie de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectares, c\'est, à ce jour, le parc national le plus visité des îles Canaries, d\'Espagne et d\'Europe, car il abrite l\'un des spectacles géologiques les plus impressionnants du monde en raison de la difficulté de trouver dans un espace aussi réduit, un ensemble de ces caractéristiques.',
            // eslint-disable-next-line no-template-curly-in-string
            gl: 'Este Parque Nacional, situado na illa de Tenerife, foi o primeiro recoñecido do Arquipélago Canario, no ano ${{ a }}${{ b }}${{ c }}${{ d }} e está presidido polo Teide (${{ e }}${{ f }}${{ a }}${{ g }} metros), o pico máis alto de España. Con numerosas especies endémicas e unha extensión de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectáreas, é, a día de hoxe, o Parque Nacional máis visitado das Canarias, de España e de Europa xa que alberga un dos máis impresionantes espectáculos xeolóxicos do mundo pola dificultade de atopar nun espazo tan reducido, un conxunto destas características.',
            // eslint-disable-next-line no-template-curly-in-string
            it: 'Questo Parco Nazionale, situato sull\'isola di Tenerife, è stato il primo riconosciuto nell\'Arcipelago delle Canarie, nell\'anno ${{ a }}${{ b }}${{ c }}${{ d }} ed è presieduto da El Teide ({{ e }}${{ f }}${{ a }}${{ g }} metri), la vetta più alta della Spagna. Con numerose specie endemiche e un\'estensione di ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} ettari, è, fino ad oggi, il Parco Nazionale più visitato delle Canarie, della Spagna e dell\'Europa in quanto ospita uno degli spettacoli geologici più impressionanti al mondo, data la difficoltà di trovare in uno spazio così ridotto, un insieme di queste caratteristiche.',
            // eslint-disable-next-line no-template-curly-in-string
            ja: 'テネリフェ島にあるこの国立公園は、${{ a }}${{ b }}${{ c }}${{ d }} 年にカナリア諸島で最初に認定され、管理されています。スペイン最高峰のテイデ（${{ e }}${{ f }}${{ a }}${{ g }} メートル）を越えます。 数多くの固有種が生息し、${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} ヘクタールの面積を誇るこの公園は、現在国立公園となっています。このような小さな空間で一連の特徴を見つけるのは難しいため、世界で最も印象的な地質学的光景の 1 つがあるため、カナリア諸島、スペイン、ヨーロッパで最も多くの人が訪れます。',
            // eslint-disable-next-line no-template-curly-in-string
            pt: 'Este Parque Nacional, localizado na ilha de Tenerife, foi o primeiro reconhecido no Arquipélago das Canárias, no ano ${{ a }}${{ b }}${{ c }}${{ d }} e é presidido ao longo do Teide (${{ e }}${{ f }}${{ a }}${{ g }} metros), o pico mais alto da Espanha. Com inúmeras espécies endêmicas e uma área de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectares, é, hoje, o Parque Nacional mais visitado nas Ilhas Canárias, Espanha e Europa por albergar um dos espetáculos geológicos mais impressionantes do mundo pela dificuldade de encontrar um conjunto destas características num espaço tão pequeno.',
            // eslint-disable-next-line no-template-curly-in-string
            ro: 'Acest Parc Național, situat pe insula Tenerife, a fost primul recunoscut în Arhipelagul Canare, în anul ${{ a }}${{ b }}${{ c }}${{ d }} și este prezidat peste Teide (${{ e }}${{ f }}${{ a }}${{ g }} metri), cel mai înalt vârf din Spania. Cu numeroase specii endemice și o suprafață de ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} hectare, este, astăzi, Parcul Național cel mai vizitat în Insulele Canare, Spania și Europa deoarece găzduiește unul dintre cele mai impresionante spectacole geologice din lume din cauza dificultății de a găsi un set de aceste caracteristici într-un spațiu atât de mic.',
            // eslint-disable-next-line no-template-curly-in-string
            ru: 'Этот национальный парк, расположенный на острове Тенерифе, был первым, признанным на Канарских островах в ${{ a }}${{ b }}${{ c }}${{ d }} году, и возглавляется Эль Тейде ({{ e }}${{ f }}${{ a }}${{ g }} метров), самой высокой вершиной Испании. С многочисленными эндемичными видами и площадью ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} гектаров, это, до сих пор, самый посещаемый национальный парк Канарских островов, Испании и Европы, поскольку здесь находится одно из самых впечатляющих геологических зрелищ в мире, из-за сложности найти в таком ограниченном пространстве набор этих характеристик.',
            // eslint-disable-next-line no-template-curly-in-string
            zh: '该国家公园位于特内里费岛，是加那利群岛第一个国家公园，于 ${{ a }}${{ b }}${{ c }}${{ d }} 年获得认可，并由越过西班牙最高峰泰德峰（${{ e }}${{ f }}${{ a }}${{ g }} 米）。 这里拥有众多特有物种，面积 ${{ a }}${{ e }}${{ c }}${{ a }}${{ f }} 公顷，如今已成为国家公园加那利群岛、西班牙和欧洲参观人数最多，因为它拥有世界上最令人印象深刻的地质奇观之一，因为在如此小的空间内很难找到一组这些特征。'
          },
          expected: [{ a: '1' }, { b: '9' }, { c: '5' }, { d: '4' }, { e: '3' }, { f: '7' }, { g: '8' }],
          fromUser: []
        },
        statement: {
          ar: '.حل المعادلات من الدرجة الأولى التالية لاكتشاف البيانات الأكثر صلة من الحديقة الطبيعية التي زارها',
          ca: 'Resolgueu les següents equacions de primer grau per descobrir les dades més rellevants del Parc Natural que va visitar.',
          de: 'Lösen Sie die folgenden Gleichungen ersten Grades, um die relevantesten Daten des Naturparks zu entdecken, den er besucht hat.',
          en: 'Solve the following first-degree equations to discover the most relevant data from the Natural Park he visited.',
          es: 'Resuelvan las siguientes ecuaciones de primer grado para descubrir los datos más relevantes del Parque Natural que visitó.',
          eu: 'Lehen graduaren ekuazioak konpontzi, zuzeneko gakoa aurkitzeko behar duzun sekretuak aurkitu behar duzu.',
          fr: 'Résolvez les équations du premier degré suivantes pour découvrir les données les plus pertinentes du parc naturel qu\'il a visité.',
          gl: 'Resolve as seguintes ecuacións de primeiro grao para atopar os datos máis relevantes do Parque Natural que visitou.',
          it: 'Risolvere le seguenti equazioni di primo grado per scoprire i dati più rilevanti del Parco Naturale che ha visitato.',
          ru: 'Решите следующие уравнения первой степени, чтобы открыть наиболее актуальные данные из природного парка, который он посетил.',
          ja: '彼が訪れた自然公園から最も関連性のあるデータを発見するには、次の1次方程式を解いてください。',
          pt: 'Resolva as seguintes equações de primeiro grau para descobrir os dados mais relevantes do Parque Natural que ele visitou.',
          ro: 'Rezolvați următoarele ecuații de gradul întâi pentru a descoperi datele cele mai relevante din Parcul Natural pe care l-a vizitat.',
          zh: '解这些一次方程，以发现他参观的自然公园最相关的数据。'
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
    }, {
      challengeId: 3,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          en: 'Keep learning about the environment',
          es: 'Seguimos aprendiendo sobre el entorno',
          ar: 'نستمر في التعلم حول البيئة',
          eu: 'Ingurumenari buruz ikasten jarraitzen',
          ca: 'Continuem aprenent sobre l\'entorn',
          fr: 'Continuons à apprendre sur l\'environnement',
          gl: 'Seguimos aprendendo sobre o entorno',
          de: 'Weiter lernen über die Umgebung',
          it: 'Continua ad imparare sull\'ambiente',
          ja: '環境について学び続けます',
          pt: 'Continuar a aprender sobre o ambiente',
          ro: 'Continuăm să învățăm despre mediu',
          ru: 'Продолжаем учиться о среде',
          zh: '继续学习有关环境的知识'
        }
      }, {
        type: 'yrn-image-simple',
        alt: {
          ar: 'نظرة عامة على حديقة تيدي الوطنية',
          ca: 'Una panoràmica del Parc Nacional del Teide',
          de: 'Ein Überblick über den Nationalpark Teide',
          en: 'An Overview of Teide National Park',
          es: 'Una panorámica del Parque Nacional del Teide',
          eu: 'Teidego Parke Nazionalaren Panoramikoa',
          fr: 'Un aperçu du Parc national du Teide',
          gl: 'Unha panorámica do Parque Nacional do Teide',
          it: 'Una panoramica del Parco Nazionale del Teide',
          ja: 'テイデ国立公園の概要',
          pt: 'Uma visão geral do Parque Nacional do Teide',
          ro: 'Privire de ansamblu asupra Parcului Național Teide',
          ru: 'Обзор Национального парка Тейде',
          zh: '特纳德国家公园概览'
        },
        src: '/img/actividad-1/reto-3/imagen-de-cabecera.png',
        maxHeight: '480'
      }, {
        type: 'yrn-exercise',
        class: 'yrn-math-problem',
        exerciseId: 1,
        shuffled: true
      }, {
        type: 'yrn-custom-drag-and-drop-solution',
        exerciseId: 1
      }, {
        type: 'yrn-stack-of-cards',
        exerciseId: 1
      }],
      exercises: [{
        exerciseId: 1,
        solution: {
          statement: {
            ar: "سيقوم المدير بالتحقق مما إذا كانوا قد قاموا بمطابقة كل مصطلح مع صورته المقابلة بشكل جيد وسيخبرهم بمزيد من التفاصيل حول هذه الكائنات الحيوية والنباتات.",
            ca: "El Director comprovarà si han emparellat bé cada terme amb la imatge corresponent i els explicarà més sobre aquestes espècies animals i vegetals.",
            de: "Der Direktor wird überprüfen, ob sie jeden Begriff gut mit seinem entsprechenden Bild abgeglichen haben, und ihnen mehr über diese Tier- und Pflanzenarten erzählen.",
            en: "The Director will check if they have matched each term well with its corresponding image and will tell them more about these animal and plant species.",
            es: 'El Director comprobará si han emparejado bien cada término con su correspondiente imágen y les contará más acerca de estas especies animales y vegetales.',
            eu: "Zuzendaria egiaztatuko du ea ondo elkartu duten bakoitzeko terminoa bere irudiekin eta espezie animal eta landareei buruz gehiago kontatuko die.",
            fr: "Le Directeur vérifiera s'ils ont bien associé chaque terme à son image correspondante et leur en dira plus sur ces espèces animales et végétales.",
            gl: "O Director comprobará se emparellaron ben cada termo coa súa imaxe correspondente e lles contará máis sobre estas especies animais e vexetais.",
            it: "Il Direttore verificherà se hanno abbinato bene ogni termine con la sua immagine corrispondente e racconterà loro di più su queste specie animali e vegetali.",
            ja: "ディレクターは、各用語を対応する画像とよく一致させたかどうかを確認し、これらの動植物についてさらに詳しく語ります。",
            pt: "O Diretor verificará se eles combinaram bem cada termo com sua imagem correspondente e contará mais sobre essas espécies animais e vegetais.",
            ro: "Directorul va verifica dacă au potrivit bine fiecare termen cu imaginea sa corespunzătoare și le va spune mai multe despre aceste specii de animale și plante.",
            ru: "Директор проверит, правильно ли они соотнесли каждый термин с его соответствующим изображением, и расскажет им больше об этих видах животных и растений.",
            zh: "主管将检查他们是否将每个术语与其相应的图像匹配得很好，并将告诉他们更多关于这些动植物物种的信息。"
          },
          expected: 'groupByName',
          items: [
            {
              description: {
                ar: 'سبارتوسيتيسوس سوبرانوبيوس أو سيتيسوس سوبرانوبيوس هو نوع من الأزهار الواسعة الانتشار في جزر الكناري.',
                ca: 'Spartocytisus supranubius o Cytisus supranubius és una espècie de gessamí de flors blanques originària de les Illes Canàries, on és coneguda com a gessamí del Teide. Aquesta espècie creix en zones de muntanya elevada, com a Les Cañadas del Teide, a l\'illa de Tenerife i a les zones muntanyenques de La Palma.',
                de: 'Spartocytisus supranubius oder Cytisus supranubius ist eine Art von weit verbreiteten blühenden Ginsterpflanzen, die auf den Kanarischen Inseln heimisch ist.',
                en: 'Spartocytisus supranubius or Cytisus supranubius is a species of widely distributed white-flowered broom native to the Canary Islands, where it is known as retama del Teide. This species grows in high mountain areas, such as in Las Cañadas del Teide, on the island of Tenerife, and in the mountainous areas of La Palma.',
                es: 'Spartocytisus supranubius o Cytisus supranubius es una especie de retamas de flores blancas nativa de las Islas Canarias, donde es conocida como retama del Teide. Esta especie crece en zonas de alta montaña, como en Las Cañadas del Teide, en la isla de Tenerife y en las zonas montañosas de La Palma.​',
                eu: 'Spartocytisus supranubius edo Cytisus supranubius lore zuriak dituen ginsterren espezie bat da, Kanariar Uharteetako jatorria duena. Teideko retama bezala ere ezaguna da. Espezie hau mendian hazten da, Tenerife uharteko Las Cañadas eta La Palma mendiguneetan, besteak beste.',
                fr: 'Spartocytisus supranubius ou Cytisus supranubius est une espèce de genêt à fleurs blanches largement répandu originaire des îles Canaries, où il est connu sous le nom de retama del Teide. Cette espèce pousse dans les zones de haute montagne, comme dans Las Cañadas del Teide, sur l\'île de Tenerife, et dans les zones montagneuses de La Palma.',
                gl: 'Spartocytisus supranubius ou Cytisus supranubius é unha especie de toxo de flores brancas amplamente distribuída nas Illas Canarias, onde é coñecido como retama del Teide. Esta especie crece en zonas de alta montaña, como en Las Cañadas del Teide, na illa de Tenerife e nas zonas montañosas de La Palma.',
                it: 'Spartocytisus supranubius o Cytisus supranubius è una specie di ginestra a fiori bianchi ampiamente distribuita nelle Isole Canarie, dove è conosciuta come retama del Teide. Questa specie cresce in zone di alta montagna, come a Las Cañadas del Teide, nell\'isola di Tenerife e nelle zone montuose de La Palma.',
                ja: 'スパートサイトソス・スプラヌビウスまたはシチソス・スプラヌビウスは、広く分布する白い花のキンバエ科の植物の一種で、カナリア諸島原産で、テイデのレタマとして知られています。この種はラス・カニャーダス・デル・テイデなどの高山地帯に生育しています。',
                pt: 'Spartocytisus supranubius ou Cytisus supranubius é uma espécie de giesta de flores brancas amplamente distribuída nas Ilhas Canárias, onde é conhecida como retama del Teide. Esta espécie cresce em áreas de alta montanha, como em Las Cañadas del Teide, na ilha de Tenerife, e nas áreas montanhosas de La Palma.',
                ro: 'Spartocytisus supranubius sau Cytisus supranubius este o specie de tufiș cu flori albe larg distribuită, nativă din Insulele Canare, unde este cunoscut sub numele de retama del Teide. Această specie crește în zone de munte înalt, cum ar fi Las Cañadas del Teide, pe insula Tenerife, și în zonele montane ale La Palma.',
                ru: 'Spartocytisus supranubius или Cytisus supranubius - вид широко распространенного белоцветного ветреницы, родом из Канарских островов, где его знают как ретама дел Тейде. Этот вид растет в высокогорных районах, таких как Лас-Каньядас-дель-Тейде, на острове Тенерифе и в горных районах Ла-Пальма.',
                zh: 'Supranubius或Spartocytisus supranubius是一种白色花朵的广泛分布的金雀花属植物, 原产于加纳利群岛, 当地称为Teide del Retama。这种植物生长在高山地区, 例如在特纳里费岛的Las Cañadas del Teide以及La Palma的山区。'
              },
              id: '1',
              image: '/img/actividad-1/reto-3/1-retama.jpg',
              name: {
                ar: 'ريتاما ديل تيدي',
                ca: 'Retama del Teide',
                de: 'Retama vom Teide',
                en: 'Retama of Teide',
                es: 'Retama del Teide',
                eu: 'Teideko Retama',
                fr: 'Retama du Teide',
                gl: 'Retama do Teide',
                it: 'Retama del Teide',
                ja: 'テイデのレタマ',
                pt: 'Retama do Teide',
                ro: 'Retama din Teide',
                ru: 'Ретама дель Тейде',
                zh: '泰德的雷塔马'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Retama_del_Teide',
              scientificName: 'Spartocytisus supranubius'
            }, {
              description: {
                ar: 'الجناح من تايدي، Erysimum scoparium Wettst، هو نوع من النباتات العشبية يتبع عائلة الصليبيات. Scoparium: الاسم اللاتيني الذي يعني الفرشاة، أي بشكل فرشاة، مشيرًا إلى مظهر النبات.',
                ca: 'L\'alhelí del Teide, Erysimum scoparium Wettst, és una espècie de planta herbàcia de la família de les crucíferes. Scoparium: epítet llatí que significa escopari, és a dir, amb forma d\'escombra, fent al·lusió a l\'aparença de la planta.',
                de: 'Der Alpenveilchen vom Teide, Erysimum scoparium Wettst, ist eine Art krautige Pflanze aus der Familie der Kreuzblütengewächse. Scoparium: lateinischer Epitheton, der Besen bedeutet, also in Form eines Besens, was auf das Aussehen der Pflanze hinweist.',
                en: 'The wallflower of Teide, Erysimum scoparium Wettst, is a species of herbaceous plant in the crucifer family. Scoparium: Latin epithet meaning broom, i.e., with the appearance of a broom, referring to the plant\'s appearance.',
                es: 'El alhelí del Teide, Erysimum scoparium Wettst, es una especie de planta herbácea de la familia de las brasicáceas. Scoparium: epíteto latino que significa escopario, es decir, con forma de escoba, aludiendo a la apariencia de la planta.',
                eu: 'Teideko alhelí, Erysimum scoparium Wettst, landare herba-antzekoa da, brasicazeen familiaekoa. Scoparium: espeziearen itzulpen latinarrak eserleku edo irratia esan nahi du, hau da, irratuaren itxura, landarearen itxurara eramanez.',
                fr: 'La giroflée du Teide, Erysimum scoparium Wettst, est une espèce de plante herbacée de la famille des Brassicacées. Scoparium : épithète latin signifiant balai, c\'est-à-dire en forme de balai, faisant référence à l\'apparence de la plante.',
                gl: 'O alhelí do Teide, Erysimum scoparium Wettst, é unha especie de planta herbacea da familia das brasicáceas. Scoparium: epíteto latino que significa escopario, é dicir, con forma de escoba, facendo alusión á aparencia da planta.',
                it: 'Il viola del Teide, Erysimum scoparium Wettst, è una specie di pianta erbacea della famiglia delle Brassicaceae. Scoparium: epiteto latino che significa scopa, cioè a forma di scopa, facendo riferimento all\'aspetto della pianta.',
                ja: 'テイデのナズナ、Erysimum scoparium Wettst、はアブラナ科の草本植物の一種です。Scoparium: ラテン語のエピソードで、ほうきを意味し、つまりほうきのような形状を指しています。',
                pt: 'O alhelí do Teide, Erysimum scoparium Wettst, é uma espécie de planta herbácea da família das brassicáceas. Scoparium: epíteto latino que significa vassoura, ou seja, com a forma de uma vassoura, referindo-se à aparência da planta.',
                ro: 'Alhelí del Teide, Erysimum scoparium Wettst, este o specie de plantă erbacee din familia cruciferelor. Scoparium: epitet latin care înseamnă mătură, adică cu aspectul unei mături, referindu-se la aspectul plantei.',
                ru: 'Альпийская фиалка Тейде, Erysimum scoparium Wettst, - вид травянистого растения из семейства крестоцветных. Scoparium: латинский эпитет, означающий метла, то есть с видом метлы, указывающий на внешний вид растения.',
                zh: '泰德的紫罗兰, Erysimum scoparium Wettst, 是十字花科草本植物的一种。Scoparium: 拉丁语的描述意为扫帚, 即呈扫帚状, 指的是植物的外观。'
              },
              id: '2',
              image: '/img/actividad-1/reto-3/2-alheli.jpg',
              name: {
                ar: 'الجناح من تايدي',
                ca: 'Alhelí del Teide',
                de: 'Alpenveilchen vom Teide',
                en: 'Wallflower of Teide',
                es: 'Alhelí del Teide',
                eu: 'Teideko alhelí',
                fr: 'Giroflée du Teide',
                gl: 'Alhelí do Teide',
                it: 'Viola del Teide',
                ja: 'テイデのナズナ',
                pt: 'Alhelí do Teide',
                ro: 'Alhelí din Teide',
                ru: 'Мать-и-мачеха Тейде',
                zh: '泰德的石竹'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Alhel%C3%AD_de_cumbre',
              scientificName: 'Erysimum scoparium'
            }, {
              description: {
                ar: 'البابونج من تايدي (Argyranthemum tenerifae) هو شجيرة صغيرة ذات سيقان تصل إلى ارتفاع 50 سم ، متسلقة أو خشنة ، ذات شكل مدمج ، كروية ، ذات تفرع كثيف جدًا من القاعدة ، مما يمنحها مظهرًا وساديًا تقليديًا للشجيرات في المرتفعات الجبلية العالية التي تتحمل ظروفًا بيئية صعبة للغاية (تعرض لأشعة الشمس القوية ، انخفاض الرطوبة ، البرد ، الرياح القوية).',
                ca: 'La margarida del Teide (Argyranthemum tenerifae) és un petit arbust amb tiges de fins a 50 cm d\'alçada, glabres o aspres, de forma aixaparrada, globosa, molt ramificat des de la base, donant-li un aspecte coixí típic de la garriga de muntanya alta que ha de suportar unes condicions ambientals molt dures (forta insolació, baixa humitat, fred, forts vents).',
                de: 'Das Gänseblümchen vom Teide (Argyranthemum tenerifae) ist ein kleiner Strauch mit Stängeln von bis zu 50 cm Höhe, glatt oder rau, gedrungener, kugelförmiger Form, sehr verzweigt von der Basis, was ihm ein typisches kissenartiges Aussehen verleiht, das für die harten Umweltbedingungen (starke Sonneneinstrahlung, niedrige Luftfeuchtigkeit, Kälte, starke Winde) des Hochgebirgsschubs typisch ist.',
                en: 'The daisy of Teide (Argyranthemum tenerifae) is a small shrub with stems up to 50 cm tall, glabrous or scabrous, of squat, globular form, highly branched from the base, giving it a typical cushion-like appearance of the high mountain shrubland that has to endure very harsh environmental conditions (strong sunlight, low humidity, cold, strong winds).',
                es: 'La margarita del Teide (Argyranthemum tenerifae) es un pequeño arbusto con tallos de hasta 50 cm de altura, glabros o escabrosos, forma achaparrada, globosa, muy ramificado desde la base, dándole un aspecto almohadillado típico del matorral de alta montaña que tiene que soportar unas condiciones ambientales muy duras (fuerte insolación, baja humedad, frío, fuertes vientos).',
                eu: 'Teideko marigorria (Argyranthemum tenerifae) landare txiki bat da, zurtoinak 50 cm arteko altuera izan dezakete, ilegabeak edo zimurtsuak, forma zapaldua, esferikoa, oso adartua oinarritik, eta hainbat baldintza ondorioztatu behar ditu (eguzki bortitza, hezetasun baxua, hotza, haize indartsuak).',
                fr: 'La marguerite du Teide (Argyranthemum tenerifae) est un petit arbuste avec des tiges atteignant 50 cm de hauteur, glabres ou scabres, de forme trapue, globulaire, très ramifié depuis la base, lui donnant un aspect coussin typique de la lande de montagne élevée qui doit supporter des conditions environnementales très difficiles (forte exposition au soleil, faible humidité, froid, vents forts).',
                gl: 'A margarida do Teide (Argyranthemum tenerifae) é un pequeno arbusto con talos de ata 50 cm de altura, glabros ou escabrosos, forma achaparrada, globosa, moi ramificado desde a base, dándolle un aspecto almofadillado típico da mancha de alta montaña que ten que soportar unhas condicións ambientais moi duras (forte insolación, baixa humidade, frío, fortes ventos).',
                it: 'La margherita del Teide (Argyranthemum tenerifae) è un piccolo arbusto con steli alti fino a 50 cm, glabri o scabri, di forma tozza, globulare, molto ramificato dalla base, conferendogli un aspetto a cuscino tipico della macchia di alta montagna che deve sopportare condizioni ambientali molto difficili (forte esposizione al sole, bassa umidità, freddo, venti forti).',
                ja: 'テイデのデイジー (Argyranthemum tenerifae) は、茎が最大50cmの小さな低木で、無毛またはざらつき、扁平で球状、ベースから強く分岐し、非常に厳しい環境条件 (強い日光、低湿度、寒さ、強風) に耐えなければならない高山灌木の典型的なクッションのような外観をしています。',
                pt: 'A margarida do Teide (Argyranthemum tenerifae) é um pequeno arbusto com hastes de até 50 cm de altura, glabras ou escabrosas, de forma compacta, globular, muito ramificada desde a base, conferindo-lhe uma aparência típica de almofada da mata de alta montanha que tem que suportar condições ambientais muito duras (sol forte, baixa umidade, frio, ventos fortes).',
                ro: 'Margarita del Teide (Argyranthemum tenerifae) este un arbust mic, cu tulpini de până la 50 cm înălțime, glabre sau aspre, de formă compactă, globuloasă, foarte ramificate de la bază, conferindu-i un aspect tipic de pernă al înălțimii montane înalte care trebuie să suporte condiții de mediu foarte dure (lumină puternică, umiditate scăzută, frig, vânturi puternice).',
                ru: 'Маргаритка Тейде (Argyranthemum tenerifae) - небольшой кустарник с стеблями до 50 см в высоту, гладкими или шершавыми, плотной, глобулярной формы, сильно разветвленный от основания, что придает ему типичный вид подушки высокогорного кустарника, который должен выдерживать очень жесткие природные условия (сильное солнечное излучение, низкая влажность, холод, сильные ветры).',
                zh: '泰德的雏菊 (Argyranthemum tenerifae) 是一种小灌木, 茎高达50厘米, 无毛或粗糙, 扁平而球状, 从基部分枝较多, 给人一种典型的高山灌木垫状的外观, 必须经受非常严酷的环境条件 (强烈的阳光、低湿度、寒冷、强风) 。',
              },
              id: '3',
              image: '/img/actividad-1/reto-3/3-margarita.jpg',
              name: {
                ar: 'مارغريتا ديل تيدي',
                ca: 'Margarita del Teide',
                de: 'Gänseblümchen vom Teide',
                en: 'Daisy of Teide',
                es: 'Margarita del Teide',
                eu: 'Teideko maragarita',
                fr: 'Marguerite du Teide',
                gl: 'Margarita do Teide',
                it: 'Margherita del Teide',
                ja: 'テイデのデイジー',
                pt: 'Margarita do Teide',
                ro: 'Margarita din Teide',
                ru: 'Маргарита Тейде',
                zh: '泰德的雏菊'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Margarita_del_Teide',
              scientificName: 'Argyranthemum sundingii'
            }, {
              description: {
                ar: 'البنفسج من تايدي (Viola cheiranthifolia) هو نوع محلي من جزيرة تينيريفي. إنها نبات عشبي دائم الخضرة ، ذو نمو مستديم أو ينمو إلى حد ما بارتفاع يتراوح بين 5-25 سم ، مزود بريزومات (ساق تحت الأرض) وتفرع وفير.',
                ca: 'La violeta del Teide (Viola cheiranthifolia) és una espècie endèmica de l\'illa de Tenerife. Es tracta d\'una planta herbàcia, perenne, de port rastrer o una mica erèctil de 5-25 centímetres d\'alçada, provista de rizomes (tall subterrani) i ramificació abundant.',
                de: 'Das Veilchen vom Teide (Viola cheiranthifolia) ist eine endemische Art der Insel Teneriffa. Es handelt sich um eine mehrjährige, immergrüne krautige Pflanze mit kriechendem oder etwas aufrechtem Wuchs von 5-25 Zentimetern Höhe, die mit Rhizomen (unterirdischem Stängel) und reichlich Verzweigungen ausgestattet ist.',
                en: 'The violet of Teide (Viola cheiranthifolia) is an endemic species of the island of Tenerife. It is a herbaceous, perennial plant, with a trailing or somewhat erect growth of 5-25 centimeters in height, equipped with rhizomes (underground stem) and abundant branching.',
                es: 'La violeta del Teide (Viola cheiranthifolia) es una especie endémica de la isla de Tenerife. Se trata de una planta herbácea, perenne, porte rastrero o algo erecta de entre 5-25 centímetros de alto, provista de rizomas (tallo subterráneo) y ramificación abundante.',
                eu: 'Teideko bioleta (Viola cheiranthifolia) Tenerife uhartearen endemikoa da. Landare belarkara da, betiko-a, lurrauki edo pixka bat zutitu, 5-25 zentimetroko altuera, errizoma (azpiko zurtoin) eta adar ugariarekin osatua.',
                fr: 'La violette du Teide (Viola cheiranthifolia) est une espèce endémique de l\'île de Tenerife. Il s\'agit d\'une plante herbacée, vivace, au port rampant ou légèrement dressé de 5-25 centimètres de hauteur, pourvue de rhizomes (tige souterraine) et de nombreuses ramifications.',
                gl: 'A violeta do Teide (Viola cheiranthifolia) é unha especie endémica da illa de Tenerife. É unha planta herba, perenne, con porto rasteiro ou algo erecto de entre 5-25 centímetros de alto, provista de rizomas (tallo subterráneo) e ramificación abundante.',
                it: 'La violetta del Teide (Viola cheiranthifolia) è una specie endemica dell\'isola di Tenerife. Si tratta di una pianta erbacea perenne, con portamento strisciante o leggermente eretto di 5-25 centimetri di altezza, dotata di rizomi (stelo sotterraneo) e abbondante ramificazione.',
                ja: 'テイデのバイオレット (Viola cheiranthifolia) はテネリフェ島固有の種です。これは草本であり、つる性またはやや直立した成長で、高さ5〜25センチメートルの根茎 (地下茎) と豊富な枝分かれがあります。',
                pt: 'A violeta do Teide (Viola cheiranthifolia) é uma espécie endêmica da ilha de Tenerife. É uma planta herbácea, perene, com crescimento rasteiro ou um pouco ereto de 5-25 centímetros de altura, equipada com rizomas (caule subterrâneo) e ramificação abundante.',
                ro: 'Violeta del Teide (Viola cheiranthifolia) este o specie endemică a insulei Tenerife. Este o plantă erbacee, perenă, cu creștere taratoare sau ușor erectă, având 5-25 de centimetri înălțime, echipată cu rizomi (tulpină subterană) și ramificare bogată.',
                ru: 'Фиалка Тейде (Viola cheiranthifolia) - эндемичный вид острова Тенерифе. Это травянистое многолетнее растение, с повисающим или слегка прямым ростом от 5 до 25 сантиметров в высоту, с корневищами (подземным стеблем) и обильными ответвлениями.',
                zh: '泰德的紫罗兰 (Viola cheiranthifolia) 是特纳里费岛的一种特有物种。这是一种草本, 多年生植物, 高5-25厘米, 茎蔓生或略显直立, 配有根茎 (地下茎) 和丰富的分枝。'
              },
              id: '4',
              image: '/img/actividad-1/reto-3/4-violeta.jpg',
              name: {
                ar: 'فيوليتا ديل تيدي',
                ca: 'Violeta del Teide',
                de: 'Veilchen vom Teide',
                en: 'Violet of Teide',
                es: 'Violeta del Teide',
                eu: 'Teideko bioleta',
                fr: 'Violette du Teide',
                gl: 'Violeta do Teide',
                it: 'Viola del Teide',
                ja: 'テイデのバイオレット',
                pt: 'Violeta do Teide',
                ro: 'Violeta din Teide',
                ru: 'Фиалка Тейде',
                zh: '泰德的紫罗兰'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Violeta_del_Teide',
              scientificName: 'Viola cheiranthifolia'
            }, {
              description: {
                ar: 'التاخيناستي روخو ديل تيدي، المعروف أيضًا باسم دم التيدي، هو أحد النباتات الأصلية في جزر الكناري، وتحديدًا في جزيرة تينيريفي. إنه شجيرة تطور روزيتا من أوراق كثيفة جدًا، ذات شكل رمحي، حيث تكون الأوراق السفلية أطول من تلك العلوية، بألوان فضية. تتميز الزهور بلونها الأحمر اللون اللحمي، وتترتب بشكل مدبب.',
                ca: 'El tajinaste roig, també conegut com la sang del Teide, és un endemisme de les Illes Canàries, concretament de l\'illa de Tenerife. Es tracta d\'un arbust que desenvolupa una roseta de fulles molt densa, amb forma de llança, amb les de la base més llargues que les superiors, de tons platejats. Les flors són de color vermell coral, motiu del seu nom, i es disposen de forma punxeguda.',
                de: 'Die rote Tajinaste, auch als Blut des Teide bekannt, ist eine endemische Pflanze der Kanarischen Inseln, insbesondere der Insel Teneriffa. Es handelt sich um einen Strauch, der eine sehr dichte Rosette von Blättern entwickelt, die lanzenförmig sind, wobei die unteren Blätter länger sind als die oberen, in silbernen Tönen. Die Blüten sind korallenrot, daher der Name, und sind spitz angeordnet.',
                en: 'The red Tajinaste, also known as Teide\'s blood, is an endemic plant of the Canary Islands, specifically of the island of Tenerife. It is a shrub that develops a very dense rosette of leaves, shaped like a spear, with the lower ones longer than the upper ones, in silver tones. The flowers are coral red, hence the name, and are arranged in a pointed manner.',
                es: 'El tajinaste rojo, también conocido como sangre del Teide, es un endemismo de las Islas Canarias, en concreto de la isla de Tenerife. Se trata de un arbusto que desarrolla una roseta de hojas muy densa, con forma de lanza, más largas las de la base que las superiores, de tonos plateados. Las flores son de color rojo coral, motivo de su nombre, y se disponen de forma puntiaguda.',
                eu: 'Gorri tajinastea, Teidego odola ere ezaguna, Kanariar Uharteetako endemismoa da, zehazki Tenerife uhartea. Landare hau hosto oso trinkoak garatzen ditu, gila formakoak, oinarrian daudenak baino luzeagoak, tonu zilindro artean. Loreak gorri koral kolorekoak dira, izenaren arrazoi, eta punta-formakoak daude.',
                fr: 'Le tajinaste rouge, également connu sous le nom de sang du Teide, est une plante endémique des îles Canaries, plus précisément de l\'île de Tenerife. C\'est un arbuste qui développe une rosette de feuilles très dense, en forme de lance, les inférieures étant plus longues que les supérieures, aux tons argentés. Les fleurs sont rouge corail, d\'où le nom, et sont disposées de manière pointue.',
                gl: 'O tajinaste vermello, tamén coñecido como sangue do Teide, é un endemismo das Illas Canarias, concretamente da illa de Tenerife. Trátase dun arbusto que desenvolve unha roseta de follas moi densa, con forma de lanza, máis longas as da base ca as superiores, de tons prateados. As flores son de cor vermello coral, motivo do seu nome, e dispoñense de forma puntiaguda.',
                it: 'Il Tajinaste rosso, noto anche come sangue del Teide, è una pianta endemica delle Isole Canarie, in particolare dell\'isola di Tenerife. È un arbusto che sviluppa una rosetta di foglie molto densa, a forma di lancia, con le foglie inferiori più lunghe di quelle superiori, nei toni argentati. I fiori sono di colore rosso corallo, da cui il nome, e sono disposti in modo appuntito.',
                ja: '赤いタヒナステ、またの名をテイデの血とも呼ばれる、カナリア諸島固有種で、特にテネリフェ島に分布します。この植物は非常に密集した葉のロゼットを形成し、槍のような形状で、下の葉は上の葉よりも長く、銀色の色合いがあります。花はコーラルレッドで、その名の通り、尖った形状で配置されています。',
                pt: 'O tajinaste vermelho, também conhecido como sangue do Teide, é uma planta endêmica das Ilhas Canárias, especificamente da ilha de Tenerife. É um arbusto que desenvolve uma roseta de folhas muito densa, em forma de lança, com as inferiores mais longas do que as superiores, em tons prateados. As flores são vermelho coral, daí o nome, e estão dispostas de forma pontiaguda.',
                ro: 'Tajinastele roșu, cunoscut și sub numele de sângele Teide, este o plantă endemică a Insulelor Canare, în special a insulei Tenerife. Este un arbust care dezvoltă o rozetă foarte densă de frunze, în formă de lance, cu cele inferioare mai lungi decât cele superioare, în nuanțe argintii. Florile sunt de culoare roșu coral, de unde și numele, și sunt dispuse în mod ascuțit.',
                ru: 'Красный Тахинасте, также известный как кровь Тейде, является эндемичным растением Канарских островов, в частности острова Тенерифе. Это кустарник, который развивает очень плотный розеточный лист, напоминающий лопату, с нижними листьями длиннее верхних, в серебристых тонах. Цветы красные, коралловые, отсюда и название, и они расположены острием.',
                zh: '红色的塔希纳斯特, 又被称为泰德的血液, 是加那利群岛的一种特有植物, 特别是特内里费岛。这是一种灌木, 形成了非常密集的叶芽, 形状像矛, 下部叶片比上部叶片长, 呈银色调。花朵呈珊瑚红色, 因此得名, 呈尖形排列。'
              },
              id: '5',
              image: '/img/actividad-1/reto-3/5-tajinaste.jpg',
              name: {
                ar: 'تاخيناستي روخو ديل تيدي',
                ca: 'Tajinaste Roig del Teide',
                de: 'Roter Tajinaste vom Teide',
                en: 'Red Tajinaste of Teide',
                es: 'Tajinaste Rojo del Teide',
                eu: 'Teideko Tajinaste Gorria',
                fr: 'Tajinaste Rouge du Teide',
                gl: 'Tajinaste Vermello do Teide',
                it: 'Tajinaste Rosso del Teide',
                ja: 'テイデの赤いタヒナステ',
                pt: 'Tajinaste Vermelho do Teide',
                ro: 'Tajinaste Roșu din Teide',
                ru: 'Красный Тахинасте Тейде',
                zh: '泰德的红色塔希纳斯特'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Tajinaste_rojo',
              scientificName: 'Echium wildpretii'
            }, {
              description: {
                ar: 'تعرف النحلة الكانارية السوداء بهذا الاسم بفضل مظهرها المظلم المميز. وهي موجودة في جزر الكناري منذ حوالي 200،000 عام ، وقد حققت مستوى استيعاب مذهل للبيئة ، وذلك جنبًا إلى جنب مع عدم العدوانية ، مما أدى إلى درجات عالية من الإنتاجية في إقليم محدود مثل جزر الكناري.',
                ca: 'L\'abella negra canària és com es coneix a aquesta raça pel seu característic aspecte fosc. Està present a les Illes Canàries des de fa uns 200.000 anys i ha assolit un nivell d\'adaptació extraordinari al medi que, juntament amb l\'absència d\'agressivitat, ha donat lloc a alts graus de productivitat en un territori limitat com el de les Illes.',
                de: 'Die kanarische schwarze Biene ist so bekannt wegen ihres charakteristischen dunklen Aussehens. Sie ist seit etwa 200.000 Jahren auf den Kanarischen Inseln vorhanden und hat ein außergewöhnliches Maß an Anpassung an die Umgebung erreicht, was zusammen mit der Abwesenheit von Aggressivität zu hohen Produktivitätsgraden in einem begrenzten Gebiet wie den Inseln geführt hat.',
                en: 'The Canary black bee is known by this name due to its characteristic dark appearance. It has been present in the Canary Islands for about 200,000 years and has achieved an extraordinary level of adaptation to the environment, which, together with the absence of aggressiveness, has led to high degrees of productivity in a limited territory such as the Islands.',
                es: 'La abeja negra canaria es como se conoce a esta raza por su característico aspecto oscuro. Está presente en las Islas Canarias desde hace unos 200.000 años y ha logrado un nivel de adaptación al medio extraordinario que, junto con la ausencia de agresividad, ha dado lugar a altos grados de productividad en un territorio limitado como el de las Islas.',
                eu: 'Kanariar apez-beroa horiaren itxuraz iluna dela dela ezagutzen da. Kanariar Uharteetan 200.000 urte inguruan dago eta ingurunean egokitzeko maila aparta lortu du, jazoera gabeko jokaera batekin batera, uharteak bezain territorio mugatuan produktibitate gradurik handienetara eraman duena.',
                fr: 'L\'abeille noire des Canaries est ainsi nommée en raison de son aspect sombre caractéristique. Présente aux îles Canaries depuis environ 200 000 ans, elle a atteint un niveau d\'adaptation extraordinaire à l\'environnement, ce qui, associé à l\'absence d\'agressivité, a conduit à des degrés élevés de productivité dans un territoire limité comme celui des îles.',
                gl: 'A abella negra canaria é como se coñece a esta raza polo seu característico aspecto escuro. Está presente nas Illas Canarias dende hai uns 200.000 anos e alcanzou un nivel de adaptación ao medio extraordinario que, xunto coa ausencia de agresividade, deu lugar a altos graos de produtividade nun territorio limitado como o das Illas.',
                it: 'L\'ape nera delle Canarie è conosciuta con questo nome a causa del suo caratteristico aspetto scuro. È presente nelle Isole Canarie da circa 200.000 anni e ha raggiunto un livello straordinario di adattamento all\'ambiente, che, insieme all\'assenza di aggressività, ha portato a elevati gradi di produttività in un territorio limitato come le Isole.',
                ja: 'カナリアブラックビーは、その特徴的な暗い外観からこの名前で知られています。約20万年前からカナリア諸島に存在し、環境への適応能力が非常に高く、攻撃性がないことから、島などの限られた地域で高い生産性を実現しています。',
                pt: 'A abelha negra das Canárias é conhecida por este nome devido à sua característica aparência escura. Está presente nas Ilhas Canárias há cerca de 200.000 anos e alcançou um nível extraordinário de adaptação ao ambiente, o que, juntamente com a ausência de agressividade, levou a altos graus de produtividade num território limitado como o das Ilhas.',
                ro: 'Albina neagră canariană este cunoscută astfel datorită aspectului său întunecat caracteristic. Este prezentă în Insulele Canare de aproximativ 200.000 de ani și a atins un nivel extraordinar de adaptare la mediu, ceea ce, împreună cu absența agresivității, a condus la grade înalte de productivitate într-un teritoriu limitat, cum ar fi al insulelor.',
                ru: 'Канарская чёрная пчела известна под этим именем из-за своего характерного тёмного вида. Присутствует на Канарских островах около 200 000 лет и достигла выдающегося уровня адаптации к окружающей среде, что, вместе с отсутствием агрессивности, привело к высоким уровням продуктивности в ограниченной территории, такой как острова.',
                zh: '加那利黑蜜蜂之所以被称为如此, 是因为其特有的深色外观。它已经存在于加那利群岛约20万年, 已经在环境中取得了非凡的适应水平, 再加上缺乏攻击性, 这导致在有限的领土中 (如岛屿) 获得了高度的生产力。'
              },
              id: '6',
              image: '/img/actividad-1/reto-3/6-abeja.jpg',
              name: {
                ar: 'نحلة سوداء',
                ca: 'Abella negra',
                de: 'Schwarze Biene',
                en: 'Black Bee',
                es: 'Abeja negra',
                eu: 'Erle',
                fr: 'Abeille noire',
                gl: 'Abella negra',
                it: 'Ape nera',
                ja: '黒い蜂',
                pt: 'Abelha negra',
                ro: 'Albină neagră',
                ru: 'Черная пчела',
                zh: '黑蜜蜂'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Abeja_negra',
              scientificName: 'Apis mellifera'
            }, {
              description: {
                ar: 'الديرمابتيرا ، المعروفة باسم المشذبات ، هي حشرات تتميز بوجود أذرع بشكل ملقاط أو مقص ، مما أدى إلى تسميتها الشائعة. في جزر الكناري ، هناك 16 نوعًا محليًا توزعت على 3 أجناس: Canarilabis و Guanchia و Anatelia. Canarilabis máxima ، المعروفة باسم المشذبة العملاقة الكنارية ، هي واحدة من هذه الانحدارات وموجودة في جزر غران كاناريا وتينيريف وإل هيرو.',
                ca: 'Els dermàpters, coneguts com a tijeretes, són uns insectes que es caracteritzen per tenir cers amb forma de pinces o tisores, la qual cosa ha donat origen al nom comú. A les Canàries, hi ha 16 espècies endèmiques que es distribueixen en 3 gèneres: Canarilabis, Guanchia i Anatelia. Canarilabis máxima, coneguda com a tijereta canària gegant, és una d\'aquestes endemismes i està present a les illes de Gran Canària, Tenerife i El Hierro.',
                de: 'Dermapteren, bekannt als Ohrwürmer, sind Insekten, die sich durch Cerci in Form von Zangen oder Scheren auszeichnen, was zu ihrem gebräuchlichen Namen geführt hat. Auf den Kanarischen Inseln gibt es 16 endemische Arten, die sich auf 3 Gattungen verteilen: Canarilabis, Guanchia und Anatelia. Canarilabis máxima, auch bekannt als riesiger kanarischer Ohrwurm, ist eines dieser Endemiten und ist auf den Inseln Gran Canaria, Teneriffa und El Hierro präsent.',
                en: 'Dermatoptera, known as earwigs, are insects characterized by cerci in the form of pincers or scissors, which has given rise to the common name. In the Canary Islands, there are 16 endemic species distributed in 3 genera: Canarilabis, Guanchia, and Anatelia. Canarilabis máxima, known as the giant Canary earwig, is one of these endemics and is present on the islands of Gran Canaria, Tenerife, and El Hierro.',
                es: 'Los dermápteros, conocidos como tijeretas, son unos insectos que se caracterizan por tener cercos con forma de pinzas o tijeras, lo que ha dado origen al nombre común. En Canarias, existen 16 especies endémicas que se distribuyen en 3 géneros: Canarilabis, Guanchia y Anatelia. Canarilabis máxima, cuyo nombre común es tijereta canaria gigante, es uno de estos endemismos y está presente en las islas de Gran Canaria, Tenerife, y El Hierro.',
                eu: 'Dermaptera bezala ezagutzen diren tijeretak, makil edo xizpetan forma duten hiruza dute, horrek izen arrunt bat hartu du. Kanarian, 16 espezie endemiko daude 3 generoetan banatuta: Canarilabis, Guanchia eta Anatelia. Canarilabis máxima, tijereta kanariar erraldoi bezala ezagutua, horietako batenetik dago eta Gran Canaria, Tenerife eta El Hierro uharteetan dago.',
                fr: 'Les dermatoptères, connus sous le nom de perce-oreilles, sont des insectes caractérisés par des cerques en forme de pinces ou de ciseaux, ce qui a donné lieu au nom commun. Aux îles Canaries, il existe 16 espèces endémiques réparties en 3 genres: Canarilabis, Guanchia et Anatelia. Canarilabis máxima, connue sous le nom de perce-oreille géant des Canaries, est l\'un de ces endémismes et est présente sur les îles de Grande Canarie, de Tenerife et d\'El Hierro.',
                gl: 'Os dermápteros, coñecidos como tesoiras, son insectos que se caracterizan por ter cérceos con forma de pinzas ou tesoiras, o que deu lugar ao nome común. Nas Canarias, hai 16 especies endémicas distribuídas en 3 xéneros: Canarilabis, Guanchia e Anatelia. Canarilabis máxima, coñecida como tesoura canaria xigante, é unha destas endemismos e está presente nas illas de Gran Canaria, Tenerife e El Hierro.',
                it: 'I dermatotteri, noti come forbicine, sono insetti caratterizzati da cerci a forma di pinze o forbici, il che ha dato origine al nome comune. Nelle isole Canarie, ci sono 16 specie endemiche distribuite in 3 generi: Canarilabis, Guanchia e Anatelia. Canarilabis máxima, conosciuta come forbicina gigante delle Canarie, è una di queste endemie ed è presente nelle isole di Gran Canaria, Tenerife ed El Hierro.',
                ja: 'デルマプテラ、別名ヤヨトリムシ、はハサミやハサミの形をした尾節を特徴とする昆虫で、これが一般名の由来です。カナリア諸島には、Canarilabis、Guanchia、Anateliaの3つの属に分布する16の固有種があります。 Canarilabis máxima、通称ジャイアントカナリアイヤーウィッグ、はこれらの固有種の1つで、グランカナリア島、テネリフェ島、エルヒエロ島に分布しています。',
                pt: 'Os dermápteros, conhecidos como tesourinhas, são insetos caracterizados por cercos em forma de pinças ou tesouras, o que deu origem ao nome comum. Nas Ilhas Canárias, existem 16 espécies endêmicas distribuídas em 3 gêneros: Canarilabis, Guanchia e Anatelia. Canarilabis máxima, conhecida como tesourinha gigante das Canárias, é uma dessas endemias e está presente nas ilhas de Gran Canaria, Tenerife e El Hierro.',
                ro: 'Dermatopterele, cunoscute sub numele de urechi, sunt insecte caracterizate de cerci în formă de clești sau foarfece, ceea ce a dat naștere numelui comun. În Insulele Canare există 16 specii endemice distribuite în 3 genuri: Canarilabis, Guanchia și Anatelia. Canarilabis máxima, cunoscută sub numele de urechea uriașă a Canarelor, este una dintre aceste endemisme și este prezentă pe insulele Gran Canaria, Tenerife și El Hierro.',
                ru: 'Дермаптеры, известные как ушки, представляют собой насекомых, характеризующихся cerci в виде клешней или ножниц, что дало им общее название. На Канарских островах существует 16 эндемичных видов, распределенных по 3 родам: Canarilabis, Guanchia и Anatelia. Canarilabis máxima, известная как гигантская канарская ушка, является одним из этих эндемизмов и присутствует на островах Гран-Канария, Тенерифе и Эль-Хьерро.',
                zh: '耳螽, 又称耳虫, 是一种以尾节呈钳子或剪刀形状为特征的昆虫, 这就是俗名的由来。在加那利群岛, 有16种分布在3个属中的特有物种：Canarilabis、Guanchia和Anatelia。 Canarilabis máxima, 被称为加那利群岛巨型耳虫, 是其中之一, 分布在大加那利岛、特内里费岛和埃尔希耶罗岛。'
              },
              id: '7',
              image: '/img/actividad-1/reto-3/7-tijereta.jpg',
              name: {
                ar: 'القرقف الوطني',
                ca: 'Tijereta endèmica',
                de: 'Endemische Ohrwurm',
                en: 'Endemic earwig',
                es: 'Tijereta endémica',
                eu: 'Aurrera joan',
                fr: 'Perce-oreille endémique',
                gl: 'Tixeireta endémica',
                it: 'Cimice endemica',
                ja: '固有の耳くそ虫',
                pt: 'Percevejo endêmico',
                ro: 'Viespe ureche endemica',
                ru: 'Эндемичная уховертка',
                zh: '地方性蠼螋'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Tijereta',
              scientificName: 'Labidura herculeana'
            }, {
              description: {
                ar: 'السحلية الغربية لجزر الكناري أو سحلية تيزون (Gallotia galloti) هي نوع من عائلة السحالي ، وهي منتشرة في جزر تينيريفي ولا بالما. تعتمد غذاؤها على النباتات والحشرات. تبدأ فترة التكاثر في الربيع ، ويظل الجنين داخل الأنثى لمدة شهر ، وبعد البيض - على الأرض - تستغرق الصغار شهرين إضافيين للفقس.',
                ca: 'El llagost tizon (Gallotia galloti), conegut com a llagost de Canàries occidental, és una espècie de la família Lacertidae, endèmica de les illes de Tenerife i La Palma. La seva alimentació es basa en plantes i insectes. L\'època reproductiva comença a la primavera, l\'embrió roman dins de la femella un mes i, després de la posta -a terra- les cries triguen dos mesos més a esclafar-se.',
                de: 'Die westliche Kanaren-Eidechse oder Rußkanareneidechse (Gallotia galloti) ist eine Art aus der Familie der Lacertidae, endemisch auf den Inseln Teneriffa und La Palma. Ihre Ernährung basiert auf Pflanzen und Insekten. Die Fortpflanzungszeit beginnt im Frühling, der Embryo verbleibt einen Monat lang in der Weibchen und nach dem Legen - auf dem Boden - dauert es zwei weitere Monate, bis die Jungen schlüpfen.',
                en: 'The western Canaries lizard or lizard tizón (Gallotia galloti) is a species of the Lacertidae family, endemic to the islands of Tenerife and La Palma. Its diet is based on plants and insects. The reproductive period begins in spring, the embryo remains inside the female for a month, and after laying - on land - the offspring takes two more months to hatch.',
                es: 'El lagarto de Canarias occidental o lagarto tizón (Gallotia galloti) es una especie de la familia Lacertidae, endémica de las islas de Tenerife y La Palma. Su alimentación se basa en plantas e insectos. La época reproductiva comienza en primavera, el embrión permanece dentro de la hembra un mes y, después de la puesta -en tierra- las crías tardan dos meses más en eclosionar.',
                eu: 'Kanariar mendebaldeko basamortua edo tizon izeneko sargoria (Gallotia galloti) Lacertidae familia batetik datorren espeziea da, Tenerife eta La Palma uharteetako endemikoa. Bere elikadura landareetan eta intsektuetan oinarritzen da. Hazkundeko denbora udaberrian hasten da, embrioa hembilen barruan hilabetera behera geratzen da, eta hondakinak utzi eta -lurretik- gazteek bi hilabete gehiago behar dituzte irautzeko.',
                fr: 'Le lézard des Canaries occidentales ou lézard tizón (Gallotia galloti) est une espèce de la famille des Lacertidae, endémique des îles de Tenerife et La Palma. Son alimentation est basée sur les plantes et les insectes. La période de reproduction commence au printemps, l\'embryon reste à l\'intérieur de la femelle pendant un mois et, après la ponte - sur terre - les petits mettent deux mois de plus pour éclore.',
                gl: 'A sargantana das Canarias occidentais ou sargantana tizón (Gallotia galloti) é unha especie da familia Lacertidae, endémica das illas de Tenerife e La Palma. A súa alimentación baséase en plantas e insectos. O período reprodutivo comeza na primavera, o embrión permanece dentro da femia durante un mes e, despois da posta -na terra-, os polos tardan dous meses máis en esnaquizar.',
                it: 'Il ramarro delle Canarie occidentali o ramarro tizón (Gallotia galloti) è una specie della famiglia Lacertidae, endemica delle isole di Tenerife e La Palma. La sua dieta si basa su piante e insetti. Il periodo riproduttivo inizia in primavera, l\'embrione rimane all\'interno della femmina per un mese e, dopo la deposizione - a terra - i piccoli impiegano altri due mesi per schiudersi.',
                ja: 'カナリア諸島の西部またはトカゲのtizón (Gallotia galloti) は、ラセルティダエ科の種であり、テネリフェ島とラパルマ島の島々に固有です。その食事は植物と昆虫に基づいています。繁殖期は春に始まり、胚は1か月間雌の内部に留まり、産卵の後 - 地上に - 幼虫は孵化するのにさらに2か月かかります。',
                pt: 'O lagarto das Canárias ocidentais ou lagarto tizón (Gallotia galloti) é uma espécie da família Lacertidae, endêmica das ilhas de Tenerife e La Palma. Sua alimentação é baseada em plantas e insetos. O período reprodutivo começa na primavera, o embrião permanece dentro da fêmea por um mês e, após a postura - em terra - os filhotes levam mais dois meses para eclodir.',
                ro: 'Șopârla din Canarele de vest sau șopârla tizón (Gallotia galloti) este o specie din familia Lacertidae, endemică insulelor Tenerife și La Palma. Dieta sa se bazează pe plante și insecte. Perioada de reproducere începe în primăvară, embrionul rămâne în interiorul femelei timp de o lună, iar după depunere - pe pământ - puii durează încă două luni să iasă din ou.',
                ru: 'Канарская ящерица или ящерица тизон (Gallotia galloti) - вид семейства ящериц, эндемичный для островов Тенерифе и Ла-Пальма. Её питание основано на растениях и насекомых. Период размножения начинается весной, эмбрион остается внутри самки месяц, и после откладывания - на земле - детёнышам требуется ещё два месяца для вылупления.',
                zh: '西加那利蜥蜴或蜥蜴tizón (Gallotia galloti) 是Lacertidae科的一种物种, 是特内里费岛和拉帕尔马岛的特有物种。其饮食以植物和昆虫为基础。繁殖期始于春季, 胚胎在雌性体内停留一个月, 在产卵后 - 在陆地上 - 幼崽需要再花两个月孵化。'
              },
              id: '8',
              image: '/img/actividad-1/reto-3/8-lagarto-tizon.jpg',
              name: {
                ar: 'سحلية تيزون',
                ca: 'Sargantana Tizón',
                de: 'Eidechse Tizon',
                en: 'Lizard Tizon',
                es: 'Lagarto Tizón',
                eu: 'Musker Tizon',
                fr: 'Lézard Tizon',
                gl: 'Lagarto Tizon',
                it: 'Lucertola Tizon',
                ja: 'トカゲ・ティゾン',
                pt: 'Lagarto Tizon',
                ro: 'Soparla Tizon',
                ru: 'Ящерица Тизон',
                zh: '蜥蜴蒂松'
              },
              link: 'https://www3.gobiernodecanarias.org/medusa/wiki/index.php?title=Lagarto_canario_moteado',
              scientificName: 'Gallotia galloti'
            }
          ],
          fromUser: []
        },
        statement: {
          ar: 'إذا قمتم بحل المعادلات التالية من الدرجة الأولى، سيواصل المدير توسيع معرفتكم بالمعلومات التي ستساعدكم في التعرف بشكل أفضل على النباتات والحيوانات الأكثر أهمية في الحديقة الوطنية تيدي.',
          ca: 'Si resoleu les següents equacions de primer grau, el Director vos continuarà ampliant amb informació que us ajudarà a conèixer millor la flora i la fauna més rellevants del Parc Nacional del Teide.',
          de: 'Wenn Sie die folgenden Gleichungen ersten Grades lösen, wird der Direktor Sie weiterhin mit Informationen erweitern, die Ihnen helfen, die relevanteste Flora und Fauna des Teide-Nationalparks besser kennenzulernen.',
          en: 'If you solve the following first-degree equations, the Director will continue to expand on information that will help you better understand the most relevant flora and fauna of the Teide National Park.',
          es: 'Si resuelven las siguientes ecuaciones de primer grado, el Director les seguirá ampliando con información que os ayudará a conocer mejor la flora y fauna más relevante del Parque Nacional del Teide.',
          eu: 'Azken mailako ekuazio hauek konpontzen badituzue, Zuzendariak jarraitzeko informazioarekin hedatu egingo da, zuek Parke Nazionala del Teideko landare eta fauna garrantzitsuena hobeto ezagutzeko lagunduko dizkizuen informazioarekin.',
          fr: 'Si vous résolvez les équations du premier degré suivantes, le Directeur continuera d\'élargir les informations qui vous aideront à mieux comprendre la flore et la faune les plus pertinentes du parc national du Teide.',
          gl: 'Se resolven as seguintes ecuacións de primeiro grao, o Director continuará a ampliar a información que vos axudará a coñecer mellor a flora e fauna máis relevante do Parque Nacional do Teide.',
          it: 'Se risolvete le seguenti equazioni di primo grado, il Direttore continuerà ad ampliare con informazioni che vi aiuteranno a conoscere meglio la flora e la fauna più rilevante del Parco Nazionale del Teide.',
          ja: '次の一次方程式を解くと、ディレクターがテイデ国立公園の最も関連性のある植物相と動物相をより良く理解するのに役立つ情報をさらに拡充します。',
          pt: 'Se resolverem as seguintes equações de primeiro grau, o Diretor continuará a expandir com informações que ajudarão vocês a conhecer melhor a flora e a fauna mais relevantes do Parque Nacional do Teide.',
          ro: 'Dacă rezolvați următoarele ecuații de gradul întâi, Directorul va continua să ofere informații care vă vor ajuta să înțelegeți mai bine cea mai relevantă floare și faună din Parcul Național Teide.',
          ru: 'Если вы решите следующие уравнения первой степени, директор будет продолжать расширять информацию, которая поможет вам лучше понять наиболее актуальную флору и фауну национального парка Тейде.',
          zh: '如果你解决了下面的一次方程，主任将继续扩展有关信息，这将帮助你更好地了解泰德国家公园最相关的植物和动物。'
        },
        sections: [{
          sectionId: 'a',
          statement: 'x + 4 = 5',
          solution: {
            expected: 1,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'b',
          statement: '4x + 3 = 3x + 5',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'c',
          statement: 'x - 8 = 2x - 11',
          solution: {
            expected: 3,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'd',
          statement: '4x - 2 = x + 10',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'e',
          statement: 'x + 2x + 3x - 1 = 4x + 9',
          solution: {
            expected: 5,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'f',
          statement: '48 - 3x = 5x',
          solution: {
            expected: 6,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'g',
          statement: '10x - 15 = 4x + 27',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'h',
          statement: 'x + 1 = 2x - 7',
          solution: {
            expected: 8,
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
        ar: '.Yurena إيموجي دي',
        ca: 'Memoji de Yurena.',
        de: 'Yurens Memoji.',
        en: 'Yurena\'s Memoji.',
        es: 'Memoji de Yurena.',
        eu: 'Yurena-ren Memoji-a.',
        fr: 'Memoji de Yurena.',
        gl: 'Memoji de Yurena.',
        it: 'Memoji di Yurena.',
        ja: 'YurenaのMemoji。',
        pt: 'Memoji de Yurena.',
        ro: 'Memoji de Yurena.',
        ru: 'Мемоджи Юрены.',
        zh: 'Yurena的Memoji。'
      },
      imageSrc: '/img/index/profe-yure.png'
    },
    password: {
      statement: {
        ar: ':للبدء، أدخل الرمز السري الذي سيقدمه لك معلمك',
        ca: 'Per començar, introdueix el codi secret que et proporcionarà el teu professor:',
        de: 'Um zu beginnen, geben Sie den geheimen Code ein, den Ihnen Ihr Lehrer gegeben hat:',
        en: 'To begin, enter the secret code provided by your teacher:',
        es: 'Para empezar, introduce el código secreto que te proporcionará tu profesor:',
        eu: 'Hasi hasteko, sartu zure irakasleak emandako kode sekretua:',
        fr: 'Pour commencer, entrez le code secret fourni par votre professeur:',
        gl: 'Para comezar, introduce o código secreto que che proporcionará o teu profesor:',
        it: 'Per iniziare, inserisci il codice segreto fornito dal tuo insegnante:',
        ja: '：始めるには、教師から提供された秘密コードを入力してください',
        pt: 'Para começar, insira o código secreto fornecido pelo seu professor:',
        ro: 'Pentru a începe, introduceți codul secret furnizat de profesorul dumneavoastră:',
        ru: 'Для начала введите секретный код, который предоставит вам ваш учитель:',
        zh: '：开始时，请输入您老师提供的秘密代码'
      },
      expected: '141592',
      fromUser: ''
    },
    subtitle: {
      ar: 'النباتات + الحيوانات = الجبر',
      ca: 'Flora + Fauna = Àlgebra',
      de: 'Flora + Fauna = Algebra',
      en: 'Flora + Fauna = Algebra',
      es: 'Flora + Fauna = Álgebra',
      eu: 'Landareak + Fauna = Álgebra',
      fr: 'Flore + Faune = Algèbre',
      gl: 'Flora + Fauna = Álxebra',
      it: 'Flora + Fauna = Algebra',
      ja: 'フローラ + ファウナ = 代数',
      pt: 'Flora + Fauna = Álgebra',
      ro: 'Flora + Fauna = Algebră',
      ru: 'Флора + Фауна = Алгебра',
      zh: '植物相 + 动物相 = 代数'
    },
    title: {
      ar: 'موقف التعلم',
      ca: 'Situació d\'aprenentatge',
      de: 'Lernsituation',
      en: 'Learning Situation',
      es: 'Situación de aprendizaje',
      eu: 'Ikasketa-egoera',
      fr: 'Situation d\'apprentissage',
      gl: 'Situação de aprendizaxe',
      it: 'Situazione di apprendimento',
      ja: '学習シチュエーション',
      pt: 'Situação de Aprendizagem',
      ro: 'Situație de învățare',
      ru: 'Образовательная ситуация',
      zh: '学习情境'
    }
  },
  languages: [{
    code: 'ar',
    flagCode: 'ma', // Morocco flag code
    name: {
      ar: 'العربية',
      ca: 'Àrab',
      de: 'Arabisch',
      en: 'Arabic',
      es: 'Árabe',
      eu: 'Arabiera',
      fr: 'Arabe',
      gl: 'Árabe',
      it: 'Arabo',
      ja: 'アラビア語',
      pt: 'Árabe',
      ro: 'Arabă',
      ru: 'Арабский',
      zh: '阿拉伯语'
    }
  }, {
    code: 'ca',
    flagCode: 'es-ca',
    name: {
      ar: 'الكاتالونية',
      ca: 'Català',
      de: 'Katalanisch',
      en: 'Catalan',
      es: 'Catalán',
      eu: 'Katalana',
      fr: 'Catalan',
      gl: 'Catalán',
      it: 'Catalano',
      ja: 'カタラン語',
      pt: 'Catalão',
      ro: 'Catalan',
      ru: 'Каталанский',
      zh: '加泰罗尼亚语'
    }
  }, {
    code: 'de',
    flagCode: 'de',
    name: {
      ar: 'الألمانية',
      ca: 'Alemany',
      de: 'Deutsch',
      en: 'German',
      es: 'Alemán',
      eu: 'Alemaniarra',
      fr: 'Allemand',
      gl: 'Alemán',
      it: 'Tedesco',
      ja: 'ドイツ語',
      pt: 'Alemão',
      ro: 'Germană',
      ru: 'Немецкий',
      zh: '德语'
    }
  }, {
    code: 'en',
    flagCode: 'gb',
    name: {
      ar: 'الإنجليزية',
      ca: 'Anglés',
      de: 'Englisch',
      en: 'English',
      es: 'Inglés',
      eu: 'Ingelesa',
      fr: 'Anglais',
      gl: 'Inglés',
      it: 'Inglese',
      ja: '英语',
      pt: 'Inglês',
      ro: 'Engleză',
      ru: 'Английский',
      zh: '英语'
    }
  }, {
    code: 'es',
    flagCode: 'es',
    name: {
      ar: 'الإسبانية',
      ca: 'Castellà',
      de: 'Spanisch',
      en: 'Spanish',
      es: 'Español',
      eu: 'Espainiera',
      fr: 'Espagnol',
      gl: 'Español',
      it: 'Spagnolo',
      ja: '西班牙语',
      pt: 'Espanhol',
      ro: 'Spaniol',
      ru: 'Испанский',
      zh: '西班牙语'
    }
  }, {
    code: 'eu',
    flagCode: 'es-eu',
    name: {
      ar: 'الباسكية',
      ca: 'Basc',
      de: 'Baskisch',
      en: 'Basque',
      es: 'Vasco',
      eu: 'Euskara',
      fr: 'Basque',
      gl: 'Vasco',
      it: 'Basco',
      ja: '巴斯克语',
      pt: 'Basco',
      ro: 'Bască',
      ru: 'Баскский',
      zh: '巴斯克语'
    }
  }, {
    code: 'fr',
    flagCode: 'fr',
    name: {
      ar: 'الفرنسية',
      ca: 'Francès',
      de: 'Französisch',
      en: 'French',
      es: 'Francés',
      eu: 'Frantsesa',
      fr: 'Francese',
      gl: 'Francés',
      it: 'Francese',
      ja: '法语',
      pt: 'Francês',
      ro: 'Franceză',
      ru: 'Французский',
      zh: '法语'
    }
  }, {
    code: 'gl',
    flagCode: 'es-gl',
    name: {
      ar: 'الجاليكية',
      ca: 'Gallec',
      de: 'Galizisch',
      en: 'Galician',
      es: 'Gallego',
      eu: 'Galiziarra',
      fr: 'Galicien',
      gl: 'Galego',
      it: 'Galiziano',
      ja: '加利西亚语',
      pt: 'Galego',
      ro: 'Galiciană',
      ru: 'Галисийский',
      zh: '加利西亚语'
    }
  }, {
    code: 'it',
    flagCode: 'it',
    name: {
      ar: 'الإيطالية',
      ca: 'Italià',
      de: 'Italienisch',
      en: 'Italian',
      es: 'Italiano',
      eu: 'Italiera',
      fr: 'Italien',
      gl: 'Italiano',
      it: 'Italiano',
      ja: '意大利语',
      pt: 'Italiano',
      ro: 'Italiană',
      ru: 'Итальянский',
      zh: '意大利语'
    }
  }, {
    code: 'ja',
    flagCode: 'jp',
    name: {
      ar: 'اليابانية',
      ca: 'Japonès',
      de: 'Japanisch',
      en: 'Japanese',
      es: 'Japonés',
      eu: 'Japoniera',
      fr: 'Japonais',
      gl: 'Xaponés',
      it: 'Giapponese',
      ja: '日语',
      pt: 'Japonês',
      ro: 'Japoneză',
      ru: 'Японский',
      zh: '日语'
    }
  }, {
    code: 'pt',
    flagCode: 'pt',
    name: {
      ar: 'البرتغالية',
      ca: 'Portuguès',
      de: 'Portugiesisch',
      en: 'Portuguese',
      es: 'Portugués',
      eu: 'Portugesa',
      fr: 'Portugais',
      gl: 'Portugués',
      it: 'Portoghese',
      ja: '葡萄牙语',
      pt: 'Português',
      ro: 'Portugheză',
      ru: 'Португальский',
      zh: '葡萄牙语'
    }
  }, {
    code: 'ro',
    flagCode: 'ro',
    name: {
      ar: 'الرومانية',
      ca: 'Romanès',
      de: 'Rumänisch',
      en: 'Romanian',
      es: 'Rumano',
      eu: 'Errumaniera',
      fr: 'Roumain',
      gl: 'Rumano',
      it: 'Rumeno',
      ja: '罗马尼亚语',
      pt: 'Romeno',
      ro: 'Română',
      ru: 'Румынский',
      zh: '罗马尼亚语'
    }
  }, {
    code: 'ru',
    flagCode: 'ru',
    name: {
      ar: 'الروسية',
      ca: 'Rus',
      de: 'Russisch',
      en: 'Russian',
      es: 'Ruso',
      eu: 'Errusiera',
      fr: 'Russe',
      gl: 'Ruso',
      it: 'Russo',
      ja: '俄语',
      pt: 'Russo',
      ro: 'Rusă',
      ru: 'Русский',
      zh: '俄语'
    }
  }, {
    code: 'zh',
    flagCode: 'cn',
    name: {
      ar: 'الصينية',
      ca: 'Xinés',
      de: 'Chinesisch',
      en: 'Chinese',
      es: 'Chino',
      eu: 'Txinera',
      fr: 'Chinois',
      gl: 'Chinés',
      it: 'Cinese',
      ja: '中文',
      pt: 'Chinês',
      ro: 'Chineză',
      ru: 'Китайский',
      zh: '中文'
    }
  }]
})

export const mutations = {
  addOrUpdateExerciseSolutionFromUser(state, { activityId, challengeId, exerciseId, solution, solutionIndex }) {
    // eslint-disable-next-line eqeqeq
    const activity = state.activities.find((a) => a.activityId == activityId)

    if (activity) {
      // eslint-disable-next-line eqeqeq
      const challenge = activity.challenges.find((c) => c.challengeId == challengeId)

      if (challenge) {
        // eslint-disable-next-line eqeqeq
        const exercise = challenge.exercises.find((ex) => ex.exerciseId == exerciseId)

        if (exercise && exercise.solution) {
          exercise.solution.fromUser[solutionIndex] = solution
        }
      }
    }
  },
  setExerciseSolutionFromUser(state, { activityId, challengeId, exerciseId, solution }) {
    // eslint-disable-next-line eqeqeq
    const activity = state.activities.find((a) => a.activityId == activityId)

    if (activity) {
      // eslint-disable-next-line eqeqeq
      const challenge = activity.challenges.find((c) => c.challengeId == challengeId)

      if (challenge) {
        // eslint-disable-next-line eqeqeq
        const exercise = challenge.exercises.find((ex) => ex.exerciseId == exerciseId)

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
  },
  setSection(state, payload) {
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
            set(
              state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections,
              sectionIndex,
              payload.section
            )
          }
        }
      }
    }
  }
}

export const getters = {
  getActivity: (state) => (activityId) => {
    const activity =
      state.activities.find((a) => a.activityId === activityId)

    if (!activity) {
      console.warn(`Activity "${activityId}" not found on this learning unit.`);
    }

    return activity
  },
  getActivityIds(state) {
    const activityIds = []

    state.activities.forEach(activity => {
      activityIds.push(activity.activityId)
    })

    return activityIds
  },
  getChallenge: (state) => (activityId, challengeId) => {
    let challenge
    // eslint-disable-next-line eqeqeq
    const activity = state.activities.find((a) => a.activityId == activityId)

    if (activity) {
      challenge = activity.challenges.find(
        // eslint-disable-next-line eqeqeq
        (ch) => ch.challengeId == challengeId
      )

      if (!challenge) {
        // eslint-disable-next-line no-console
        console.warn(`Challenge "${challengeId}" not found on Activity "${activityId}".`)
      }
    }

    return challenge
  },
  getExercise: (state, getters) => (activityId, challengeId, exerciseId) => {
    let exercise
    const challenge = getters.getChallenge(activityId, challengeId)

    if (challenge) {
      exercise = challenge.exercises?.find(
        // eslint-disable-next-line eqeqeq
        e => e.exerciseId == exerciseId
      )

      if (!exercise) {
        // eslint-disable-next-line no-console
        console.warn(`Exercise "${exerciseId}" not found on Activity "${activityId}"` +
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
    let section
    const exercise = getters.getExercise(activityId, challengeId, exerciseId)

    if (exercise) {
      section = exercise.sections?.find(
        // eslint-disable-next-line eqeqeq
        s => s.sectionId == sectionId
      )

      if (!section) {
        // eslint-disable-next-line no-console
        console.warn(`Section "${sectionId}" not found on Activity "${activityId}"` +
          `, Challenge "${challengeId}", Exercise "${exerciseId}".`)
      }
    }

    return section
  },
  isChallengeSolved: (state, getters) => (activityId, challengeId) => {
    const challenge = getters.getChallenge(activityId, challengeId)

    if (challenge) {
      const exercises = challenge.exercises

      if (exercises && window?.Array.isArray(exercises)) {
        return exercises.every((exercise) => {
          if (
            exercise.sections &&
            exercise.solution &&
            typeof exercise.solution === 'string'
          ) {
            return exercise.sections.length ===
              getters.getExerciseSectionsWellSolved(
                activityId, challengeId, exercise.exerciseId
              )?.length &&
              // eslint-disable-next-line eqeqeq
              exercise.solution?.expected == exercise.solution?.fromUser
          } else if (exercise.sections) {
            return exercise.sections.length ===
              getters.getExerciseSectionsWellSolved(
                activityId, challengeId, exercise.exerciseId
              )?.length
          } else if (
            exercise.solution &&
            typeof exercise.solution.expected === 'string'
          ) {
            // eslint-disable-next-line eqeqeq
            return exercise.solution?.expected == exercise.solution?.fromUser
          } else {
            return false
          }
        })
      }
    }

    // If challenge is not found or the exercises array is not present,
    // consider the challenge not solved.
    return false
  },
  hasValidIndexPagePassword(state) {
    return state?.indexPage?.password?.fromUser === state?.indexPage?.password?.expected
  }
}
