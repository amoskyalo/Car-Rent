export default {
  name: 'cars',
  type: 'document',
  title: 'Cars',
  fields: [
    {
      name: 'car',
      title: 'Car',
      type: 'string',
    },
    {
      name: 'rate',
      title: 'Rate',
      type: 'number',
    },
    {
      name: 'gearBox',
      title: 'Gear Box',
      type: 'string',
    },
    {
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
    },
    {
      name: 'seats',
      title: 'Seats',
      type: 'number',
    },
    {
      name: 'fuel',
      title: 'Fuel',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'engineSize',
      title: 'Engine Size',
      type: 'string',
    },
    {
      name: 'carImage',
      title: 'Car Image',
      type: 'image',
    },
  ],
}
