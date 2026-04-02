import { StylePreset, PresetCategory } from './types';

export type Language = 'en' | 'ru' | 'et';

export const translations = {
  en: {
    title: "STUDIO LENS AI",
    subtitle: "Professional Retouching by Mazko",
    sourceTitle: "Source Image",
    sourceDesc: "Upload a high-quality portrait or render for best results.",
    dragDrop: "Click to upload",
    dragDropDesc: "or drag and drop",
    dragDropSub: "SVG, PNG, JPG or WEBP (Max 800x800 recommended for speed)",
    original: "ORIGINAL",
    crop: "Crop Image",
    remove: "Remove Image",
    outputFormat: "Output Format",
    stylePreset: "Style Preset",
    selectToLoad: "Select to load example",
    fineTune: "Fine-tune Instructions",
    fineTuneDesc: "Edit text below for custom control",
    applyBtn: "Apply Studio Edit",
    developing: "Developing...",
    addAttire: "Add Professional Attire",
    addAttireDesc: "Fixes clothing issues & safety blocks",
    applyPrompt: "Apply Prompt",
    studioResult: "Studio Result",
    ready: "Ready",
    waiting: "Waiting for Input",
    waitingDesc: "Upload an image or select \"Custom Manual Edit\", then click \"Apply Studio Edit\".",
    applying: "Applying professional grading...",
    usingModel: "Using Gemini 2.5 Flash Image. Aspect Ratio:",
    download: "Download Result",
    redo: "Redo",
    editAnother: "Edit Another",
    previous: "Previous",
    next: "Next",
    version: "VERSION",
    of: "OF",
    error: "Please enter a prompt to describe the edits.",
    connError: "Failed to connect to the editing service.",
    shareApp: "Share App",
    linkCopied: "Link Copied!",
    safetyErrorTitle: "Was the image blocked?",
    safetyErrorDesc: "If the source contains revealing clothing, the AI may refuse it. Try applying our safety fix to add professional attire.",
    applySafety: "Apply Safety Fix",
    footer: "© 2026 Studio Lens AI. Powered by Google Gemini 2.5 Flash.",
    
    // Categories
    cat_portrait: "Portraits",
    cat_architecture: "Architecture & Interiors",
    cat_creative: "Creative Effects",
    cat_utility: "Utility Tools",

    // Crop Modal
    cropTitle: "Crop Selection",
    cancel: "Cancel",
    applyCrop: "Apply Crop",

    // Ratios
    square: "Square",
    portrait: "Portrait",
    landscape: "Landscape",
    cinema: "Cinema",
    story: "Story",
    cat_artistic: "Artistic Styles",
  },
  ru: {
    title: "STUDIO LENS AI",
    subtitle: "Профессиональная ретушь от Mazko",
    sourceTitle: "Исходное изображение",
    sourceDesc: "Загрузите качественный портрет или рендер для наилучшего результата.",
    dragDrop: "Нажмите для загрузки",
    dragDropDesc: "или перетащите файл",
    dragDropSub: "SVG, PNG, JPG или WEBP (макс. 800x800 для скорости)",
    original: "ОРИГИНАЛ",
    crop: "Обрезать",
    remove: "Удалить",
    outputFormat: "Формат вывода",
    stylePreset: "Стиль обработки",
    selectToLoad: "Выберите для предпросмотра",
    fineTune: "Настройка инструкций",
    fineTuneDesc: "Отредактируйте текст ниже для точного контроля",
    applyBtn: "Применить обработку",
    developing: "Обработка...",
    addAttire: "Добавить деловой стиль",
    addAttireDesc: "Исправляет одежду и проблемы с цензурой",
    applyPrompt: "Добавить",
    studioResult: "Результат",
    ready: "Готово",
    waiting: "Ожидание ввода",
    waitingDesc: "Загрузите фото или выберите «Свой запрос», затем нажмите кнопку обработки.",
    applying: "Применение профессиональной цветокоррекции...",
    usingModel: "Используется Gemini 2.5 Flash. Соотношение:",
    download: "Скачать",
    redo: "Переделать",
    editAnother: "Редактировать другое",
    previous: "Назад",
    next: "Вперед",
    version: "ВЕРСИЯ",
    of: "ИЗ",
    error: "Пожалуйста, введите описание желаемых изменений.",
    connError: "Не удалось подключиться к сервису редактирования.",
    shareApp: "Поделиться",
    linkCopied: "Ссылка скопирована!",
    safetyErrorTitle: "Изображение заблокировано?",
    safetyErrorDesc: "Если исходное фото содержит откровенную одежду, ИИ может отказать. Попробуйте наш фильтр делового стиля.",
    applySafety: "Исправить одежду",
    footer: "© 2026 Studio Lens AI. На базе Google Gemini 2.5 Flash.",

    // Categories
    cat_portrait: "Портреты",
    cat_architecture: "Архитектура и Интерьер",
    cat_creative: "Креатив",
    cat_utility: "Инструменты",

    // Crop Modal
    cropTitle: "Кадрирование",
    cancel: "Отмена",
    applyCrop: "Применить",

    // Ratios
    square: "Квадрат",
    portrait: "Портрет",
    landscape: "Пейзаж",
    cinema: "Кино",
    story: "История",
    cat_artistic: "Художественные стили",
  },
  et: {
    title: "STUDIO LENS AI",
    subtitle: "Professionaalne retušeerimine Mazko poolt",
    sourceTitle: "Lähtepilt",
    sourceDesc: "Parima tulemuse saamiseks laadige üles kvaliteetne portree.",
    dragDrop: "Klõpsake üleslaadimiseks",
    dragDropDesc: "või lohistage fail siia",
    dragDropSub: "SVG, PNG, JPG või WEBP (soovitatav max 800x800)",
    original: "ORIGINAAL",
    crop: "Kärbi",
    remove: "Eemalda",
    outputFormat: "Väljundvorming",
    stylePreset: "Stiilivalik",
    selectToLoad: "Valige näidise laadimiseks",
    fineTune: "Täpsustavad juhised",
    fineTuneDesc: "Muutke allolevat teksti täpseks kontrolliks",
    applyBtn: "Rakenda töötlus",
    developing: "Töötlemine...",
    addAttire: "Lisa ametlik riietus",
    addAttireDesc: "Parandab riietust ja väldib tsenseerimist",
    applyPrompt: "Lisa",
    studioResult: "Stuudio tulemus",
    ready: "Valmis",
    waiting: "Ootan sisendit",
    waitingDesc: "Laadige pilt või valige \"Kohandatud juhis\", seejärel klõpsake nuppu.",
    applying: "Rakendan professionaalset värvikorrektsiooni...",
    usingModel: "Mudel: Gemini 2.5 Flash. Külgede suhe:",
    download: "Laadi alla",
    redo: "Tee uuesti",
    editAnother: "Muuda teist",
    previous: "Eelmine",
    next: "Järgmine",
    version: "VERSIOON",
    of: "/",
    error: "Palun sisestage muudatuste kirjeldus.",
    connError: "Ühendus redigeerimisteenusega ebaõnnestus.",
    shareApp: "Jaga äppi",
    linkCopied: "Link kopeeritud!",
    safetyErrorTitle: "Kas pilt blokeeriti?",
    safetyErrorDesc: "Kui pildil on paljastav riietus, võib AI keelduda. Proovige meie ametliku riietuse parandust.",
    applySafety: "Rakenda turvaparrandus",
    footer: "© 2026 Studio Lens AI. Mootoriks Google Gemini 2.5 Flash.",

    // Categories
    cat_portrait: "Portreed",
    cat_architecture: "Arhitektuur ja sisekujundus",
    cat_creative: "Loovus",
    cat_utility: "Tööriistad",

    // Crop Modal
    cropTitle: "Kärpimine",
    cancel: "Loobu",
    applyCrop: "Kärbi",

    // Ratios
    square: "Ruut",
    portrait: "Portree",
    landscape: "Maastik",
    cinema: "Kino",
    story: "Lugu",
    cat_artistic: "Kunstilised stiilid",
  }
};

export const getPrompts = (lang: Language) => {
  const prompts = {
    en: {
      gq: `Enhance this portrait to look like a professional studio photograph in a GQ magazine style.
STRICTLY PRESERVE IDENTITY: Do not change the person's bone structure, facial features, eye shape, nose shape, or mouth shape. The person must remain 100% recognizable.
Improve sharpness, skin texture, and facial details naturally without over-retouching.
Apply professional studio lighting: soft key light, gentle shadows, balanced contrast.
Adjust colors to a cinematic, elegant tone with natural skin color accuracy.
Remove noise and compression artifacts.
Background should be clean, subtle, and neutral studio-style.
Overall mood: confident, refined editorial portrait.`,
      younger: `Retouch this portrait to make the person look naturally younger (approximately 10-15 years younger).
STRICTLY PRESERVE IDENTITY: The person's key facial features and structural likeness must remain unchanged.
Gently smooth out deep wrinkles and lift sagging skin while retaining natural skin pores and texture.
Reduce age spots and brighten the complexion.
The result should look like a realistic photo of the exact same person from several years ago.`,
      animeReal: `Transform this anime/cartoon illustration into an ultra-realistic 8k photograph.
Strictly preserve the character's identity and facial structure, but render them with realistic skin, hair, and eye textures.
Transform the environment into a tangible, photorealistic real-world setting.
Perfect lighting and shading to make it indistinguishable from a real photo.`,
      floorplan3d: `Transform this 2D floor plan into an ultra-realistic 3D visualization.
Identify walls, doors, and windows.
Convert 2D symbols into realistic 3D objects with accurate dimensions.
Render materials realistically (wood, tiles, fabrics) and apply professional lighting with soft shadows.`,
      renderReal: `Transform this 3D model render into an ultra-realistic, professional photograph.
Analyze materials and geometry to apply photorealistic textures and reflections.
Set up professional lighting: correct color temperature and realistic global illumination.
Enhance the environment with context-aware elements (plants, decor) to make the scene look authentic.`,
      furnish: `Furnish this empty space with high-quality, stylish furniture.
STRICTLY PRESERVE STRUCTURE: Do not change walls, floors, windows, or camera perspective.
Place furniture realistically (sofas, desks, rugs, plants) in a logical layout.
Apply professional photographer-style lighting.`,
      realEstate: `Enhance this interior photo to look freshly renovated and brand new.
Remove scratches, stains, and damages from surfaces.
Improve lighting to be bright and welcoming.
Keep the original layout and furniture geometry exactly as is.`,
      cartoon: `Transform this image into a high-quality anime/cartoon style illustration.
Keep the person's identity and facial expression recognizable but stylized.
Apply clean outlines and vibrant shading.`,
      colorize: `Colorize this black and white photograph with natural, realistic colors.
STRICTLY PRESERVE IDENTITY: Do not alter the person's features.
Apply accurate skin tones, hair color, and clothing colors based on texture cues.
Enhance sharpness without changing the composition.`,
      id: `Transform this portrait into a professional ID or Passport photo.
STRICTLY PRESERVE IDENTITY: Do not change any facial features.
Change the background to a solid, pure white.
Apply even, flat, shadow-free lighting.
Ensure natural skin tones and high legibility.`,
      enhance: `Enhance the overall image quality to look like a professional high-end photograph.
STRICTLY PRESERVE EVERYTHING: Do not change the background, person's identity, expression, or clothing.
Optimize white balance, exposure, contrast, and sharpness.
Remove noise and artifacts for a polished, high-resolution result.`,
      cinematic: `Transform this portrait into a cinematic film still.
STRICTLY PRESERVE IDENTITY: Do not change facial structure or features.
Apply dramatic lighting and cinematic color grading (e.g., teal and orange).
Add subtle film grain and depth of field.`,
      attire: `Modify the person's clothing to be professional business attire (e.g., a formal suit, blazer, or professional dress).
Ensure the clothing is modest, high-quality, and fits the person naturally.
STRICTLY PRESERVE IDENTITY: Do not change the person's face, hair, or body structure.
The background should remain consistent or become a professional office/studio setting.`,
      cyberpunk: `Transform this image into a high-quality Cyberpunk/Neon-Noir style photograph.
Apply vibrant neon lighting (pink, cyan, purple) with dramatic shadows.
Add subtle futuristic elements like holographic interfaces or cybernetic details if appropriate.
STRICTLY PRESERVE IDENTITY: Do not change the person's facial features.
Overall mood: high-tech, gritty, atmospheric.`,
      oilPainting: `Transform this image into a masterpiece oil painting in the style of the Old Masters (e.g., Rembrandt or Caravaggio).
Apply visible brushstrokes, rich textures, and dramatic chiaroscuro lighting.
STRICTLY PRESERVE IDENTITY: The subject's features must remain recognizable within the painterly style.
Overall mood: classic, timeless, artistic.`,
      sketch: `Transform this image into a professional hand-drawn charcoal or graphite sketch.
Apply realistic shading, cross-hatching, and paper texture.
STRICTLY PRESERVE IDENTITY: The subject's features must be accurately represented in the sketch.
Overall mood: elegant, minimalist, artistic.`
    },
    ru: {
      gq: `Улучшите этот портрет в стиле журнала GQ.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ: Не меняйте структуру костей, черты лица, форму глаз, носа или рта. Человек должен остаться на 100% узнаваемым.
Улучшите резкость и текстуру кожи естественным образом.
Примените профессиональное студийное освещение и элегантную цветовую коррекцию.
Фон должен быть чистым и нейтральным в студийном стиле.`,
      younger: `Сделайте человека на фото моложе (на 10-15 лет).
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ: Структура лица должна остаться неизменной.
Аккуратно разгладьте морщины, сохраняя естественные поры и текстуру кожи.
Результат должен выглядеть как реальное фото того же человека несколько лет назад.`,
      animeReal: `Преобразуйте аниме в ультра-реалистичное фото.
Сохраните личность персонажа, но добавьте реалистичную кожу, волосы и глаза.
Сделайте окружение фотореалистичным.`,
      floorplan3d: `Превратите 2D план в 3D визуализацию.
Создайте реалистичные стены и мебель на основе чертежа.
Добавьте профессиональный свет и тени.`,
      renderReal: `Превратите 3D-рендер в профессиональное фото.
Добавьте реалистичные текстуры, отражения и правильное освещение.
Оживите сцену мелкими деталями декора.`,
      furnish: `Обставьте пустое пространство стильной мебелью.
СТРОГО СОХРАНИТЕ СТРУКТУРУ: Не меняйте стены, пол, окна или ракурс.
Расположите мебель логично и добавьте студийный свет.`,
      realEstate: `Сделайте интерьер как новый.
Удалите царапины и пятна, улучшите освещение.
Сохраните планировку и геометрию мебели без изменений.`,
      cartoon: `Превратите фото в качественную иллюстрацию.
Сохраните личность человека, но стилизуйте под аниме или комикс.`,
      colorize: `Раскрасьте Ч/Б фото реалистично.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ. Примените естественные оттенки кожи и одежды.`,
      id: `Сделайте фото на паспорт/ID.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ. Чисто белый фон, ровный свет без теней.`,
      enhance: `Профессионально улучшите качество фото.
НИЧЕГО НЕ МЕНЯЙТЕ в личности или композиции. Только цветокоррекция и резкость.`,
      cinematic: `Сделайте кадр из фильма.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ. Драматичный свет и киношные цвета.`,
      attire: `Измените одежду человека на деловой стиль (костюм, пиджак или строгое платье).
Одежда должна быть качественной и сидеть естественно.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ: Не меняйте лицо, прическу или телосложение.
Фон должен остаться прежним или стать офисным/студийным.`,
      cyberpunk: `Превратите это изображение в высококачественную фотографию в стиле Киберпанк.
Примените яркое неоновое освещение (розовый, голубой, фиолетовый) с драматичными тенями.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ: Не меняйте черты лица.`,
      oilPainting: `Превратите это изображение в шедевр масляной живописи в стиле старых мастеров.
Примените видимые мазки кисти, богатые текстуры и драматичное освещение.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ.`,
      sketch: `Превратите это изображение в профессиональный карандашный или угольный набросок.
Примените реалистичные тени, штриховку и текстуру бумаги.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ.`
    },
    et: {
      gq: `Täiustage seda portreed GQ ajakirja stiilis.
SÄILITAGE RANGELT ISIKUPÄRA: Ärge muutke näostruktuuri, silmi, nina ega suud. Isik peab jääma 100% tuvastatavaks.
Parandage teravust ja naha tekstuuri loomulikult.
Rakendage stuudiovalgustust ja elegantset värvigradatsiooni.`,
      younger: `Muutke inimene loomulikult nooremaks (10-15 aastat).
SÄILITAGE RANGELT ISIKUPÄRA: Näojooned peavad jääma muutmata.
Siluge kortsud, säilitades naha loomuliku tekstuuri.`,
      animeReal: `Muutke anime ultra-realistlikuks fotoks.
Säilitage tegelase olemus, kuid lisage realistlikud tekstuurid.`,
      floorplan3d: `Muutke 2D plaan 3D visualisatsiooniks.
Looge realistlikud seinad ja sisustus vastavalt joonisele.`,
      renderReal: `Muutke 3D-renderdus professionaalseks fotoks.
Lisage realistlikud tekstuurid ja professionaalne valgustus.`,
      furnish: `Sisustage tühi ruum stiilse mööbliga.
SÄILITAGE RANGELT STRUKTUUR: Ärge muutke seinu, põrandaid ega aknaid.`,
      realEstate: `Muutke siseruum uueväärseks.
Eemaldage plekid, parandage valgustust, säilitage mööbli asukoht.`,
      cartoon: `Muutke pilt kvaliteetseks illustratsiooniks.
Hoidke isik tuvastatav, kuid stiliseeritud.`,
      colorize: `Värvige mustvalge foto realistlikult.
SÄILITAGE RANGELT ISIKUPÄRA. Lisage loomulikud värvid.`,
      id: `Muutke portree dokumendifotoks.
SÄILITAGE RANGELT ISIKUPÄRA. Puhas valge taust, ühtlane valgus.`,
      enhance: `Täiustage pildi kvaliteeti professionaalselt.
ÄRGE MUUTKE midagi isiku olemuses. Ainult värvid ja teravus.`,
      cinematic: `Muutke portree kinokaadriks.
SÄILITAGE RANGELT ISIKUPÄRA. Kinolikud värvid ja dramaatiline valgus.`,
      attire: `Muutke inimese riietus ametlikuks äririietuseks (nt ülikond, pintsak või korrektne kleit).
Riietus peab olema kvaliteetne ja sobima loomulikult.
SÄILITAGE RANGELT ISIKUPÄRA: Ärge muutke nägu, juukseid ega kehaehitust.
Taust peab jääma samaks või muutuma professionaalseks kontori-/stuudiokeskkonnaks.`,
      cyberpunk: `Muutke see pilt kvaliteetseks küberpungi stiilis fotoks.
Rakendage eredat neoonvalgustust (roosa, tsüaan, lilla) koos dramaatiliste varjudega.
SÄILITAGE RANGELT ISIKUPÄRA.`,
      oilPainting: `Muutke see pilt õlimaali meistriteoseks vanade meistrite stiilis.
Rakendage nähtavaid pintslitõmbeid, rikkalikke tekstuure ja dramaatilist valgustust.
SÄILITAGE RANGELT ISIKUPÄRA.`,
      sketch: `Muutke see pilt professionaalseks käsitsi joonistatud söe- või grafiitjoonistuseks.
Rakendage realistlikku varjutust ja paberi tekstuuri.
SÄILITAGE RANGELT ISIKUPÄRA.`
    }
  };

  return prompts[lang];
};

export const getStylePresets = (lang: Language): StylePreset[] => {
  const prompts = getPrompts(lang);
  
  const descriptions = {
    en: {
      gq: 'High-end magazine style, masculine, sharp, studio lighting.',
      younger: 'Makes the subject look naturally younger (10-15 years).',
      animeReal: 'Converts anime/cartoons into ultra-realistic photos.',
      floorplan3d: 'Converts 2D blueprints into realistic 3D renderings.',
      renderReal: 'Converts raw 3D renders into photorealistic images with pro lighting.',
      furnish: 'Adds furniture to empty rooms while keeping structure.',
      realEstate: 'Renovates interiors, removes scratches, perfects lighting.',
      cartoon: 'Vibrant anime/cartoon illustration style.',
      colorize: 'Restores natural colors to black & white photos.',
      id: 'Solid white background, flat lighting, high contrast for documents.',
      enhance: 'Enhances quality/colors, keeps original background.',
      cinematic: 'Movie-like color grading, dramatic shadows, teal & orange tones.',
      noir: 'Classic black and white, high contrast, moody, timeless.',
      soft: 'Bright, airy, soft lighting, clean and approachable.',
      gqTitle: 'GQ Editorial',
      youngerTitle: 'Youthful Glow',
      animeRealTitle: 'Anime to Real',
      floorplan3dTitle: '2D -> 3D Floorplan',
      renderRealTitle: '3D to Real',
      furnishTitle: 'Furnish Empty Space',
      realEstateTitle: 'Real Estate Pro',
      cartoonTitle: 'Cartoon / Anime',
      colorizeTitle: 'Colorize B&W',
      idTitle: 'ID / Passport',
      enhanceTitle: 'Pro Color Grade',
      cinematicTitle: 'Cinematic Film',
      restore: 'Restores old, damaged, or blurry photos to high quality.',
      restoreTitle: 'Photo Restoration',
      custom: 'Enter your own instructions for complete creative control.',
      customTitle: 'Custom Manual Edit',
      cyberpunk: 'Vibrant neon lighting, futuristic atmosphere, gritty noir.',
      cyberpunkTitle: 'Cyberpunk Neon',
      oilPainting: 'Classic oil painting style with rich textures and brushstrokes.',
      oilPaintingTitle: 'Oil Painting',
      sketch: 'Professional charcoal or graphite hand-drawn sketch.',
      sketchTitle: 'Hand-Drawn Sketch',
    },
    ru: {
      gq: 'Стиль глянцевого журнала, мужской, резкий, студийный свет.',
      younger: 'Делает объект моложе (на 10-15 лет), сохраняя узнаваемость.',
      animeReal: 'Превращает аниме/мультфильмы в реалистичные фото.',
      floorplan3d: 'Превращает 2D чертежи в реалистичные 3D рендеры.',
      renderReal: 'Превращает сырые 3D рендеры в фотореалистичные снимки.',
      furnish: 'Добавляет мебель в пустые комнаты, сохраняя стены.',
      realEstate: 'Ремонтирует интерьеры, удаляет царапины, улучшает свет.',
      cartoon: 'Стилизованная иллюстрация в стиле аниме/мультфильма.',
      colorize: 'Восстанавливает естественные цвета черно-белых фото.',
      id: 'Белый фон, ровный свет, высокий контраст для документов.',
      enhance: 'Улучшает качество/цвета, сохраняет оригинальный фон.',
      cinematic: 'Киношная цветокоррекция, драматичные тени.',
      gqTitle: 'GQ Редакция',
      youngerTitle: 'Молодость',
      animeRealTitle: 'Аниме в Фото',
      floorplan3dTitle: '2D -> 3D План',
      renderRealTitle: '3D в Фото',
      furnishTitle: 'Обставить комнату',
      realEstateTitle: 'Недвижимость',
      cartoonTitle: 'Мультфильм / Аниме',
      colorizeTitle: 'Раскрасить Ч/Б',
      idTitle: 'Паспорт / ID',
      enhanceTitle: 'Профи Цветокор',
      cinematicTitle: 'Киношный',
      restore: 'Восстанавливает старые, поврежденные или размытые фото.',
      restoreTitle: 'Реставрация фото',
      custom: 'Введите свои инструкции для полного контроля над результатом.',
      customTitle: 'Свой запрос',
      cyberpunk: 'Яркое неоновое освещение, футуристическая атмосфера.',
      cyberpunkTitle: 'Киберпанк Неон',
      oilPainting: 'Классическая масляная живопись с богатыми текстурами.',
      oilPaintingTitle: 'Масляная живопись',
      sketch: 'Профессиональный карандашный набросок.',
      sketchTitle: 'Карандашный эскиз',
    },
    et: {
      gq: 'Kõrgetasemeline ajakirjastiil, mehelik, terav, stuudiovalgus.',
      younger: 'Muudab subjekti loomulikult nooremaks (10-15 aastat).',
      animeReal: 'Muudab anime/multikad realistlikeks fotodeks.',
      floorplan3d: 'Muudab 2D joonised realistlikeks 3D renderdusteks.',
      renderReal: 'Muudab 3D renderdused fotorealistlikeks piltideks.',
      furnish: 'Lisab tühjadesse ruumidesse mööbli, säilitades struktuuri.',
      realEstate: 'Renoveerib interjööre, eemaldab kriimustused, parandab valgust.',
      cartoon: 'Stiliseeritud anime/multika stiilis illustratsioon.',
      colorize: 'Taastab mustvalgete fotode loomulikud värvid.',
      id: 'Valge taust, lame valgus, suur kontrast dokumentidele.',
      enhance: 'Parandab kvaliteeti/värve, säilitab tausta.',
      cinematic: 'Filmilik värvigradatsioon, dramaatilised varjud.',
      noir: 'Klassikaline mustvalge, suur kontrast, ajatu.',
      soft: 'Ere, õhuline, pehme valgus, puhas.',
      gqTitle: 'GQ Toimetus',
      youngerTitle: 'Nooruslik sära',
      animeRealTitle: 'Anime -> Foto',
      floorplan3dTitle: '2D -> 3D Plaan',
      renderRealTitle: '3D -> Foto',
      furnishTitle: 'Sisusta tühi ruum',
      realEstateTitle: 'Kinnisvara Pro',
      cartoonTitle: 'Multikas / Anime',
      colorizeTitle: 'Värvi MV',
      idTitle: 'ID / Pass',
      enhanceTitle: 'Pro Värvid',
      cinematicTitle: 'Filmilik',
      restore: 'Taastab vanad, kahjustatud või udused fotod.',
      restoreTitle: 'Fotode taastamine',
      custom: 'Sisestage oma juhised täielikuks loominguliseks kontrolliks.',
      customTitle: 'Kohandatud juhis',
      cyberpunk: 'Ere neoonvalgustus, futuristlik atmosfäär.',
      cyberpunkTitle: 'Cyberpunk Neon',
      oilPainting: 'Klassikaline õlimaal rikkalike tekstuuridega.',
      oilPaintingTitle: 'Õlimaal',
      sketch: 'Professionaalne käsitsi joonistatud söe- või grafiitjoonistus.',
      sketchTitle: 'Käsitsi joonistatud visand',
    }
  };

  const d = descriptions[lang];

  return [
    { id: 'gq-studio', name: d.gqTitle, description: d.gq, prompt: prompts.gq, category: 'portrait' },
    { id: 'make-younger', name: d.youngerTitle, description: d.younger, prompt: prompts.younger, category: 'portrait' },
    { id: 'id-document', name: d.idTitle, description: d.id, prompt: prompts.id, category: 'utility' },
    { id: 'native-enhance', name: d.enhanceTitle, description: d.enhance, prompt: prompts.enhance, category: 'utility' },
    { id: 'custom-manual', name: d.customTitle, description: d.custom, prompt: '', category: 'utility' },
    { id: 'render-real', name: d.renderRealTitle, description: d.renderReal, prompt: prompts.renderReal, category: 'architecture', isNew: true },
    { id: 'furnish-room', name: d.furnishTitle, description: d.furnish, prompt: prompts.furnish, category: 'architecture', isNew: true },
    { id: 'real-estate', name: d.realEstateTitle, description: d.realEstate, prompt: prompts.realEstate, category: 'architecture' },
    { id: 'floorplan-3d', name: d.floorplan3dTitle, description: d.floorplan3d, prompt: prompts.floorplan3d, category: 'architecture' },
    { id: 'anime-real', name: d.animeRealTitle, description: d.animeReal, prompt: prompts.animeReal, category: 'creative' },
    { id: 'cartoon-style', name: d.cartoonTitle, description: d.cartoon, prompt: prompts.cartoon, category: 'creative' },
    { id: 'colorize-bw', name: d.colorizeTitle, description: d.colorize, prompt: prompts.colorize, category: 'creative' },
    { id: 'cinematic', name: d.cinematicTitle, description: d.cinematic, prompt: prompts.cinematic, category: 'creative' },
    { id: 'cyberpunk', name: d.cyberpunkTitle, description: d.cyberpunk, prompt: prompts.cyberpunk, category: 'artistic', isNew: true },
    { id: 'oil-painting', name: d.oilPaintingTitle, description: d.oilPainting, prompt: prompts.oilPainting, category: 'artistic', isNew: true },
    { id: 'sketch-art', name: d.sketchTitle, description: d.sketch, prompt: prompts.sketch, category: 'artistic', isNew: true },
    { id: 'restore-photo', name: d.restoreTitle, description: d.restore, prompt: (lang === 'en' ? `Restore this old photograph to high quality.
Remove scratches, dust, and physical damage.
Sharpen blurry details and enhance facial features naturally.
Balance exposure and contrast while preserving the original historical feel.
STRICTLY PRESERVE IDENTITY: Do not change the person's features.` : lang === 'ru' ? `Восстановите это старое фото в высоком качестве.
Удалите царапины, пыль и физические повреждения.
Улучшите резкость размытых деталей и черты лица естественным образом.
Сбалансируйте экспозицию и контраст, сохраняя историческую атмосферу.
СТРОГО СОХРАНИТЕ ЛИЧНОСТЬ: Не меняйте черты лица.` : `Taastage see vana foto kõrge kvaliteediga.
Eemaldage kriimustused, tolm ja füüsilised kahjustused.
Parandage uduste detailide teravust ja näojooni loomulikult.
Tasakaalustage säritus ja kontrast, säilitades algse ajaloolise tunnetuse.
SÄILITAGE RANGELT ISIKUPÄRA: Ärge muutke isiku näojooni.`), category: 'utility', isNew: true },
  ];
};