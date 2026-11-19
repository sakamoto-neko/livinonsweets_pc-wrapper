## Required assets

The game needs **237 files**: `index.js`, 232 hashed asset files referenced by it, and 4 files in `static/transitions/`. They all come from:

```
https://nxm-clw-cdn.dn.nexoncdn.co.kr/ba/events/2024/10/minigame_r3409u/build_120d0w/<file>
```

Chart data for all songs is embedded in `index.js`. There are no separate chart files.

Keep the exact file names and the folder structure below. The game loads each file by its hashed name.

```
build_120d0w/
├── index.js
├── <232 hashed files: .png .mp3 .json .ttf .otf>
└── static/
    └── transitions/
        ├── transition_03.atlas
        ├── transition_03.json
        ├── transition_03.png
        └── transition_03_2.png
```

Run `npm run check-assets -- "path\to\build_120d0w"` to list anything missing, with its download URL.

The "Used for" column gives the game's internal asset key, or for song files the song title and slot. `album` is the jacket, `album_cd` the CD art, `song` the full track, and `*_highlight` the song-select preview. The game loads many files only when a scene needs them, mainly story portraits and story BGM. A folder saved from a browser session often lacks these even though songs play fine.


### Code (1)

| File | Used for |
|---|---|
| `index.js` | game code (webpack bundle, exports window.BLUE_ARCHIVE_RHYTHM) |

### Songs (jackets, full tracks, previews) (35)

| File | Used for |
|---|---|
| `66d93290173e1913c1fe.mp3` | audio:bgm_main; song "Bluemark Canvas" song; audio:bgm_theme_189 |
| `9cfd1cb8dd3e41fa0949.png` | song "After School Dessert" album; song "After School Dessert" album_lock |
| `65e5cadcedbb8160204a.png` | song "After School Dessert" album_cd |
| `2b0851c4f3dac7f60b80.mp3` | song "After School Dessert" song; audio:bgm_theme_128 |
| `f11fb2cd0f9bdd788e8f.mp3` | song "After School Dessert" song_highlight |
| `6370656dc9950e6f9ee4.png` | song "Aoharu" album |
| `0c00a22bdc13cde8282c.png` | song "Aoharu" album_cd |
| `8145344bd63f736d5f92.png` | song "Aoharu" album_lock |
| `a9763f3e048ed78f4341.mp3` | song "Aoharu" song; audio:bgm_theme_152 |
| `b61b8b20d9f431a420d2.mp3` | song "Aoharu" song_highlight |
| `d36bb227a3af68b27b69.png` | song "Bluemark Canvas" album |
| `4daf4130b1cc002c0896.png` | song "Bluemark Canvas" album_cd |
| `c544664ed1eeead66ac8.png` | song "Bluemark Canvas" album_lock |
| `3d7fb2d21ea63ceef942.mp3` | song "Bluemark Canvas" song_highlight |
| `e6ed29fbee93ee5d9e58.png` | song "Irodori Canvas" album |
| `03eb72ba11573cb635aa.png` | song "Irodori Canvas" album_cd |
| `86e109dce1a00fd722d2.png` | song "Irodori Canvas" album_lock |
| `dc87a25680d49c6d9930.mp3` | song "Irodori Canvas" song; audio:bgm_theme_180 |
| `192b56820668da43082d.mp3` | song "Irodori Canvas" song_highlight |
| `927716bc31d4d9a23aaf.mp3` | song "Irodori Canvas" song_vocal |
| `0726acfec0044da9f7f4.mp3` | song "Irodori Canvas" song_vocal_highlight |
| `e102a9d3aab69085e3d7.png` | song "TOMODACHI OneStep" album; song "TOMODACHI OneStep" album_lock |
| `06692aaa77856183535f.png` | song "TOMODACHI OneStep" album_cd |
| `7ee501b2fdf40d93338e.mp3` | song "TOMODACHI OneStep" song |
| `31ab01a7ac9f5090215b.mp3` | song "TOMODACHI OneStep" song_highlight |
| `bfe81ca04ad4d2873448.mp3` | song "TOMODACHI OneStep" song_vocal |
| `62cbe35daf5de2dba557.mp3` | song "TOMODACHI OneStep" song_vocal_highlight |
| `4fc74cc68ff2d10a0700.png` | song "Tremendous Celebration" album; song "Tremendous Celebration" album_lock |
| `e71797921f5618c0efcd.png` | song "Tremendous Celebration" album_cd |
| `cd787feaeedddbbe225f.mp3` | song "Tremendous Celebration" song |
| `ce830d82516faa8368fb.mp3` | song "Tremendous Celebration" song_highlight |
| `b5d20aa500376e000c8b.png` | song "Twinkle☆Magic" album; song "Twinkle☆Magic" album_lock |
| `51ae5e4ac9d91da76f39.png` | song "Twinkle☆Magic" album_cd |
| `05fc19b438f485e3559f.mp3` | song "Twinkle☆Magic" song |
| `8c0f77e71ad30ff3a56c.mp3` | song "Twinkle☆Magic" song_highlight |

### Other BGM (4)

| File | Used for |
|---|---|
| `06a97f213e2cebc8b742.mp3` | audio:bgm_theme_165 |
| `0e515cee65642ad33a5c.mp3` | audio:bgm_theme_16 |
| `64334db42816df2831d4.mp3` | audio:bgm_story_lobby |
| `ca06bf99890380641e2f.mp3` | audio:bgm_game_result |

### Story character portraits (44)

| File | Used for |
|---|---|
| `3cc999df8e336f828ba1.png` | image:airi_band_02 |
| `976a289902ebb85c42cf.png` | image:airi_band_03 |
| `8dcdcc482641f4de7c5b.png` | image:airi_band_04 |
| `60e6d0f870afdf477475.png` | image:airi_band_08 |
| `14404c0fc43a7115560a.png` | image:airi_band_11 |
| `e66a5db92352f68a1a0c.png` | image:airi_band_12 |
| `d9f4dd5070644394d447.png` | image:airi_normal_02 |
| `76484b88dccb172f622c.png` | image:airi_normal_03 |
| `9ac61838cfd5867eb6ea.png` | image:airi_normal_06 |
| `d6c60a19a1c9e60cf011.png` | image:airi_normal_07 |
| `37e0f6fd062cae2161ae.png` | image:kazusa_band_02 |
| `ba54e8fab3ef52d967a3.png` | image:kazusa_band_03 |
| `8c0971238311b49b7180.png` | image:kazusa_band_07 |
| `329be9a028d0ae6dc319.png` | image:kazusa_band_08 |
| `b9ac30ea403e28427511.png` | image:kazusa_band_11 |
| `a45c5d99704ec1019531.png` | image:kazusa_band_16 |
| `1aa021e5c7f30674b55a.png` | image:kazusa_band_18 |
| `f39fb83e8e27a933b914.png` | image:kazusa_normal_01 |
| `7cce0554481e52eb028c.png` | image:kazusa_normal_02 |
| `c072a3e99c546cb47f9f.png` | image:kazusa_normal_03 |
| `a8b896c6f134a6949780.png` | image:kazusa_normal_06 |
| `2be5b30b1abfc2b1d488.png` | image:kazusa_normal_07 |
| `bc7ced2eb6a5c8482c08.png` | image:kazusa_normal_13 |
| `ac50ce7ec1f044f60f0a.png` | image:kazusa_normal_eyeclose |
| `a0c52a9b8b6eeb31d67d.png` | image:natsu_band_02 |
| `5a359f079b6e4ea3918f.png` | image:natsu_band_03 |
| `fc512daa26b97f72b347.png` | image:natsu_band_05 |
| `4275c5d3d011957c9026.png` | image:natsu_band_07 |
| `27cfcebf21cb06e76307.png` | image:natsu_band_08 |
| `310a25de21f29718b431.png` | image:natsu_band_10 |
| `7a74d8ebddd9b05ed618.png` | image:natsu_normal_02 |
| `3cb7fd19ecd35d1a952b.png` | image:natsu_normal_05 |
| `eeb859b1378d251aec67.png` | image:yoshimi_band_02 |
| `0a081d56f7f8b063209b.png` | image:yoshimi_band_04 |
| `b0b19966b496ab241c8e.png` | image:yoshimi_band_05 |
| `d521d29763bcc8f22f3c.png` | image:yoshimi_band_07 |
| `f49d12111a83104671cb.png` | image:yoshimi_band_09 |
| `b7b39033f3bd2cf19b4b.png` | image:yoshimi_band_10 |
| `565b1962cb7da97914bc.png` | image:yoshimi_band_11 |
| `a38afc6dbe113d522ff7.png` | image:yoshimi_band_eyeclose |
| `66ad1c7d5b14d83ec0e9.png` | image:yoshimi_normal_02 |
| `58ecaf1a2b908cc3d346.png` | image:yoshimi_normal_03 |
| `f7f9eed9153eda1363c4.png` | image:yoshimi_normal_05 |
| `e9225b29c499dda96061.png` | image:yoshimi_normal_eyeclose |

### Story backgrounds (2)

| File | Used for |
|---|---|
| `203b4d2cd49820169d71.png` | image:dialog_bg_resting_lounge |
| `f6fd269f829f563d3d63.png` | image:dialog_bg_arcade |

### UI, sprites and atlases (139)

| File | Used for |
|---|---|
| `0692c4f442180c827777.png` | image:main_02_kazusa |
| `06ef4790b68bb562bb59.png` | image:main_02_play_shadow |
| `074a5906ec474d85cf11.png` | image:game_stop |
| `0ab39ef511b960bbde73.png` | image:song_select_bg_tile2 |
| `0cb631a1f2c48de4159c.png` | atlas:story_subject_sheet |
| `0d4bd12b9fe5505d9dab.json` | atlas:game_cutscene_clear_intro_sheet_1 |
| `0fe889b59f9363a3dd04.png` | image:game_pause_exit |
| `1348d83e23acbdaf4f1c.png` | image:game_result_full_combo |
| `1397ba3f8ec3a0ecea2a.png` | sheet:game_long_note_mid_sheet |
| `13e63060b4289244f9b1.png` | image:main_01_bg |
| `1ad7b996db7fb2f8965d.png` | sheet:main_option_popup_confirm_th |
| `1f0abae6e403905bb557.png` | image:song_select_tab_2_left |
| `20ff4c2940dffa9cb33b.png` | image:main_01_airi |
| `21509b2cd342de9388a4.png` | image:main_02_bg |
| `22067f63d5bbe3b12efa.png` | image:song_select_tab_2_right |
| `2cf244c34228c6215107.png` | sheet:main_option_popup_confirm_ko |
| `2effb2699cf299719a31.png` | image:song_select_tab_1_right |
| `2f97dab8ac803a15fb2e.png` | sheet:game_note_fx |
| `2fb3c7237ae724a9aa20.png` | sheet:song_select_level |
| `30dd91efba37ba2a6519.png` | image:story_lobby_ui_2 |
| `334171442bd3f8be2379.png` | image:story_lobby_cloud |
| `3392ea08419f35901121.png` | image:main_02_yoshimi |
| `354b3785efd28153121e.png` | image:main_03_kazusa |
| `3685294cd6a9e5ffc6aa.png` | image:main_option_popup_circle |
| `36eb927ee98ee2c961c5.json` | atlas:story_subject_sheet |
| `399666ee71eaee55e016.png` | image:story_lobby_cover |
| `3d1b2e630227405fd260.png` | sheet:game_result_confirm_sheet_tc |
| `3e143fb537385ed85b8a.png` | sheet:story_lobby_enter_tc |
| `406624bb4e520095a2ca.png` | image:main_02_update_text |
| `426ab1a6b4203ca1e325.png` | image:main_option_popup |
| `4719598e601cf8e6218c.png` | image:main_01_kazusa |
| `473ef23051d3a16522fa.png` | image:main_01_story_shadow |
| `475da9630630556a4537.png` | image:game_judge_great |
| `47a30eb555a24cd95198.png` | image:game_pause_continue |
| `4aa661a85a99fcceb8a0.png` | sheet:game_fever_crowd_sheet |
| `4bc40ecc41db2eae89f0.png` | image:game_result_fx |
| `4c0a8be35c9567d38a00.png` | sheet:game_long_note_top_sheet |
| `4d035deaaf3e68368fac.png` | image:game_result_perfect |
| `4dba736b6938eecf6dbc.png` | image:main_02_airi |
| `4e60f2702e229191930f.png` | image:game_judge_miss |
| `4fed3f38b63bdeca4005.png` | atlas:game_cutscene_clear_intro_sheet_2 |
| `500cfc713062a2574b3c.png` | atlas:game_cutscene_clear_intro_bg_sheet |
| `5107ba2fda857aaeb9ee.png` | sheet:game_result_rank_sheet |
| `551e9428ecf063d4226f.png` | image:song_select_bg_tile3 |
| `56f13a79e2e2ef8054b3.png` | sheet:song_select_vocal |
| `5c2ba6593f2210dea0f1.png` | image:song_select_button_tooltip |
| `5c74ccfc144fc123b158.png` | sheet:game_result_confirm_sheet_th |
| `5e7b273c8f1df80bf711.png` | image:story_frame |
| `5ea794e42a1a7a022ae7.png` | image:story_lobby_illust |
| `5f17dd82d5e3f43b27fd.png` | sheet:scene_transition |
| `605cf7631fa70cb3a56e.png` | image:main_03_option |
| `64a427158887ff11e34e.png` | sheet:game_result_prop_th |
| `64a46da091fb7c7e5b40.png` | image:game_result_bg |
| `65032ef867bd8cd9ec0d.png` | image:game_result_text_bg |
| `65c892e82daca8b90446.png` | sheet:main_option_popup_confirm_en |
| `6669cdcf8f5ba4a69098.png` | image:scene_transition_hidden_sd |
| `67277e9a315971742e32.png` | image:scene_loading_illust_2 |
| `67556e1a2409dd3d971b.png` | image:main_01_story |
| `6788fb5bdf6d634e26e5.png` | sheet:story_lobby_enter_th |
| `698a1b412d3d88adfaa8.png` | sheet:main_option_popup_confirm_tc |
| `6b463639ef3ba0d16681.png` | image:song_select_bg_tile |
| `6e065cdd232c2109f0f2.png` | image:scene_loading_illust_3 |
| `70ed0be6dc0f7b4512f0.png` | sheet:song_select_level_arrow_sheet |
| `7175419ded8591fce4eb.png` | image:story_lobby_bg |
| `77138e7e03b2f53f31db.png` | image:game_chara |
| `7816359ce72f091a86d9.png` | image:story_lobby_ui_1 |
| `789613cd65f717653b14.png` | sheet:game_result_confirm_sheet_en |
| `7afcd7886de4d43f2fa7.png` | image:main_02_natsu |
| `7b48a452f6413793bbf0.png` | image:main_03_shine |
| `7d27a94f0e5e60979531.png` | image:song_select_rank_110 |
| `80b925a02ab0e77b1351.png` | image:game_result_rank |
| `816b2eb78ed6967b3689.png` | image:song_select_tab_1_left |
| `826e8c231e2340a55bd7.png` | sheet:game_result_level_sheet |
| `82eff4eaec6ad3d0da1a.png` | image:game_fever_bg |
| `83e8c7dc1e5cbb42752c.png` | image:main_02_play |
| `859b058228f1a8abce1a.png` | image:game_judge_good |
| `869bd5887467219aa885.json` | atlas:game_cutscene_clear_intro_bg_sheet |
| `88c801a2eb82cd5cf2ee.png` | image:game_score_bar |
| `8b65c64da82c4c6d977e.png` | image:scene_transition_hidden_illust |
| `8bb1f972d03d35c6ada6.png` | image:story_lobby_b_cloud |
| `8bd9b9926bbb534ebff0.png` | image:song_select_ive_alive |
| `8d0bb2ff414e6e320dd8.png` | image:loading_bar |
| `8dfd172b1a4e631c0233.png` | image:main_01_na_yo |
| `9081f38d371318b6a3da.png` | sheet:game_result_confirm_sheet_ko |
| `90c3cb8a12157c5f1304.png` | sheet:song_select_stamp_sheet |
| `90cab0228d09ffc132cc.png` | image:main_03_natsu |
| `91f49c7a9389445ab76e.png` | image:song_select_tab_2_center |
| `92e16cfd9d0469cf23ee.png` | sheet:game_result_prop_ko |
| `93e7f447838e29747d08.png` | image:loading_bg |
| `9802b7d2dbb15323cd61.png` | sheet:game_gear_button_sheet |
| `9fac7022810dbbe6ae84.png` | image:game_fever_g_bg |
| `a2b3bfc95c87435b4e0a.png` | image:game_result_clear |
| `aa4cb4ceba55542cca31.png` | sheet:game_cutscene_clear_fail_sheet |
| `abaf2e934f5d1de2eeec.png` | image:story_lobby_tile |
| `ac23428b6d13a26a9ea1.png` | image:main_03_option_shadow |
| `af793b9d7f6aa9ddfb18.png` | image:popup_unlock |
| `afb1ff01edae0316bd7b.png` | image:game_gear_bg |
| `affba6b84f15426627fe.png` | image:loading_logo |
| `b51284bf333641fb2596.png` | image:game_score_bg |
| `b64df718669a6c51fe7d.png` | sheet:story_lobby_enter_ko |
| `b6f4ae911890466727cd.png` | image:game_result_best_score |
| `b7b585c0730d11f68614.png` | sheet:game_long_note_bot_sheet |
| `b8da9737101acfa298e4.png` | sheet:game_result_prop_tc |
| `b8db4890d54c238f469a.png` | image:game_judge_sugar |
| `ba768c7b8f3ab44dfc76.png` | image:main_03_airi |
| `ba7e3a3d58520b1af51b.png` | image:game_gear_checkline |
| `bd9ee48a76eef73c925e.png` | sheet:story_lobby_enter_en |
| `bf2299046e1d7b5cf082.png` | sheet:story_lobby_book_sheet |
| `bf50bd31a40f9cb4348e.png` | sheet:game_count_sheet |
| `c252cb35b3c6257244a6.png` | image:game_fever_chara |
| `c2c24d5fbf7d78acd6ea.png` | image:game_result_cover |
| `c3c148a352c2dcc0251e.png` | image:game_normal_bg |
| `c50d24d8b0eb946d6bd8.png` | image:game_pause_st_back |
| `c7922522a85ea3a17af2.png` | sheet:song_select_start |
| `cb00c6e92a45b5867062.png` | sheet:game_result_prop_en |
| `cc4fb70ba508cb534f8c.png` | image:loading_update_ribbon |
| `d23cc32b1f0bbe03e6c5.json` | atlas:game_cutscene_clear_intro_sheet_2 |
| `d32c1a4248c3b7182623.png` | sheet:loading_airi |
| `d35e8387404afa62cbaf.png` | image:game_pause_retry |
| `d497d7e926fdfe9e9242.png` | image:game_gear_bottom |
| `d8c8a8a810d6e224d1eb.png` | image:main_03_yoshimi |
| `d965945a770f227010de.png` | sheet:game_gear_line_sheet |
| `dc362bdebb670c3e2e33.png` | image:game_score_frame |
| `ded312bbd02ae13b5344.png` | image:song_select_bg |
| `e16038ca48d7ea75206a.png` | image:game_pause_stop |
| `e4ebc44e597c446532bf.png` | image:main_03_bg |
| `e55925864fdcda38944a.png` | image:main_option_popup_bar |
| `e65fc6edd8c993e3e327.png` | image:scene_loading_illust_1 |
| `ecf83dabdb109756f32b.png` | image:song_select_tab_1_center |
| `ee9eeb9ba4767d4095cf.png` | image:game_fever_g_bar |
| `f2a76be9696e85ed0417.png` | sheet:song_select_back; sheet:story_lobby_back |
| `f43a0d7005fde48c6cfb.png` | image:main_01_kazusa_shadow |
| `f475834b4306e9703ac5.png` | sheet:main_option_popup_arrow |
| `f5fc8f2fb9004e01b81b.png` | atlas:game_cutscene_clear_intro_sheet_1 |
| `f974288e51fe85d1d7a6.png` | sheet:game_basic_note_sheet |
| `f9ad827b6205ba717544.png` | sheet:song_select_arrow_sheet |
| `fb613da8817be2b880dd.png` | image:song_select_serenade |
| `fe79b75cdea880a83493.png` | image:game_pause_st_popup |
| `febbdaaf1f1e5f566b6b.png` | image:story_lobby_stamp |

### Fonts (8)

| File | Used for |
|---|---|
| `0c6f2e68766c434bd7a5.otf` | font GyeonggiTitle 700 |
| `6fecad7944c138402266.otf` | font GyeonggiTitle 500 |
| `7fdea824c0e8a36f26d5.ttf` | font Prompt 700 |
| `999e82458139273a2cff.ttf` | font Noto Sans TC 700 |
| `a62e249104a743a52e74.otf` | font DNFBitBitv2 (otf) |
| `a8979f5fddba897421a7.ttf` | font Prompt 400 |
| `d85aa51d9a2de01f56b9.ttf` | font Noto Sans TC 400 |
| `e56226a917a247c718e6.ttf` | font DNFBitBitv2 (ttf) |

### Scene transition (4)

| File | Used for |
|---|---|
| `static/transitions/transition_03.atlas` | scene transition (Spine) |
| `static/transitions/transition_03.json` | scene transition (Spine) |
| `static/transitions/transition_03.png` | scene transition (Spine) |
| `static/transitions/transition_03_2.png` | scene transition (Spine) |
