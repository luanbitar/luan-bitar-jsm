const special = [
  {
    $and: [
      {
        "location.coordinates.longitude": { $lt: -2.196998 },
      },
      {
        "location.coordinates.latitude": { $gt: -46.361899 },
      },
      {
        "location.coordinates.longitude": { $gt: -15.41158 },
      },
      {
        "location.coordinates.latitude": { $lt: -34.276938 },
      },
    ],
  },
  {
    $and: [
      {
        "location.coordinates.longitude": { $lt: -19.766959 },
      },
      {
        "location.coordinates.latitude": { $gt: -52.997614 },
      },
      {
        "location.coordinates.longitude": { $gt: -23.966413 },
      },
      {
        "location.coordinates.latitude": { $lt: -44.428305 },
      },
    ],
  },
]

const normal = [
  {
    $and: [
      {
        "location.coordinates.longitude": { $lt: -26.155681 },
      },
      {
        "location.coordinates.latitude": { $gt: -54.777426 },
      },
      {
        "location.coordinates.longitude": { $gt: -34.016466 },
      },
      {
        "location.coordinates.latitude": { $lt: -46.603598 },
      },
    ],
  },
]

const labels: any = {
  special: { $or: special },
  normal: { $or: normal },
  laborious: { $nor: [...special, ...normal] },
}

export default labels
