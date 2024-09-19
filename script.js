(function(){
    var script = {
 "start": "this.playAudioList([this.audio_0CDB9117_0030_B8A6_4133_BF74FFD198C0]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD",
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -169.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16C64552_0071_B8B9_414E_A4651AB85944",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 82.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1783E693_0071_B9BF_4131_ED0DD56E21CA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -57.79,
  "class": "PanoramaCameraPosition",
  "pitch": -2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_0_t.jpg",
 "id": "album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_0",
 "width": 574,
 "label": "danessa floor plan",
 "image": {
  "levels": [
   {
    "url": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 936
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "playground",
 "hfovMin": "135%",
 "id": "panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002",
 "overlays": [
  "this.overlay_2EBE5637_0100_4F8B_4114_FBE50A01F748"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -83.81,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.02,
   "panorama": "this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_t.png",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449",
 "label": "Photo Album original-3e7a8ac067e660ef911773ddc0c3ea02",
 "class": "PhotoAlbum",
 "playList": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 55.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_164224EE_0071_B969_4144_C33DB0F9FD0C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_332ADD8C_0100_5C9D_4116_EB5D752272C0_t.png",
 "id": "album_332ADD8C_0100_5C9D_4116_EB5D752272C0",
 "label": "Photo Album Dali_Everyday_Grocery_2020",
 "class": "PhotoAlbum",
 "playList": "this.album_332ADD8C_0100_5C9D_4116_EB5D752272C0_AlbumPlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_F9859488_F5CD_BE83_41BD_5C2307CA433D_0_t.jpg",
 "id": "album_F9859488_F5CD_BE83_41BD_5C2307CA433D_0",
 "width": 900,
 "label": "sandia_clubhouse",
 "image": {
  "levels": [
   {
    "url": "media/album_F9859488_F5CD_BE83_41BD_5C2307CA433D_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 472
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_1_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_1",
 "width": 960,
 "label": "original-4dd4bc4c855ebaebd5cff32ab194348e",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 361
},
{
 "initialPosition": {
  "yaw": -20.81,
  "class": "PanoramaCameraPosition",
  "pitch": -4.85
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_0_t.jpg",
 "id": "album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_0",
 "width": 576,
 "label": "Bernice floor plan",
 "image": {
  "levels": [
   {
    "url": "media/album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 946
},
{
 "initialPosition": {
  "yaw": 44.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17E5367E_0071_B969_411D_951A0B935AE0",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 29.85,
  "class": "PanoramaCameraPosition",
  "pitch": -15.96
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 21.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15FBA494_0071_B9B9_413F_2AF143DA6610",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_332ADD8C_0100_5C9D_4116_EB5D752272C0_0_t.jpg",
 "id": "album_332ADD8C_0100_5C9D_4116_EB5D752272C0_0",
 "width": 3000,
 "label": "Dali_Everyday_Grocery_2020",
 "image": {
  "levels": [
   {
    "url": "media/album_332ADD8C_0100_5C9D_4116_EB5D752272C0_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 3746
},
{
 "initialPosition": {
  "yaw": -157.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_164F14F8_0071_B969_4152_B53C53974E34",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "club house inside",
 "hfovMin": "135%",
 "id": "panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189",
 "overlays": [
  "this.overlay_E5B265C8_F605_5730_41C2_E64716CD229C",
  "this.overlay_E23B05BB_F61B_7751_41E2_C01C99CC8B88",
  "this.overlay_DA807A48_FB22_1FB9_41C6_B3508A5CE6C4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -15.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -14.9,
   "panorama": "this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB",
   "distance": 1
  },
  {
   "yaw": 161.77,
   "class": "AdjacentPanorama",
   "backwardYaw": 92.31,
   "panorama": "this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE",
   "distance": 1
  },
  {
   "yaw": 72.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 7.27,
   "panorama": "this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 69.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_161FC520_0071_B899_4143_3BE77B2CBD00",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_1565E446_0071_B899_414B_8AE0EBC1C152, 0)",
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_1565E446_0071_B899_414B_8AE0EBC1C152",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 60.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16D6C548_0071_B8A9_4147_0EFBFA564B78",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -167.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_160BE52A_0071_B8E9_4152_55F541991B9A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 164.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1793B688_0071_B9A9_4120_8221201D1F80",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 96.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17B1D69D_0071_B9AB_412E_82246B1D89C8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 138.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1680A590_0071_BBB9_4106_3B1B7471DD00",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa4",
 "hfovMin": "135%",
 "id": "panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75",
 "overlays": [
  "this.overlay_D75B8533_FF00_CD8B_41EB_79DA13590B57",
  "this.overlay_D6044A9F_FF00_44BB_41EE_E8273C8ED67C",
  "this.overlay_D58B419F_FF00_44BB_41E3_ECCF32A29FAB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 13.92,
   "class": "AdjacentPanorama",
   "backwardYaw": 12.21,
   "panorama": "this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646",
   "distance": 1
  },
  {
   "yaw": 75.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.3,
   "panorama": "this.panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489",
   "distance": 1
  },
  {
   "yaw": 131.16,
   "class": "AdjacentPanorama",
   "backwardYaw": 47.83,
   "panorama": "this.panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 45.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17085629_0071_B8EA_414E_5141E9630B51",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "clubhouse pool a1",
 "hfovMin": "135%",
 "id": "panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1",
 "overlays": [
  "this.overlay_E5E4BA32_F61F_BD50_41D2_6CD9CDDFF4EB",
  "this.overlay_E7F70E08_FB22_F7B9_41E9_262FBE5D1C84"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 154.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -100.08,
   "panorama": "this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D",
   "distance": 1
  },
  {
   "panorama": "this.panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_2_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_2",
 "width": 900,
 "label": "original-26a083196a03d7b263f2f49f96284ab1",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "gate",
 "hfovMin": "135%",
 "id": "panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A",
 "overlays": [
  "this.overlay_E7868489_F63B_1FDF_41E5_236BD93A438F",
  "this.overlay_E6F8642F_F63D_FED3_41E0_46C12F5D1414"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_7_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_7",
 "width": 900,
 "label": "original-f4aaa511e6bf569e9b4ad5606043d5f8",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa b",
 "hfovMin": "135%",
 "id": "panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B",
 "overlays": [
  "this.overlay_2CED8497_0100_4C8A_40E1_D1E72350E440"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 59.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -110.1,
   "panorama": "this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 51.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15B5E4C6_0071_B999_4149_BA656D5A733A",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -173.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_176A6604_0071_B899_413E_65786F460198",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -18.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17A1F6A7_0071_B9E7_4142_2AD434CADB4D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -117.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15DF6475_0071_B97B_4151_D9A1E7CDFE59",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "clubhouse pool a",
 "hfovMin": "135%",
 "id": "panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D",
 "overlays": [
  "this.overlay_E5B92E1D_F61A_D551_419D_7B4087EA0866",
  "this.overlay_E2C430F1_F61D_4ED0_41E9_8CF61BFF6E41"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -100.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 154.77,
   "panorama": "this.panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1",
   "distance": 1
  },
  {
   "yaw": 7.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 72.68,
   "panorama": "this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -49.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1739F639_0071_B8EB_4152_9F92CFFB6B1C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa3",
 "hfovMin": "135%",
 "id": "panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646",
 "overlays": [
  "this.overlay_D806CE97_FF00_5C8B_41C4_5D656B88CFC5",
  "this.overlay_D6CA5C99_FF00_5C87_41C7_BC233F5846EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -124.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 71.1,
   "panorama": "this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE",
   "distance": 1
  },
  {
   "yaw": 12.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 13.92,
   "panorama": "this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "clubhouse facade",
 "hfovMin": "135%",
 "id": "panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB",
 "overlays": [
  "this.overlay_E5B291FB_F5FB_4ED0_41A2_9AFD38BB7433"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -14.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -15.66,
   "panorama": "this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 114.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17D7F659_0071_B8AB_40F7_A570F8C3D180",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -120.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17C5B66A_0071_B969_414A_EA64253BAC7C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_camera"
  },
  {
   "media": "this.panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_camera"
  },
  {
   "media": "this.panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_camera"
  },
  {
   "media": "this.panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 152.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1693D57B_0071_BB6F_413F_7A7CB3FD5054",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_3_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_3",
 "width": 900,
 "label": "original-567b778c8ce3c953979fd61d05eb3b4b",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa2",
 "hfovMin": "135%",
 "id": "panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE",
 "overlays": [
  "this.overlay_D98DC7D7_FF01_CC8B_41E9_9F270EE170DD",
  "this.overlay_D81649B5_FF00_448F_41EE_2F7957BDA324",
  "this.overlay_D761ECB3_FF00_3C8B_41EC_4FC1C760189B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 71.1,
   "class": "AdjacentPanorama",
   "backwardYaw": -124.79,
   "panorama": "this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646",
   "distance": 1
  },
  {
   "yaw": -63.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 22.85,
   "panorama": "this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D",
   "distance": 1
  },
  {
   "yaw": -134.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.18,
   "panorama": "this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D",
 "label": "Aerial2",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_4_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_4",
 "width": 900,
 "label": "original-7362254ba5ed97ea335640fc338f2242",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 500
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 165.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16B035A0_0071_BB99_4142_7DC9B48E57C0",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Aerial1",
 "hfovMin": "135%",
 "id": "panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093",
 "overlays": [
  "this.overlay_E0B034B8_F5FF_DE82_41E7_CB5E1474B7FD",
  "this.overlay_FB107CA1_F5FA_B570_41C3_10B3DC9BC0C1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_2_t.jpg",
 "id": "album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_2",
 "width": 900,
 "label": "Danessa",
 "image": {
  "levels": [
   {
    "url": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 600
},
{
 "duration": 60000,
 "thumbnailUrl": "media/photo_E9A27BF0_FF01_C506_41D9_1D0D1B6244D7_t.png",
 "id": "photo_E9A27BF0_FF01_C506_41D9_1D0D1B6244D7",
 "width": 1351,
 "label": "Screenshot 2024-09-17 160846",
 "image": {
  "levels": [
   {
    "url": "media/photo_E9A27BF0_FF01_C506_41D9_1D0D1B6244D7.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 800
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "initialPosition": {
  "yaw": -104.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15F15489_0071_B9AB_4144_3CFF87580DD4",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "clubhouse pool b",
 "hfovMin": "135%",
 "id": "panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8",
 "overlays": [
  "this.overlay_E517E8CB_FB26_1CBF_41EE_5F7173EEB497",
  "this.overlay_E67CF86E_FB26_1C78_41E3_29A2C3EDEBCA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 126.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 41.93,
   "panorama": "this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -66.57,
  "class": "PanoramaCameraPosition",
  "pitch": 3.49
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa5",
 "hfovMin": "135%",
 "id": "panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489",
 "overlays": [
  "this.overlay_D655755D_FF00_4DBF_41C5_93ABE3B0DDFB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -98.3,
   "class": "AdjacentPanorama",
   "backwardYaw": 75.77,
   "panorama": "this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa c",
 "hfovMin": "135%",
 "id": "panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3",
 "overlays": [
  "this.overlay_2D4146D7_0100_CC8B_40F4_4F59178DA7C0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 93.34,
   "class": "AdjacentPanorama",
   "backwardYaw": 26.14,
   "panorama": "this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_E962C5A7_FF3F_CD65_41CA_8D0CA7322355_t.jpg",
 "id": "photo_E962C5A7_FF3F_CD65_41CA_8D0CA7322355",
 "width": 900,
 "label": "Bernice",
 "image": {
  "levels": [
   {
    "url": "media/photo_E962C5A7_FF3F_CD65_41CA_8D0CA7322355.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 600
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 2",
 "hfovMin": "135%",
 "id": "panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030",
 "overlays": [
  "this.overlay_E31F842B_FF00_4357_41DD_0979AD030077",
  "this.overlay_E3E41B8A_FF03_C557_418D_C23C2F2F3D1C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 69.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.37,
   "panorama": "this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96",
   "distance": 1
  },
  {
   "yaw": 10.7,
   "class": "AdjacentPanorama",
   "backwardYaw": -135.7,
   "panorama": "this.panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "to playgound",
 "hfovMin": "135%",
 "id": "panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE",
 "overlays": [
  "this.overlay_E4C8B75F_FB22_1457_41E1_C1E65BE337C5",
  "this.overlay_DA041CBB_FB22_74DF_41EE_89D35C8FEC0F",
  "this.overlay_DA63BD5A_FB22_3459_41DD_89D40D09BDC2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -84.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -97.88,
   "panorama": "this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89",
   "distance": 1
  },
  {
   "yaw": -5.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.81,
   "panorama": "this.panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002",
   "distance": 1
  },
  {
   "yaw": 92.31,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.77,
   "panorama": "this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_t.png",
 "id": "album_ED27D2E3_FF01_C744_41EF_CFB271B0F902",
 "label": "Photo Album danessa floor plan",
 "class": "PhotoAlbum",
 "playList": "this.album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_AlbumPlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_1_t.jpg",
 "id": "album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_1",
 "width": 574,
 "label": "danessa floor plan2",
 "image": {
  "levels": [
   {
    "url": "media/album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 936
},
{
 "initialPosition": {
  "yaw": -50.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15AD54DA_0071_B9A9_4140_801BC4F748E6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 1",
 "hfovMin": "135%",
 "id": "panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96",
 "overlays": [
  "this.overlay_D8A6872C_FBE2_15F9_41C8_08E2FCB3E85D",
  "this.overlay_D8850966_FBE2_1C68_41D4_5B36D17B3ABC",
  "this.overlay_E7E28230_FF00_C74B_41E6_D52CC3737B5B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -61.37,
   "class": "AdjacentPanorama",
   "backwardYaw": 69.38,
   "panorama": "this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030",
   "distance": 1
  },
  {
   "yaw": 130.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.45,
   "panorama": "this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_15045454_0071_B8B9_40F6_FA211BED1F80, 0)",
   "media": "this.album_ED27D2E3_FF01_C744_41EF_CFB271B0F902",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_15045454_0071_B8B9_40F6_FA211BED1F80",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10",
 "label": "Aerial3",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonToggleGyroscope": "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleHotspots": "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa a",
 "hfovMin": "135%",
 "id": "panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC",
 "overlays": [
  "this.overlay_D45F9473_FF03_C38B_41EC_005C4687F55E",
  "this.overlay_2D7467CB_00FF_CC9B_4093_46A4FCF23000",
  "this.overlay_2E2F64E4_0100_4C8D_40CC_F8BD36A14C00"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 26.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.34,
   "panorama": "this.panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3",
   "distance": 1
  },
  {
   "yaw": 152.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.14,
   "panorama": "this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D",
   "distance": 1
  },
  {
   "yaw": -110.1,
   "class": "AdjacentPanorama",
   "backwardYaw": 59.5,
   "panorama": "this.panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_t.jpg",
 "hfovMax": 130
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_EACD10FC_FF00_C31A_41DD_34F385C8C56E_t.png",
 "id": "photo_EACD10FC_FF00_C31A_41DD_34F385C8C56E",
 "width": 1351,
 "label": "Screenshot 2024-09-17 160846",
 "image": {
  "levels": [
   {
    "url": "media/photo_EACD10FC_FF00_C31A_41DD_34F385C8C56E.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 800
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 6",
 "hfovMin": "135%",
 "id": "panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
 "overlays": [
  "this.overlay_E0001FFB_FF7F_FCA5_41D0_253FB1D2DFD2",
  "this.overlay_DF15590E_FF00_457D_41EC_CD95484F6923",
  "this.overlay_DF84A34A_FF00_C5FB_41DB_7FE985259E5D",
  "this.overlay_DE95C2AA_FF07_C4BE_41A6_BB3AC42B5DFB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 6.58,
   "class": "AdjacentPanorama",
   "backwardYaw": -128.91,
   "panorama": "this.panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD",
   "distance": 1
  },
  {
   "yaw": 81.19,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.04,
   "panorama": "this.panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1",
   "distance": 1
  },
  {
   "yaw": -119.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 129.78,
   "panorama": "this.panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8",
   "distance": 1
  },
  {
   "yaw": -158.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -115.18,
   "panorama": "this.panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_t.jpg",
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/album_F9859488_F5CD_BE83_41BD_5C2307CA433D_t.png",
 "id": "album_F9859488_F5CD_BE83_41BD_5C2307CA433D",
 "label": "Photo Album sandia_clubhouse",
 "class": "PhotoAlbum",
 "playList": "this.album_F9859488_F5CD_BE83_41BD_5C2307CA433D_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": -27.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_177A15F4_0071_BB79_411D_AD732CE65440",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_0_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_0",
 "width": 900,
 "label": "original-3e7a8ac067e660ef911773ddc0c3ea02",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_151AA44E_0071_B8A9_4147_8F705657EEF2, 0)",
   "media": "this.album_ED3D1837_FF00_42CD_41E5_6C8F637A7207",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_151AA44E_0071_B8A9_4147_8F705657EEF2",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 5",
 "hfovMin": "135%",
 "id": "panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD",
 "overlays": [
  "this.overlay_E2844519_FF00_4D6C_41EA_212EC1F12243",
  "this.overlay_E1EEC400_FF00_C35D_41CA_0C15116B75C0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -128.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 6.58,
   "panorama": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
   "distance": 1
  },
  {
   "panorama": "this.panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 81.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_163B5534_0071_B8F9_4151_EBC4F81F23CC",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 3",
 "hfovMin": "135%",
 "id": "panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E",
 "overlays": [
  "this.overlay_E38F04F2_FF01_CCB5_41E0_94FFD7DC991D",
  "this.overlay_E336425F_FF00_47EA_41E3_05C10F3D6122"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -135.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.7,
   "panorama": "this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -166.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_185FC6BB_0071_B9EF_4132_F9981515D1EC",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 95.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15C6F47F_0071_B967_4136_2905D3CFA230",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 116.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_174DA5E4_0071_BB99_4152_0AB01E0A322A",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "grill area",
 "hfovMin": "135%",
 "id": "panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E",
 "overlays": [
  "this.overlay_E401CE59_FB22_745B_41C5_E6BC75D9BAE4",
  "this.overlay_DB1E2C17_FB22_7BD7_41E2_CC1A8B316368"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 62.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.5,
   "panorama": "this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89",
   "distance": 1
  },
  {
   "yaw": -168.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -41.33,
   "panorama": "this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 174.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15E4349E_0071_B9A9_4141_9ABFB8C1BF42",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 7",
 "hfovMin": "135%",
 "id": "panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1",
 "overlays": [
  "this.overlay_DF7A8619_FF00_4F99_41D4_3B6620D85B34"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 106.04,
   "class": "AdjacentPanorama",
   "backwardYaw": 81.19,
   "panorama": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -48.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_175C45D4_0071_BBB9_4146_C3C2B2AA8B34",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -108.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17AFC6B1_0071_B9FB_4110_87BD54E809E8",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.album_F9859488_F5CD_BE83_41BD_5C2307CA433D",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_camera"
  },
  {
   "media": "this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_camera"
  },
  {
   "media": "this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_camera"
  },
  {
   "media": "this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_camera"
  },
  {
   "media": "this.panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_camera"
  },
  {
   "media": "this.panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_camera"
  },
  {
   "media": "this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_camera"
  },
  {
   "media": "this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_camera"
  },
  {
   "media": "this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_camera"
  },
  {
   "media": "this.panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_camera"
  },
  {
   "media": "this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_camera"
  },
  {
   "media": "this.panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_camera"
  },
  {
   "media": "this.panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EA5FA933_FA0A_5516_41BF_1EA74895671D_camera"
  },
  {
   "media": "this.panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F595BEBF_FA0A_4F0E_41E8_FC8325144D10_camera"
  },
  {
   "media": "this.panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_camera"
  },
  {
   "media": "this.panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_camera"
  },
  {
   "media": "this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_camera"
  },
  {
   "media": "this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_camera"
  },
  {
   "media": "this.panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_camera"
  },
  {
   "media": "this.panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_camera"
  },
  {
   "media": "this.panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_camera"
  },
  {
   "media": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971_camera"
  },
  {
   "media": "this.panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_camera"
  },
  {
   "media": "this.panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_camera"
  },
  {
   "media": "this.panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_camera"
  },
  {
   "media": "this.panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_camera"
  },
  {
   "media": "this.panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_camera"
  },
  {
   "media": "this.panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_camera"
  },
  {
   "media": "this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_camera"
  },
  {
   "media": "this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_camera"
  },
  {
   "media": "this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_camera"
  },
  {
   "media": "this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_camera"
  },
  {
   "media": "this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_camera"
  },
  {
   "media": "this.panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_camera"
  },
  {
   "media": "this.panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_camera"
  },
  {
   "media": "this.album_332ADD8C_0100_5C9D_4116_EB5D752272C0",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "clubhouse pool c",
 "hfovMin": "135%",
 "id": "panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA",
 "overlays": [
  "this.overlay_E59397DC_FB26_3459_41D1_180780020D19",
  "this.overlay_E4882D11_FB22_35AB_41CF_C193BF6B256C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -41.33,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.03,
   "panorama": "this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E",
   "distance": 1
  },
  {
   "yaw": 41.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.08,
   "panorama": "this.panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_camera",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 9",
 "hfovMin": "135%",
 "id": "panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC",
 "overlays": [
  "this.overlay_DE13BDA7_FF00_3CB2_41E5_CFBE57700403"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -115.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -158.9,
   "panorama": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 178.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_167BE502_0071_B899_4123_25DB8E25C730",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -87.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16BE15B0_0071_BBF9_4132_A837A079B440",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 4",
 "hfovMin": "135%",
 "id": "panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243",
 "overlays": [
  "this.overlay_E24D5A7A_FF03_C7AE_41C1_813C43D86810"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D_t.jpg",
 "hfovMin": "135%",
 "id": "panorama_E7994FB4_FF00_7CB5_41EA_D097BC62145D",
 "label": "danessa stair 2",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "bernice 8",
 "hfovMin": "135%",
 "id": "panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8",
 "overlays": [
  "this.overlay_DF34565F_FF01_CF97_41E5_26A4C4AD042C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 129.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -119.23,
   "panorama": "this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_EDCC7DD3_FAE2_34AF_41EB_93B20792DDEB",
 "label": "Dali_Everyday_Grocery_2020",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_151A744E_0071_B8A9_412A_A226613E2098, 0)",
   "media": "this.album_332ADD8C_0100_5C9D_4116_EB5D752272C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_151A744E_0071_B8A9_412A_A226613E2098",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -153.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16F4755D_0071_B8AB_40F0_0C36C3B95880",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -73.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_15BE94D0_0071_B9B9_4141_6F9F1293C970",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa1",
 "hfovMin": "135%",
 "id": "panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A",
 "overlays": [
  "this.overlay_DB75A222_FF3F_C785_41A4_8584F2659FFD",
  "this.overlay_D9B1B86C_FF00_439D_41DF_62A95D0CC064",
  "this.overlay_D9E28C6C_FF03_C39D_41EA_C1DB705C178B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -1.18,
   "class": "AdjacentPanorama",
   "backwardYaw": -134.33,
   "panorama": "this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE",
   "distance": 1
  },
  {
   "yaw": 171.45,
   "class": "AdjacentPanorama",
   "backwardYaw": 130.61,
   "panorama": "this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 11.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_159D74B2_0071_B9F9_4153_241C7E2067C4",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_t.png",
 "id": "album_ED3D1837_FF00_42CD_41E5_6C8F637A7207",
 "label": "Photo Album Bernice floor plan",
 "class": "PhotoAlbum",
 "playList": "this.album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_AlbumPlayList"
},
{
 "initialPosition": {
  "yaw": 64.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1657A4E4_0071_B999_4151_48B9A8AC0B3E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_1_t.jpg",
 "id": "album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_1",
 "width": 900,
 "label": "Bernice",
 "image": {
  "levels": [
   {
    "url": "media/album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 600
},
{
 "initialPosition": {
  "yaw": -107.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1610B516_0071_B8B9_4139_A62A9C82F4F8",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa stairs",
 "hfovMin": "135%",
 "id": "panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D",
 "overlays": [
  "this.overlay_D596E326_FF00_C58A_41E3_3CBD1AC8D11D",
  "this.overlay_D2E6EEE8_FF00_3C85_4176_77FB8F5A8C2D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 22.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.57,
   "panorama": "this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE",
   "distance": 1
  },
  {
   "yaw": -65.14,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.57,
   "panorama": "this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -53.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_158934BC_0071_B9E9_4147_B523735D5C0C",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_F595C3DC_FA0A_B512_41D7_E6C095861CF0",
 "label": "Aerial4",
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "media/audio_0CDB9117_0030_B8A6_4133_BF74FFD198C0.ogg",
  "class": "AudioResource"
 },
 "id": "audio_0CDB9117_0030_B8A6_4133_BF74FFD198C0",
 "data": {
  "label": "Valley-Sunrise_Looping"
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -25.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1666750C_0071_B8A9_414E_9D18AACF4F74",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_5_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_5",
 "width": 900,
 "label": "original-a9f393e2bf1249b31cd3a70f3082915c",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_6_t.jpg",
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_6",
 "width": 900,
 "label": "original-c6925098505e9425fc7f05d48d30fc5f",
 "image": {
  "levels": [
   {
    "url": "media/album_E907117D_FF00_450C_41E3_906ECF68F449_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 507
},
{
 "initialPosition": {
  "yaw": 118.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_17F58674_0071_B979_4152_A27C6E13243E",
 "class": "PanoramaCamera"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "danessa6",
 "hfovMin": "135%",
 "id": "panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74",
 "overlays": [
  "this.overlay_D601E10B_FF00_459B_41DC_EAFDB3F5F003"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 47.83,
   "class": "AdjacentPanorama",
   "backwardYaw": 131.16,
   "panorama": "this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "basketball court",
 "hfovMin": "135%",
 "id": "panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89",
 "overlays": [
  "this.overlay_E4F443B1_FB3E_ECEB_41E8_6A545B528AF8",
  "this.overlay_DBB4A00A_FB3E_6BB9_41D4_243C5329E9AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -27.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.04,
   "panorama": "this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E",
   "distance": 1
  },
  {
   "yaw": -97.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.91,
   "panorama": "this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 79.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1590E4A8_0071_B9E9_414F_082636F617F8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -138.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16E58566_0071_B899_413C_86BB8FA40B14",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -98.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_171BA614_0071_B8B9_4133_6ABA50AC2D88",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_D998FA35_FBE2_1FEB_41ED_934201569971_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -172.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_16AF95BF_0071_BBE7_4143_678B3DDFFC35",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_E97E26A7_FF3F_CF65_41CB_4D1DF83F1367_t.jpg",
 "id": "photo_E97E26A7_FF3F_CF65_41CB_4D1DF83F1367",
 "width": 900,
 "label": "Danessa",
 "image": {
  "levels": [
   {
    "url": "media/photo_E97E26A7_FF3F_CF65_41CB_4D1DF83F1367.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 600
},
{
 "initialPosition": {
  "yaw": -132.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1626B53F_0071_B8E7_4132_ACD7BA695EDA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -8.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_187DC6CF_0071_B9A7_414F_26D57C8180C2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -110.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_184F06C5_0071_B99B_4145_2092F16AA4E8",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -86.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_1727964A_0071_B8A9_4152_87948674EA46",
 "class": "PanoramaCamera"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#FFFFFF",
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "17px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 3"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD",
 "left": "0%",
 "children": [
  "this.Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
  "this.Container_F59E5D6D_FAC7_FADA_41D0_2C0E083DC7DB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--iSite info"
 },
 "shadow": false,
 "visible": false,
 "gap": 10
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "backgroundOpacity": 0,
 "right": "4.28%",
 "width": "8.792%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "4.43%",
 "bottom": "85.9%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.youtube.com/watch?v=chtoZbc8X0I&t=6s', '_blank')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent40930"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage40931"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "class": "CloseButton",
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton40932"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Sound"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#FFFFFF",
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "17px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "right": 10,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": -83.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE, this.camera_15E4349E_0071_B9A9_4141_9ABFB8C1BF42); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3245809F_0103_C4BB_4114_D206E73FB590",
   "pitch": -4.81,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -83.81
  }
 ],
 "id": "overlay_2EBE5637_0100_4F8B_4114_FBE50A01F748",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.photo_E9A27BF0_FF01_C506_41D9_1D0D1B6244D7",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.photo_E962C5A7_FF3F_CD65_41CA_8D0CA7322355",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.photo_E97E26A7_FF3F_CF65_41CB_4D1DF83F1367",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_E907117D_FF00_450C_41E3_906ECF68F449_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  }
 ],
 "id": "album_E907117D_FF00_450C_41E3_906ECF68F449_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_332ADD8C_0100_5C9D_4116_EB5D752272C0_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  }
 ],
 "id": "album_332ADD8C_0100_5C9D_4116_EB5D752272C0_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.51,
   "yaw": 72.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Swimming Pool",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D, this.camera_16AF95BF_0071_BBE7_4143_678B3DDFFC35); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E58C693A_F61D_FF50_41E2_E398F35C80B5",
   "pitch": -10.85,
   "hfov": 11.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 72.68
  }
 ],
 "id": "overlay_E5B265C8_F605_5730_41C2_E64716CD229C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.34,
   "yaw": -15.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Facade",
   "click": "this.startPanoramaWithCamera(this.panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB, this.camera_16B035A0_0071_BB99_4142_7DC9B48E57C0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E58CD93A_F61D_FF50_41E3_85ECB9D05185",
   "pitch": -14.7,
   "hfov": 11.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -15.66
  }
 ],
 "id": "overlay_E23B05BB_F61B_7751_41E2_C01C99CC8B88",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 161.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Play ground and Baskeball Court",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE, this.camera_16BE15B0_0071_BBF9_4132_A837A079B440); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE694872_FB26_3C69_41EE_ADD0F25F92E6",
   "pitch": -2.62,
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 161.77
  }
 ],
 "id": "overlay_DA807A48_FB22_1FB9_41C6_B3508A5CE6C4",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.09,
   "yaw": 13.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Dining Area",
   "click": "this.startPanoramaWithCamera(this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646, this.camera_160BE52A_0071_B8E9_4152_55F541991B9A); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3646CBFE_0100_447D_40FC_7685F494FA40",
   "pitch": -18.82,
   "hfov": 11.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 13.92
  }
 ],
 "id": "overlay_D75B8533_FF00_CD8B_41EB_79DA13590B57",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": 75.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bathroom",
   "click": "this.startPanoramaWithCamera(this.panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489, this.camera_163B5534_0071_B8F9_4151_EBC4F81F23CC); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36455BFE_0100_447D_4104_297C064D48A0",
   "pitch": -9.76,
   "hfov": 11.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 75.77
  }
 ],
 "id": "overlay_D6044A9F_FF00_44BB_41EE_E8273C8ED67C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": 131.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Enter",
   "click": "this.startPanoramaWithCamera(this.panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74, this.camera_1626B53F_0071_B8E7_4132_ACD7BA695EDA); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3645EBFE_0100_447D_40E6_2144660CB200",
   "pitch": -2.96,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 131.16
  }
 ],
 "id": "overlay_D58B419F_FF00_44BB_41E3_ECCF32A29FAB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.75,
   "yaw": 73.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E58CA93B_F61D_FF50_41E7_AD17F66FD7E5",
   "pitch": -23.48,
   "hfov": 10.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 73.43
  }
 ],
 "id": "overlay_E5E4BA32_F61F_BD50_41D2_6CD9CDDFF4EB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.39,
   "yaw": 154.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D, this.camera_1590E4A8_0071_B9E9_414F_082636F617F8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E4558BD1_FB22_1CAB_41EB_E9B32C26CF0D",
   "pitch": -50.94,
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 154.77
  }
 ],
 "id": "overlay_E7F70E08_FB22_F7B9_41E9_262FBE5D1C84",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.91,
   "yaw": -50.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click to Enter",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2006BC8_F63F_095C_41DE_9589105B10E1",
   "pitch": -21.49,
   "hfov": 10.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -50.87
  }
 ],
 "id": "overlay_E7868489_F63B_1FDF_41E5_236BD93A438F",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.65,
   "yaw": 147.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Dali Everyday Grocery",
   "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_151A744E_0071_B8A9_412A_A226613E2098.set('selectedIndex', -1); }, this); this.playList_151A744E_0071_B8A9_412A_A226613E2098.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_E2002BC8_F63F_095C_41D9_35B5AF0CF857",
   "pitch": -12.38,
   "hfov": 8.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 147.71
  }
 ],
 "id": "overlay_E6F8642F_F63D_FED3_41E0_46C12F5D1414",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.32,
   "yaw": 59.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC, this.camera_161FC520_0071_B899_4143_3BE77B2CBD00); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3643BBFB_0100_447B_4104_99F3DB1562F0",
   "pitch": -14.97,
   "hfov": 11.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 59.5
  }
 ],
 "id": "overlay_2CED8497_0100_4C8A_40E1_D1E72350E440",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": 7.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Clubhouse",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189, this.camera_1610B516_0071_B8B9_4139_A62A9C82F4F8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E58CF93A_F61D_FF50_41E3_67BB2A723F14",
   "pitch": -3.72,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 7.27
  }
 ],
 "id": "overlay_E5B92E1D_F61A_D551_419D_7B4087EA0866",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.53,
   "yaw": -100.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1, this.camera_1666750C_0071_B8A9_414E_9D18AACF4F74); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E58C993A_F61D_FF50_41D1_8567777C64D4",
   "pitch": -26.02,
   "hfov": 10.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -100.08
  }
 ],
 "id": "overlay_E2C430F1_F61D_4ED0_41E9_8CF61BFF6E41",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.29,
   "yaw": -124.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE, this.camera_17AFC6B1_0071_B9FB_4110_87BD54E809E8); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4AD5D6A_FF01_DD85_41EE_27F837259401",
   "pitch": -15.52,
   "hfov": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -124.79
  }
 ],
 "id": "overlay_D806CE97_FF00_5C8B_41C4_5D656B88CFC5",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.86,
   "yaw": 12.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Dining & Kitchen Area",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75, this.camera_185FC6BB_0071_B9EF_4132_F9981515D1EC); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36466BFD_0100_447F_40C8_D77B10942F00",
   "pitch": -22.04,
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 12.21
  }
 ],
 "id": "overlay_D6CA5C99_FF00_5C87_41C7_BC233F5846EC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.45,
   "yaw": -14.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Enter",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189, this.camera_1793B688_0071_B9A9_4120_8221201D1F80); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E78CADAA_F5FA_B773_41A2_D6E234B413F6",
   "pitch": -12.43,
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -14.9
  }
 ],
 "id": "overlay_E5B291FB_F5FB_4ED0_41A2_9AFD38BB7433",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.71,
   "yaw": -134.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A, this.camera_167BE502_0071_B899_4123_25DB8E25C730); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5CC9772_FF00_CD85_41E3_BE14CA1E483F",
   "pitch": -2.69,
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -134.33
  }
 ],
 "id": "overlay_D98DC7D7_FF01_CC8B_41E9_9F270EE170DD",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.21,
   "yaw": -63.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To 2nd Floor",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D, this.camera_164F14F8_0071_B969_4152_B53C53974E34); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D5CC0772_FF00_CD85_41EA_439A38934894",
   "pitch": -17.03,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -63.57
  }
 ],
 "id": "overlay_D81649B5_FF00_448F_41EE_2F7957BDA324",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.45,
   "yaw": 71.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Area",
   "click": "this.startPanoramaWithCamera(this.panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646, this.camera_164224EE_0071_B969_4144_C33DB0F9FD0C); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D4AACD6A_FF01_DD85_41EE_1278EBCD64E1",
   "pitch": -26.91,
   "hfov": 10.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 71.1
  }
 ],
 "id": "overlay_D761ECB3_FF00_3C8B_41EC_4FC1C760189B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": 14.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Clubhouse",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FBB3FA04_F5FD_5D30_41E6_B50068098DD9",
   "pitch": -27.06,
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 14.51
  }
 ],
 "id": "overlay_E0B034B8_F5FF_DE82_41E7_CB5E1474B7FD",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.84,
   "yaw": -136.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Gate",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E78CFDA9_F5FA_B771_41DC_586F6AC6DF66",
   "pitch": -6.41,
   "hfov": 5.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -136.09
  }
 ],
 "id": "overlay_FB107CA1_F5FA_B570_41C3_10B3DC9BC0C1",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.49,
   "yaw": 12.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE6AF872_FB26_3C69_41C0_BB746961D7FB",
   "pitch": -11.33,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 12.28
  }
 ],
 "id": "overlay_E517E8CB_FB26_1CBF_41EE_5F7173EEB497",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.56,
   "yaw": 126.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA, this.camera_16E58566_0071_B899_413C_86BB8FA40B14); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE6B0872_FB26_3C69_41ED_CD58C61132EF",
   "pitch": -9.34,
   "hfov": 11.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 126.08
  }
 ],
 "id": "overlay_E67CF86E_FB26_1C78_41E3_29A2C3EDEBCA",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.58,
   "yaw": -98.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75, this.camera_15F15489_0071_B9AB_4144_3CFF87580DD4); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36446BFE_0100_447D_40FB_7012B8E42F40",
   "pitch": -9,
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -98.3
  }
 ],
 "id": "overlay_D655755D_FF00_4DBF_41C5_93ABE3B0DDFB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.54,
   "yaw": 93.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click to Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC, this.camera_16F4755D_0071_B8AB_40F0_0C36C3B95880); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36424BFB_0100_447B_40FB_1A8D2AF2C240",
   "pitch": -9.96,
   "hfov": 11.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 93.34
  }
 ],
 "id": "overlay_2D4146D7_0100_CC8B_40F4_4F59178DA7C0",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.42,
   "yaw": 10.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click to Enter",
   "click": "this.startPanoramaWithCamera(this.panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E, this.camera_17E5367E_0071_B969_411D_951A0B935AE0); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC7DB02_FF00_C560_41DA_5EF7BC96DB1D",
   "pitch": -12.91,
   "hfov": 11.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 10.7
  }
 ],
 "id": "overlay_E31F842B_FF00_4357_41DD_0979AD030077",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.04,
   "yaw": 69.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click to Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96, this.camera_17F58674_0071_B979_4152_A27C6E13243E); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC75B02_FF00_C560_41BE_B762B03903A1",
   "pitch": -19.64,
   "hfov": 11.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 69.38
  }
 ],
 "id": "overlay_E3E41B8A_FF03_C557_418D_C23C2F2F3D1C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": -84.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Basketball Court",
   "click": "this.startPanoramaWithCamera(this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89, this.camera_1783E693_0071_B9BF_4131_ED0DD56E21CA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE95A872_FB26_3C69_41B7_E1FEBA67C1CD",
   "pitch": -3.51,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -84.91
  }
 ],
 "id": "overlay_E4C8B75F_FB22_1457_41E1_C1E65BE337C5",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": -5.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Playground",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002, this.camera_17B1D69D_0071_B9AB_412E_82246B1D89C8); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE95D881_FB26_3CAB_41B6_C65E447B5B48",
   "pitch": -4.81,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -5.02
  }
 ],
 "id": "overlay_DA041CBB_FB22_74DF_41EE_89D35C8FEC0F",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": 92.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Clubhouse",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189, this.camera_17A1F6A7_0071_B9E7_4142_2AD434CADB4D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE964881_FB26_3CAB_41EC_2EBCD7E3FC31",
   "pitch": -4.54,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 92.31
  }
 ],
 "id": "overlay_DA63BD5A_FB22_3459_41DD_89D40D09BDC2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  }
 ],
 "id": "album_ED27D2E3_FF01_C744_41EF_CFB271B0F902_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.1,
   "yaw": -11.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_151AA44E_0071_B8A9_4147_8F705657EEF2.set('selectedIndex', -1); }, this); this.playList_151AA44E_0071_B8A9_4147_8F705657EEF2.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_E9D031BD_FF00_C53D_41EB_45D58BB83E26",
   "pitch": -11.24,
   "hfov": 10.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -11.22
  }
 ],
 "id": "overlay_D8A6872C_FBE2_15F9_41C8_08E2FCB3E85D",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": -61.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030, this.camera_184F06C5_0071_B99B_4145_2092F16AA4E8); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E9D191BD_FF00_C53D_41E7_204B50BE8744",
   "pitch": -4.81,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -61.37
  }
 ],
 "id": "overlay_D8850966_FBE2_1C68_41D4_5B36D17B3ABC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": 130.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A, this.camera_187DC6CF_0071_B9A7_414F_26D57C8180C2); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC44B02_FF00_C560_41EB_8E92083BCDD1",
   "pitch": -4.33,
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 130.61
  }
 ],
 "id": "overlay_E7E28230_FF00_C74B_41E6_D52CC3737B5B",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658D838_74AF_8B5A_41D7_154D466041BB",
 "backgroundOpacity": 0,
 "width": 29.4,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 37.4,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6658D838_74AF_8B5A_41D7_154D466041BB.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
 "backgroundOpacity": 0,
 "width": 30,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 30,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.86,
   "yaw": 152.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D, this.camera_17D7F659_0071_B8AB_40F7_A570F8C3D180); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_363C1BFA_0100_4485_40E1_55A753FD7100",
   "pitch": -22.11,
   "hfov": 10.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 152.57
  }
 ],
 "id": "overlay_D45F9473_FF03_C38B_41EC_005C4687F55E",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.25,
   "yaw": -110.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bed Room 1",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B, this.camera_17C5B66A_0071_B969_414A_EA64253BAC7C); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_363C9BFA_0100_4485_4102_1BFF331635A0",
   "pitch": -16.21,
   "hfov": 11.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -110.1
  }
 ],
 "id": "overlay_2D7467CB_00FF_CC9B_4093_46A4FCF23000",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.4,
   "yaw": 26.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bed Room 2",
   "click": "this.startPanoramaWithCamera(this.panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3, this.camera_1727964A_0071_B8A9_4152_87948674EA46); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36433BFA_0100_4485_40FD_0E9F603D3680",
   "pitch": -13.32,
   "hfov": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 26.14
  }
 ],
 "id": "overlay_2E2F64E4_0100_4C8D_40CC_F8BD36A14C00",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.42,
   "yaw": 6.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Dining Area",
   "click": "this.startPanoramaWithCamera(this.panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD, this.camera_15B5E4C6_0071_B999_4149_BA656D5A733A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB1EB29_FF00_C5BD_41B0_5349EA39BD32",
   "pitch": -27.26,
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 6.58
  }
 ],
 "id": "overlay_E0001FFB_FF7F_FCA5_41D0_253FB1D2DFD2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.16,
   "yaw": 81.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bed Room",
   "click": "this.startPanoramaWithCamera(this.panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1, this.camera_15BE94D0_0071_B9B9_4141_6F9F1293C970); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB13B29_FF00_C5BD_41E8_3EC6712A356C",
   "pitch": -17.72,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 81.19
  }
 ],
 "id": "overlay_DF15590E_FF00_457D_41EC_CD95484F6923",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.47,
   "yaw": -119.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bathroom",
   "click": "this.startPanoramaWithCamera(this.panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8, this.camera_15AD54DA_0071_B9A9_4140_801BC4F748E6); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB2AB2A_FF00_C5BF_41E4_1EE5595AE513",
   "pitch": -11.95,
   "hfov": 11.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -119.23
  }
 ],
 "id": "overlay_DF84A34A_FF00_C5FB_41DB_7FE985259E5D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.66,
   "yaw": -158.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Enter",
   "click": "this.startPanoramaWithCamera(this.panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC, this.camera_1657A4E4_0071_B999_4151_48B9A8AC0B3E); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB21B2A_FF00_C5BF_41D2_DEC635578873",
   "pitch": -5.64,
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -158.9
  }
 ],
 "id": "overlay_DE95C2AA_FF07_C4BE_41A6_BB3AC42B5DFB",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "items": [
  {
   "media": "this.album_F9859488_F5CD_BE83_41BD_5C2307CA433D_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.62",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_inside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_F9859488_F5CD_BE83_41BD_5C2307CA433D_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.55,
   "yaw": -128.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Kitchen Area",
   "click": "this.startPanoramaWithCamera(this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971, this.camera_176A6604_0071_B899_413E_65786F460198); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC1EB03_FF00_C560_41E1_2E80D38425E3",
   "pitch": -25.82,
   "hfov": 10.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -128.91
  }
 ],
 "id": "overlay_E2844519_FF00_4D6C_41EA_212EC1F12243",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.42,
   "yaw": 103.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DAD827B2_FF00_CCAC_41E8_D6E844C0A13C",
   "pitch": -27.26,
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 103.91
  }
 ],
 "id": "overlay_E1EEC400_FF00_C35D_41CA_0C15116B75C0",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.09,
   "yaw": -135.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030, this.camera_16C64552_0071_B8B9_414E_A4651AB85944); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC68B02_FF00_C560_41D4_01B332AA04F0",
   "pitch": -18.82,
   "hfov": 11.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -135.7
  }
 ],
 "id": "overlay_E38F04F2_FF01_CCB5_41E0_94FFD7DC991D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.85,
   "yaw": 98.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Living Area",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC62B02_FF00_C560_41ED_F251AA8E2345",
   "pitch": -40.99,
   "hfov": 8.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 98.01
  }
 ],
 "id": "overlay_E336425F_FF00_47EA_41E3_05C10F3D6122",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.72,
   "yaw": 62.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Basketball Court",
   "click": "this.startPanoramaWithCamera(this.panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89, this.camera_1693D57B_0071_BB6F_413F_7A7CB3FD5054); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE94C872_FB26_3C69_41C1_78BD2B1A2E94",
   "pitch": -0.49,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 62.04
  }
 ],
 "id": "overlay_E401CE59_FB22_745B_41C5_E6BC75D9BAE4",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -168.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Swimming pool",
   "click": "this.startPanoramaWithCamera(this.panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA, this.camera_1680A590_0071_BBB9_4106_3B1B7471DD00); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE950872_FB26_3C69_41DF_455E46DC4B7C",
   "pitch": -10.37,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -168.03
  }
 ],
 "id": "overlay_DB1E2C17_FB22_7BD7_41E2_CC1A8B316368",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11,
   "yaw": 106.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971, this.camera_171BA614_0071_B8B9_4133_6ABA50AC2D88); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB38B2A_FF00_C5BF_41DF_6C49159F6BCE",
   "pitch": -20.19,
   "hfov": 11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 106.04
  }
 ],
 "id": "overlay_DF7A8619_FF00_4F99_41D4_3B6620D85B34",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.44,
   "yaw": 41.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Swimming Pool",
   "click": "this.startPanoramaWithCamera(this.panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8, this.camera_158934BC_0071_B9E9_4147_B523735D5C0C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE6BA872_FB26_3C69_41E1_CAF3B6034725",
   "pitch": -12.64,
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 41.93
  }
 ],
 "id": "overlay_E59397DC_FB26_3459_41D1_180780020D19",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.47,
   "yaw": -41.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Grilling Area",
   "click": "this.startPanoramaWithCamera(this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E, this.camera_159D74B2_0071_B9F9_4153_241C7E2067C4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DE6BE872_FB26_3C69_41D7_5A07EB1E1486",
   "pitch": -11.95,
   "hfov": 11.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -41.33
  }
 ],
 "id": "overlay_E4882D11_FB22_35AB_41CF_C193BF6B256C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.61,
   "yaw": -115.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971, this.camera_15FBA494_0071_B9B9_413F_2AF143DA6610); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DBBB628A_FF00_C770_41CF_826ED6DA5732",
   "pitch": -7.97,
   "hfov": 11.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -115.18
  }
 ],
 "id": "overlay_DE13BDA7_FF00_3CB2_41E5_CFBE57700403",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10,
   "yaw": 52.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Dining Area",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DDC1AB03_FF00_C560_41C0_A381A2A4C794",
   "pitch": -31.44,
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 52.57
  }
 ],
 "id": "overlay_E24D5A7A_FF03_C7AE_41C1_813C43D86810",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.47,
   "yaw": 129.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_D998FA35_FBE2_1FEB_41ED_934201569971, this.camera_16D6C548_0071_B8A9_4147_0EFBFA564B78); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_DEB3FB2A_FF00_C5BF_41E1_9AF6104B5FF9",
   "pitch": -11.95,
   "hfov": 11.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 129.78
  }
 ],
 "id": "overlay_DF34565F_FF01_CF97_41E5_26A4C4AD042C",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.68,
   "yaw": 171.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Bernice",
   "click": "this.startPanoramaWithCamera(this.panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96, this.camera_1739F639_0071_B8EB_4152_9F92CFFB6B1C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D3DC6D99_FF00_FC87_41B8_C87DD365C9F6",
   "pitch": -4.54,
   "hfov": 11.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 171.45
  }
 ],
 "id": "overlay_DB75A222_FF3F_C785_41A4_8584F2659FFD",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": -1.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Enter",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE, this.camera_17085629_0071_B8EA_414E_5141E9630B51); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D3DDFD99_FF00_FC87_41CC_100DC64F6909",
   "pitch": -3.99,
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -1.18
  }
 ],
 "id": "overlay_D9B1B86C_FF00_439D_41DF_62A95D0CC064",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -20.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_15045454_0071_B8B9_40F6_FA211BED1F80.set('selectedIndex', -1); }, this); this.playList_15045454_0071_B8B9_40F6_FA211BED1F80.set('selectedIndex', 0); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D3DD4D99_FF00_FC87_41E1_2D12D8FDE05A",
   "pitch": -3.14,
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -20.63
  }
 ],
 "id": "overlay_D9E28C6C_FF03_C39D_41EA_C1DB705C178B",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "items": [
  {
   "media": "this.album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  },
  {
   "media": "this.album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   }
  }
 ],
 "id": "album_ED3D1837_FF00_42CD_41E5_6C8F637A7207_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.94,
   "yaw": -65.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Up",
   "click": "this.startPanoramaWithCamera(this.panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC, this.camera_177A15F4_0071_BB79_411D_AD732CE65440); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3642DBFB_0100_447B_4109_1C65980E9290",
   "pitch": 21.06,
   "hfov": 10.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -65.14
  }
 ],
 "id": "overlay_D596E326_FF00_C58A_41E3_3CBD1AC8D11D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 22.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE, this.camera_174DA5E4_0071_BB99_4152_0AB01E0A322A); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_36428BFB_0100_447B_40F4_E20C1AF040A0",
   "pitch": -28.08,
   "hfov": 10.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 22.85
  }
 ],
 "id": "overlay_D2E6EEE8_FF00_3C85_4176_77FB8F5A8C2D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.69,
   "yaw": 47.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Click To Go Back",
   "click": "this.startPanoramaWithCamera(this.panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75, this.camera_175C45D4_0071_BBB9_4146_C3C2B2AA8B34); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3644EBFF_0100_447B_410B_60D709470CB0",
   "pitch": -4.26,
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": 47.83
  }
 ],
 "id": "overlay_D601E10B_FF00_459B_41DC_EAFDB3F5F003",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.64,
   "yaw": -97.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Play Ground",
   "click": "this.startPanoramaWithCamera(this.panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE, this.camera_15C6F47F_0071_B967_4136_2905D3CFA230); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E9D2A1BB_FF00_C5C5_41B0_C085801B985C",
   "pitch": -6.87,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -97.88
  }
 ],
 "id": "overlay_E4F443B1_FB3E_ECEB_41E8_6A545B528AF8",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.62,
   "yaw": -27.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Grilling Area",
   "click": "this.startPanoramaWithCamera(this.panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E, this.camera_15DF6475_0071_B97B_4151_D9A1E7CDFE59); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E9D201BB_FF00_C5C5_41EB_AC989957DDF3",
   "pitch": -7.46,
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "yaw": -27.5
  }
 ],
 "id": "overlay_DBB4A00A_FB3E_6BB9_41D4_243C5329E9AC",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_6396DD92_74B8_852E_41C7_7F2F88EAB543",
 "left": "0%",
 "children": [
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "20%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "20%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5AA03AD_9408_0CD5_41E2_1543D1B93E75",
 "left": "15%",
 "children": [
  "this.Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
  "this.Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_F59E5D6D_FAC7_FADA_41D0_2C0E083DC7DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_F5F01D23_FAC7_FA4E_41A7_B0A8B7EE98A3"
 ],
 "scrollBarVisible": "rollOver",
 "right": "15.21%",
 "width": "36.75%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "10.14%",
 "height": 68.8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA87ED0_F5AD_637B_41E4_315542EC2002_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3245809F_0103_C4BB_4114_D206E73FB590",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E58C693A_F61D_FF50_41E2_E398F35C80B5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E58CD93A_F61D_FF50_41E3_85ECB9D05185",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA837C1_F5AD_E15A_41C3_06B49E61F189_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE694872_FB26_3C69_41EE_ADD0F25F92E6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3646CBFE_0100_447D_40FC_7685F494FA40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36455BFE_0100_447D_4104_297C064D48A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE88F5_FF00_C4B7_41D1_1005231C5D75_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3645EBFE_0100_447D_40E6_2144660CB200",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E58CA93B_F61D_FF50_41E7_AD17F66FD7E5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEB4E118_F5AD_BEEA_41E9_691DC77E2BA1_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E4558BD1_FB22_1CAB_41EB_E9B32C26CF0D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E2006BC8_F63F_095C_41DE_9589105B10E1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_F83A15AB_F637_79DC_41E2_2037CB0DF44A_0_HS_1_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_E2002BC8_F63F_095C_41D9_35B5AF0CF857",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AFEEE5_FF00_5CD4_41EE_8B911584583B_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3643BBFB_0100_447B_4104_99F3DB1562F0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E58CF93A_F61D_FF50_41E3_67BB2A723F14",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA848E6_F5AD_AF27_41D7_E3BD7014B25D_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E58C993A_F61D_FF50_41D1_8567777C64D4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D4AD5D6A_FF01_DD85_41EE_27F837259401",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E79B70D6_FF00_C4F2_41E6_5FB14A834646_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36466BFD_0100_447F_40C8_D77B10942F00",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEBAF093_F5AD_9FFE_41E1_E0368CCE2ABB_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E78CADAA_F5FA_B773_41A2_D6E234B413F6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D5CC9772_FF00_CD85_41E3_BE14CA1E483F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D5CC0772_FF00_CD85_41EA_439A38934894",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE7895_FF00_4377_41EB_C5BC49EBFEBE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D4AACD6A_FF01_DD85_41EE_1278EBCD64E1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FBB3FA04_F5FD_5D30_41E6_B50068098DD9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE4DF5FD_F5AD_E12A_41D4_A0E9CE5AD093_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E78CFDA9_F5FA_B771_41DC_586F6AC6DF66",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE6AF872_FB26_3C69_41C0_BB746961D7FB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEA989B9_F5AD_A12A_41D0_46ABF95E55A8_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE6B0872_FB26_3C69_41ED_CD58C61132EF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E794B161_FF00_C5CF_41DC_B4CA24E57489_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36446BFE_0100_447D_40FB_7012B8E42F40",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E79686D8_FF00_4CFD_41E8_F4D9D288FAF3_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36424BFB_0100_447B_40FB_1A8D2AF2C240",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC7DB02_FF00_C560_41DA_5EF7BC96DB1D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D98EA940_FBEE_1DA9_41EB_2EC12A70E030_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC75B02_FF00_C560_41BE_B762B03903A1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE95A872_FB26_3C69_41B7_E1FEBA67C1CD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE95D881_FB26_3CAB_41B6_C65E447B5B48",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FE8957E7_F5AC_A126_41DF_8205DEE34DDE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE964881_FB26_3CAB_41EC_2EBCD7E3FC31",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_1_HS_0_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_E9D031BD_FF00_C53D_41EB_45D58BB83E26",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_1_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E9D191BD_FF00_C53D_41E7_204B50BE8744",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DF71CAF4_FBEE_3C68_41E1_3A93F856AD96_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC44B02_FF00_C560_41EB_8E92083BCDD1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_363C1BFA_0100_4485_40E1_55A753FD7100",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_363C9BFA_0100_4485_4102_1BFF331635A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E786B6B4_FF00_4CB5_41E5_4BB177653CCC_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36433BFA_0100_4485_40FD_0E9F603D3680",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB1EB29_FF00_C5BD_41B0_5349EA39BD32",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB13B29_FF00_C5BD_41E8_3EC6712A356C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB2AB2A_FF00_C5BF_41E4_1EE5595AE513",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D998FA35_FBE2_1FEB_41ED_934201569971_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB21B2A_FF00_C5BF_41D2_DEC635578873",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC1EB03_FF00_C560_41E1_2E80D38425E3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFA1B6_FBED_ECE8_41EC_3CA391E54EFD_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DAD827B2_FF00_CCAC_41E8_D6E844C0A13C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC68B02_FF00_C560_41D4_01B332AA04F0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFE1AF_FBED_ECF7_41D0_877FE133D74E_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC62B02_FF00_C560_41ED_F251AA8E2345",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE94C872_FB26_3C69_41C1_78BD2B1A2E94",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEB6D58D_F5AD_61EA_4151_DA43718AE97E_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE950872_FB26_3C69_41DF_455E46DC4B7C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFE24B_FBE2_2FBF_41D4_222ABF3762C1_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB38B2A_FF00_C5BF_41DF_6C49159F6BCE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE6BA872_FB26_3C69_41E1_CAF3B6034725",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEBA43CF_F5AD_6166_41D6_015A524311AA_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DE6BE872_FB26_3C69_41D7_5A07EB1E1486",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D9AFC265_FBE2_2C6B_41E0_1B6750FB45AC_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DBBB628A_FF00_C770_41CF_826ED6DA5732",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D998D9B3_FBED_FCEF_41ED_E83B950C3243_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DDC1AB03_FF00_C560_41C0_A381A2A4C794",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D99B2A81_FBE2_3CAB_41EB_B292D85DAAF8_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_DEB3FB2A_FF00_C5BF_41E1_9AF6104B5FF9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D3DC6D99_FF00_FC87_41B8_C87DD365C9F6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_D3DDFD99_FF00_FC87_41CC_100DC64F6909",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E795C019_FF00_437F_41B4_F9E66E5CA91A_0_HS_2_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D3DD4D99_FF00_FC87_41E1_2D12D8FDE05A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3642DBFB_0100_447B_4109_1C65980E9290",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E7AE67A0_FF00_4D4D_4194_D1BFA80BE50D_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_36428BFB_0100_447B_40F4_E20C1AF040A0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_E79B097E_FF00_C5B5_41EB_E93AE3998D74_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_3644EBFF_0100_447B_410B_60D709470CB0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E9D2A1BB_FF00_C5C5_41B0_C085801B985C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FEAB1ED8_F5AD_E36B_41ED_E443B6615A89_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E9D201BB_FF00_C5C5_41EB_AC989957DDF3",
 "rowCount": 6,
 "colCount": 4
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container black"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 50,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "maxHeight": 50,
 "backgroundOpacity": 0,
 "width": 44,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "left": "0%",
 "width": 300,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
  "this.Image_E7E30A55_F5CF_F58D_41EE_2611E2BD36E6"
 ],
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "class": "ThumbnailGrid",
 "itemLabelPosition": "bottom",
 "itemVerticalAlign": "top",
 "paddingLeft": 50,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 129,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 50,
 "itemLabelGap": 0,
 "borderRadius": 5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "left",
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 50,
 "gap": 78,
 "itemMaxWidth": 1000,
 "paddingTop": 20,
 "itemLabelHorizontalAlign": "left",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false)",
 "itemLabelFontFamily": "Oswald",
 "rollOverItemLabelFontColor": "#04A3E1"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "class": "WebFrame",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "class": "IconButton",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "class": "ViewerArea",
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "toolTipFontColor": "#FF0000",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#FFFFFF",
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": "17px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5AA13AD_9408_0CD5_41CF_FB4C29E2A478",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "id": "Container_A5A9F3AD_9408_0CD5_41A0_74FB092FB5C4",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
  "this.Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 5,
 "paddingRight": 5,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_F5F01D23_FAC7_FA4E_41A7_B0A8B7EE98A3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_F5F01D23_FAC7_FA4E_41A7_B0A8B7EE98A3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_F5F01D23_FAC7_FA4E_41A7_B0A8B7EE98A3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_A5A8F3AD_9408_0CD5_41D1_81A13D72D5FD, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false); this.setComponentVisibility(this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_F5F01D23_FAC7_FA4E_41A7_B0A8B7EE98A3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_EEE58527_FA15_BD3F_41B6_D80FD998B85C",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "10%",
 "bottom": "40%",
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.Container_66588837_74AF_8B56_41CA_E204728E8E6C",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 134,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "left": 0,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 42,
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_E7E30A55_F5CF_F58D_41EE_2611E2BD36E6",
 "left": "13.76%",
 "backgroundOpacity": 0,
 "width": "70.545%",
 "class": "Image",
 "paddingRight": 0,
 "url": "skin/Image_E7E30A55_F5CF_F58D_41EE_2611E2BD36E6.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 30,
 "propagateClick": true,
 "bottom": 66,
 "height": "25.041%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://futurabyfilinvest.com/project/sandia-homes', '_blank')",
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.setComponentVisibility(this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "100%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "right": 20,
 "width": "10%",
 "class": "IconButton",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Image",
 "borderRadius": 0,
 "url": "skin/Image_A5A9E3AD_9408_0CD5_41BF_1F19E227F697.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "id": "Container_A5A9C3AD_9408_0CD5_41E1_5A6AE955D023",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "0.195%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "id": "Container_A5A983AD_9408_0CD5_41D3_D89DBFF204CA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_F59AF0C8_FAC1_8BDA_41C5_DC440A7B3863"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false); this.setComponentVisibility(this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Aerial View",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Aerial View"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_EEE58527_FA15_BD3F_41B6_D80FD998B85C",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000",
 "width": 108.4,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000",
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 0,
 "class": "Button",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#FFFFFF",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": "18px",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0,
  0
 ],
 "label": "Gate Entrance",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Bernice",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Bernice",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 32)",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Danessa",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Clubhouse",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#00CCFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "class": "Button",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, false, 0, null, null, false); this.setComponentVisibility(this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED, false, 0, null, null, false); this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_1565E446_0071_B899_414B_8AE0EBC1C152.set('selectedIndex', -1); }, this); this.playList_1565E446_0071_B899_414B_8AE0EBC1C152.set('selectedIndex', 0); this.setComponentVisibility(this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174, true, 0, null, null, false); this.setComponentVisibility(this.Container_6396DD92_74B8_852E_41C7_7F2F88EAB543, true, 0, null, null, false); this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Site Information",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_66588837_74AF_8B56_41CA_E204728E8E6C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
  "this.IconButton_6658F838_74AF_8B5A_41C1_8DA59962CFF4",
  "this.IconButton_6658C838_74AF_8B5A_418E_C797984D8CAE",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
  "this.IconButton_6658D838_74AF_8B5A_41D7_154D466041BB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Container",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": 40,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_F59AF0C8_FAC1_8BDA_41C5_DC440A7B3863",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 44,
 "paddingBottom": 8,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:43px;\"><B>Sandia Homes</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Discover the best choice for your family\u2019s first home at </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Sandia Homes. Enjoy life amid scenic views of Mount </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Makiling and Tagaytay Ridge. With proven durability, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">modern design and complete amenities, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">this is the home that you deserve at a price you can afford.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Sandia Homes is a highly accessible community ideal for startup </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">families and single professionals alike at the heart of Batangas.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Choose from our high quality residential units with lot sizes </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">ranging from 60 to 75 square meters.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Sandia Homes is located at Brgy. Cale, Tanauan, Batangas.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\"><B><I>How to get there:</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Via JP Laurel Highway (Tanauan Proper), turn left to </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Mabini Ave. Straight to Talisay-Tanauan Rd., then turn </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">right to Talaga Rd., then left to Cale Rd.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Via Sto. Tomas proper, take Sala Rd., then turn right </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">to Cale Rd.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Via Via Tagaytay-Calamba Rd., turn right to Ligaya </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Drive, then turn right to Talisay-Tanauan Rd., then </SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">turn left to Talaga Rd., and turn right to Cale Rd.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:14px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText53815"
 },
 "shadow": false
},
{
 "toolTipBorderSize": 1,
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "width": 48.4,
 "toolTipPaddingTop": 7,
 "toolTipShadowOpacity": 0,
 "toolTipPaddingLeft": 10,
 "class": "IconButton",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "toolTipFontFamily": "Georgia",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "verticalAlign": "middle",
 "toolTip": "Go To Sandia Homes Facebook Page",
 "height": 38.2,
 "toolTipBorderColor": "#767676",
 "minWidth": 1,
 "mode": "push",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipFontColor": "#FF0000",
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href); this.openLink('https://www.facebook.com/SandiaHomesInTanauan', '_blank')",
 "toolTipFontSize": "17px",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "transparencyActive": true,
 "shadow": false,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "toolTipPaddingRight": 10
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } }
 },
 "buttonToggleFullscreen": "this.IconButton_6658E837_74AF_8B56_41B5_2A29A6498E57",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
