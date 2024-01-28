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
          items: [{
            id: '1',
            image: '/img/actividad-1/reto-3/1-retamar.jpg',
            name: {
              ar: 'ريتامار ديل تيدي',
              ca: 'Retamar del Teide',
              de: 'Retamar vom Teide',
              en: 'Retamar of Teide',
              es: 'Retamar del Teide',
              eu: 'Teideko Retamar',
              fr: 'Retamar du Teide',
              gl: 'Retamar do Teide',
              it: 'Retamar del Teide',
              ja: 'テイデのレタマル',
              pt: 'Retamar do Teide',
              ro: 'Retamar din Teide',
              ru: 'Ретамар дель Тейде',
              zh: '泰德的雷塔马尔'
            }
          }, {
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
            }
          }, {
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
            }
          }, {
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
            }

          }, {
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
            }
          }, {
            id: '6',
            image: '/img/actividad-1/reto-3/6-abeja.jpg',
            name: {
              ar: 'نحلة',
              ca: 'Abella',
              de: 'Biene',
              en: 'Bee',
              es: 'Abeja',
              eu: 'Erle',
              fr: 'Abeille',
              gl: 'Abella',
              it: 'Ape',
              ja: '蜂',
              pt: 'Abelha',
              ro: 'Albină',
              ru: 'Пчела',
              zh: '蜜蜂'
            }
          }, {
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
            }
          }, {
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
            }
          }],
          fromUser: []
        },
        statement: {
          es: 'Si quieren que el Director les ayude a conocer la flora y fauna más relevante del Parque Nacional del Teide, primero resuelvan las siguientes ecuaciones de primer grado:'
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
