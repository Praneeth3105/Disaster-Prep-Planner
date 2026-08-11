export const checklistCategories = [
  {
    id: 'water-food',
    label: 'Water & Food',
    code: 'WF',
    items: [
      { id: 'wf-01', label: 'Drinking water', qty: '4 L per person / day, 3-day min' },
      { id: 'wf-02', label: 'Water purification tablets or filter', qty: '1 kit' },
      { id: 'wf-03', label: 'Non-perishable food', qty: '3-day supply per person' },
      { id: 'wf-04', label: 'Manual can opener', qty: '1' },
      { id: 'wf-05', label: 'High-energy snacks (dry fruit, bars)', qty: '1 pack per person' },
      { id: 'wf-06', label: 'Infant formula / baby food', qty: 'if applicable' },
      { id: 'wf-07', label: 'Pet food and water', qty: 'if applicable' },
    ],
  },
  {
    id: 'medical',
    label: 'Medical & First Aid',
    code: 'MD',
    items: [
      { id: 'md-01', label: 'First aid kit', qty: '1, fully stocked' },
      { id: 'md-02', label: 'Prescription medication', qty: '7-day supply, rotated' },
      { id: 'md-03', label: 'Pain relievers / fever reducers', qty: '1 pack' },
      { id: 'md-04', label: 'Oral rehydration salts (ORS)', qty: '5 sachets' },
      { id: 'md-05', label: 'Antiseptic, bandages, gauze', qty: '1 set' },
      { id: 'md-06', label: 'Face masks', qty: '5 per person' },
      { id: 'md-07', label: 'Hand sanitizer', qty: '1 bottle' },
    ],
  },
  {
    id: 'tools-power',
    label: 'Tools & Power',
    code: 'TP',
    items: [
      { id: 'tp-01', label: 'Torch / flashlight', qty: '1 per person' },
      { id: 'tp-02', label: 'Spare batteries', qty: '1 set per device' },
      { id: 'tp-03', label: 'Power bank, fully charged', qty: '1' },
      { id: 'tp-04', label: 'Battery or hand-crank radio', qty: '1' },
      { id: 'tp-05', label: 'Whistle for signaling', qty: '1 per person' },
      { id: 'tp-06', label: 'Multi-tool or knife', qty: '1' },
      { id: 'tp-07', label: 'Duct tape and plastic sheeting', qty: '1 roll each' },
      { id: 'tp-08', label: 'Fire extinguisher (small)', qty: '1' },
    ],
  },
  {
    id: 'documents',
    label: 'Documents & Money',
    code: 'DM',
    items: [
      { id: 'dm-01', label: 'ID proof copies (Aadhaar, passport)', qty: 'sealed, waterproof' },
      { id: 'dm-02', label: 'Insurance policy copies', qty: '1 set' },
      { id: 'dm-03', label: 'Emergency cash', qty: 'small notes' },
      { id: 'dm-04', label: 'Property / bank documents (copies)', qty: '1 set' },
      { id: 'dm-05', label: 'Family photo (for reunification)', qty: '1' },
    ],
  },
  {
    id: 'comfort',
    label: 'Clothing & Shelter',
    code: 'CS',
    items: [
      { id: 'cs-01', label: 'Change of clothes', qty: '1 set per person' },
      { id: 'cs-02', label: 'Emergency blanket', qty: '1 per person' },
      { id: 'cs-03', label: 'Sturdy shoes', qty: '1 pair per person' },
      { id: 'cs-04', label: 'Raincoat or poncho', qty: '1 per person' },
      { id: 'cs-05', label: 'Sleeping bag or mat', qty: 'if evacuating' },
    ],
  },
]

export const totalItemCount = checklistCategories.reduce(
  (sum, cat) => sum + cat.items.length,
  0,
)
