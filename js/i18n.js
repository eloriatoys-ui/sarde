/* ============================================================
   SARDE — i18n (English / Arabic / Russian)
   ============================================================ */
(() => {

const T = {
  en: {
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.signatures': 'Signatures',
    'nav.gallery': 'Gallery',
    'nav.visit': 'Visit',
    'nav.reserve': 'Reserve',

    'ann.text': 'Open daily <b>12:00 PM — 2:00 AM</b> · Barsha Heights, Dubai · Reservations <b>+971 4 554 0528</b> · Charcoal grill since MMXIX · Now serving the new Sarde Crepe ·',
    'ann.menu': 'Daily <b>12:00 — 02:00</b> · Barsha Heights · Dubai · Reserve <b>+971 4 554 0528</b> · Order on WhatsApp <b>+971 58 569 5404</b> ·',

    'hero.eyebrow': 'Syrian & Lebanese · Est. MMXIX',
    'hero.h1': 'A Syrian &amp; Lebanese table.<br><em>In the heart of Dubai.</em>',
    'hero.blurb': 'Charcoal-grilled meats, hand-rolled mezze, slow-burning shisha and the unhurried rhythm of a Damascus and Beirut afternoon — gathered around one warm table in Barsha Heights.',
    'hero.cta.menu': 'View Full Menu',
    'hero.cta.reserve': 'Reserve a Table',
    'hero.order.label': 'Order direct →',
    'hero.meta.cuisine': '<b>Syrian</b> &amp; <b>Lebanese</b>',
    'hero.meta.mains': '<b>27</b> Charcoal mains',
    'hero.meta.mezze': '<b>15</b> Mezze',
    'hero.meta.shisha': '<b>20+</b> Shisha blends',
    'hero.meta.rating': '<b>★ 4.8</b> · Google Reviews',
    'hero.corner': 'Syrian & Lebanese · Since MMXIX',

    'about.kicker': '— Syrian & Lebanese, on the House',
    'about.title': 'Damascus &amp; Beirut, <em>set in Dubai.</em>',
    'about.lead': 'Sarde is a love letter to the Syrian and Lebanese table — slow, generous, and set for everyone who pulls up a chair.',
    'about.p1': 'From the smoky perfume of charcoal-kissed kebabs and the velvet hush of fresh tahini, to the morning ritual of fatteh and Moroccan coffee — we cook the food we grew up with in Damascus and Beirut, the way our grandmothers would still recognise it.',
    'about.p2': "Days here begin with za'atar pulled from the saj and end with kunafa under a lit shisha. In between: laughter, long conversations, and a table that never quite empties.",
    'hall.charcoal': 'Charcoal grilled',
    'hall.bread': 'Bread from the saj',
    'hall.hours': 'Hours, every day',
    'hall.shisha': 'Shisha blends',

    'sig.kicker': '02 — The House',
    'sig.title': 'Signatures of <em>the kitchen.</em>',
    'sig.tagline': 'Six dishes the regulars<br>come back for.',
    'sig.cta': 'View the full menu →',
    'sig.tag.charcoal': 'Charcoal · Mains',
    'sig.tag.pizza': 'Pizza · Pastries',
    'sig.tag.charcoal2': 'Charcoal',
    'sig.tag.mezze': 'Mezze',
    'sig.tag.salad': 'Salads',
    'sig.tag.sweet': 'Sweet',
    'sig.dish.mixed.title': 'Mixed Grill',
    'sig.dish.mixed.desc': 'Kabab, shish tawook, lamb cubes & kofta — all from the live charcoal.',
    'sig.dish.special.title': 'The Sarde Special',
    'sig.dish.special.desc': 'Our flagship pie — kashkaval, muhammara, slow-cured beef.',
    'sig.dish.lamb.title': 'Lamb Chops',
    'sig.dish.lamb.desc': 'Frenched & seasoned simply — let the smoke do the talking.',
    'sig.dish.hummus.title': 'Hummus with Meat',
    'sig.dish.hummus.desc': 'Stone-ground tahini, lamb, pine nuts, warm bread on the side.',
    'sig.dish.salad.title': 'The Sarde Salad',
    'sig.dish.salad.desc': 'Pomegranate, mountain herbs, sumac, our house dressing.',
    'sig.dish.crepe.title': 'Crepe Sarde',
    'sig.dish.crepe.desc': 'Our late-night ritual — chocolate, banana, kunafa, vanilla cream.',

    'quote.text': '“We don\'t cook to impress. We cook to <em>gather.</em> A long table, hot bread, the right people — that\'s the whole secret.”',
    'quote.cite': '— The Sarde Kitchen',

    'gal.kicker': '03 — The Room',
    'gal.title': 'The <em>scenes</em> of Sarde.',
    'gal.tagline': 'From the saj to the<br>last shisha of the night.',

    'visit.kicker': '04 — Visit',
    'visit.title': 'Find your <em>seat.</em>',
    'visit.tagline': 'Walk-ins welcome.<br>Reservations adored.',
    'visit.address.lbl': 'Address',
    'visit.address.val': 'Barsha Heights<br>Dubai, UAE',
    'visit.hours.lbl': 'Hours',
    'visit.hours.val': 'Daily<br>12:00 — 02:00',
    'visit.hours.note': 'Kitchen open until last order.',
    'visit.res.lbl': 'Reservations',
    'visit.wa.lbl': 'WhatsApp & Delivery',
    'visit.follow.lbl': 'Follow',
    'visit.tag.lbl': 'Tag us',
    'visit.cta.reserve': 'Reserve via WhatsApp',
    'visit.cta.call': 'Call us',

    'foot.house': 'The House',
    'foot.house.lead': 'A Syrian & Lebanese table set for everyone who pulls up a chair — in Barsha Heights, every day.',
    'foot.visit': 'Visit',
    'foot.contact': 'Contact',
    'foot.follow': 'Follow',
    'foot.bottom.l': '© MMXXVI Sarde Restaurant · All rights reserved',
    'foot.bottom.r': 'Crafted with charcoal & care · Dubai',

    'menu.title': 'A taste of <em>Damascus &amp; Beirut.</em>',
    'menu.kicker': '— Syrian & Lebanese cuisine',
    'menu.meta.aed': 'All prices in <b>AED · د.إ</b>',
    'menu.meta.vat': 'VAT & service included',
    'menu.meta.veg': 'Vegan & vegetarian on request',
    'menu.cta.title': 'A table is waiting.',
    'menu.cta.text': 'Reserve directly with the host on WhatsApp — most tables are confirmed within minutes.',
    'menu.cta.reserve': 'Reserve on WhatsApp',
    'menu.cta.call': 'Call +971 4 554 0528',

    'tab.breakfast': 'Breakfast',
    'tab.salad': 'Salads',
    'tab.mezze': 'Mezze',
    'tab.meals': 'Meals & Mains',
    'tab.pizza': 'Pizza & Pastries',
    'tab.sandwich': 'Sandwiches',
    'tab.dessert': 'Desserts',
    'tab.juice': 'Juices & Mocktails',
    'tab.hot': 'Hot Drinks',
    'tab.soft': 'Soft & Water',
    'tab.shisha': 'Shisha',

    'cat.breakfast.title': 'Breakfast <em>all day</em>',
    'cat.breakfast.desc': 'Bread fresh from the saj, labneh, olives — the morning ritual served any hour.',
    'cat.breakfast.label': 'The morning ritual',
    'cat.salad.title': 'Salads <em>&amp; greens</em>',
    'cat.salad.desc': 'Mountain herbs, sumac, lemon — and the right amount of olive oil.',
    'cat.salad.label': 'Mountain herbs &amp; sumac',
    'cat.mezze.title': 'Mezze &amp; <em>Appetisers</em>',
    'cat.mezze.desc': 'The small plates that arrive first — and never quite leave the table.',
    'cat.mezze.label': 'The small plates we serve our family first',
    'cat.meals.title': 'Meals &amp; <em>Main Courses</em>',
    'cat.meals.desc': 'Charcoal · cast iron · slow heat. The heart of the Sarde kitchen.',
    'cat.meals.label': 'From the charcoal',
    'cat.pizza.title': 'Pizza &amp; <em>Pastries</em>',
    'cat.pizza.desc': 'From the saj — bread that arrives still breathing.',
    'cat.pizza.label': 'From the saj',
    'cat.sandwich.title': 'Sandwiches <em>&amp; wraps</em>',
    'cat.sandwich.desc': 'Fast, generous, on the go — or to take to the table.',
    'cat.sandwich.label': 'Hand-rolled, on the go',
    'cat.dessert.title': 'Sweet <em>endings</em>',
    'cat.dessert.desc': 'For after-dinner — and after-after-dinner.',
    'cat.dessert.label': 'Sweet endings',
    'cat.juice.title': 'Juices &amp; <em>Mocktails</em>',
    'cat.juice.desc': 'Cold-pressed daily — lots of fruit, no shortcuts.',
    'cat.juice.label': 'Cold-pressed daily',
    'cat.hot.title': 'Hot <em>drinks</em>',
    'cat.hot.desc': 'Slow mornings · long evenings.',
    'cat.hot.label': 'Slow mornings, long evenings',
    'cat.soft.title': 'Soft drinks <em>&amp; water</em>',
    'cat.soft.desc': 'Iced, simple, on the side.',
    'cat.shisha.title': 'Shisha <em>&amp; smoke</em>',
    'cat.shisha.desc': 'Hand-packed. Slow burn. Twenty-one ways to end the night.',
    'cat.shisha.label': 'Hand-packed · slow burn',
    'shisha.premium': 'Premium & House blends',
    'shisha.single': 'Single flavours',

    'pill.signature': 'Signature',
    'pill.family': 'Family',
    'pill.fortwo': 'For Two',
    'pill.premium': 'Premium',
  },

  ar: {
    'nav.about': 'عن المطعم',
    'nav.menu': 'القائمة',
    'nav.signatures': 'الأطباق المميزة',
    'nav.gallery': 'المعرض',
    'nav.visit': 'زيارتنا',
    'nav.reserve': 'احجز',

    'ann.text': 'مفتوح يومياً <b>١٢:٠٠ ظهراً — ٠٢:٠٠ صباحاً</b> · برشا هايتس، دبي · للحجوزات <b>‎+971 4 554 0528</b> · مشاوي على الفحم منذ ٢٠١٩ ·',
    'ann.menu': 'يومياً <b>١٢:٠٠ — ٠٢:٠٠</b> · برشا هايتس · دبي · احجز <b>‎+971 4 554 0528</b> · اطلب عبر واتساب <b>‎+971 58 569 5404</b> ·',

    'hero.eyebrow': 'سوري ولبناني · تأسس ٢٠١٩',
    'hero.h1': 'طاولة سورية ولبنانية.<br><em>في قلب دبي.</em>',
    'hero.blurb': 'لحوم مشوية على الفحم، مقبلات شامية، شيشة بطيئة الاحتراق، وإيقاع غداء دمشقي بيروتي هادئ — كل ذلك حول طاولة دافئة واحدة في برشا هايتس.',
    'hero.cta.menu': 'القائمة الكاملة',
    'hero.cta.reserve': 'احجز طاولة',
    'hero.order.label': 'اطلب مباشرة ←',
    'hero.meta.cuisine': '<b>سوري</b> و<b>لبناني</b>',
    'hero.meta.mains': '<b>٢٧</b> طبق مشاوي',
    'hero.meta.mezze': '<b>١٥</b> مقبلات',
    'hero.meta.shisha': '<b>+٢٠</b> نكهة شيشة',
    'hero.meta.rating': '<b>★ ٤٫٨</b> · تقييمات Google',
    'hero.corner': 'سوري ولبناني · منذ ٢٠١٩',

    'about.kicker': '— عن المطعم',
    'about.title': 'دمشق وبيروت، <em>على طاولة دبي.</em>',
    'about.lead': 'سردة هي رسالة حب للمائدة السورية واللبنانية — هادئة، كريمة، ومُعدّة لكل من يختار الجلوس معنا.',
    'about.p1': 'من رائحة الكباب على الفحم وهمس الطحينة الطازجة، إلى طقوس صباح الفتة والقهوة المغربية — نطبخ الأكل الذي ترعرعنا عليه في دمشق وبيروت، بالطريقة التي ستعرفها جدّاتنا حتى اليوم.',
    'about.p2': 'تبدأ أيامنا برغيف زعتر من الصاج وتنتهي بكنافة تحت غيوم شيشة. وبينهما: ضحكات، أحاديث طويلة، وطاولة لا تكاد تخلو.',
    'hall.charcoal': 'مشوي على الفحم',
    'hall.bread': 'خبز من الصاج',
    'hall.hours': 'ساعات، كل يوم',
    'hall.shisha': 'نكهات الشيشة',

    'sig.kicker': '٠٢ — البيت',
    'sig.title': 'أطباق <em>توقيع المطبخ.</em>',
    'sig.tagline': 'ستة أطباق يعود إليها<br>الزبائن دائماً.',
    'sig.cta': 'القائمة الكاملة ←',
    'sig.tag.charcoal': 'فحم · مشاوي',
    'sig.tag.pizza': 'بيتزا · معجنات',
    'sig.tag.charcoal2': 'فحم',
    'sig.tag.mezze': 'مقبلات',
    'sig.tag.salad': 'سلطات',
    'sig.tag.sweet': 'حلو',
    'sig.dish.mixed.title': 'مشاوي مشكلة',
    'sig.dish.mixed.desc': 'كباب، شيش طاووق، مكعبات لحم وكفتة — كلها من الفحم الحي.',
    'sig.dish.special.title': 'بيتزا سردة الخاصة',
    'sig.dish.special.desc': 'بيتزتنا الرائدة — كشكفال، محمرة، ولحم متبّل ببطء.',
    'sig.dish.lamb.title': 'ريش غنم',
    'sig.dish.lamb.desc': 'مُتبّلة ببساطة — ودع الفحم يتكلم.',
    'sig.dish.hummus.title': 'حمص باللحم',
    'sig.dish.hummus.desc': 'طحينة مطحونة على الحجر، لحم، صنوبر، وخبز ساخن جانباً.',
    'sig.dish.salad.title': 'سلطة سردة',
    'sig.dish.salad.desc': 'رمان، أعشاب جبلية، سماق، وصلصة البيت.',
    'sig.dish.crepe.title': 'كريب سردة',
    'sig.dish.crepe.desc': 'طقس آخر الليل — شوكولاتة، موز، كنافة، وكريما الفانيلا.',

    'quote.text': '«نحن لا نطبخ لنُبهر. نطبخ <em>لنجتمع.</em> طاولة طويلة، خبز ساخن، الناس المناسبون — هذا هو السر كله.»',
    'quote.cite': '— مطبخ سردة',

    'gal.kicker': '٠٣ — المكان',
    'gal.title': '<em>مشاهد</em> من سردة.',
    'gal.tagline': 'من الصاج إلى<br>آخر شيشة في الليل.',

    'visit.kicker': '٠٤ — زيارتنا',
    'visit.title': 'احجز <em>كرسيك.</em>',
    'visit.tagline': 'أهلاً بك بدون موعد.<br>والحجوزات نحبها أكثر.',
    'visit.address.lbl': 'العنوان',
    'visit.address.val': 'برشا هايتس<br>دبي، الإمارات',
    'visit.hours.lbl': 'الدوام',
    'visit.hours.val': 'يومياً<br>١٢:٠٠ — ٠٢:٠٠',
    'visit.hours.note': 'المطبخ مفتوح حتى آخر طلب.',
    'visit.res.lbl': 'الحجوزات',
    'visit.wa.lbl': 'واتساب وتوصيل',
    'visit.follow.lbl': 'تابعنا',
    'visit.tag.lbl': 'علِّمنا في صورتك',
    'visit.cta.reserve': 'احجز عبر واتساب',
    'visit.cta.call': 'اتصل بنا',

    'foot.house': 'البيت',
    'foot.house.lead': 'طاولة سورية ولبنانية مُعدّة لكل من يختار الجلوس — في برشا هايتس، كل يوم.',
    'foot.visit': 'زيارتنا',
    'foot.contact': 'تواصل',
    'foot.follow': 'تابعنا',
    'foot.bottom.l': '© ٢٠٢٦ مطعم سردة · جميع الحقوق محفوظة',
    'foot.bottom.r': 'بفحم وعناية · دبي',

    'menu.title': 'مذاق <em>دمشق وبيروت.</em>',
    'menu.kicker': '— المطبخ السوري واللبناني',
    'menu.meta.aed': 'الأسعار بـ <b>درهم إماراتي · AED</b>',
    'menu.meta.vat': 'تشمل ضريبة القيمة المضافة والخدمة',
    'menu.meta.veg': 'الخيارات النباتية متاحة عند الطلب',
    'menu.cta.title': 'الطاولة بانتظارك.',
    'menu.cta.text': 'احجز مباشرة عبر واتساب — معظم الحجوزات تُؤكَّد خلال دقائق.',
    'menu.cta.reserve': 'احجز عبر واتساب',
    'menu.cta.call': 'اتصل ‎+971 4 554 0528',

    'tab.breakfast': 'الفطور',
    'tab.salad': 'السلطات',
    'tab.mezze': 'المقبلات',
    'tab.meals': 'الأطباق الرئيسية',
    'tab.pizza': 'بيتزا ومعجنات',
    'tab.sandwich': 'السندويشات',
    'tab.dessert': 'الحلويات',
    'tab.juice': 'العصائر',
    'tab.hot': 'مشروبات ساخنة',
    'tab.soft': 'مشروبات وماء',
    'tab.shisha': 'الشيشة',

    'cat.breakfast.title': 'الفطور <em>طوال اليوم</em>',
    'cat.breakfast.desc': 'خبز طازج من الصاج، لبنة، زيتون — طقوس الصباح بأي ساعة.',
    'cat.breakfast.label': 'طقوس الصباح',
    'cat.salad.title': 'السلطات <em>والخضار</em>',
    'cat.salad.desc': 'أعشاب جبلية، سماق، ليمون — وزيت الزيتون بالكمية المناسبة.',
    'cat.salad.label': 'أعشاب جبلية وسماق',
    'cat.mezze.title': 'المقبلات <em>الشامية</em>',
    'cat.mezze.desc': 'الأطباق الصغيرة التي تصل أولاً — ولا تكاد تغادر الطاولة.',
    'cat.mezze.label': 'الأطباق التي نقدّمها لعائلتنا أولاً',
    'cat.meals.title': 'الأطباق <em>الرئيسية</em>',
    'cat.meals.desc': 'فحم · حديد زهر · حرارة بطيئة. قلب مطبخ سردة.',
    'cat.meals.label': 'من الفحم',
    'cat.pizza.title': 'بيتزا <em>ومعجنات</em>',
    'cat.pizza.desc': 'من الصاج — خبز يصل وهو لا يزال يتنفس.',
    'cat.pizza.label': 'من الصاج',
    'cat.sandwich.title': 'سندويشات <em>ولفّات</em>',
    'cat.sandwich.desc': 'سريعة، كريمة، للسفر — أو للطاولة.',
    'cat.sandwich.label': 'ملفوفة باليد',
    'cat.dessert.title': 'الحلويات <em>الشامية</em>',
    'cat.dessert.desc': 'بعد العشاء — وما بعد العشاء أيضاً.',
    'cat.dessert.label': 'نهايات حلوة',
    'cat.juice.title': 'العصائر <em>والكوكتيلات</em>',
    'cat.juice.desc': 'تُعصر يومياً — فاكهة كثيرة، بلا اختصارات.',
    'cat.juice.label': 'تُعصر يومياً',
    'cat.hot.title': 'المشروبات <em>الساخنة</em>',
    'cat.hot.desc': 'صباحات هادئة · أمسيات طويلة.',
    'cat.hot.label': 'صباحات هادئة، أمسيات طويلة',
    'cat.soft.title': 'مشروبات غازية <em>وماء</em>',
    'cat.soft.desc': 'مثلجة، بسيطة، إلى جانب الطبق.',
    'cat.shisha.title': 'الشيشة <em>والدخان</em>',
    'cat.shisha.desc': 'معبأة باليد. احتراق بطيء. واحد وعشرون طريقة لإنهاء الليل.',
    'cat.shisha.label': 'معبأة باليد · احتراق بطيء',
    'shisha.premium': 'البريميوم وخلطات البيت',
    'shisha.single': 'النكهات المفردة',

    'pill.signature': 'مميّز',
    'pill.family': 'عائلي',
    'pill.fortwo': 'لشخصين',
    'pill.premium': 'بريميوم',
  },

  ru: {
    'nav.about': 'О нас',
    'nav.menu': 'Меню',
    'nav.signatures': 'Фирменное',
    'nav.gallery': 'Галерея',
    'nav.visit': 'Адрес',
    'nav.reserve': 'Бронь',

    'ann.text': 'Открыто ежедневно <b>12:00 — 02:00</b> · Барша Хайтс, Дубай · Бронирование <b>+971 4 554 0528</b> · Угольный гриль с MMXIX · Новый Креп «Сарде» в меню ·',
    'ann.menu': 'Ежедневно <b>12:00 — 02:00</b> · Барша Хайтс · Дубай · Бронь <b>+971 4 554 0528</b> · Заказ в WhatsApp <b>+971 58 569 5404</b> ·',

    'hero.eyebrow': 'Сирийская и Ливанская · с MMXIX',
    'hero.h1': 'Сирийско-ливанский стол.<br><em>В сердце Дубая.</em>',
    'hero.blurb': 'Мясо на углях, мезе ручной работы, медленный кальян и неспешный ритм дамасско-бейрутского полудня — всё это за одним тёплым столом в Барша Хайтс.',
    'hero.cta.menu': 'Полное меню',
    'hero.cta.reserve': 'Забронировать стол',
    'hero.order.label': 'Заказать →',
    'hero.meta.cuisine': '<b>Сирийская</b> и <b>Ливанская</b>',
    'hero.meta.mains': '<b>27</b> блюд на углях',
    'hero.meta.mezze': '<b>15</b> мезе',
    'hero.meta.shisha': '<b>20+</b> миксов кальяна',
    'hero.meta.rating': '<b>★ 4.8</b> · отзывы Google',
    'hero.corner': 'Сирийская и Ливанская · с MMXIX',

    'about.kicker': '— О нашем доме',
    'about.title': 'Дамаск и Бейрут, <em>в Дубае.</em>',
    'about.lead': 'Сарде — это признание в любви сирийско-ливанскому столу: щедрому, неспешному и накрытому для каждого, кто подсядет.',
    'about.p1': 'От аромата кебаба на углях и бархатной свежести тахини до утреннего ритуала фатте и марокканского кофе — мы готовим еду, на которой выросли в Дамаске и Бейруте, так, чтобы наши бабушки её узнали.',
    'about.p2': 'День здесь начинается с заатара из саджа и заканчивается кунафой под зажжённым кальяном. А между ними — смех, долгие разговоры и стол, который не пустеет.',
    'hall.charcoal': 'Гриль на углях',
    'hall.bread': 'Хлеб из саджа',
    'hall.hours': 'Часов, каждый день',
    'hall.shisha': 'Миксов кальяна',

    'sig.kicker': '02 — Наш дом',
    'sig.title': 'Фирменные <em>блюда кухни.</em>',
    'sig.tagline': 'Шесть блюд, ради которых<br>возвращаются гости.',
    'sig.cta': 'Полное меню →',
    'sig.tag.charcoal': 'Угли · Основное',
    'sig.tag.pizza': 'Пицца · Выпечка',
    'sig.tag.charcoal2': 'Угли',
    'sig.tag.mezze': 'Мезе',
    'sig.tag.salad': 'Салаты',
    'sig.tag.sweet': 'Сладкое',
    'sig.dish.mixed.title': 'Мясное ассорти',
    'sig.dish.mixed.desc': 'Кебаб, шиш-таук, кусочки баранины и кофта — всё с живых углей.',
    'sig.dish.special.title': 'Сарде Спешл',
    'sig.dish.special.desc': 'Наша фирменная пицца — кашкавал, мухаммара, томлёная говядина.',
    'sig.dish.lamb.title': 'Бараньи рёбрышки',
    'sig.dish.lamb.desc': 'Просто приправлены — пусть дым говорит за себя.',
    'sig.dish.hummus.title': 'Хумус с мясом',
    'sig.dish.hummus.desc': 'Тахини жерновного помола, баранина, кедровые орехи, тёплый хлеб.',
    'sig.dish.salad.title': 'Салат «Сарде»',
    'sig.dish.salad.desc': 'Гранат, горные травы, сумах и наш фирменный соус.',
    'sig.dish.crepe.title': 'Креп «Сарде»',
    'sig.dish.crepe.desc': 'Наш ночной ритуал — шоколад, банан, кунафа, ванильный крем.',

    'quote.text': '«Мы готовим не чтобы впечатлить. Мы готовим, <em>чтобы собраться.</em> Длинный стол, горячий хлеб, нужные люди — вот и весь секрет.»',
    'quote.cite': '— Кухня Сарде',

    'gal.kicker': '03 — Зал',
    'gal.title': '<em>Сцены</em> Сарде.',
    'gal.tagline': 'От саджа до<br>последнего кальяна.',

    'visit.kicker': '04 — Адрес',
    'visit.title': 'Найди своё <em>место.</em>',
    'visit.tagline': 'Без брони — пожалуйста.<br>С бронью — ещё лучше.',
    'visit.address.lbl': 'Адрес',
    'visit.address.val': 'Барша Хайтс<br>Дубай, ОАЭ',
    'visit.hours.lbl': 'Часы',
    'visit.hours.val': 'Ежедневно<br>12:00 — 02:00',
    'visit.hours.note': 'Кухня работает до последнего заказа.',
    'visit.res.lbl': 'Бронирование',
    'visit.wa.lbl': 'WhatsApp и доставка',
    'visit.follow.lbl': 'Соцсети',
    'visit.tag.lbl': 'Отметь нас',
    'visit.cta.reserve': 'Бронь в WhatsApp',
    'visit.cta.call': 'Позвонить',

    'foot.house': 'Наш дом',
    'foot.house.lead': 'Сирийско-ливанский стол, накрытый для каждого, — в Барша Хайтс, каждый день.',
    'foot.visit': 'Адрес',
    'foot.contact': 'Контакты',
    'foot.follow': 'Соцсети',
    'foot.bottom.l': '© MMXXVI Sarde Restaurant · Все права защищены',
    'foot.bottom.r': 'С углём и заботой · Дубай',

    'menu.title': 'Вкус <em>Дамаска и Бейрута.</em>',
    'menu.kicker': '— Сирийская и ливанская кухня',
    'menu.meta.aed': 'Все цены в <b>AED · د.إ</b>',
    'menu.meta.vat': 'НДС и обслуживание включены',
    'menu.meta.veg': 'Веган/вегетар. — по запросу',
    'menu.cta.title': 'Стол ждёт.',
    'menu.cta.text': 'Бронируйте напрямую с хостом в WhatsApp — обычно подтверждаем за минуты.',
    'menu.cta.reserve': 'Бронь в WhatsApp',
    'menu.cta.call': 'Звонок +971 4 554 0528',

    'tab.breakfast': 'Завтрак',
    'tab.salad': 'Салаты',
    'tab.mezze': 'Мезе',
    'tab.meals': 'Основные блюда',
    'tab.pizza': 'Пицца и выпечка',
    'tab.sandwich': 'Сэндвичи',
    'tab.dessert': 'Десерты',
    'tab.juice': 'Соки и моктейли',
    'tab.hot': 'Горячие напитки',
    'tab.soft': 'Газировка и вода',
    'tab.shisha': 'Кальян',

    'cat.breakfast.title': 'Завтрак <em>весь день</em>',
    'cat.breakfast.desc': 'Свежий хлеб с саджа, лабне, оливки — утренний ритуал в любое время.',
    'cat.breakfast.label': 'Утренний ритуал',
    'cat.salad.title': 'Салаты <em>и зелень</em>',
    'cat.salad.desc': 'Горные травы, сумах, лимон — и нужное количество оливкового масла.',
    'cat.salad.label': 'Горные травы и сумах',
    'cat.mezze.title': 'Мезе <em>и закуски</em>',
    'cat.mezze.desc': 'Маленькие тарелки, что приходят первыми — и не уходят со стола.',
    'cat.mezze.label': 'Что мы подаём своей семье первым делом',
    'cat.meals.title': 'Основные <em>блюда</em>',
    'cat.meals.desc': 'Уголь · чугун · медленный жар. Сердце кухни Сарде.',
    'cat.meals.label': 'С углей',
    'cat.pizza.title': 'Пицца <em>и выпечка</em>',
    'cat.pizza.desc': 'С саджа — хлеб, который ещё дышит.',
    'cat.pizza.label': 'С саджа',
    'cat.sandwich.title': 'Сэндвичи <em>и роллы</em>',
    'cat.sandwich.desc': 'Быстро, щедро, на ходу — или к столу.',
    'cat.sandwich.label': 'Свёрнутые вручную',
    'cat.dessert.title': 'Сладкие <em>финалы</em>',
    'cat.dessert.desc': 'Для после ужина — и для после-после-ужина.',
    'cat.dessert.label': 'Сладкие финалы',
    'cat.juice.title': 'Соки <em>и моктейли</em>',
    'cat.juice.desc': 'Каждый день из свежих фруктов — без сокращений.',
    'cat.juice.label': 'Свежий отжим',
    'cat.hot.title': 'Горячие <em>напитки</em>',
    'cat.hot.desc': 'Медленные утра · долгие вечера.',
    'cat.hot.label': 'Медленные утра, долгие вечера',
    'cat.soft.title': 'Газировка <em>и вода</em>',
    'cat.soft.desc': 'Со льдом, просто, на стол.',
    'cat.shisha.title': 'Кальян <em>и дым</em>',
    'cat.shisha.desc': 'Забивка вручную. Медленный жар. Двадцать один способ закончить вечер.',
    'cat.shisha.label': 'Забивка вручную · медленный жар',
    'shisha.premium': 'Премиум и фирменные миксы',
    'shisha.single': 'Моно-вкусы',

    'pill.signature': 'Фирменное',
    'pill.family': 'Семейное',
    'pill.fortwo': 'На двоих',
    'pill.premium': 'Премиум',
  }
};

/* Menu item translations — keyed by English name */
const M = {
  ar: {
    "Arabic Breakfast": "فطور عربي",
    "Featteh Samneh": "فتة بالسمنة",
    "Foul Bill Zeit": "فول بالزيت",
    "Olives": "زيتون",
    "Falafel": "فلافل",
    "Nabulsi Cheese": "جبنة نابلسية",
    "Featteh Cheese": "فتة بالجبنة",
    "Labneh": "لبنة",
    "Sarde Salad": "سلطة سردة",
    "Armenian Salad": "سلطة أرمنية",
    "Greek Salad": "سلطة يونانية",
    "Rocca Salad": "سلطة جرجير",
    "Chicken Caesar": "سيزر بالدجاج",
    "Fattoush": "فتوش",
    "Tabbouleh": "تبولة",
    "Hummus": "حمص",
    "Beiruti Hummus": "حمص بيروتي",
    "Hummus with Meat": "حمص باللحم",
    "Mouttabal Eggplant": "متبل باذنجان",
    "Baba Ghanoush": "بابا غنوج",
    "Muhammara": "محمرة",
    "Vine Leaves": "ورق عنب",
    "Grilled Halloumi": "حلومي مشوي",
    "Cheese Rolls": "رولات جبنة",
    "Fried Kobbeh": "كبة مقلية",
    "Spicy Potato": "بطاطا حارة",
    "Mfrika Mushroom": "مفركة مشروم",
    "Chicken Liver": "كبدة دجاج",
    "Sojak": "سجق",
    "Makanek": "مقانق",
    "Arabic Beef Shawarma": "شاورما لحم",
    "Arabic Chicken Shawarma": "شاورما دجاج",
    "Broasted Chicken — 8 pcs": "دجاج بروستد — ٨ قطع",
    "Broasted Chicken — 4 pcs": "دجاج بروستد — ٤ قطع",
    "Sausages": "نقانق",
    "Beef Fajita": "فاهيتا لحم",
    "Chicken Fajitas": "فاهيتا دجاج",
    "Shish Fokhara": "شيش فخارة",
    "Fried or Grilled Fish Fillet": "فيليه سمك مقلي أو مشوي",
    "Milanese Escalopes": "إسكالوب ميلانيز",
    "Arayes Toshka": "عرايس تشكا",
    "Lamb Chops": "ريش غنم",
    "Arayes Kofta": "عرايس كفتة",
    "Cordon Blu": "كوردون بلو",
    "Fish and Chips": "سمك وبطاطا",
    "Half Chicken on Charcoal": "نصف دجاجة على الفحم",
    "Creamy Chicken Soup": "شوربة دجاج بالكريمة",
    "Australian Beef Fillet": "فيليه لحم أسترالي",
    "Pasta Alfredo": "باستا ألفريدو",
    "Pasta Bolognese": "باستا بولونيز",
    "Mixed Grill": "مشاوي مشكلة",
    "Kabab": "كباب",
    "Chicken Kabab": "كباب دجاج",
    "Eggplant Kabab": "كباب بالباذنجان",
    "Grilled Breast": "صدر مشوي",
    "Shish Tawook": "شيش طاووق",
    "Shaqaf Tikka": "شقف تكا",
    "Za'atar with Cheese Manakish": "منقوشة زعتر بالجبنة",
    "The Sarde Special": "سردة الخاصة",
    "Steak Pizza": "بيتزا ستيك",
    "Cheese Manakish": "منقوشة جبنة",
    "Fatayer Spinach": "فطاير سبانخ",
    "Muhammara Manakish": "منقوشة محمرة",
    "Muhammara with Kashkaval": "محمرة بالكشكفال",
    "Za'atar Manakish": "منقوشة زعتر",
    "Safiha Shami": "صفيحة شامية",
    "Cheese Fatayer": "فطاير جبنة",
    "Margherita": "مارغريتا",
    "Vegetables Pizza": "بيتزا خضار",
    "Pepperoni Pizza": "بيتزا بيبروني",
    "Beef Shawarma — Small": "شاورما لحم — صغير",
    "Beef Shawarma — Large": "شاورما لحم — كبير",
    "Chicken Shawarma — Small": "شاورما دجاج — صغير",
    "Chicken Shawarma — Large": "شاورما دجاج — كبير",
    "Chicken Sandwich": "ساندويش دجاج",
    "Tuna Sandwich": "ساندويش تونة",
    "Chicken Burger": "برغر دجاج",
    "Lamb Cubes": "مكعبات لحم",
    "Chicken Fajita": "فاهيتا دجاج",
    "Philadelphia": "فيلادلفيا",
    "Traditional Club": "كلوب تقليدي",
    "Beef Burger": "برغر لحم",
    "Crepe Sarde": "كريب سردة",
    "Crepe Mitty": "كريب ميتي",
    "Crepe Oreo": "كريب أوريو",
    "Crepe Fettuccin": "كريب فتوتشيني",
    "Crepe Chocolate": "كريب شوكولاتة",
    "Waffles Fruit": "وافل فواكه",
    "Waffles Ice Cream": "وافل آيس كريم",
    "Waffles Chocolate": "وافل شوكولاتة",
    "Kunafa with Ice Cream": "كنافة بالآيس كريم",
    "Kunafa Kishnah / Chocolate": "كنافة كشنة / شوكولاتة",
    "Kunafa Kishnah": "كنافة كشنة",
    "Chocolate Fruit Salad": "سلطة فواكه بالشوكولاتة",
    "Classic Fruit Salad": "سلطة فواكه كلاسيك",
    "Mixed Ice Cream": "آيس كريم مشكل",
    "Cheesecake": "تشيز كيك",
    "Orange Juice": "عصير برتقال",
    "Watermelon Juice": "عصير بطيخ",
    "Lemon Juice": "عصير ليمون",
    "Avocado Cocktail": "كوكتيل أفوكادو",
    "Tropical Cocktail": "كوكتيل تروبيكال",
    "Fresh Juices Cocktail": "كوكتيل عصائر طازجة",
    "Mango Milkshake": "ميلك شيك مانجو",
    "Classic Milkshake": "ميلك شيك كلاسيك",
    "Frappuccino Classic": "فرابتشينو كلاسيك",
    "Mojito Color": "موهيتو ملوّن",
    "Granda": "غرندة",
    "Tropical": "تروبيكال",
    "Berry Bull": "بيري بول",
    "Ice Coffee Mocktail": "آيس كوفي",
    "Ice Coffee · Caramel": "آيس كوفي كراميل",
    "Ice Coffee · Mocha": "آيس كوفي موكا",
    "Peach Ice Tea": "شاي مثلج بالخوخ",
    "Passion Fruit Ice Tea": "شاي مثلج باشن فروت",
    "Red Bull": "ريد بول",
    "Moroccan Coffee — Single": "قهوة مغربية — فرد",
    "Moroccan Coffee — Double": "قهوة مغربية — دبل",
    "Mate": "متة",
    "New Affogato": "أفوغاتو",
    "Latte Flavors": "لاتيه بنكهات",
    "Latte Classic": "لاتيه كلاسيك",
    "Cappuccino Flavors": "كابتشينو بنكهات",
    "Cappuccino Classic": "كابتشينو كلاسيك",
    "Flat White": "فلات وايت",
    "Anise · Chamomile": "ينسون · بابونج",
    "Cumin & Lemon": "كمون وليمون",
    "Water — Large": "ماء — كبير",
    "Water — Small": "ماء — صغير",
    "Pepsi · Diet Pepsi": "بيبسي · دايت",
    "7up · Diet 7up": "سفن أب · دايت",
    "Mirinda": "ميرندا",
    "Russian Shisha": "شيشة روسية",
    "Sarde Blend": "خلطة سردة",
    "Peach & Mint": "خوخ ونعناع",
    "Blueberry & Mint": "توت أزرق ونعناع",
    "Watermelon & Mint": "بطيخ ونعناع",
    "Apple & Mint": "تفاح ونعناع",
    "Lemon & Mint": "ليمون ونعناع",
    "Grape & Mint": "عنب ونعناع",
    "Orange & Mint": "برتقال ونعناع",
    "Cinnamon & Gum": "قرفة ومستكة",
    "Gum Mstka": "مستكة",
    "Double Apple": "تفاحتين",
    "Mint": "نعناع",
    "Watermelon": "بطيخ",
    "Strawberry": "فراولة",
    "Blueberry": "توت أزرق",
    "Melon": "شمام",
    "Orange": "برتقال",
    "Peach": "خوخ",
    "Cherry": "كرز",
    "Grape": "عنب",
    "Gum": "مستكة"
  },
  ru: {
    "Arabic Breakfast": "Арабский завтрак",
    "Featteh Samneh": "Фатте с маслом",
    "Foul Bill Zeit": "Фуль с оливковым маслом",
    "Olives": "Оливки",
    "Falafel": "Фалафель",
    "Nabulsi Cheese": "Сыр Набулси",
    "Featteh Cheese": "Фатте с сыром",
    "Labneh": "Лабне",
    "Sarde Salad": "Салат «Сарде»",
    "Armenian Salad": "Армянский салат",
    "Greek Salad": "Греческий салат",
    "Rocca Salad": "Салат с рукколой",
    "Chicken Caesar": "Цезарь с курицей",
    "Fattoush": "Фаттуш",
    "Tabbouleh": "Табуле",
    "Hummus": "Хумус",
    "Beiruti Hummus": "Хумус Бейрути",
    "Hummus with Meat": "Хумус с мясом",
    "Mouttabal Eggplant": "Муттабаль (баклажан)",
    "Baba Ghanoush": "Баба-гануш",
    "Muhammara": "Мухаммара",
    "Vine Leaves": "Долма (виноградные листья)",
    "Grilled Halloumi": "Жареный халуми",
    "Cheese Rolls": "Сырные роллы",
    "Fried Kobbeh": "Жареная киббе",
    "Spicy Potato": "Острый картофель",
    "Mfrika Mushroom": "Мфрика с грибами",
    "Chicken Liver": "Куриная печень",
    "Sojak": "Соджук",
    "Makanek": "Маканек",
    "Arabic Beef Shawarma": "Шаварма из говядины",
    "Arabic Chicken Shawarma": "Шаварма из курицы",
    "Broasted Chicken — 8 pcs": "Жареная курица — 8 шт",
    "Broasted Chicken — 4 pcs": "Жареная курица — 4 шт",
    "Sausages": "Колбаски",
    "Beef Fajita": "Фахита с говядиной",
    "Chicken Fajitas": "Фахита с курицей",
    "Shish Fokhara": "Шиш Фохара",
    "Fried or Grilled Fish Fillet": "Филе рыбы (жар./гриль)",
    "Milanese Escalopes": "Эскалоп по-милански",
    "Arayes Toshka": "Арайес Тошка",
    "Lamb Chops": "Бараньи рёбрышки",
    "Arayes Kofta": "Арайес с кофтой",
    "Cordon Blu": "Кордон Блю",
    "Fish and Chips": "Рыба с картофелем",
    "Half Chicken on Charcoal": "Полцыпленка на углях",
    "Creamy Chicken Soup": "Куриный крем-суп",
    "Australian Beef Fillet": "Австралийское филе",
    "Pasta Alfredo": "Паста Альфредо",
    "Pasta Bolognese": "Паста Болоньезе",
    "Mixed Grill": "Мясное ассорти",
    "Kabab": "Кебаб",
    "Chicken Kabab": "Куриный кебаб",
    "Eggplant Kabab": "Кебаб с баклажаном",
    "Grilled Breast": "Куриная грудка гриль",
    "Shish Tawook": "Шиш Таук",
    "Shaqaf Tikka": "Шакаф Тикка",
    "Za'atar with Cheese Manakish": "Манакиш с заатаром и сыром",
    "The Sarde Special": "Сарде Спешл",
    "Steak Pizza": "Пицца со стейком",
    "Cheese Manakish": "Сырный манакиш",
    "Fatayer Spinach": "Фатайер со шпинатом",
    "Muhammara Manakish": "Манакиш с мухаммарой",
    "Muhammara with Kashkaval": "Мухаммара с кашкавалом",
    "Za'atar Manakish": "Манакиш с заатаром",
    "Safiha Shami": "Сафиха Шами",
    "Cheese Fatayer": "Сырный фатайер",
    "Margherita": "Маргарита",
    "Vegetables Pizza": "Овощная пицца",
    "Pepperoni Pizza": "Пицца пепперони",
    "Beef Shawarma — Small": "Шаварма (говядина) — мал.",
    "Beef Shawarma — Large": "Шаварма (говядина) — бол.",
    "Chicken Shawarma — Small": "Шаварма (курица) — мал.",
    "Chicken Shawarma — Large": "Шаварма (курица) — бол.",
    "Chicken Sandwich": "Сэндвич с курицей",
    "Tuna Sandwich": "Сэндвич с тунцом",
    "Chicken Burger": "Бургер с курицей",
    "Lamb Cubes": "Кусочки баранины",
    "Chicken Fajita": "Фахита с курицей",
    "Philadelphia": "Филадельфия",
    "Traditional Club": "Клаб-сэндвич",
    "Beef Burger": "Бургер с говядиной",
    "Crepe Sarde": "Креп «Сарде»",
    "Crepe Mitty": "Креп Митти",
    "Crepe Oreo": "Креп Орео",
    "Crepe Fettuccin": "Креп Феттучини",
    "Crepe Chocolate": "Шоколадный креп",
    "Waffles Fruit": "Вафли с фруктами",
    "Waffles Ice Cream": "Вафли с мороженым",
    "Waffles Chocolate": "Шоколадные вафли",
    "Kunafa with Ice Cream": "Кунафа с мороженым",
    "Kunafa Kishnah / Chocolate": "Кунафа Кишнах / шоколад",
    "Kunafa Kishnah": "Кунафа Кишнах",
    "Chocolate Fruit Salad": "Фрукт. салат с шоколадом",
    "Classic Fruit Salad": "Классический фрукт. салат",
    "Mixed Ice Cream": "Мороженое ассорти",
    "Cheesecake": "Чизкейк",
    "Orange Juice": "Апельсиновый сок",
    "Watermelon Juice": "Арбузный сок",
    "Lemon Juice": "Лимонный сок",
    "Avocado Cocktail": "Коктейль с авокадо",
    "Tropical Cocktail": "Тропический коктейль",
    "Fresh Juices Cocktail": "Микс свежих соков",
    "Mango Milkshake": "Манго-милкшейк",
    "Classic Milkshake": "Классический милкшейк",
    "Frappuccino Classic": "Фраппучино классический",
    "Mojito Color": "Мохито (цветной)",
    "Granda": "Гранда",
    "Tropical": "Тропический",
    "Berry Bull": "Берри Булл",
    "Ice Coffee Mocktail": "Айс-кофе",
    "Ice Coffee · Caramel": "Айс-кофе · Карамель",
    "Ice Coffee · Mocha": "Айс-кофе · Мокко",
    "Peach Ice Tea": "Холодный чай с персиком",
    "Passion Fruit Ice Tea": "Холодный чай с маракуйей",
    "Red Bull": "Ред Булл",
    "Moroccan Coffee — Single": "Марокканский кофе — оди­н.",
    "Moroccan Coffee — Double": "Марокканский кофе — двойн.",
    "Mate": "Мате",
    "New Affogato": "Аффогато",
    "Latte Flavors": "Латте с сиропом",
    "Latte Classic": "Латте классический",
    "Cappuccino Flavors": "Капучино с сиропом",
    "Cappuccino Classic": "Капучино классический",
    "Flat White": "Флэт уайт",
    "Anise · Chamomile": "Анис · Ромашка",
    "Cumin & Lemon": "Тмин с лимоном",
    "Water — Large": "Вода — большая",
    "Water — Small": "Вода — маленькая",
    "Pepsi · Diet Pepsi": "Пепси · Диет",
    "7up · Diet 7up": "7up · Диет",
    "Mirinda": "Миринда",
    "Russian Shisha": "Русский кальян",
    "Sarde Blend": "Микс «Сарде»",
    "Peach & Mint": "Персик и мята",
    "Blueberry & Mint": "Черника и мята",
    "Watermelon & Mint": "Арбуз и мята",
    "Apple & Mint": "Яблоко и мята",
    "Lemon & Mint": "Лимон и мята",
    "Grape & Mint": "Виноград и мята",
    "Orange & Mint": "Апельсин и мята",
    "Cinnamon & Gum": "Корица и мастика",
    "Gum Mstka": "Мастика",
    "Double Apple": "Двойное яблоко",
    "Mint": "Мята",
    "Watermelon": "Арбуз",
    "Strawberry": "Клубника",
    "Blueberry": "Черника",
    "Melon": "Дыня",
    "Orange": "Апельсин",
    "Peach": "Персик",
    "Cherry": "Вишня",
    "Grape": "Виноград",
    "Gum": "Мастика"
  }
};

const RTL = ['ar'];
const LANG_KEY = 'sarde-lang';

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && T[saved]) return saved;
  const nav = (navigator.language || 'en').slice(0, 2);
  return T[nav] ? nav : 'en';
}

function applyTranslations(lang) {
  const dict = T[lang] || T.en;

  // Walk all data-i18n elements and replace innerHTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    } else if (T.en[key] !== undefined) {
      el.innerHTML = T.en[key];
    }
  });

  // Translate menu item names — prefer data-name-en/ar/ru attrs (dynamic data),
  // fall back to EN-text dictionary (static items)
  document.querySelectorAll('.menu-item').forEach(item => {
    const nameEl = item.querySelector('.name');
    if (!nameEl) return;
    if (item.dataset.nameEn) {
      // Dynamic — read from data attrs
      const en = item.dataset.nameEn;
      const val = lang === 'en' ? en
                : lang === 'ar' ? (item.dataset.nameAr || en)
                : lang === 'ru' ? (item.dataset.nameRu || en)
                : en;
      nameEl.textContent = val;
    } else {
      // Static — capture original EN text on first run
      if (!nameEl.dataset.en) nameEl.dataset.en = nameEl.textContent.trim();
      const en = nameEl.dataset.en;
      if (lang === 'en') nameEl.textContent = en;
      else nameEl.textContent = (M[lang] && M[lang][en]) || en;
    }
  });

  // Translate dynamic h2/labels with data-name-{lang} (category headings + banner labels)
  document.querySelectorAll('[data-name-en]').forEach(el => {
    if (el.classList.contains('menu-item')) return; // handled above
    if (el.classList.contains('menu-tab')) return;  // handled below
    const en = el.dataset.nameEn;
    const val = lang === 'en' ? en
              : lang === 'ar' ? (el.dataset.nameAr || en)
              : lang === 'ru' ? (el.dataset.nameRu || en)
              : en;
    el.textContent = val;
  });

  // Translate menu tabs (dynamic)
  document.querySelectorAll('.menu-tab[data-name-en]').forEach(el => {
    const en = el.dataset.nameEn;
    const val = lang === 'en' ? en
              : lang === 'ar' ? (el.dataset.nameAr || en)
              : lang === 'ru' ? (el.dataset.nameRu || en)
              : en;
    el.textContent = val;
  });

  // Translate dynamic category descriptions
  document.querySelectorAll('[data-desc-en]').forEach(el => {
    const en = el.dataset.descEn;
    const val = lang === 'en' ? en
              : lang === 'ar' ? (el.dataset.descAr || en)
              : lang === 'ru' ? (el.dataset.descRu || en)
              : en;
    el.textContent = val;
  });

  // Pills (data-pill attribute drives the pill text)
  document.querySelectorAll('[data-pill]').forEach(el => {
    const key = 'pill.' + el.dataset.pill;
    if (dict[key]) el.textContent = dict[key];
    else if (T.en[key]) el.textContent = T.en[key];
  });

  // <html lang & dir>
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.includes(lang) ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.classList.toggle('lang-ru', lang === 'ru');
  document.body.classList.toggle('lang-en', lang === 'en');

  // Active state on language switcher
  document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });

  localStorage.setItem(LANG_KEY, lang);
}

function init() {
  // Wire up clicks
  document.querySelectorAll('.lang-switch [data-lang]').forEach(b => {
    b.addEventListener('click', () => applyTranslations(b.dataset.lang));
  });

  applyTranslations(detectInitialLang());
}

// Expose API so menu-loader can re-apply translations after rendering
window.SardeI18n = {
  applyTranslations,
  getCurrentLang: () => localStorage.getItem(LANG_KEY) || detectInitialLang()
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
