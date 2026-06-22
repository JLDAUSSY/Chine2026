const sets = {





// villes -

pekin:[1],
pingyao:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30],
xian:[1],
tianshui:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26],
nankin:[1,3,2,4,5,6,7,8,9,10],
huangshan:[1],
hangzhou:[1,2,3,4,5,6,7,8,9,10,11,12],
shanghai:[1,2,3,4,5,30,6,7,8,9,10,11,12,13,14,15,16,17,29,18,19,20,21,22,23,24,25,31,26,27,28,29,30],

// pékin détaillé

citeinterdite:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
templeduciel:[1,2,3,4,5,6,7],
palaisdete:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
mutianyu:[1,2,3,4,5,6,7,8,9,10,11],
pekinville:[1,2,3,4,5,6,7,8,9,10],

// huangshan détaillé

xidi:[1,2,3,4,5,6,7,8],
hongcun:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
tunxi:[1,2,3,4,5,6],
monthuangshan:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

// xi'an détaillé

armeeenterree:[1,2,3,4,5,6,7,8],
xiancentre:[1,3,2,4,5,6,7,8,9,10,11,12],
petitepagode:[1,2,3,4,5,6],
grandepagode:[1,2,3,4,5,6],
grandemosquee :[1,2,3,4,5,6,7],

// thèmes

nourriture:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23],

transports:[
1,2,3,4,5,
6,7,8,9,10,
11,12,13,14,15,16,17,18
],

chinois:[1,2,3,4,5,6,7,8,9,10,11,12,13,14],


scenesrue:[1,2,3,4,5,6,7,8,9,10,11],

police:[3,1,2,4,5,6,7,8]

}

const titles = {

// villes

pekinville: {
    1: `Tour Tambour de Pékin (Gulou / 鼓楼)`,
    2: `Restaurant 平安锅贴 (Píng'ān Guōtiē, Raviolis Grillés de la Paix), quartier de hutongs près de Shichahai`,
    3: `Stand de Bingtanghulu (冰糖葫芦), brochettes de petites baies d'aubépine sauvage acidulées, enrobées de sucre candi croustillant`,
    4: `Le Stade National de Pékin, mondialement célèbre sous le nom de "Nid d'Oiseau" (Niǎocháo - 鸟巢), conçu pour les Jeux Olympiques de 2008`,
    5: `Pour les "Mao de jardin", c'est au marché aux antiquités de Panjiayuan 😄`,
    6: `Ancienne locomotive diesel 「东方红」 (Dongfang Hong / "L'Orient est rouge") de la série Dongfang Hong 5.`,
    7: `locomotive de la classe Shangyou (上游 / Shàngyóu, signifiant « Visée haute » dans le quartier d'art 798`,
    8: `street art dans le quartier d'art 798`,
    9: `street art dans le quartier d'art 798`,
10: `siège de la CCTV, situé dans le quartier d'affaires (CBD). En raison de sa silhouette singulière, les Pékinois le surnomment affectueusement "Dà Kùchǎ" (大裤衩), le grand pantalon`,
},

pingyao:{
1:"rue de l'Ouest (Xi Da Jie, 西大街)",
2:"rue du Temple de la Littérature (Wenmiao Jie, 文庙街)",
3:"rue du Nord (Bei Da Jie, 北大街)",
4:"Porte du Nord (Gongji Gate / 拱极门) de la muraille de Pingyao, photographiée depuis l'intérieur de la ville, au bout de la rue du Nord",
5:"Sur les remparts de la Porte du Nord",
6:"La Tour de la Porte du Nord – Vue de près",
7:"grand tambour rituel) à l'intérieur du Temple de Erlang, le seul temple de Chine entièrement dédié à la divinité taoïste Erlang Shen",
8:"Bas-relief du Dieu de la Longévité",
9:"",
10:"entrée de la célèbre banque Rishengchang",
11:"La Tour du Marché (Shi Lou - 市楼), le plus haut bâtiment de la vieille ville",
12:"Le portique Jiyang Fang (激扬坊) ou Portique de l'Élan Dynamique",
13:"La Vinaigrerie de la famille Liang (Liang Jia Cu Fang)",
14:"Le portique Wan Xing Bo Ji (万姓博济) et la Tour du Marché",
15:"Le Juge Bao (包青天, Bao Qingtian) et ses assistants au Temple des Dieux de la Cité (平遥城隍庙, Pingyao Chenghuang Miao)",
16:"guichet de la banque Baichuantong",
17:"fresque pastorale au musée de la banque Baichuantong (百川通)",
18:"une des cours intérieures de la banque Baichuantong",
19:"cour principale de la célèbre banque Rishengchang (日昇昌)",
20:"musée de la banque Rishengchang - Salle d'activités de la branche du Parti du Musée des banques de change (Piaohao) du comté de Pingyao",
21:"cour principale du Musée Rishengchang (日昇昌)",
22:"grande cour d'honneur de la maison Chongbaotang, riche demeure résidentielle privée appartenant à une éminente famille de notables de Pingyao",
23:"Confucius enseignant à ses disciples, bas relief en pierre au Temple de Confucius de Pingyao (平遥文庙, Pingyao Wenmiao)",
25:"Temple de Confucius de Pingyao - Porte du Dragon (龙门, Longmen)",
26:" ",
27:" ",
28:"ancien portail d’auberge historique servant désormais d’entrée à une ruelle",
29:"Temple des Dieux de la Cité de Pingyao (平遥城隍庙, Pingyao Chenghuangmiao) - le cheval divin et le palefrenier",
30:"la Tour du Marché (市楼, Shìlóu), la nuit",
},

xian:{

},

tianshui:{
1:"falaise principale des grottes de Maijishan (麦积山石窟)",
2:"détails de la triade monumentale",
3:"triade bouddhique colossale sculptée à flanc de paroi (un grand Bouddha assis flanqué de deux Bodhisattvas debout), surmontée par les galeries et les passerelles en bois qui serpentent le long de la roche rouge. Plus haut, les niches alignées abritent des milliers de statuettes en argile modelée datant des dynasties successives (Wei du Nord, Zhou du Nord et Song)",
4:"le réseau vertigineux de passerelles, d'escaliers et de balustrades suspendus à flanc de falaise aux grottes de Maijishan (麦积山石窟)",
5:"Le Bodhisattva Mahasthamaprapta, un des deux grands assistants qui flanquent traditionnellement le Bouddha Amitabha",
6:"la grande triade monumentale",
7:"La Triade Bouddhique de la Grotte 133 (Niche 9), dynastie des Wei du Nord (VIème siècle)",
8:"vue en enfilade du célèbre couloir de la Grotte 135 (第135窟), souvent surnommée la « Grotte aux trois Nobles » (Sanren Dong), l'une des plus spectaculaires de la falaise ouest de Maijishan",
9:"La Niche Centrale de la Grotte 135 (Les Disciples et l'Asura) - dynasties du Nord (Wei du Nord / Zhou du Nord), VIème siècle",
10:"détail de la fresque du plafond de la grotte 127 (窟127), datant de la dynastie des Wei de l'ouest (西魏 - 535 à 557 apr. J.-C)",
11:"Le Bouddha au Sourire Mystique de la Grotte 44",
12:"façade extérieure de la Grotte 9 (第9窟), également appelée le Pavillon Central des Sept Bouddhas (中七佛阁, Zhong Qifoge)",
13:"Le Bouddha assis de la Grotte 123",
14:"Les Bodhisattvas de la Grotte 44",
15:"La Triade Bouddhique de la Grotte 62 - dynastie des Zhou du Nord (北周, 557–581 apr. JC.)",
16:"Le Bodhisattva Avalokiteshvara (Guanyin) de la Grotte 123 - dynastie des Wei de l'Ouest (西魏, milieu du VIème siècle)",
17:"près des « Seven Buddha Halls », deux dvarapalas (gardiens bouddhiques protecteurs)",
18:"temple de Fuxi (伏羲庙), à Tianshui",
19:"道启鸿蒙 (Dào qǐ hóng méng, Éclairer le monde au début des temps)",
20:"au Palais Taihe (太和殿), la statue de Fuxi",
21:"Peinture murale représentant Fuxi",
22:"Les inventions et apports de Fuxi à l'humanité",
24:"Le Dragon et le Yin-Yang sur un regard de chaussée en bronze",
25:"赵氏天水堂 (Zhào shì Tiānshuǐ táng,Sanctuaire ancestral de la famille Zhao de Tianshui)",
26:"le très grand et moderne portique commémoratif (Paifang - 牌坊) qui enjambe l'avenue à l'entrée du quartier historique de Xiguan (西关古城), la vieille ville de Tianshui"


},

nankin:{
1:"depuis le mausolée de Sun Yat Sen, vue sur le Pavillon de la Stèle et des portes monumentales",
2:" Salle Sacrificielle (祭堂 - Jìtáng). C'est à l'intérieur de ce bâtiment que se trouve la statue en marbre blanc de Sun Yat-sen et, juste derrière, la chambre funéraire où il repose",
3:"la stèle : \"Le Kuomintang (Parti nationaliste chinois) a enterré ici le Premier ministre, Monsieur Sun. Le 1er juin de la 18e année de la République de Chine (soit le 1er juin 1929)\"",
4:"Ming Lou (明楼 / Tour de l'Âme) du Mausolée Ming Xiaoling (明孝陵), tombeau de l'empereur Hongwu (Zhu Yuanzhang), le fondateur de la dynastie Ming et de l'impératrice Ma",
5:"Mausolée Ming Xiaoling, Allée sacrée (神道, Shendao), statues de hauts dignitaires civils (文臣, Wenchen)",
6:"un des deux chameaux accroupis (石骆驼, Shi Luotuo)",
7:"allée de platanes près de la voie sacrée",
8:"au Mémorial du massacre de Nankin, le mur des victimes",
9:"Les Avions du Diable ont encore bombardé... (恶魔的飞机又来轰炸了) - sculpteur Wu Weishan",
10:"Un moine bouddhiste fuyant en courant (一个随人逃难的僧人)",

},

huangshan:{
1:'Huangshan'
},

hangzhou:{
1:"restaurant Lou Wai Lou (楼外楼), situé sur l'île de Gushan (Solitary Hill). Fondé en 1848 sous la dynastie Qing, c'est l'un des restaurants historiques les plus réputés de Chine",
2:"embarcation traditionnelle à rames, appelée Shuàushǒu chuán (手划船), transportant des passagers sur le lac de l'Ouest",
3:"promeneurs sur la digue Bai et pavillon traditionnel se reflétant sur le lac de l'Ouest",
4:"bateau de plaisance impérial traditionnel à double pont (appelé gulao ou bateau-dragon de style architectural Ming/Qing), sur la colline embrumée qui borde le lac, on distingue nettement la silhouette de la célèbre pagode Chenghuang",
5:"pagode Baochu (保俶塔, Bǎochù tǎ), un emblème historique incontournable dressé sur la colline de la Pierre Précieuse (Baoshi Shan) qui domine la rive nord du lac de l'ouest",
6:"pagode de pierre de la Société des Sceaux de Xiling (西泠印社石塔, Xīlíng Yìnshè Shítǎ), souvent appelée la pagode Huayan (华严经塔, Huáyán Jīng Tǎ)",
7:"buste en bronze de Wu Changshuo (吴昌硕, 1844–1927), l'un des plus grands artistes de la fin de la dynastie Qing et du début de l'ère républicaine. Il fut un maître incontesté de la peinture de fleurs et d'oiseaux (style Xieyi), de la calligraphie et surtout le tout premier directeur (社长, Shèzhǎng) de la prestigieuse Société des Sceaux de Xiling",
8:"portique d'entrée en pierre (Paifang) menant au site historique de la Société des Sceaux de Xiling (西泠印社, Xīlíng Yìnshè)",
9:"entrée de la grotte de la petite fontaine du dragon : « 小龍泓 » (Xiǎo Lónghóng), gravé en caractères blancs très nets sur la paroi rocheuse, à la Société des Sceaux de Xiling",
10:"rue Longyou (龙游路, Lóngyóu Lù), la nuit",
11:'sentier pavé de pierres traversant une bambouseraie dense (une \"allée de bambous\", 竹径 - Zhújìng), située sur la colline de Guoshan, au sein du complexe historique de la Société des Sceaux de Xiling',
12:"plaque d’égout patrimoniale"},



shanghai:{
1:"Vue nocturne sur le Bund, la célèbre promenade de Shanghai - Custom House (avec son clocher) et les édifices néoclassiques qui bordent le fleuve Huangpu.",
2:"Les gratte-ciels de Pudong de nuit",
3:"ancien bâtiment de la Commercial Bank of China (中国通商银行大楼) - fin XIXème siècle",
4:"« 我 ❤️ 上海 » sur l'Aurora Plaza (震旦国际大楼)",
5:"À gauche, l'imposant dôme néoclassique de l'ancienne Hongkong and Shanghai Banking Corporation (No. 12). À droite, le clocher à horloge de la Custom House (No. 13), inspiré de Big Ben.",
6:"l'Immeuble Wukang (Wukang Mansion / 武康大楼), anciennement connu sous le nom de Normandie Apartments, dans l'ancienne  concession française",
7:"Milne Apartments (密丹公寓, Midan Gongyu), construits en 1931 et situés au croisement de Wukang Road (武康路) et de Hunan Road (湖南路), dans l'ancienne  concession française",
8:" N° 210 de la rue Wukang (Wukang Road, 武康路) - villa de style méditerranéen en arrière-plan, construite en 1932, dans l'ancienne  concession française",
9:"vitrail, de style Art déco avec ses motifs de fleurs grimpantes au 210 de la rue Wukang",
10:"la rue Hunan (Hunan Road, 湖南路), dans l'ancienne  concession française",
11:"rue Jinxian (Jinxian Road, 进贤路) - maisons d'architecture résidentielle urbaine des années 1920-1930 à Shanghai,  influencée par les courants occidentaux de l'époque",
12:"les trois gratte-ciels les plus emblématiques du quartier d'affaires de Lujiazui, district de Pudong",
13:"Pavillon d'Exhibition de la Pierre d'Origine",
14:"détail du toit du Pavillon Yuhua - Le général à cheval et le soldat à pied",
15:"le pont de la clarté et le Le Pavillon Huajing (Huajing Ting / 华镜厅)",
16:"intérieur du Pavillon Yuhua (Yuhua Tang / 玉华堂), reconstitution du cabinet de travail de Pan Yunduan, le lettré et haut fonctionnaire de la dynastie Ming qui a conçu le Jardin Yu.",
17:"bas-relief au jardin Yu - le pin et les grues (Song He Yan Nian / 松鹤延年)",
18:"Jardin Yu : la porte d'accès au Jardin Intérieur (Neiyuan / 内园)",
19:"porche d'entrée monumental d'un Lilong (里弄), quartiers de ruelles typiques de la ville, au N° 86 de la rue Guangxi Nord",
20:"bâtiment de la célèbre enseigne De Xing Guan (Dexing Restaurant / 德兴馆), situé à l'intersection de la rue Guangdong (广东路, Guǎngdōng Lù) et de la rue Fujian Centre (福建中路)",
21:"la Place du Peuple (People's Square / 人民广场)",
22:"l'ancien bâtiment de l'Administration Maritime des Douanes de la Dynastie Qing (souvent appelé le Great Northern Telegraph Company Building ou Bund 7 / 外滩7号), situé au N° 7 du Bund (中山东一路7号)",
23:"ancien bâtiment de la Russo-Asiatic Bank (Banque Russo-Asiatique / Bund 15 / 外滩15号), qui abrite aujourd'hui le China Foreign Exchange Trade System (Le Centre d'Échange des Devises Étrangères de Chine - 中国外汇交易中心)",
24:"Sassoon House (Bund 20 / 外滩20号), qui abrite aujourd'hui le Fairmont Peace Hotel (和平饭店), au N° 20 du Bund",
25:"La Colombe de la Paix au Fairmont Peace Hotel",
26:"cage d'escalier monumentale située juste à l'arrière du hall d'entrée du Fairmont Peace Hotel",
27:"Monument au Mouvement du 30 Mai (五卅运动纪念碑)",
28:"statuette d'étude en bronze doré d'une sculpture monumentale publique très célèbre à Shanghai : « L'Homme qui marche » de l'artiste chinois Wang Keping (王克平).",
29:"jardin Yu, intérieur du Pavillon Jingguan (Jingguan Ting / 静观厅), ou Pavillon de la Contemplation Sereine",
30:"East Nanjing Road, une partie des 1 408 975 000 chinois 😄",
31:"au Fairmont Peace Hotel : bas-relief représentant une scène historique animée du Bund",
},

// pékin détaillé

citeinterdite:{
1:'contrôle des billets pour la place Tian An Men',
2:"la place Tian An Men, 44 hectares, 880 m x 500 m",
3:"la Porte Tian'anmen (la Porte de la Paix Céleste)",
4:"la Porte Tian'anmen (la Porte de la Paix Céleste",
5:"bus vintage de Pékin qui desservait la ligne 1 (1 路)",
6:" Porte de la Suprématie Harmonieuse (Taihemen), la plus grande porte de la Cité Interdite à Pékin",
7:"un des Ponts des Eaux d'Or (Jinshuiqiao). Ces ponts en marbre blanc symbolisent les cinq vertus confucéennes",
8:"Pavillon des Caractères Chinois",
9:"Musée des Horloges (situé dans le Palais de la Longévité Tranquille) - horloge astronomique à automate avec sphère armillaire, d'origine britannique (XVIIIe siècle), Cette horloge est un exemple parfait des 'Sing-Songs' (terme utilisé à l'époque pour ces horloges musicales à automates) que les marchands de la Compagnie britannique des Indes orientales offraient à l'empereur pour faciliter les relations commerciales.",
10:"horloge française à mouvement rotatif en forme de montgolfière, datant de la fin du XIXe siècle, André Romain Guilmet horloger français",
11:"Horloge à automate écrivain, Timothy Williamson, Londres 1770",
12:"horloge représentant un palais européen imaginaire, ateliers impériaux de Guangzhou (Canton), fin du XVIIIe siècle (dynastie Qing)",
13:"Parure de l'Impératrice - ornement de coiffure",
14:"Aiguière d'apparat en cuivre doré et émail peint associant un bec verseur en forme de tête de dragon à des cartouches illustrant des scènes de vie occidentales, illustration du métissage culturel et du luxe des ateliers impériaux au XVIIIe siècle.",
15:"Pavillon de la Suprématie Impériale (Huangji Dian)",
16:"détail d'une porte du Pavillon de la Suprématie Impériale (Huangji Dian)",
17:"Porte de la Suprématie Impériale (Huangji Men)",
18:"intérieur du Pavillon de l'Harmonie Suprême",
19:"intérieur du Pavillon de la Suprématie Impériale (Huangji Dian)",
20:"théâtre impérial du Pavillon de la Réjouissance Partagée (Changyin Ge), chef-d'œuvre architectural du règne de Qianlong, doté d'un plafond à caissons turquoise",
21:"plafond à caissons (Zaojing) du Pavillon de la Suprématie Impériale (Huangji Dian)",
22:"Panorama de la Cité Interdite depuis la Colline de Charbon (Jingshan)",
},

templeduciel:{
1:"Porte de la Prière pour de Bonnes Récoltes (Qinianmen)",
2:"Hall de la Prière pour de Bonnes Récoltes (Qinian Dian)",
3:"Hall de la Prière pour de Bonnes Récoltes - plaque bleue portant l'inscription en caractères dorés 祈年殿 (Qinian Dian, Hall de la Prière pour l'Année)",
4:"Porte de la Prière pour de Bonnes Récoltes (Qinianmen), vue depuis la terrasse du Hall",
5:"Porte de la Prière pour de Bonnes Récoltes",
6:"文明游园 保护文物: Wénmíng yóuyuán, bǎohù wénwù, Visitez le parc de manière civilisée, protégez les reliques culturelles",
7:"autel sacrificiel traditionnel à l'intérieur du Temple du Ciel",
},

palaisdete:{
1:"dragon en bronze qui monte la garde devant la salle de la Bienveillance et de la Longévité",
2:"la Tour Wenchang (Wenchang Ge / 文昌阁), le plus grand des six pavillons-portes (chengguan) fortifiés du Palais d'Été",
3:"rives du lac Kunming au Palais d'Eté",
4:"Embarcations sur le Lac Kunming",
5:"Dishu (地书), calligraphie à l'eau pratiquée à même le sol dans les espaces publics en Chine, ici au Palais d'Eté",
6:"La Tour des Fragrances Incantatoires (Foxiang Ge / 佛香阁)",
7:"Hall de la Dispensation Nuageuse (Paiyun Dian / 排云殿)",
8:"la Tour des Fragrances Incantatoires",
9:"Le Pavillon de la Stèle de la Colline de la Longévité et du Lac Kunming",
10:"Portique Zhongxiang Jie, Colline de la Longévité",
11:"dans une des galeries latérales qui entourent la Tour des Fragrances Incantatoires",
12:"le Bateau de Marbre, également connu sous le nom de Pavillon de la Pureté et de l'Aisance (Shifang / 石舫 ou Qingyan Fang / 清宴舫)",
13:"le Pont de la Vue Rapprochée (Binfeng Qiao / 豳风桥)",
14:"Pailou (portique) du Pont Binfeng (Binfeng Qiao / 豳风桥)",

},





mutianyu:{
1:"La Tour de guet n°14 (第14号敌楼)",
3:" ",
4:" ",
5:" ",
6:" ",
7:"忠于毛主席 (Zhōng yú Máo zhǔxí, Fidèle au président Mao)",
8:" ",
9:" ",
10:" ",
11:" ",

},

// huangshan détaillé

xidi:{
1:"Pavillon Qingyun (青云轩 - Qīngyún Xuān), époque Qing, règne de l'empereur Tongzhi (1861 - 1875)",
2:"résidence typique des marchands de l'Anhui, époque Qing",
3:"la salle principale du temple ancestral de la famille Hu (Jing'aitang)",
4:"La cour intérieure du temple Jing'aitang (敬愛堂)",
5:"Une échoppe traditionnelle et ses spécialités culinaires locales",
6:"l'homme en fil de fer au bord du canal",
7:"ruelle étroite bordée de maisons traditionnelles en pierre blanche",
8:"Vue panoramique du village ancien de Xidi",
},

hongcun:{
1:"lac de la lune avec le Temple ancestral de la famille Hu (Hu Shi Zongci) - lanternes rouges et à sa droite le pavillon d'observation de la lune, Wang Yue Tang",
2:"lac de la lune",
3:"lac de la lune",
4:"entrée du Quartier Est du clan Yingchuan",
5:"maison d'hôtes 'La Demeure de la Clarté Ascendante'",
6:"résidence privée traditionnelle de style Huizhou",
7:"Daiqing Fang : Une demeure traditionnelle",
8:"飞鸿雅居 » (Feihong Yaju, Demeure élégante de l'oie sauvage",
9:"Musée d'Art populaire de Hongcun",
10:"temple ancestral « Le-Xu-Tang » (乐叙堂)",
11:"bas-relief",
12:" place de la poste",
13:"le pont Hongji - 宏际桥, Hóngjì Qiáo sur le ruisseau Xiwen (溪文))",
14:"quatre panneaux muraux décoratifs d'émaux sur porcelaine (ou plaques de porcelaine peintes) encastrés dans des cadres en bois, typique des intérieurs de demeures de notables à Hongcun",
15:"spécialités locales typique de la région du Huizhou (Hongcun ou les environs)",
16:"reflets des maisons traditionnelles sur le Lac du Sud (Nanhu)",
17:"Le Pont Hua de nuit sur le lac du Sud",
18:"La ruelle et le canal",
19:"cadenas à combinaison poétique chinois"
},

tunxi:{
1:"Le Paifang (arche en pierre) marquant l'entrée principale de la rue historique de Tunxi (屯溪老街, Tún xī lǎo jiē)",
2:"boutique de produits locaux dans la vieille rue de Tunxi",
3:"boutiques dans la vieille rue de Tunxi",
4:"boutique de calligraphie traditionnelle dans la rue historique de Tunxi",
5:"linteau de porte en briques sculptées (门楼 / Ménlóu)",
6:"Lǎo Zhāng et Lǎo Wáng concentrés autour d'une partie de Xiangqi (象棋), le jeu d'échecs chinois traditionnel, au bord de la rivière Xin'an (新安江)"
},

monthuangshan:{
1:"Randonnée au mont Huangshan ... dans la brume",
2:" ",
3:" ",
4:" ",
5:"ballet d'imperméables multicolores",
6:"Les stèles gravées de Huangshan",
7:"",
8:"Porteur traditionnel sur les sentiers du mont Huangshan",
9:" ",
10:"Transport en chaise à porteurs (Jiaohu) au mont Huangshan",
11:"tarifs officiels des chaises à porteurs",
12:"",
13:" ",
14:"stèle des 1600 mètres",
15:" ",

},

// xi'an détaillé

armeeenterree:{
1:"la fosse numéro 1 (Pit 1) du site de l'Armée de terre cuite",
2:"guerriers de terre cuite en formation",
3:" ",
4:" ",
5:"général en chef (ou officier supérieur), reconnaissable à sa coiffe spécifique en forme de double écusson (ou queue de faisan), à son armure complexe à écailles descendant très bas et à ses longs nœuds de rubans (noeuds d'attache) sur la poitrine et les épaules",
6:"archer agenouillé",
7:"cygne en bronze grandeur nature, découvert dans la fosse numéro 7 du complexe funéraire",
8:"arrière de la fosse numéro 1 qui sert d'atelier de restauration",
},

xiancentre:{
1:"La Tour de la Cloche de Xi'an (西安钟楼, Xī'ān zhōnglóu) de nuit",
2:"La Tour du Tambour (鼓楼 - Gulou)",
3:"La Tour de la Cloche (钟楼)",
4:"La Tour du Tambour (鼓楼)",
5:"à la tour du tambour : ensemble de Bianzhong (编钟), un carillon traditionnel de cloches en bronze suspendues",
6:"à la tour du tambour : la galerie des tambours des termes solaires",
7:"la tour de la cloche depuis la tour du tambour",
8:"stands culinaires dans la rue Beiyuanmen (北院门, vus depuis la tour du tambour",
9:"Remparts de Xi'an - La Porte d'Anding (安定门)",
10:"Le Paifang (portique) du Temple du Dieu de la Ville (Xi'an Chenghuang Miao)",
11:"façade du restaurant 一向星月楼 」 (Yīxiàng Xīngyuè Lóu — Le Pavillon des Étoiles et de la Lune)",
12:"L'esplanade du centre commercial Kaiyuan de nuit ((开元商城 - Kaiyuan Shangcheng)"
},

petitepagode:{
1:"la Petite pagode de l'oie sauvage (小雁塔 - Xiǎoyàntǎ)",
2:"stèle gravée intitulée « 雁塔游记 » (Yàntǎ Yóujì, Récit d'un voyage à la Pagode de l'Oie)",
3:'la Cloche de la Grue Divine',
4:"la véritable cloche en fer de l'ère Mingchang (dynastie Jin), coulée en 1192 (la troisième année de l'ère Mingchang)",
5:"Des centaines de rubans de soie et de petites cartes. Les dévots et voyageurs y inscrivent des prières de bonne santé, de réussite aux examens (高考), de bonheur familial ou de fortune.",
6:"zone des stèles/sculptures de la Petite pagode de l'oie sauvage",

},

grandepagode:{
1:"La Grande pagode de l'oie sauvage (大雁塔)",
2:"salle de dévotion située au sein du grand complexe du Temple Da Ci'en (大慈恩寺), qui abrite la Grande pagode de l'oie sauvage à Xi'an.",
3:'le Bouddha Gautama (Sakyamuni), le Bouddha historique, assis en tailleur sur un trône de lotus et ses disciples',
4:'Le Bouddha Amitabha',
5:"intérieur du Pavillon de la Cloche (钟楼 - Zhonglou) du complexe de la Grande pagode de l'oie sauvage (Temple Da Ci'en) à Xi'an - la cloche et le bodhisattva Kshitigarbha",
6:'intérieur du Pavillon du Tambour et statue de la bodhisattva Guanyin',
},

grandemosquee:{
1:"Grande arche de la Grande Mosquée de Xi'an (西安大清真寺)",
2:"le Portail en pierre (ou arche de pierre), qui marque l'entrée de la troisième cour",
3:"le Pavillon de l'Introspection (省心楼 - Shǐngxīn Lóu)",
4:"linteau supérieur d'une porte de passage en briques (une porte de communication entre deux cours)",
5:"arche en briques grises, surmontée d'un cartouche sculpté affichant la calligraphie arabe « Al-Hamdulillāh » (La louange est à Allah)",
6:'façade de la Grande Salle de Prière (礼拜大殿 - Lǐbài Dàdiàn)',
7:"portail d'accès à la cour principale menant à la Salle de Prière",
},


// thèmes

nourriture:{
1:"menu de raviolis chinois (Jiǎozi,饺子) - Shuǐjiǎo (水饺) : Raviolis bouillis, Zhēngjiǎo (蒸饺) : Raviolis à la vapeur, Jiānjiǎo (煎饺) : Raviolis grillés à la poêle",
2:"Soupe de vermicelles et pain plat",
3:"magasin de fruits et légumes à Xi'an",
4:"magasin de nouilles fraîches du village de Chen",
5:"à Maijishan, préparation des pâtes fraiches",
6:"à Xi'an, préparation de brochettes de calamars",
7:"brochettes de calamars",
8:"préparation des Huángshān Shāobǐng (黄山烧饼), petits pains croustillants farcis (souvent aux légumes séchés et à la viande)",
9:"Paniers de riz noir au jujube et zongzi à la vapeur (riz gluant enveloppé dans des feuilles de bambou ou de roseau)",
10:" échoppe de thé à Hongcun",
11:"Vente de kiwanos (concombres cornus) sur un étal à Hongcun",
12:"Stand de Bingtanghulu (冰糖葫芦), brochettes de petites baies d'aubépine sauvage acidulées, enrobées de sucre candi croustillant",
13:"Bouteille de bière Yanjing",
14:"Émincé de porc à la sauce Pékinoise servi avec des feuilles de tofu (京酱肉丝配豆腐皮, Jīngjiàng ròusī pèi dòufupí)",
15:"cubes de glace au yaourt à Pingyao",
16:" bouteille de bière 激情平遥 (Jīqíng Píngyáo) - Passion Pingyao è Pingyao",
18:"Dégustation de jiaozi dans un restaurant",
19:"vendeur de décopons (variété d'oranges à gros calibre) - paiement par scan du QR code",
20:"Préparation d'un sandwich traditionnel chinois (肉夹馍, Roujiamo) à Maijishan",
21:"dégustation de Roujiamo à Maijishan",
22:" ",
},

transports:{

1:'La gare de Beijing Nord',
2:'Contrôle des bagages à l’entrée de la gare de Nankin Sud',
3:"salle d'attente à la gare de Beijing Nord",
4:"hall de la gare de Hangzhou",
5:"contrôle du passeport/billet en gare de Xi'an Nord",
6:" ",
7:"train à grande vitesse CRH5A - Hexie Hao (和谐号), Harmonie",
8:"train à grande vitesse CR300BF - de la série Fuxing Hao (复兴号), Renaissance",
9:" train à grande vitesse CR400AF, de la série Fuxing Hao (复兴号 - Renaissance, fleuron actuel de l'industrie ferroviaire chinoise, roule à 350 km/h",
10:"Le Maglev, train à lévitation magnétique en gare de Longyang Lu (龙阳路) à Shanghai",
11:"à l'intérieur d'un CR400",
12:"achat de billets du métro de Beijing en scannant le QR code affiché sue l'automate",
13:"dans le métro de Beijing",
14:"métro de Beijing - station Panjiayuan ouest",
15:" sur la ligne 2 du métro de Shanghai",
16:"dans le bus à Xi'an",
17:"dans le bus à Xi'an",
18:"achat de billets du métro de Xi'an; le QR code sur le téléphone est scanné par l'automate",
},

chinois:{
1:"installation artistique poétique composée de calligraphies découpées et suspendues; texte extrait de l'œuvre 人生真味 (Le vrai goût de la vie) de l'écrivain et résistant chinois Ke Ling (柯灵)",
2:"au Temple de Dongyue à Shanghai",
3:"à la pagode de la petite oie sauvage, stèle expliquant l'origine du temple, datant du règne de l'empereur Kangxi de la dynastie Qing (entre 1661 et 1722) ",
4:"œuvre littéraire et poétique gravée dans la pierre; 雁塔游记 (Yàntǎ Yóujì), Récit d'un voyage à la Pagode de l'Oie",
5:"panneaux dans le métro de Xi'an",
6:"quel bus devons-nous prendre et à quel arrêt descendre?",
7:" un chaud et froid chinois (热的 - Rè / 冷 - lěng)",
8:" dans la vieille ville de Tianshui, si on se perd, on a un plan 😂",
9:"à Nanjing, 此山明太祖之墓 (Cǐ shān Míng Tài Zǔ zhī mù) : l'inscription se lit de droite à gauche : Cette montagne est la tombe de l'Empereur Ming Taizu",
10:"Guide de conduite du citoyen chinois pour un tourisme civilisé à l'étranger", 
11:"toilettes à siège ... ",
12:"plan de la ligne 10 du métro de Beijing",
13:"affiche d'engagement du responsable de la distribution éléctrique à fournir un service exemplaire"
},


scenesrue:{
1:"préparation des pousses de bambou",
2:"Dishū (地书) - calligraphie à l'eau sur le sol, activité pratiquée souvent dans les parcs; ici au palais d'été à Beijing",
3:"Xiangqi (échecs chinois) à Tianshui",
4:"Dishu dans un parc à Nanjing",
5:"une partie d'échecs chinois à Tunxi",
6:"si le scooter tombe en panne, il pourra rentrer en vélo 😂",
7:"tricycle de collecte de déchets - 其他垃圾 (Qítā lājī) - autres déchets (non recyclables)",
8:"au magasin de pinceaux de calligraphie, un français invité à faire un essai 😉",
9:"tricycle de cargaison à Shanghai",
10:"marchand de fruits frais et son tricycle de transport électrique (电动三轮车), à Hangzhou",
11:"le livreur de fleurs au casque jaune, à Hangzhou"
},

police:{
1:"contrôle avec reconnaissance faciale à l'entrée de la Cité Interdite",
2:"un arbre à cams sur la place Tian An Men",
3:"à Fengyujou (Xi'an), notre rando (gpx téléchargé) est dans une zone interdite aux étrangers - demi-tour !",
4:"reconnaissance faciale pour la navette à Maijishan",
5:"reconnaissance faciale encore ! mais cette-fois, échec ! mais je peux quand-même entrer",
6:"dans le métro de Shanghai, policemen, women and dogs",
7:"robots de police autonomes à Pingyao",
8:"robot de police à la gare de Hangzhou"
}

}


const notes = {

monthuangshan: {

6: `
Ce monument est un témoignage typique de la culture des lettrés chinois. Au fil des siècles, les poètes et officiels gravissaient ces montagnes, y ressentaient une profonde connexion spirituelle, et laissaient leur marque (un poème, un nom, une pensée) gravée dans la pierre. Les générations suivantes venaient ensuite lire ces inscriptions, y ajoutant parfois leurs propres commentaires ou restaurant les anciennes pour préserver ce patrimoine littéraire à ciel ouvert.
Sur la grande dalle inférieure, on lit « Han Jiang Zi » (寒江子) qui signifie « L'Homme du Fleuve Glacé ». C'est très probablement un nom de plume, un pseudonyme (Hao) ou le nom taoïste d'un lettré, d'un poète ou d'un calligraphe venu chercher l'inspiration ou l'isolement dans ces montagnes. Juste à côté, on distingue deux grands caractères plus larges et stylisés, 獨坐 (Dú Zuò), qui signifient « Assis Seul ». C'est une référence classique à la méditation, à la contemplation solitaire face à l'immensité de la nature, un thème récurrent dans la poésie de la dynastie Tang.
La petite stèle rectangulaire incrustée plus haut, aux caractères dorés sur fond sombre, est un ajout beaucoup plus récent (généralement de la fin du XXe siècle ou du début du XXIe siècle). Elle sert de cartel explicatif : le texte explique l'origine des caractères du bas, qui les a écrits, à quelle époque, et documente les travaux de restauration ou de préservation du site classé
Le texte explique que « Han Jiang Zi » (寒江子) n'est autre que le pseudonyme taoïste de Jiang Tianyi (江天一) (1603–1647).
Jiang Tianyi était un célèbre lettré, érudit et calligraphe originaire de la région (le Huizhou / Shexian). C'était un homme d'un immense talent littéraire, profondément attaché aux paysages de Huangshan.
Le texte supérieur rappelle l'histoire tragique et héroïque derrière ces caractères : lors de la chute de la dynastie Ming et de l'invasion par la dynastie Qing (mandchoue) dans les années 1640, Jiang Tianyi a refusé de se soumettre. Il a activement organisé une armée de résistance locale pour défendre sa patrie. Capturé par les troupes Qing, il a refusé de prêter allégeance au nouvel empereur et a été exécuté en martyr en 1647.
`,

  8: `Vêtu d'une chasuble rouge numérotée (indiquant son enregistrement officiel auprès du parc), d'une casquette orange et de chaussures de marche, il transporte ses charges à l'épaule à l'aide d'une palanche en bambou (Danzilu).
Deux grands sacs en toile bleue, lourdement chargés (vraisemblablement de marchandises pour les hôtels du sommet ou de déchets redescendus vers la vallée), sont suspendus à chaque extrémité du fléau, maintenant un équilibre précaire à chaque pas.
... un esclavage qui a traversé les époques ...`,

  10: `autre forme d'esclavage : deux hommes, vêtus d'un uniforme d'une pièce bleu de travail (la tenue officielle des services de transport du parc), unissent leurs forces. Le premier ouvre la marche en portant les perches à l'épaule, tandis que le second maintient fermement l'arrière de la structure pour garder la passagère bien droite dans la pente des escaliers de pierre.`,

  11: `Les tarifs ne se négocient pas au hasard à la tête du client sur les sentiers ; ils sont indexés selon trois critères très précis visibles sur les colonnes des tableaux :
La distance et le dénivelé : Chaque tronçon d'escalier a un prix fixe défini par le parc, calculé par rapport à la difficulté physique de la portion (montée abrupte ou plat).
Le type de prise en charge : Les tableaux font la distinction entre un trajet simple (aller simple d'un point A à un point B) et des forfaits spécifiques ou des détours.
Le poids du visiteur : C'est une particularité importante de la réglementation à Huangshan. La grille tarifaire de base s'applique généralement pour les personnes en dessous d'un certain poids (souvent 80 kg). Au-delà, un supplément tarifaire est appliqué (clairement mentionné dans les petites lignes de notes au bas des tableaux) car l'effort physique demandé aux deux porteurs augmente considérablement.

Quelques indications de prix :
- Trajets courts (liaisons téléphériques ➡️ sommets proches) : entre 100 ¥ et 200 ¥ (soit environ 13 € à 26 €) pour des petites portions de 1 à 1,5 km reliant les stations de téléphérique aux premiers belvédères.
- Trajets moyens (vers les grands hôtels de montagne comme le Xihai) : entre 300 ¥ et 450 ¥ (soit environ 40 € à 58 €). C'est le tarif classique pour être transporté depuis les zones d'arrivée des cabines jusqu'aux hôtels situés sur les crêtes (Beihai, Xihai, Paiyun).
- Trajets longs ou très abrupts (ex: Pic du Lotus ou descentes majeures) : de 600 ¥ jusqu'à plus de 800 ¥ (soit 75 € à 100 € et plus) pour les itinéraires les plus techniques et longs.`
},

citeinterdite: {

11:"Lorsqu'on active le mécanisme, le personnage habillé à la mode européenne, trempe son pinceau dans l'encre et écrit avec une calligraphie parfaite huit caractères chinois : 八方向化，九土来王 (Bā fāng xiàng huà, jiǔ tǔ lái wáng, des quatre coins du monde, on se tourne vers la civilisation [chinoise] ; des neuf terres, les rois viennent rendre hommage). C'était un symbole fort du prestige de l'empereur.",
13:"matériaux précieux : matériaux symboliques comme le quartz rose et la tourmaline pour les pêches, ainsi que des perles de Mandchourie. Technique du Diancui : le vert éclatant des feuilles est obtenu par la pose de plumes de martin-pêcheur, une technique royale extrêmement fragile et raffinée. Symbolisme : L'objet est conçu comme un rébus de bon augure : l'association des pêches (longévité) et du symbole Wan 卍 (éternité) exprime un vœu de vie infinie pour celle qui le porte. dynastie Qing",
18:"dans cette salle étaient abrités les 25 sceaux impériaux, symboles du pouvoir administratif. Le panneau horizontal au-dessus du trône affiche deux caractères calligraphiés par l'empereur Kangxi: Wu Wei » (無為). Ils prônent le concept taoïste du « non-agir » ou du gouvernement par la vertu et l'harmonie plutôt que par la force.",
19:"Le grand panneau horizontal affiche quatre caractères : 仁德大隆 (Rén dé dà lóng) -  Que la vertu et la bienveillance s'épanouissent grandement - XVIIIe siècle",
22:"vue sur l'axe nord-sud du palais impérial révélant la succession majestueuse des toits de tuiles vernissées jaunes, avec au premier plan la Porte de la Prouesse Divine (Shenwu Men) et les douves, témoignant de la rigueur géométrique et de l'immensité de la cité sous les dynasties Ming et Qing"
},


pekinville: {
6: `Le quartier d'art de 798 (798 艺术区) est une immense zone piétonne installée dans d'anciennes usines militaires des années 1950 à l'architecture d'inspiration Bauhaus.
Devenu le cœur de l'art contemporain à Pékin, ce lieu unique mêle d'imposantes structures industrielles désaffectées, des galeries d'art d'avant-garde, des sculptures en plein air et des cafés branchés.`,
},

tunxi: {
  3: `
Les boutiques et enseignes :

Au premier plan à droite, le grand panneau noir affiche 「江南丝绸」 (Jiāngnán sīchóu / Soie du Jiangnan), une boutique proposant des vêtements traditionnels (notamment des robes de style Hanfu ou Qipao) exposés sur des cintres et des mannequins.

Juste au-dessus de l'entrée à l'extrême droite, on distingue l'inscription 「屯溪老街」 (Tunxi Laojie) sérigraphiée sur le montant en bois, ainsi que le numéro de rue 56号 (N° 56).

La boutique suivante met en avant de l'artisanat local, avec des étals extérieurs chargés de petits objets souvenirs et d'ustensiles en bois ou en bambou.

L'architecture Huizhou : On retrouve la structure classique des commerces de l'époque des Ming et des Qing, avec des façades d'étage entièrement en bois sombre finement sculpté, contrastant avec les murs pignons blancs (murs coupe-feu dits "en tête de cheval") que l'on aperçoit en arrière-plan.

  `,

4: `
Les pinceaux de calligraphie (毛笔 / Máobǐ) : Des dizaines de pinceaux de tailles, de poils (chèvre, loup, lièvre) et de manches différents (bambou, bois précieux, corne) sont suspendus verticalement. Beaucoup ont la pointe protégée par un capuchon en plastique transparent.

Les pierres à encre (砚台 / Yàntái) : En bas à droite, on aperçoit des pierres à encre circulaires et sombres, indispensables pour broyer les bâtons d'encre solide. La région du Huizhou est mondialement connue pour ses pierres à encre de She (Shexiàn / 歙砚).

Les bâtons d'encre (墨条 / Mòtiáo) : Juste à côté des pierres, sur les présentoirs en bois, sont alignés des bâtons d'encre solide, souvent décorés de calligraphies dorées ou de motifs sculptés.

  `,

5: `
L'inscription centrale se lit de droite à gauche : 墨 未 流 徽  : 墨 (Mò) / 未 (Wèi) / 流 (Liú) / 徽 (Huī).Sens littéral : "L'encre n'a pas cessé de couler dans le Huizhou" ou "L'éclat/la culture du Huizhou se diffuse comme une encre intarissable".Signification culturelle : C'est un hommage direct à la tradition littéraire de la région et à sa spécialité historique mondiale : la fabrication de l'encre de Hui (徽墨 / Huīmò), réputée pour sa qualité inégalée auprès des peintres et calligraphes chinois depuis la dynastie Tang.
`,



},

xiancentre: {
  "1": "la musique que vous entendez, nous l'entendions un peu partout à Xi'an; il s'agit de 西安人的歌 (Xī'ān rén de gē, La chanson des gens de Xi'an) par Cheng Bo (程渤).\nC'est Un hymne chanté en dialecte local qui célèbre l'identité de la ville à travers ses remparts, ses monuments historiques et ses spécialités culinaires.",
  "6": "Chaque tambour porte le nom calligraphié de l'un des 24 termes solaires (Jiéqì) du calendrier agricole traditionnel chinois.\n\nSur le tout premier tambour au premier plan, on lit « 立春 » (Lìchūn — « Le début du printemps »), également traduit en anglais sur la petite plaque explicative noire en dessous.\n\nSur les suivants, on distingue « 雨水 » (Yǔshuǐ — « L'eau de pluie ») et « 惊蛰 » (Jīngzhé — « L'éveil des insectes »)."
},

grandepagode: {
1:"La Grande pagode de l'oie sauvage, érigée à Xi'an en 652 sous la dynastie Tang, a été initialement construite à la demande du célèbre moine voyageur Xuanzang pour abriter les précieux sutras et reliques bouddhiques qu'il avait rapportés d'Inde après un périple de 17 ans. Elle partage l'origine de son nom avec sa petite sœur, inspirée par la légende de l'oie sauvage sacrificielle tombée du ciel pour guider des moines vers une piété plus stricte. Contrairement à la silhouette élancée de cette dernière, la Grande pagode se distingue par une architecture massive et géométrique en briques grises, formant une pyramide stricte à base carrée qui imite fidèlement les structures traditionnelles en bois. Bien qu'elle ait également souffert du terrible séisme de 1556, elle a conservé sa régularité structurelle tout en étant réduite de ses dix étages d'origine à sept niveaux aujourd'hui. Dominant majestueusement le complexe du temple Da Ci'en, son sommet parfaitement couronné d'un dôme intact en forme de stupa incarne la stabilité monumentale de l'âge d'or des Tang.",
},

petitepagode: {
1:"La Petite pagode de l'oie sauvage, érigée à Xi'an sous la dynastie Tang (vers 707-709), a été construite pour abriter les précieux sutras bouddhiques rapportés d'Inde par le moine voyageur Yijing. Elle doit son nom à une légende selon laquelle des moines bouddhistes affamés, ayant prié pour obtenir de la viande, virent une oie sauvage tomber du ciel, ce qui fut interprété comme un signe du Bouddha les incitant à une piété plus stricte. Sa silhouette unique et élancée résulte des nombreux séismes qu'elle a traversés, notamment le grand tremblement de terre de 1556 qui a détruit ses deux derniers étages. L'édifice a miraculeusement survécu à ces secousses grâce à des fondations hémisphériques ingénieuses qui répartissent l'onde de choc. Culminant aujourd'hui à 13 étages au lieu des 15 d'origine, son sommet plat et asymétrique reste la cicatrice historique de sa résilience face aux éléments.",
6:
"Sculptées sous les Tang (618 – 907 apr. J.-C.) ou les Song (960 – 1279 apr. J.-C.), ces statues faisaient partie de l'allée solennelle (Shendao ou « Voie des Esprits ») menant aux sépultures des nobles ou des empereurs."
},




grandemosquee: {
        1: "La Grande Mosquée de Xi'an est l'une des plus anciennes de Chine, fondée en 742 sous la dynastie Tang. Elle adopte une architecture presque entièrement chinoise traditionnelle (sinisation) pour s'implanter durablement : structure en cinq cours successives sur un axe de 250 mètres, charpentes en bois imbriqué sans clous et toits en tuiles vernissées. L'influence islamique s'exprime pleinement à l'intérieur, notamment dans la grande salle de prière mêlant calligraphies arabes et motifs floraux chinois.",
        
        2: "le Portail en pierre (ou arche de pierre), qui marque l'entrée de la troisième cour",
        
        3: "Le Pavillon de l'Introspection (省心楼 - Shǐngxīn Lóu). C'est le véritable minaret de la mosquée, conçu sous la forme d'un pavillon chinois octogonal à deux étages avec un triple toit retroussé. Les grands piliers en bois portent de magnifiques inscriptions en caractères sigillaires chinois anciens (style Zhuanshu), exprimant les fondements spirituels de l'Islam sous une forme impériale.",
        
        4: "Linteau supérieur d'une porte de passage en briques. Dans le cartouche rectangulaire central est sculptée une célèbre calligraphie arabe en style Thuluth (un hadith du prophète Mahomet) : « Al-masājidu baytu al-muttaqīn », ce qui se traduit par : « Les mosquées sont la demeure des pieux ».",
        
        5: "arche en briques grises, surmontée d'un cartouche sculpté affichant la calligraphie arabe « Al-Hamdulillāh » (La louange est à Allah)",
        
        6: "Façade de la Grande Salle de Prière (礼拜大殿). Traduction des panneaux, de gauche à droite : 1. 本然清高 (Naturellement pur et noble) / 2. 爲善最樂 (Faire le bien est la plus grande des joies) / 3. Profession de foi (Shahada) en calligraphie Sini : « Il n'y a de divinité qu'Allah et Mahomet est Son messager » / 4. 惟精惟一 (Être pur et unique, tiré du Shujing) / 5. 譽延萬民 (Que les bénédictions et la gloire s'étendent à tous les peuples).",
        
        7: "portail d'accès à la cour principale menant à la Salle de Prière"
    },


hangzhou:{
12:`Le texte est écrit en caractères réguliers traditionnels (Kaishu) et se lit verticalement, de droite à gauche. Il s'agit d'un poème décrivant la beauté cachée et l'atmosphère intemporelle des paysages de montagnes et de grottes :

栖霞岭在岳庙西， (Le mont Qixia se trouve à l'ouest du temple de Yue Fei)
中有栖霞紫云全， (En son sein, les nuages violets du mont Qixia se rassemblent)
盛三洞岭， (Remplissant les cols et les trois grottes)
极其古， (Dont l'atmosphère est infiniment antique)
剑门天岳飞部将牛皋墓在天。 (Près de là, vers le ciel, se trouve la tombe de Niugao, le général en chef de Yue Fei)
接近石画， (Tout près des parois de roche peintes par la nature)
家余冢立， (Où subsistent les sépultures ancestrales)
憩旧亦在岭上。 (Et où l'on vient encore se reposer sur la colline comme autrefois.)

Il évoque les sites historiques entourant le lac de l'Ouest, notamment la colline de Qixia, les grottes cachées et le souvenir des héros de la dynastie Song (le général Yue Fei et son fidèle lieutenant Niugao, dont les tombeaux sont de célèbres lieux de mémoire à Hangzhou).`,
},


tianshui:{
1:`
Situé dans la province du Gansu, ce pic de grès rouge unique s'élève brusquement à 142 mètres de hauteur. Sa forme caractéristique lui a valu son nom, qui signifie littéralement « la montagne en meule de blé ».
éléments clés visibles sur cette image :
🧗‍♂️ Les passerelles suspendues et l'architecture
L'aspect le plus vertigineux du site est son réseau de passerelles et d'escaliers en bois et béton, ancrés à même la paroi rocheuse verticale. Ils relient les différentes grottes et niches artificielles creusées à flanc de falaise. Ce labyrinthe suspendu permet aux visiteurs (et permettait autrefois aux moines) de naviguer entre les différents niveaux d'autels bouddhiques.
🗿 La triade monumentale (Niche 13)
Sur la gauche de la falaise, à mi-hauteur, on distingue un impressionnant groupe de trois statues géantes sculptées en haut-relief (Niche 13, appelée le Grand Bouddha de Dongya).
Le Bouddha central : Il s'agit de Siddhartha Gautama (le Bouddha historique), qui mesure près de 16 mètres de haut.
Les deux Bodhisattvas : Il est flanqué de part et d'autre de ses deux acolytes spirituels.
Ces statues ont une structure interne en pierre, mais ont été recouvertes d'argile modelée puis peinte (une technique de sculpture sur argile typique de Maijishan, rendue nécessaire par la friabilité du grès local). Bien que le groupe actuel présente des restaurations datant des dynasties Sui et Song, ses origines remontent à la période des Dynasties du Nord.  
`,
10:`les inscriptions sont ... des graffitis ! sur le bras, il est écrit "周玉山到此", Zhou Yushan dào cǐ, Zhou Yushan est venu ici ; sur la cuisse droite, à nouveau Zhou Yushan. Sur les pétales de lotus (en bas), il est écrit "袁海林游此二次", Yuán Hǎilín yóu cǐ èr cì,Yuan Hailin a visité cet endroit pour la deuxième fois   
`,

12:`L'architecture des niches : Conçue sous la dynastie des Zhou du Nord (北周, $VI^e$ siècle), cette structure unique imite l'architecture des palais en bois de l'époque impériale. La paroi rocheuse a été creusée pour former sept grandes niches rectangulaires alignées, chacune fermée par des portes et des claustras en bois pour protéger les œuvres de l'érosion.Le Gardien de gauche : Tout au fond à gauche de la passerelle, à l'angle extérieur du pavillon, se dresse une impressionnante statue de Dvarapala (Vajrapani), un gardien du Dharma à l'allure athlétique, au torse musclé et au visage farouche, destiné à repousser les influences néfastes.Les sculptures sur les piliers : Sur les sections de roche brute qui séparent les portes en bois, on distingue des reliefs de gardiens et de divinités mineures sculptés à même la paroi et enduits d'argile, bien que partiellement érodés par le temps.`,


19:`« Éclairer le monde au début des temps » est une référence au rôle mythique de Fuxi, qui a apporté la connaissance, l'ordre et la civilisation à l'humanité alors plongée dans le chaos de l'ignorance.`,

20:`
Au centre, abritée par des tentures impériales jaunes, trône la statue monumentale de Fuxi.
Fidèle à l'iconographie traditionnelle, il est représenté drapé dans une peau de bête ou de feuilles (rappelant son statut de figure de la préhistoire mythique).
Il tient entre ses mains le disque du Yin et du Yang (Taiji) entouré des huit trigrammes (Bagua), symbolisant sa compréhension des lois fondamentales de l'univers.
Le Yin et le Yang représentent deux forces opposées et complémentaires qui, en s'harmonisant, régissent le mouvement et l'équilibre de tout l'univers.
☯️ Le Yin (partie noire) : Le féminin, le sombre, le froid, la lune, la passivité, l'eau, l'intériorité.
☯️ Le Yang (partie blanche) : Le masculin, la lumière, le chaud, le soleil, l'activité, le feu, l'extériorité.
Le plafond des Trigrammes (八卦天花) : c'est l'un des trésors artistiques majeurs de ce temple, datant de la dynastie Ming. Le plafond à caissons est entièrement peint de sinogrammes représentant les trigrammes du Bagua. Chaque caisson contient un agencement unique de lignes pleines (Yang) et brisées (Yin), dessinant une carte cosmologique complexe au-dessus de la divinité.
`,
21:`
Cette peinture murale traditionnelle représente également Fuxi (伏羲), le premier des trois Augustes de la mythologie chinoise, mise en valeur au sein du complexe du temple de Fuxi à Tianshui.
Cette fresque illustre parfaitement son statut de figure mythologique de la préhistoire et de fondateur de la civilisation. On y retrouve ses attributs iconographiques traditionnels :
L'apparence primitive : Fidèle aux récits de l'antiquité mythique, Fuxi est représenté torse nu, portant un collier de feuilles autour du cou et une peau de bête tachetée (un léopard ou une panthère) autour de la taille.
La contemplation de la nature : Assis sur un rocher escarpé au milieu des éléments déchaînés (les vagues à droite, les nuages et les oiseaux à gauche), il est représenté en pleine observation des lois de la nature et de l'univers, une réflexion contemplative qui l'amènera à concevoir les huit trigrammes (le Bagua).
La faune et la flore : À ses côtés, la présence de biches (ou de cerfs) au repos, de pins tortueux et d'oiseaux en plein vol symbolise l'harmonie avec le monde vivant et la nature sauvage qu'il va apprendre à apprivoiser (on lui attribue notamment l'invention de la chasse, de la pêche avec des filets, et de l'élevage).
`,

22:`
En observant le dessin de gauche à droite, on distingue la naissance des activités fondamentales de la société :

La chasse et la domestication (en haut et en bas à gauche) : Des personnages armés d'arcs traquent le gibier, tandis que des chèvres et des bœufs sont représentés au premier plan, illustrant l'invention de l'élevage et de la chasse.

La musique (en bas à gauche) : Une femme joue d'un instrument à cordes allongé près de Fuxi. La légende dit qu'il a inventé le Guzheng (ou la cithare Guqin) pour apporter la joie et l'harmonie aux hommes.

La cuisson des aliments (en bas à droite) : Un grand feu de bois montre la cuisson d'un animal (un sanglier ou un cochon). Fuxi a appris aux humains à cuire la viande pour qu'elle soit plus facile à digérer, d'où son autre nom parfois utilisé : Paoxi (le cuiseur).

La pêche (à l'extrême droite) : On aperçoit un personnage au bord de l'eau attrapant un poisson avec un pic ou un filet, une technique que Fuxi aurait calquée sur l'observation des toiles d'araignées.
`,
},


armeeenterree:{
1:`Le 29 mars 1974, près de Xi'an, alors qu'un paysan creusait un puits, il met au jour des fragments de terre cuite et des pointes de flèches en bronze révélant la plus grande découverte archéologique du XXe siècle : la nécropole cachée du premier empereur de Chine.

Le commanditaire de ce chantier colossal est Qin Shi Huang, le souverain qui unifia la Chine en 221 av. J.-C. Habité par la peur de la mort et en quête  d'immortalité, il ordonne la construction de son complexe funéraire dès son accession au trône à l'âge de 13 ans. Pendant près de 38 ans, plus de 700 000 ouvriers et prisonniers vont être réquisitionnés pour bâtir un empire souterrain, destiné à protéger l'empereur et à prolonger son règne dans l'au-delà.

Répartie principalement dans trois grandes fosses, cette armée d'outre-tombe frappe par son gigantisme et son ultra-réalisme. Elle compte environ 8 000 soldats de terre cuite, tous dotés de traits de visage, d'expressions et de coiffures uniques selon leur grade. À l'origine, ces guerriers étaient peints de couleurs vives et équipés de vraies armes en bronze. Pour compléter cette force militaire, les archéologues ont dénombré 130 chars en bois et près de 670 chevaux.

L'environnement recréé s'étend bien au-delà de l'aspect militaire : afin de reconstituer le cadre de vie de l'empereur, les artisans ont façonné des oiseaux en bronze grandeur nature (comme des cygnes, des grues et des canards) installés au bord d'un fleuve artificiel. Des statues de fonctionnaires, de musiciens et d'acrobates composent également cette cour éternelle.

Bien que l'armée de terre cuite soit largement explorée, le tombeau de l'empereur lui-même, situé sous un tumulus à 1,5 kilomètre des fosses, reste totalement inviolé. Les autorités chinoises se refusent à l'ouvrir pour deux raisons majeures :

La préservation scientifique : L'air moderne détruit instantanément les pigments de peinture d'origine des statues. Les fouilles sont donc suspendues en attendant de développer une technologie garantissant une conservation absolue.

Le danger mortel du mercure : L'historien ancien Sima Qian décrivait la chambre funéraire comme un monde miniature où coulaient des fleuves de mercure liquide. Les analyses géochimiques modernes ont confirmé le mythe en révélant des concentrations de mercure 100 fois supérieures à la normale, rendant l'ouverture du site extrêmement toxique et dangereuse.`
},

palaisdete:{
2:`Construite à l'origine sous le règne de l'empereur Qianlong (dynastie Qing) puis reconstruite sous Guangxu après avoir été incendiée par les forces franco-britanniques en 1860, c'est la plus grande des six portes-tours fortifiées qui jalonnent les rives du lac Kunming.
Le sac du palais d'été qui avait visé l'Ancien Palais d'Été (Yuanmingyuan) avait aussi englobé le Qingyiyuan (qui deviendra plus tard le Nouveau Palais d'Été) 
`,

5:`
L'écriture cursive reprend des vers d'un poème classique très célèbre de Su Shi (dynastie Song), intitulé Prélude à la mélodie de l'eau (水调歌头).

On peut notamment lire de droite à gauche (et du haut vers le bas) les caractères :

把酒问青天 : "Levant mon verre, je demande au ciel d'azur..."

何事长向别时圆 : "Pourquoi [la lune] est-elle toujours si pleine au moment de la séparation ?"
`,


9:`
La stèle en pierre porte une inscription calligraphiée de la main même de l'empereur Qianlong (dynastie Qing). Le texte consacre le nom officiel des lieux : la Colline de la Longévité (Wanshou Shan) et le Lac Kunming. L'empereur y détaille les gigantesques travaux de dragage et d'aménagement hydraulique qu'il a ordonnés pour transformer l'ancien étang en un immense lac impérial dédié aux loisirs de sa mèrel l'Impératrice douairière Chongqing (崇慶皇太后).
`,



12:"Construit à l'origine en 1755 sous le règne de l'empereur Qianlong, ce grand pavillon sur l'eau possédait une superstructure en bois de style traditionnel. Il a été incendié par les forces franco-britanniques en 1860. En 1893, l'impératrice douairière Cixi l'a fait reconstruire, en y ajoutant deux étages avec des cabines dotées de grandes glaces et d'éléments décoratifs inspirés de l'architecture occidentale (comme des fausses roues à aubes de chaque côté).",

},

nankin:{
3:`
Sun Yat Sen a renversé la dernière dynastie impériale (les Qing) en 1911 et a fondé la République de Chine, unifiant le pays autour de ses idéaux de démocratie et de modernité. Il reste aujourd'hui l'une des très rares figures historiques respectées et célébrées à la fois en Chine continentale et à Taïwan.
Cette stèle est l'un des rares monuments officiels de cette époque en Chine continentale à avoir traversé le XXe siècle et la Révolution culturelle sans être modifiée ni endommagée.
On distingue parfaitement le soleil blanc à 12 rayons gravé dans la pierre, qui est l'emblème du Kuomintang (et que l'on retrouve aujourd'hui sur le drapeau de Taïwan).
`,

5:`
Ces gardiens de pierre figés pour l'éternité avaient pour rôle de veiller sur l'esprit de l'empereur défunt, de l'escorter symboliquement et de marquer la transition solennelle entre le monde des vivants et la nécropole impériale.
La section des figures humaines (Wengzhong) de l'allée sacrée comprend un total de quatre paires de statues en pierre de style Ming, sculptées d'un seul bloc. On y trouve deux paires de généraux militaires (portant l'armure et l'épée) et deux paires de fonctionnaires civils (comme ceux visibles ici), l'une paire étant debout et l'autre dans une posture légèrement différente ou des attributs distinctifs selon le rang.
`,

6:`
la section des animaux en pierre (石象生, Shixiangsheng) :
Pour chaque espèce animale présente sur le chemin, on trouve quatre statues : une première paire d'animaux accroupis ou couchés (comme ce chameau), suivie d'une paire d'animaux debout. Ce changement de posture symbolisait la relève de la garde, assurant une veille permanente et éternelle auprès de l'empereur défunt.
Le symbolisme du chameau : Le chameau de Bactriane (à deux bosses) représentait l'immensité du territoire de l'empire, la stabilité des frontières du Nord et du Nord-Ouest, ainsi que la puissance commerciale et les échanges de la dynastie.
Les autres animaux de la voie : En parcourant cette section, on croise successivement 6 espèces différentes (soit 24 statues d'animaux au total) dans cet ordre :
Les lions (force et autorité)
Les Xiezhi (créatures mythologiques symbolisant la justice et l'intégrité)
Les chameaux (vastitude du territoire et endurance)
Les éléphants (paix, prospérité et majesté)
Les Qilin (créatures de bon augure)
Les chevaux (la puissance militaire et le transport)
`,

8:`
Le massacre de Nankin débute en décembre 1937, lorsque l'armée impériale japonaise s'empare de la capitale chinoise de l'époque. Durant six semaines d'une extrême violence, les troupes nipponnes perpètrent des exécutions massives de civils et de soldats désarmés. Les historiens documentent également des viols systématiques à grande échelle et le pillage destructeur de la ville. Ce crime de guerre majeur, dont le bilan est estimé à 300 000 morts par la Chine, reste une blessure mémorielle profonde en Asie.
`,

10:`
Contrairement aux autres œuvres qui montrent la fuite ou l'agonie, celle-ci se concentre sur la dignité humaine. Le moine, reconnaissable à sa robe traditionnelle, s'arrête dans sa fuite, se penche et tend le bras pour fermer délicatement les yeux d'un jeune garçon mort au sol.
`,

},

shanghai:{
6:`Les détails de cet édifice historique :
La forme « fer à repasser » : Situé à l'intersection de cinq rues dans l'ancienne Concession française (notamment Wukang Road et Huaihai Road), sa forme triangulaire caractéristique rappelle immédiatement le célèbre Flatiron Building de New York.

L'architecte : Il a été conçu par le célèbre architecte hongrois László Hudec et achevé en 1924. C'est l'un des tout premiers grands immeubles d'appartements de standing construits à Shanghai.

Le style : C'est un exemple remarquable de style Néo-Renaissance française. Le rez-de-chaussée présente une magnifique série d'arcades en pierre, tandis que les étages supérieurs sont en briques rouges, rythmés par des balcons en fer forgé.`,

7:`Le style Art Déco : Contrairement au style Néo-Renaissance de l'immeuble Wukang situé un peu plus bas sur la même rue, celui-ci est un exemple pur d'architecture Art Déco des années 1930.

Les détails géométriques : La pointe de l'angle se distingue par ses lignes épurées et, surtout, par ses motifs géométriques en escalier (ou en gradins) caractéristiques qui encadrent la fenêtre du premier étage. On remarque aussi des bas-reliefs décoratifs verticaux qui grimpent entre les fenêtres centrales.

L'esprit du quartier : Revêtu d'un crépi gris texturé typique de l'époque à Shanghai, le bâtiment abrite aujourd'hui au rez-de-chaussée le café The Matcha Tokyo, s'intégrant parfaitement à l'ambiance branchée et piétonne de Wukang Road.
`,

8:`
cette villa est célèbre pour son balcon en fer forgé arrondi qui surplombe la rue, visible au-dessus du porche noir. Ce balcon est surnommé de manière très populaire à Shanghai le « Balcon de Roméo » (Romeo's Balcony / 罗密欧阳台)
`,

12:`
Les trois géants en arrière-plan
La Tour de Shanghai (Shanghai Tower - 上海中心大厦) : C'est la plus haute, celle qui s'élève de manière hélicoïdale et semble se perdre dans les nuages. Avec ses 632 mètres, c'est le plus haut gratte-ciel de Chine et le troisième plus haut du monde.

Le Shanghai World Financial Center (上海世界金融中心) : Juste à gauche de la Shanghai Tower, on reconnaît sa silhouette trapézoïdale unique, souvent surnommée « le décapsuleur » en raison de son ouverture rectangulaire au sommet, conçue pour réduire la pression du vent.

La Tour Jin Mao (Jin Mao Tower - 金茂大厦) : Plus à gauche encore, sa structure en gradins rappelle l'architecture des pagodes traditionnelles chinoises tout en utilisant des matériaux ultra-modernes.
`,

13:`
Au centre du pavillon, posée sur un socle en bois sculpté, trône une magnifique pierre de Taihu (Taihu Stone). Ces roches calculaires érodées par l'eau, aux formes tourmentées et percées de trous, sont le summum de l'esthétique des jardins lettrés chinois.

Juste derrière la roche, le panneau calligraphié est une inscription poétique historique qui vante la beauté et l'élégance de ces pierres hautement prisées par les érudits de la dynastie Ming et Qing.
`,


19:`
Sous la fenêtre du premier étage, on peut lire gravé en relief et peint en rouge le nom du complexe résidentiel : 敦中里 (Dūn Zhōng Lǐ).Le suffixe Li (里) : Signifiant "quartier" ou "voisinage", c'est le suffixe classique utilisé à Shanghai pour désigner les communautés d'habitations de type Shikumen ou Lilong construites à la fin du $XIX^e$ et au début du $XX^e$ siècle.La plaque verte : Juste au-dessus du porche bleu, la petite plaque officielle indique 86弄 (86 Nòng), le terme Nong désignant spécifiquement la ruelle ou la ruelle-impasse en shanghaien.

Le fronton tout en haut de la structure affiche sa date de construction : 1930.

Cette période correspond à l'âge d'or du style Art déco à Shanghai et à l'évolution des Shikumen vers des formes plus modernes et géométriques :

Le fronton crénelé : La partie supérieure présente un design géométrique simple et symétrique avec des lignes droites et des ressauts, très caractéristiques des influences architecturales des années 1930.

Les pilastres en briques rouges : Les colonnes engagées de part et d'autre des fenêtres utilisent une brique rouge décorative. En observant de près le sommet de ces sections de briques, on distingue de délicats motifs sculptés en stuc blanc représentant des grappes de raisins, un ornement d'inspiration occidentale symbolisant l'abondance.

Les menuiseries : Les fenêtres centrales en bois, peintes en brun-rouge, ont conservé leurs petits carreaux d'origine, témoignant de l'âge du bâtiment malgré les traces du temps et les vitres parfois opacifiées ou barricadées.

`,


20:`
Caractéristiques architecturales : Le style Qilou / ArcadeCe grand bâtiment d'angle de trois à quatre étages est un magnifique exemple des structures commerciales mixtes construites au début du XXème siècle dans les anciens quartiers d'affaires proches du Bund :Les colonnades et galeries couvertes (Qilou - 骑楼) : Sur la façade de gauche, le rez-de-chaussée est en retrait derrière une rangée de piliers massifs en béton. Cela crée une galerie couverte au-dessus du trottoir. Ce style, importé des colonies d'Asie du Sud-Est, permettait aux piétons de faire leurs achats à l'abri de la pluie ou du soleil brûlant, tout en maximisant l'espace habitable aux étages supérieurs qui avancent jusqu'au bord de la chaussée.Le jeu des matériaux : La façade utilise un contraste classique de l'époque entre le rez-de-chaussée en simili-pierre clair et robuste et les étages supérieurs revêtus de briques plates de couleur rouge-brun. Les fenêtres en bois à carreaux multiples s'alignent de manière très géométrique.L'adaptation à la rue : Le bâtiment épouse parfaitement la forme en pointe de l'intersection. L'entrée principale du restaurant est placée stratégiquement dans le pan coupé de l'angle pour être visible et accessible depuis les deux axes de circulation.
`,

23:`Style Beaux-Arts (Classicisme français)

`,



24:`
Achevé en 1929, cet  édifice a été commandé par Sir Victor Sassoon, un richissime homme d'affaires et magnat de l'immobilier issu d'une célèbre dynastie de banquiers juifs baghdadis.

À l'époque, le bâtiment était considéré comme le gratte-ciel le plus luxueux d'Asie. Sassoon lui-même occupait les appartements privés situés juste sous le toit pyramidal. Connu à l'origine sous le nom de Cathay Hotel, il est devenu le centre névralgique de la haute société internationale des années 1930, accueillant des célébrités mondiales comme Charlie Chaplin, George Bernard Shaw ou Noël Coward.

Le temple de l'Art déco : Conçu par le  cabinet d'architectes Palmer & Turner, le Peace Hotel est universellement reconnu comme le premier grand chef-d'œuvre de l'architecture Art déco à Shanghai :

La pyramide de cuivre vert : L'élément le plus emblématique de la silhouette du Bund est son immense toit en pyramide rigide, haut de 19 mètres et recouvert de plaques de cuivre. Avec le temps et l'oxydation, le métal a pris cette couleur vert-de-gris caractéristique, surmontée d'un élégant clocheton.

La verticalité de la façade : Le bâtiment s'élève sur 11 étages (77 mètres de haut). Sa façade en granit de Jinmen présente des lignes verticales très strictes et épurées, accentuées par des ressauts géométriques, rompant délibérément avec les styles néo-classiques et baroques plus anciens du reste de l'avenue.

Les grandes arcades du rez-de-chaussée : Au niveau de la rue, de magnifiques et hautes arches en plein cintre en pierre soulignent les entrées et les vitrines commerciales, offrant une transition monumentale et élégante vers l'intérieur de l'hôtel, célèbre pour sa rotonde en verre jaune et ses boiseries.

`,


25:`
Le hall démontre la maîtrise absolue du style Art déco par le cabinet Palmer & Turner en 1929 :

Les verrières en verre jaune : En arrière-plan et au plafond, les panneaux rétroéclairés utilisent un verre teinté ambré ou jaune safran très célèbre, orné de structures géométriques en plomb. Cette lumière tamisée donne à la rotonde son atmosphère si feutrée, presque intemporelle.

La géométrie et les moulures : Les piliers octogonaux et les frises supérieures alternent lignes droites, cercles concentriques et motifs stylisés sculptés, typiques de l'ornementation moderniste des années 1930.

De part et d'autre de la colombe, incrustés dans les murs en boiseries sombres, on distingue de grands panneaux sculptés en argent ou en étain repoussé :

À gauche : Le bas-relief représente une perspective historique du Bund longeant le fleuve Huangpu avec ses jonques traditionnelles au premier plan et ses grands édifices concessionnaires.

À droite : Le relief met en scène la silhouette même du Peace Hotel et de la rue Nanjing animée par les premières automobiles de l'époque.
`,


27:`
Ce monument rappelle un tournant crucial de l'histoire moderne chinoise. Au début du $XX^e$ siècle, la Chine subit le régime des « Traités inégaux », qui permettent aux puissances étrangères d'ouvrir librement des usines et des comptoirs commerciaux dans des zones échappant à la souveraineté chinoise : les concessions.Le 30 mai 1925, une immense manifestation d'ouvriers et d'étudiants se rassemble sur la rue de Nankin (Nanjing Road). Ils protestent contre les conditions de travail inhumaines et surtout contre le meurtre d'un leader syndical chinois, abattu peu avant par un contremaître dans une filature de coton sous capitaux japonais. Lors de ce rassemblement, la police de la Concession internationale, alors dirigée par les Britanniques, ouvre le feu sur la foule désarmée, faisant de nombreux morts. Ce massacre déclenche une vague de grèves sans précédent et un immense sursaut nationaliste à travers tout le pays.
`,

31:`
bas-relief en argent/stuc situé dans le hall octogonal (le hall de la rotonde) de l'emblématique Fairmont Peace Hotel (historiquement connu sous le nom de Cathay Hotel ou Sassoon House), situé sur le Bund à Shanghai.
Le relief dépeint une scène historique animée du Bund (le quai célèbre de Shanghai) durant les années 1920-1930. On y distingue l'architecture Art déco classique du front de mer, d'anciennes voitures d'époque, des pousse-pousse et des passants.
Il fait partie d'une série de grands panneaux muraux sculptés qui ornent la magnifique rotonde centrale en marbre de l'hôtel, juste sous sa coupole de verre jaune.
C'est un superbe hommage à l'âge d'or de la ville et à l'histoire même de ce bâtiment légendaire inauguré en 1929.
`,
},


pingyao:{
10:`La banque historique Rishengchang (日升昌)
Cette façade patinée par le temps est l'entrée de la célèbre banque Rishengchang, située dans la rue de l'Ouest (Xi Da Jie - 西大街). Fondée en 1823, elle est historiquement reconnue comme la toute première banque de l'histoire chinoise (un comptoir d'échange de traites de virements, appelé Piaohao).

1. L'enseigne principale (De droite à gauche)
Caractères : 日升昌記 (Rì Shēng Chāng Jì)

Signification : "La marque Rishengchang". Les trois sinogrammes ont une symbolique de prospérité très forte : Rì (le Soleil), Shēng (se lever/monter), Chāng (prospère/florissant). Le nom évoque ainsi "Un soleil levant d'une prospérité infinie".

2. L'inscription sur le pilier noir à droite
Caractères : 中国票号... (Zhōngguó piàohào...)

Signification : "Comptoir de change de Chine...", rappelant le statut de musée national de ce monument.

3. Détails architecturaux
Au-dessus de la lourde porte en bois se trouve une frise en bois magnifiquement sculptée en relief ajouré, représentant des lions gardiens bouddhistes (Rui Shi) et des personnages traditionnels, surmontée de peintures murales d'origine de style Shanxi, bien que marquées par l'âge.}`,


13:`Les enseignes et calligraphies (De droite à gauche)
Le grand panneau vert et doré : 梁家醋坊 (Liáng Jiā Cù Fáng) signifie « La Vinaigrerie de la famille Liang ». En bas à droite de ce panneau, une petite inscription précise : 始于2007 - 纯粮酿造 (« Fondé en 2007 - Brassage pur grain »).

Les piliers centraux (Couplets parallèles rouges) : Ces bandes listent les spécialités de la maison à base de vinaigre (Cù) et d'alcool (Jiǔ), comme le vinaigre de jujube (Hóngzǎocù) ou l'alcool de Fen (Fēnjiǔ).

Le grand pot noir au centre : Il affiche fièrement le caractère 醋 (Cù - Vinaigre). Les petits pots décoratifs à gauche et à droite de l'entrée portent le même sinogramme.`,
20:`quand le musée a été créé, dans les locaux de l'ancienne banque, une branche du Parti (composée des administrateurs, conservateurs et employés du musée) a été créée pour gérer l'établissement. En Chine, chaque institution publique (comme un musée, une école ou une administration locale) possède sa propre cellule ou « branche » du Parti Communiste Chinois (党支部, Dangzhibu). Cette pièce est la salle de réunion et de travail réservée aux employés, guides et conservateurs du musée qui font partie de cette cellule.`,

24:`Dans la Chine ancienne, franchir la « Porte du Dragon » est une métaphore qui désigne la réussite exceptionnelle aux examens impériaux. Cette expression provient de la légende de la carpe jaune du Fleuve Jaune qui, à force de persévérance, parvient à remonter le courant et à sauter par-dessus la porte de la cascade, se transformant instantanément en un puissant dragon céleste. Pour les étudiants qui venaient s'instruire dans ce temple, passer sous ce portique symbolisait l'espoir de voir leurs efforts couronnés de succès lors des examens officiels, leur permettant ainsi de s'élever socialement et de devenir de hauts fonctionnaires impériaux.`,

29:`Dans la religion populaire chinoise et le taoïsme, le Dieu de la Cité (Chenghuang) agit comme un magistrat du monde des esprits. Il inspecte sa juridiction, veille sur l'ordre, protège les habitants des démons et guide les âmes des défunts vers l'au-delà.

Pour accomplir ses tournées d'inspection nocturnes et administrer la justice divine à travers la région, le Dieu a besoin d'une monture spirituelle rapide comme l'éclair. C'est le rôle de ce Cheval Divin (Shén Mǎ). Le jeune palefrenier (Mǎ Tóng), reconnaissable à son brassard rouge de fonction et sa corde, est chargé de veiller sur la monture, de la seller et de la tenir prête à tout moment pour les sorties officielles du Dieu.`,
},




xidi:{
3:`L'inscription "百代燕嘗" (Bǎi dài yàn cháng) est une expression littéraire ancienne et profonde, typique des plaques que l'on trouve dans les demeures de lettrés à Xidi. 
traduction : Les banquets et les offrandes rituelles de cent générations.
Dans le contexte du Pavillon Qingyun, cette plaque exprime deux idées majeures :

La Piété Filiale : C'est un rappel que les descendants doivent continuer à honorer leurs ancêtres par des rites et des repas sacrificiels "pendant cent générations" (éternellement).

La Prospérité de la Lignée : "Yàn" (燕) porte aussi l'idée de l'hirondelle, symbole de paix et de retour au foyer. La plaque suggère que la maison restera un lieu de réunion et de bonheur familial où l'on partagera des repas de célébration siècle après siècle

`,
},


mutianyu:{
1:`La Grande Muraille de Chine a été édifiée et fortifiée sur plusieurs millénaires, principalement du VIIe siècle av. J.-C. jusqu'à la dynastie Ming (1368-1644), pour protéger la frontière nord des invasions nomades. Érigé en grande partie au XIVe siècle sur des bases plus anciennes, le secteur de Mutianyu servait de bouclier défensif stratégique pour protéger la capitale, Pékin et les tombeaux impériaux. Aujourd'hui, ce tronçon restauré est célèbre pour ses 23 tours de guet denses, ses paysages montagneux verdoyants et ses célèbres inscriptions historiques à flanc de colline.`,
7:`En haut de la montagne, au centre de la photo, il est écrit, en grands caractères blancs, 忠于毛主席 (Zhōng yú Máo zhǔxí, Loyauté au Président Mao).

Ces immenses caractères en pierre blanche ont été installés pendant la Révolution culturelle (dans les années 1960-1970) par les habitants de la région et les gardes rouges en guise de slogan patriotique.
`,
},

hongcun:{
8:`
Le panneau noir vertical à droite de la porte indique :
飞鸿雅居 (Fēihóng Yǎjū)

飞鸿 (Fēihóng) : Littéralement le « cygne sauvage en vol ». C'est une métaphore classique en poésie chinoise pour désigner un voyageur ou un message important.

雅居 (Yǎjū) : Signifie « demeure élégante » ou « résidence raffinée ».

Traduction : « L'élégante demeure du voyageur ». C'est une maison d'hôtes (Minsu) très appréciée pour son cadre historique.

On aperçoit une autre enseigne sur fond noir : 婉约庭院 (Wǎnyuē Tíngyuàn), qui signifie « La Cour de la Grâce et de la Retenue ».
`,

9:`
1. La plaque supérieure (Enseigne)
La grande plaque en bois sculpté porte quatre caractères calligraphiés en style traditionnel (de droite à gauche) :
「藝衍麟祥」 (Yì Yǎn Lín Xiáng)
Signification : On peut l'interpréter comme "L'art prolonge la prospérité et les bons présages". Le terme "Lín" (麟) fait référence au Qilin, une créature mythique symbolisant la chance et la descendance illustre. C'est une enseigne classique que l'on retrouve souvent dans les anciennes résidences de marchands de l'Anhui (Hui-style architecture).

2. La plaque inférieure (Stèle explicative)
Il s'agit d'une plaque moderne en marbre noir avec des inscriptions dorées intitulée :
「宏村民間藝術博物館記」 (Récit du Musée des Arts Folkloriques de Hongcun)
Le texte explique l'histoire du bâtiment et la création du musée :
Contexte géographique : Il mentionne que le village de Hongcun est classé au patrimoine mondial et décrit sa situation géographique unique ("adossé au mont Leigang, face au lac Nanhu").
Le bâtiment : Le texte précise que le musée est installé dans l'ancienne Académie de Shuren (树人堂 - Shuren Tang), construite sous le règne de l'empereur Tongzhi de la dynastie Qing (vers 1863).
Contenu du musée : La stèle mentionne que le lieu abrite des collections d'art populaire, notamment les célèbres "Trois Sculptures de l'Anhui" (bois, pierre et brique), ainsi que des peintures et calligraphies d'érudits locaux.
Date : L'inscription se termine par la date de rédaction : Août 2005 (公元二零零五年八月).
`,

14:`
Voici ce que représentent les panneaux :

1. Le thème : "Les Cent Enfants" (百子图 - Baizitu)
Il s'agit d'un thème classique de l'art chinois qui symbolise la prospérité familiale, la lignée continue et le bonheur.
Chaque panneau montre des groupes d'enfants engagés dans des activités ludiques et éducatives : jouer de la musique, pêcher dans un bassin, ou imiter des scènes de la vie d'adulte.
Le style de peinture est caractéristique de la fin de la dynastie Qing ou du début de l'ère Républicaine, avec des couleurs pastel et une attention particulière aux paysages (arbres tortueux, rochers érodés).

2. Le détail des inscriptions
Si vous regardez les inscriptions calligraphiées en haut de chaque plaque :
Elles comportent souvent le nom de l'artiste ou du studio, ainsi qu'une date selon le calendrier cyclique chinois (le cycle sexagésimal).
On y trouve aussi des vœux de bon augure liés à l'harmonie et à la réussite aux examens impériaux.
`,

15:`
1. Les Thés célèbres (dans les paniers)
La région de Huangshan produit certains des meilleurs thés de Chine. On peut lire sur les étiquettes vertes :
Taiping Houkui (太平猴魁) : Ce sont les très longues feuilles plates et vertes que l'on voit au premier plan. C'est un thé vert prestigieux dont les feuilles sont pressées à la main.
Huangshan Maofeng (黄山毛峰) : Présenté comme "artisanal" (手工), c'est l'un des thés verts les plus célèbres du pays, connu pour ses bourgeons recouverts d'un duvet blanc.
Thé Noir de Qimen (祁门红茶 - Keemun) : Un thé noir mondialement connu pour son arôme floral, souvent utilisé dans les mélanges de thés anglais de haute qualité.
2. Le Chrysanthème de Huangshan (Panneau de droite)
Le panneau jaune présente le Chrysanthème de Huangshan (黄山贡菊), une autre grande spécialité.
Usage : On fait infuser les fleurs entières. C'est une boisson très populaire pour ses vertus médicinales (détoxification, apaisement des yeux et lutte contre la "chaleur" interne selon la médecine chinoise).
Variété : Le panneau mentionne le "Chrysanthème de soie dorée" (金丝皇菊), reconnaissable à ses grandes fleurs d'un jaune vif.
3. Les produits séchés (À droite)
Dans les grands sacs transparents, on trouve :
Pointes de pousses de bambou de Huangshan (黄山笋尖) : Le bambou est omniprésent dans la cuisine de l'Anhui. Ces pousses sont séchées pour être conservées et sont réhydratées pour être cuisinées avec du porc fumé, un plat emblématique de la région.
`,


17:`
Ce pont est mondialement connu pour la scène d'ouverture du film Tigre et Dragon, où l'on voit le personnage de Li Mu Bai guider son cheval sur ce passage
`,

19:`
Contrairement à nos cadenas modernes à chiffres, ces modèles anciens (très populaires sous les dynasties Ming et Qing) s'ouvrent en alignant des caractères gravés sur des tambours rotatifs pour former une phrase ou une expression à double sens bien précise. Ici, l'inscription se lit de gauche à droite.
Déchiffrage des caractères visibles: voici les quatre caractères principaux actuellement alignés au centre : 寿 · 生 · 双 · 意  - 寿 (Shòu) : La longévité, la vieillesse heureuse.生 (Shēng) : La vie, naître, générer.双 (Shuāng) : Double, une paire, les deux.意 (Yì) : L'intention, le souhait, l'esprit (comme dans Ruyi 如意, "selon vos souhaits"). 
En faisant tourner les cylindres, on cherche généralement à reconstituer un chengyu (idiome à quatre caractères) ou un voeu traditionnel. Au vu de ce qui est affiché, l'alignement actuel est proche d'expressions célébrant la longévité et le bonheur partagé (comme des voeux de mariage ou d'anniversaire). Par exemple, le premier tambour comporte également le caractère 如 (Rú) visible juste au-dessus du Shou, ce qui permet très probablement de composer le célèbre voeu  如意双全 (Rúyì shuāngquán - "Que tous vos souhaits soient pleinement réalisés").
`

},



chinois:{

1:`
Traduction du texte (de droite à gauche)
Colonne 1 & 2 : "Le temps est très cruel, mais aussi très bienveillant. Le temps m'a fait perdre beaucoup, mais m'a aussi fait beaucoup gagner."

Colonne 3 & 4 : "L'époque que j'ai traversée est une époque à la fois grande et difficile ; chaque pas n'a pas été facile, mais cette époque m'a forgé."

Colonne 5 : "Elle a nourri mon malheur, mais elle est aussi mon bonheur."

Colonne 6 & 7 : "La vie est un grand livre que l'on n'en finit jamais de lire. La vie est finie, mais chacun ne peut en lire que des chapitres limités."

Colonne 8 : "C'est pourquoi il faut la lire avec sincérité."

Ke Ling compare la vie à un "grand livre" (大书). L'idée est que malgré la brièveté de l'existence humaine (生而有涯 — "la vie a des limites"), l'expérience humaine est vaste et mérite d'être vécue avec "sincérité" (认真).

`,

2:`
L'inscription centrale en caractères dorés sur fond bleu est :

瞻岱門 (Zhān Dài Mén)

Traduction : « La Porte face au Mont Dai ».

Signification : Le "Mont Dai" est un autre nom du Mont Tai (Taishan), la plus sacrée des cinq montagnes de Chine. Dans la symbolique confucéenne, cela représente l'aspiration vers la grandeur morale et la sagesse suprême, comparables à l'élévation du Mont Tai.

Note historique : À gauche de la plaque, les petits caractères précisent 康熙御筆 (Kāngxī yù bǐ), indiquant qu'il s'agit d'une calligraphie de la main même de l'empereur Kangxi.

2. Le grand panneau bleu (au centre)
Ce texte est intitulé 東嶽大帝寶訓 (Dōngyuè Dàdì Bǎoxùn), ce qui signifie « Les Enseignements Précieux du Grand Empereur du Pic de l'Est ».

Il s'agit d'un texte moral exhortant à la vertu. Voici quelques points clés traduits :

Le Ciel et la Terre : Le texte commence par expliquer que le Ciel et la Terre sont impartiaux et que le bonheur ou le malheur dépendent des actions de chacun.

La causalité : "Faire le bien apporte le bonheur ; faire le mal apporte le malheur".

L'exhortation : Il conseille de ne pas tromper son prochain, de respecter les aînés et de cultiver la sincérité pour obtenir la protection divine.
`,


3:`
1. Le Titre (Colonne tout à droite)
重修福通寺碑記 (Chóngxiū Fútōng Sì Bēijì)
« Chronique de la stèle commémorant la reconstruction du Temple Futong »

2. Les Donateurs et Officiels (Colonnes de droite)
Le texte commence par une longue énumération de titres prestigieux pour honorer ceux qui ont soutenu le projet :

On y mentionne des titres tels que "Grand Administrateur" (通政使), des "Censeurs impériaux" et des fonctionnaires du Ministère des Rites.

Cela montre que le Temple Futong n'était pas un simple sanctuaire local, mais un établissement bénéficiant d'un haut patronage impérial ou provincial.

3. Le Corps du texte (Contenu central)
Le récit suit la structure traditionnelle des écrits de temples bouddhistes :

L'origine : Le texte rappelle que le temple existe depuis longtemps (citant parfois des dynasties antérieures) mais qu'avec les années, les bâtiments s'étaient dégradés, les toits fuyaient et les statues perdaient leur éclat.

L'appel à la vertu : Il explique que des fidèles et des dignitaires, émus par cet état de délabrement, ont réuni des fonds pour "redonner au Bouddha sa splendeur dorée".

La reconstruction : Le texte vante la qualité des travaux, la solidité des nouvelles poutres et la beauté des nouvelles peintures. Il souligne que le temple est désormais un lieu propice à la méditation et à la paix du royaume.

4. La Date et la Signature (Colonnes de gauche)
C'est ici que l'on trouve les informations historiques les plus précises :

La date : On peut lire 康熙五十九年 (Kāngxī wǔshíjiǔ nián), ce qui correspond à l'année 1720 (sous le règne de l'empereur Kangxi, dynastie Qing).

Le moment : Il est précisé que la stèle a été érigée durant l'été (仲夏).

Les auteurs : Les noms des calligraphes et des moines responsables du temple (comme le Maître Zen mentionné à la fin) sont listés pour l'éternité.
`,


4:`
Le Récit de Voyage à la Pagode de l'Oie
Cette stèle est beaucoup plus littéraire et poétique. C'est un genre appelé Youji (récit de voyage).

Titre (en haut à droite) : 雁塔游记 (Yàntǎ Yóujì) — « Récit d'un voyage à la Pagode de l'Oie ».

Contenu : Contrairement à la stèle précédente, il s'agit ici d'une œuvre d'auteur. Un lettré de haut rang (un Jinshi, lauréat des examens impériaux) décrit sa visite à la célèbre pagode. Il parle de la beauté du paysage, de l'émotion ressentie en montant les étages et des réflexions philosophiques que la vue lui a inspirées.

Date : Le texte mentionne l'ère Jiajing (嘉靖), ce qui nous ramène plus loin dans le temps, sous la dynastie Ming (entre 1521 et 1567).

Traduction des passages clés (Sens général)
L'Ascension :
« Nous avons quitté le tumulte de la cité pour franchir le seuil sacré. Nos pas nous ont portés vers la base de la grande pagode, dont la silhouette semble toucher les nuages. Chaque marche gravie nous éloignait un peu plus de la poussière du monde terrestre. »

La Vue du Sommet :
« Parvenus au sommet, nous avons ouvert les fenêtres vers les quatre horizons. Le regard embrasse alors la majesté des montagnes lointaines et les méandres argentés de la rivière qui serpente dans la plaine. La brume matinale se dissipe, révélant la structure ordonnée de la capitale. »

Méditation philosophique :
« En ce lieu, le temps semble suspendu. Nous contemplons les traces des siècles passés gravées dans la pierre. La vie humaine est brève comme le vol d'une hirondelle, mais la sagesse et la beauté des textes demeurent, aussi immuables que cette tour. »

La Conclusion :
« Entre amis et compagnons de lettres, nous avons partagé le vin et la poésie. Ce moment de clarté, face à l'immensité du ciel, est le véritable trésor de notre excursion. Que cette stèle en garde le souvenir pour ceux qui viendront après nous. »

`,




10:`
Guide du comportement civilisé pour les citoyens chinois voyageant à l'étranger
Comportement général : Les citoyens chinois voyageant à l'étranger doivent faire preuve de courtoisie et maintenir leur dignité.

Hygiène et environnement : Respectez l'hygiène et protégez l'environnement ; habillez-vous de manière appropriée et évitez de faire du bruit.

Interactions sociales : Respectez les personnes âgées, prenez soin des jeunes et aidez les autres ; accordez la priorité aux femmes et soyez poli et respectueux.

Ordre public : Soyez ponctuel dans vos déplacements et vos affaires ; faites la queue de manière ordonnée et ne franchissez pas la ligne jaune.

Hébergement et restauration : Séjournez de manière civilisée sans endommager les équipements ; mangez calmement et évitez le gaspillage.

Loisirs : Privilégiez des divertissements sains qui sont bénéfiques pour le corps et l'esprit ; rejetez fermement les jeux d'argent et la pornographie.

Visites touristiques : Respectez les règlements lors des visites ; observez les coutumes et les tabous locaux et évitez de les offenser.

Assistance et conclusion : En cas de difficulté, consultez le consulat ; voyagez de manière civilisée et nous vous souhaitons un voyage en toute sécurité.

texte affiché en haut du téléphérique du Mont Huangshan
`,

14:`
chronologie officielle de l'histoire de Chine réalisée dans le cadre du projet Xia-Shang-Zhou (夏商周断代工程). 
Avant ce projet, les dates de l'histoire chinoise n'étaient considérées comme totalement fiables qu'à partir de l'an 841 av. J.-C. (le début de la régence de Gonghe sous la dynastie Zhou). Tout ce qui se trouvait avant (les dynasties Xia et Shang, et le début des Zhou) relevait en grande partie du mythe ou du flou chronologique.
Le gouvernement chinois a réuni plus de 200 experts (historiens, archéologues, astronomes et physiciens) pour croiser les textes anciens, les datations au carbone 14 et les mentions d'éclipses solaires afin de donner des dates précises aux premières dynasties.
Le projet a permis de dresser la frise "officielle" sur laquelle se basent aujourd'hui tous les manuels scolaires et musées en Chine.
`,
}
}










// paramètres URL
const params = new URLSearchParams(window.location.search);
const set = params.get('set');

// vidéos ajoutées en fin de certains diaporamas

const videos = {
    transports: {
        src: "videos/maglev.mp4",
        title: "Le Maglev de Shanghai"
    },
    shanghai: {
        src: "videos/shanghai.mp4",
        title: "Vidéo de Shanghai"
    },
    monthuangshan: {
        src: "videos/monthuangshan.mp4",
        title: "Vidéo du mont Huangshan"
    },
    scenesrue: {
        src: "videos/scenesderue.mp4",
        title: "A Pingyao"
    }
};

// MUSIQUE DE FOND
const music = document.getElementById('bgmusic');
let started = false;

if (music) {
  if (set === "xiancentre") {
    music.src = "musique/xian.mp3";
  } else if (set === "armeeenterree") {
    music.src = "musique/armee.mp3";
  } else {
    music.remove();
  }
}

function tryPlay() {
  if (started || !music || !music.src) return;
  started = true;

  music.volume = 0.4;
  music.load();

  const p = music.play();

  if (p) {
    p.catch(err => {
      console.warn("audio blocked", err);
      started = false;
    });
  }
}

document.addEventListener('pointerdown', tryPlay, { once: true });
document.addEventListener('keydown', tryPlay, { once: true });

// photos + vidéos
const numbers = sets[set] || [];

const slides = numbers.map(num => ({
    type: "image",
    num: num
}));

if (videos[set]) {
    slides.push({
        type: "video",
        src: videos[set].src,
        title: videos[set].title
    });
}

let index = 0;
let showingA = true;
let activeImg = null;

// drag
let isDragging = false;
let mouseStartX = 0;
let mouseStartY = 0;

// zoom
let currentScale = 1;
let translateX = 0;
let translateY = 0;

// éléments du DOM
let imgA = document.getElementById('img1');
let imgB = document.getElementById('img2');
let videoSlide = document.getElementById('videoSlide');

const caption = document.getElementById('caption');
const noteBtn = document.getElementById('noteBtn');
const noteBox = document.getElementById('noteBox');
const viewer = document.getElementById('viewer');

// chemin image
function path(num){
    return set + '/' + num + '.jpg';
}

// préchargement images uniquement
numbers.forEach(num => {
    const img = new Image();
    img.src = path(num);
});

// affichage
function show(){
    if(slides.length === 0) return;

    let slide = slides[index];

    // Réinitialisation zoom
    currentScale = 1;
    translateX = 0;
    translateY = 0;

    imgA.classList.remove('zoom');
    imgB.classList.remove('zoom');
    imgA.style.transform = `translate(0px, 0px) scale(1)`;
    imgB.style.transform = `translate(0px, 0px) scale(1)`;

    // arrêt vidéo si on quitte une vidéo
    if (videoSlide) {
        videoSlide.pause();
        videoSlide.removeAttribute('src');
        videoSlide.load();
        videoSlide.classList.remove('visible');
    }

    // Cas vidéo
    if (slide.type === "video") {
        imgA.classList.remove('visible');
        imgB.classList.remove('visible');

        videoSlide.src = slide.src;
        videoSlide.classList.add('visible');

        activeImg = null;

        caption.innerText = slide.title || '';
        caption.style.display = slide.title ? 'block' : 'none';

        noteBtn.style.opacity = '0';
        noteBox.style.display = 'none';

        return;
    }

    // Cas image
    let num = slide.num;
    let nextImg = showingA ? imgB : imgA;
    let currentImg = showingA ? imgA : imgB;

    nextImg.onload = function() {
        nextImg.classList.add('visible');
        currentImg.classList.remove('visible');

        setTimeout(() => {
            nextImg.classList.add('zoom');
        }, 50);
    };

    nextImg.src = path(num);

    let texteTitre = titles[set]?.[num] || '';
    if (texteTitre.trim() === '') {
        caption.style.display = 'none';
    } else {
        caption.innerText = texteTitre;
        caption.style.display = 'block';
    }

    const note = notes[set]?.[num];
    if(note){
        noteBtn.style.opacity = '1';
        noteBox.innerHTML = note;
    } else {
        noteBtn.style.opacity = '0';
        noteBox.style.display = 'none';
    }

    showingA = !showingA;
    activeImg = nextImg;
}

// suivante / précédente
function next(){
    tryPlay();
    index++;
    if(index >= slides.length) index = 0;
    show();
}

function prev(){
    tryPlay();
    index--;
    if(index < 0) index = slides.length - 1;
    show();
}

// clavier
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight') next();
    if(e.key === 'ArrowLeft') prev();
});

// swipe
let startX = 0;
document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if(endX - startX > 50) prev();
    if(startX - endX > 50) next();
});

// lancement initial
show();

noteBtn.addEventListener('click', () => {
    noteBox.style.display = (noteBox.style.display === 'block') ? 'none' : 'block';
});

// Zoom avec CTRL + Molette, images uniquement
viewer.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault(); 
        if (activeImg) {
            currentScale += (e.deltaY < 0) ? 0.1 : -0.1;
            currentScale = Math.max(1, Math.min(4, currentScale));

            if (currentScale === 1) {
                translateX = 0;
                translateY = 0;
            }
            activeImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
        }
    }
}, { passive: false });

// Drag images uniquement
viewer.addEventListener('mousedown', function(e) {
    if (currentScale > 1 && activeImg) {
        isDragging = true;
        mouseStartX = e.clientX;
        mouseStartY = e.clientY;
        viewer.style.cursor = 'grabbing';
    }
});

document.addEventListener('mousemove', function(e) {
    if (isDragging && activeImg) {
        if (e.preventDefault) e.preventDefault();

        const deltaX = e.clientX - mouseStartX;
        const deltaY = e.clientY - mouseStartY;

        translateX += deltaX;
        translateY += deltaY;

        activeImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;

        mouseStartX = e.clientX;
        mouseStartY = e.clientY;
    }
});

document.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        viewer.style.cursor = (currentScale > 1) ? 'grab' : 'default';
    }
});

// Retour zoom 100% au double-clic
viewer.addEventListener('dblclick', function() {
    currentScale = 1;
    translateX = 0;
    translateY = 0;

    if (activeImg) {
        activeImg.style.transform = `translate(0px, 0px) scale(1)`;
    }
    viewer.style.cursor = 'default';
});
