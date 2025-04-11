const images = [
  {
    id: "1",
    title: "SQUARES",
    description: "12x8 - photography",
    thumbnail: `${BASE}/squares_thumb.jpg`,
    fullImage: `${BASE}/squares.jpg`,
    connections: ["3"],
    widthIn: 12, 
    heightIn: 8 
  },
  {
    id: "2",
    title: "MOUSE",
    description: "4x6 - digital",
    thumbnail: `${BASE}/mouse_thumb.jpg`,
    fullImage: `${BASE}/mouse.jpg`,
    connections: ["3"],
    widthIn: 4, 
    heightIn: 6 
  },
  {
    id: "3",
    type: "label",
    label: "ENVIRONS",
    radius: 20,
    connections: ["2","1","31"]
  },
  {
    id: "4",
    title: "CMYK",
    description: "11x11 - lino block: ink, paper",
    thumbnail: `${BASE}/cmyk_thumb.jpg`,
    fullImage: `${BASE}/cmyk.jpg`,
    connections: ["7"],
    widthIn: 11, 
    heightIn: 11 
  },
  {
    id: "5",
    title: "BEAR ONE",
    description: "18X24 - monotype: ink, paper",
    thumbnail: `${BASE}/bear1_thumb.jpg`,
    fullImage: `${BASE}/bear1.jpg`,
    connections: ["7"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "6",
    title: "BEAR TWO",
    description: "18X24 - monotype: ink, paper",
    thumbnail: `${BASE}/bear2_thumb.jpg`,
    fullImage: `${BASE}/bear2.jpg`,
    connections: ["7"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "7",
    type: "label",
    label: "EXPERIMENT",
    radius: 20,
    connections: ["4","5","6","31"]
  },
  {
    id: "8",
    title: "MOURNING",
    description: "N/A - cardboard, fabric, acrylic",
    thumbnail: `${BASE}/mourning_thumb.jpg`,
    fullImage: `${BASE}/mourning.jpg`,
    connections: ["10"],
    widthIn: 12, 
    heightIn: 20 
  },
  {
    id: "9",
    title: "BREATH",
    description: "N/A - newsprint",
    thumbnail: `${BASE}/newsprint_thumb.jpg`,
    fullImage: `${BASE}/newsprint.jpg`,
    connections: ["10"],
    widthIn: 12, 
    heightIn: 15 
  },
  {
    id: "10",
    type: "label",
    label: "WORN",
    radius: 20,
    connections: ["8","9","31"]
  },
  {
    id: "11",
    title: "ILU",
    description: "8x6 - digital",
    thumbnail: `${BASE}/ilu_thumb.jpg`,
    fullImage: `${BASE}/ilu.jpg`,
    connections: ["14"],
    widthIn: 8, 
    heightIn: 6 
  },
  {
    id: "12",
    title: "WONDERLAND",
    description: "11x17 - digital",
    thumbnail: `${BASE}/wonderland_thumb.jpg`,
    fullImage: `${BASE}/wonderland.jpg`,
    connections: ["14"],
    widthIn: 11, 
    heightIn: 17 
  },
  {
    id: "13",
    title: "BURGER",
    description: "11x14 - digital",
    thumbnail: `${BASE}/burger_thumb.jpg`,
    fullImage: `${BASE}/burger.jpg`,
    connections: ["14"],
    widthIn: 11, 
    heightIn: 14.5 
  },
  {
    id: "14",
    type: "label",
    label: "DIGITAL",
    radius: 20,
    connections: ["11","12","13","31"]
  },
  {
    id: "15",
    title: "LARAMIE",
    description: "5x4 - digital",
    thumbnail: `${BASE}/wyo_thumb.jpg`,
    fullImage: `${BASE}/wyo.jpg`,
    connections: ["19"],
    widthIn: 5.7, 
    heightIn: 4 
  },
  {
    id: "16",
    title: "REARVIEW",
    description: "5.75x4 - solar plate: ink, paper",
    thumbnail: `${BASE}/rearview_thumb.jpg`,
    fullImage: `${BASE}/rearview.jpg`,
    connections: ["19"],
    widthIn: 5.75, 
    heightIn: 4 
  },
  {
    id: "17",
    title: "DENVER",
    description: "18x24 - monotype: ink, paper",
    thumbnail: `${BASE}/denver_thumb.jpg`,
    fullImage: `${BASE}/denver.jpg`,
    connections: ["19"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "18",
    title: "VENICE",
    description: "11x8.5 - cyanotype: acrylic, thread",
    thumbnail: `${BASE}/venice_thumb.jpg`,
    fullImage: `${BASE}/venice.jpg`,
    connections: ["19"],
    widthIn: 11, 
    heightIn: 8.5 
  },
  {
    id: "19",
    type: "label",
    label: "STRUCTURE",
    radius: 20,
    connections: ["15","16","17","18","31"]
  },
  {
    id: "20",
    title: "ALTAR",
    description: "24x15 - acrylic, canvas",
    thumbnail: `${BASE}/altar_thumb.jpg`,
    fullImage: `${BASE}/altar.jpg`,
    connections: ["22"],
    widthIn: 24, 
    heightIn: 15 
  },
  {
    id: "21",
    title: "HOARD",
    description: "16x24 - chalk, paper",
    thumbnail: `${BASE}/hoard_thumb.jpg`,
    fullImage: `${BASE}/hoard.jpg`,
    connections: ["22"],
    widthIn: 16, 
    heightIn: 24 
  },
  {
    id: "22",
    type: "label",
    label: "RITUAL",
    radius: 20,
    connections: ["20","21","31"]
  },
  {
    id: "23",
    title: "ROT",
    description: "24x18 - monotype: graphite, paper",
    thumbnail: `${BASE}/rot_thumb.jpg`,
    fullImage: `${BASE}/rot.jpg`,
    connections: ["26"],
    widthIn: 24, 
    heightIn: 18 
  },
  {
    id: "24",
    title: "FAIRYTALES",
    description: "24x24 - monotype: graphite, canvas",
    thumbnail: `${BASE}/fairytales_thumb.jpg`,
    fullImage: `${BASE}/fairytales.jpg`,
    connections: ["26"],
    widthIn: 24, 
    heightIn: 24 
  },
  {
    id: "25",
    title: "VENUS",
    description: "18x24 - charcoal, paper",
    thumbnail: `${BASE}/venus_thumb.jpg`,
    fullImage: `${BASE}/venus.jpg`,
    connections: ["26"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "26",
    type: "label",
    label: "RUINS",
    radius: 20,
    connections: ["23","24","25","30"]
  },
  {
    id: "27",
    title: "ASHKELON",
    description: "11x17 - wood block: ink, paper, thread",
    thumbnail: `${BASE}/ashkelon_thumb.jpg`,
    fullImage: `${BASE}/ashkelon.jpg`,
    connections: ["29"],
    widthIn: 11, 
    heightIn: 17 
  },
  {
    id: "28",
    title: "CATALHOYUK",
    description: "11x12 - collagraph: gouache, paper",
    thumbnail: `${BASE}/catalhoyuk_thumb.jpg`,
    fullImage: `${BASE}/catalhoyuk.jpg`,
    connections: ["29"],
    widthIn: 11, 
    heightIn: 12 
  },
  {
    id: "29",
    type: "label",
    label: "BURIAL",
    radius: 20,
    connections: ["27","28","31"]
  },
  {
    id: "30",
    type: "label",
    label: "EPHEMERAL",
    radius: 20,
    connections: ["29","31"]
  },
  {
    id: "32",
    title: "INTERTIDAL",
    description: "12x12, woodblock - ink, paper",
    thumbnail: `${BASE}/intertidal_thumb.jpg`,
    fullImage: `${BASE}/intertidal.jpg`,
    connections: ["9"],
    widthIn: 12, 
    heightIn: 12 
  },
];

export default images;
