const BASE = "/portfolio";

const images = [
  {
    id: "1",
    title: "SQUARES",
    description: "12x8 - photography",
    thumbnail: `/media/squares_thumb.jpg`,
    fullImage: `/media/squares.jpg`,
    connections: ["3"],
    widthIn: 12, 
    heightIn: 8 
  },
  {
    id: "2",
    title: "MOUSE",
    description: "4x6 - digital",
    thumbnail: "/media/mouse_thumb.jpg",
    fullImage: "/media/mouse.jpg",
    connections: ["3"],
    widthIn: 4, 
    heightIn: 6 
  },
  {
    id: "4",
    title: "CMYK",
    description: "11x11 - lino block: ink, paper",
    thumbnail: "/media/cmyk_thumb.jpg",
    fullImage: "/media/cmyk.jpg",
    connections: ["7"],
    widthIn: 11, 
    heightIn: 11 
  },
  {
    id: "5",
    title: "BEAR ONE",
    description: "18X24 - monotype: ink, paper",
    thumbnail: "/media/bear1_thumb.jpg",
    fullImage: "/media/bear1.jpg",
    connections: ["7"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "6",
    title: "BEAR TWO",
    description: "18X24 - monotype: ink, paper",
    thumbnail: "/media/bear2_thumb.jpg",
    fullImage: "/media/bear2.jpg",
    connections: ["7"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "8",
    title: "MOURNING",
    description: "N/A - cardboard, fabric, acrylic",
    thumbnail: "/media/mourning_thumb.jpg",
    fullImage: "/media/mourning.jpg",
    connections: ["10"],
    widthIn: 12, 
    heightIn: 20 
  },
  {
    id: "9",
    title: "BREATH",
    description: "N/A - newsprint",
    thumbnail: "/media/newsprint_thumb.jpg",
    fullImage: "/media/newsprint.jpg",
    connections: ["10"],
    widthIn: 12, 
    heightIn: 15 
  },
  {
    id: "11",
    title: "ILU",
    description: "8x6 - digital",
    thumbnail: "/media/ilu_thumb.jpg",
    fullImage: "/media/ilu.jpg",
    connections: ["14"],
    widthIn: 8, 
    heightIn: 6 
  },
  {
    id: "12",
    title: "WONDERLAND",
    description: "11x17 - digital",
    thumbnail: "/media/wonderland_thumb.jpg",
    fullImage: "/media/wonderland.jpg",
    connections: ["14"],
    widthIn: 11, 
    heightIn: 17 
  },
  {
    id: "13",
    title: "BURGER",
    description: "11x14 - digital",
    thumbnail: "/media/burger_thumb.jpg",
    fullImage: "/media/burger.jpg",
    connections: ["14"],
    widthIn: 11, 
    heightIn: 14.5 
  },
  {
    id: "15",
    title: "LARAMIE",
    description: "5x4 - digital",
    thumbnail: "/media/wyo_thumb.jpg",
    fullImage: "/media/wyo.jpg",
    connections: ["19"],
    widthIn: 5.7, 
    heightIn: 4 
  },
  {
    id: "16",
    title: "REARVIEW",
    description: "5.75x4 - solar plate: ink, paper",
    thumbnail: "/media/rearview_thumb.jpg",
    fullImage: "/media/rearview.jpg",
    connections: ["19"],
    widthIn: 5.75, 
    heightIn: 4 
  },
  {
    id: "17",
    title: "DENVER",
    description: "18x24 - monotype: ink, paper",
    thumbnail: "/media/denver_thumb.jpg",
    fullImage: "/media/denver.jpg",
    connections: ["19"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "18",
    title: "VENICE",
    description: "11x8.5 - cyanotype: acrylic, thread",
    thumbnail: "/media/venice_thumb.jpg",
    fullImage: "/media/venice.jpg",
    connections: ["19"],
    widthIn: 11, 
    heightIn: 8.5 
  },
  {
    id: "20",
    title: "ALTAR",
    description: "24x15 - acrylic, canvas",
    thumbnail: "/media/altar_thumb.jpg",
    fullImage: "/media/altar.jpg",
    connections: ["22"],
    widthIn: 24, 
    heightIn: 15 
  },
  {
    id: "21",
    title: "HOARD",
    description: "16x24 - chalk, paper",
    thumbnail: "/media/hoard_thumb.jpg",
    fullImage: "/media/hoard.jpg",
    connections: ["22"],
    widthIn: 16, 
    heightIn: 24 
  },
  {
    id: "23",
    title: "ROT",
    description: "24x18 - monotype: graphite, paper",
    thumbnail: "/media/rot_thumb.jpg",
    fullImage: "/media/rot.jpg",
    connections: ["26"],
    widthIn: 24, 
    heightIn: 18 
  },
  {
    id: "24",
    title: "FAIRYTALES",
    description: "24x24 - monotype: graphite, canvas",
    thumbnail: "/media/fairytales_thumb.jpg",
    fullImage: "/media/fairytales.jpg",
    connections: ["26"],
    widthIn: 24, 
    heightIn: 24 
  },
  {
    id: "25",
    title: "VENUS",
    description: "18x24 - charcoal, paper",
    thumbnail: "/media/venus_thumb.jpg",
    fullImage: "/media/venus.jpg",
    connections: ["26"],
    widthIn: 18, 
    heightIn: 24 
  },
  {
    id: "27",
    title: "ASHKELON",
    description: "11x17 - wood block: ink, paper, thread",
    thumbnail: "/media/ashkelon_thumb.jpg",
    fullImage: "/media/ashkelon.jpg",
    connections: ["29"],
    widthIn: 11, 
    heightIn: 17 
  },
  {
    id: "28",
    title: "CATALHOYUK",
    description: "11x12 - collagraph: gouache, paper",
    thumbnail: "/media/catalhoyuk_thumb.jpg",
    fullImage: "/media/catalhoyuk.jpg",
    connections: ["29"],
    widthIn: 11, 
    heightIn: 12 
  },
  {
    id: "32",
    title: "INTERTIDAL",
    description: "12x12, woodblock - ink, paper",
    thumbnail: "/media/intertidal.jpg",
    fullImage: "/media/intertidal.jpg",
    connections: ["3"],
    widthIn: 12, 
    heightIn: 12 
  },
  {
    id: "3",
    type: "label",
    label: "ENVIRONS",
    radius: 20,
    connections: ["2","1","31", "32"]
  },
  {
    id: "7",
    type: "label",
    label: "EXPERIMENT",
    radius: 20,
    connections: ["4","5","6","31"]
  },
  {
    id: "10",
    type: "label",
    label: "WORN",
    radius: 20,
    connections: ["8","9","31"]
  },
  {
    id: "14",
    type: "label",
    label: "DIGITAL",
    radius: 20,
    connections: ["11","12","13","31"]
  },
  {
    id: "19",
    type: "label",
    label: "STRUCTURE",
    radius: 20,
    connections: ["15","16","17","18","31"]
  },
  {
    id: "22",
    type: "label",
    label: "RITUAL",
    radius: 20,
    connections: ["20","21","31"]
  },
  {
    id: "26",
    type: "label",
    label: "RUINS",
    radius: 20,
    connections: ["23","24","25","30"]
  },
  {
    id: "29",
    type: "label",
    label: "BURIAL",
    radius: 20,
    connections: ["27","28","30"]
  },
  {
    id: "30",
    type: "label",
    label: "EPHEMERAL",
    radius: 20,
    connections: ["29","31"]
  },
  {
    id: "31",
    type: "label",
    label: "WORKS",
    radius: 20,
    connections: ["3", "7","10","14","19","22","30"]
  },
];

export default images;
