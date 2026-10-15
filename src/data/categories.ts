import aStabilImage from '../assets/images/a-stabil.jpg'
import breathingMaskImage from '../assets/images/breathing-mask.jpg'
import earProtectionImage from '../assets/images/ear-protection.jpg'
import eyeProtectionImage from '../assets/images/eye-protection.jpg'
import fallProtectionImage from '../assets/images/fall-protection.jpg'
import fireProtectionImage from '../assets/images/fire-protection.jpg'
import footProtectionImage from '../assets/images/foot-protection.jpg'
import handProtectionImage from '../assets/images/hand-protection.jpg'
import headProtectionImage from '../assets/images/head-protection.jpg'
import industrialToolsImage from '../assets/images/industrial-tools.jpg'
import materialHandlingImage from '../assets/images/material-handling.jpg'
import rainProtectionImage from '../assets/images/rain-protection.jpg'
import safetyApparelImage from '../assets/images/safety-apparel.jpg'
import trafficSignImage from '../assets/images/traffic-sign.jpg'
import welderEquipmentImage from '../assets/images/welder-equipment.jpg'

export interface ProductCategory {
  id: string
  name: string
  image: string
  description: string
}

export const categories: ProductCategory[] = [
  {
    id: 'head-protection',
    name: 'Head Protection',
    image: headProtectionImage,
    description: 'Helmets, welding masks and faceshields.',
  },
  {
    id: 'eye-protection',
    name: 'Eye Protection',
    image: eyeProtectionImage,
    description: 'Safety glasses and safety goggles.',
  },
  {
    id: 'ear-protection',
    name: 'Ear Protection',
    image: earProtectionImage,
    description: 'Ear muff and ear plug protection.',
  },
  {
    id: 'breathing-mask',
    name: 'Breathing Mask',
    image: breathingMaskImage,
    description:
      'Respiratory protection products including respirators and masks.',
  },
  {
    id: 'safety-apparel',
    name: 'Safety Apparel',
    image: safetyApparelImage,
    description: 'Safety apparel and work protection products.',
  },
  {
    id: 'fall-protection',
    name: 'Fall Protection',
    image: fallProtectionImage,
    description:
      'Body harness, lanyard, absorber and related fall protection equipment.',
  },
  {
    id: 'hand-protection',
    name: 'Hand Protection',
    image: handProtectionImage,
    description:
      'Working gloves, leather gloves, welding gloves, PVC gloves and related hand protection.',
  },
  {
    id: 'rain-protection',
    name: 'Rain Protection',
    image: rainProtectionImage,
    description: 'Raincoat, rainsuit and rain protection products.',
  },
  {
    id: 'foot-protection',
    name: 'Foot Protection',
    image: footProtectionImage,
    description: 'Safety shoes, safety boots and rain boots.',
  },
  {
    id: 'traffic-sign',
    name: 'Traffic Sign',
    image: trafficSignImage,
    description: 'Traffic cones, warning products and road safety equipment.',
  },
  {
    id: 'fire-protection',
    name: 'Fire Protection',
    image: fireProtectionImage,
    description: 'Fire hose, fire blanket and fire protection equipment.',
  },
  {
    id: 'material-handling-lifting',
    name: 'Material Handling & Lifting',
    image: materialHandlingImage,
    description: 'Webbing sling and lifting-related equipment.',
  },
  {
    id: 'welder-equipment',
    name: 'Welder Equipment',
    image: welderEquipmentImage,
    description: 'Welding and cutting equipment.',
  },
  {
    id: 'industrial-tools',
    name: 'Industrial Tools',
    image: industrialToolsImage,
    description: 'Industrial tools and related technical products.',
  },
  {
    id: 'a-stabil',
    name: 'A-Stabil',
    image: aStabilImage,
    description: 'Body harness and lanyard absorber products.',
  },
]
