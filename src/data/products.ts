import md001Image from '../assets/images/products/head-protection/md-001.jpg'
import md008Image from '../assets/images/products/head-protection/md-008.jpg'
import wardenGrAImage from '../assets/images/products/head-protection/warden-gr-a.jpg'
import welforceBracketWeldingMaskImage from '../assets/images/products/head-protection/welforce-bracket-welding-mask.jpg'
import faceshieldHelmetVisionImage from '../assets/images/products/head-protection/faceshield-helmet-vision.jpg'
import brecketFaceshieldAlBecaImage from '../assets/images/products/head-protection/brecket-faceshield-al-beca.jpg'
import weldingMaskRachetImage from '../assets/images/products/head-protection/welding-mask-rachet.jpg'
import weldingMaskHandleImage from '../assets/images/products/head-protection/welding-mask-handle.jpg'
import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'head-protection-001',
    name: 'GOSAVE ECO MADA SAFETY HELMET MD-001',
    categoryId: 'head-protection',
    image: md001Image,
    specifications: [
      'Material: PP tebal',
      'Fast track (adjustable size)',
      'Dilengkapi pengaman tali dagu',
      'Nyaman dipakai dalam waktu lama',
      'Desain modern dan presisi',
    ],
    packaging: '50 pcs/ctn',
  },
  {
    id: 'head-protection-002',
    name: 'GOSAVE ECO MADA SAFETY HELMET MD-008',
    categoryId: 'head-protection',
    image: md008Image,
    specifications: [
      'Material: PP tebal',
      'Fast track (adjustable size)',
      'Elastic Adjustable Strap',
      'Nyaman dipakai dalam waktu lama',
      'Desain pelindung dagu ergonomis',
    ],
    packaging: '50 pcs/ctn',
  },
  {
    id: 'head-protection-003',
    name: 'GOSAVE WARDEN SAFETY HELMET GR-A',
    categoryId: 'head-protection',
    image: wardenGrAImage,
    specifications: [
      'Perlindungan terhadap benturan',
      'Inner dari bahan Nylon',
      'Dilengkapi pengaman tali dagu',
      'Sweat Band menahan keringat di dahi',
      'Sliding adjustable ukuran kepala pengguna',
      'Berat Produk: 480gr +/- 30gr',
      'Fast track (adjustable size)',
      'Ergonomic Chin Cup',
      'NO.LHU: 8267.34/13.340/I/2024',
    ],
    standards: ['SNI 3873:2012'],
    packaging: '50 pcs/ctn',
  },
  {
    id: 'head-protection-004',
    name: 'GOSAVE WELFORCE BRACKET WELDING MASK',
    categoryId: 'head-protection',
    image: welforceBracketWeldingMaskImage,
  },
  {
    id: 'head-protection-005',
    name: 'GOSAVE FACESHIELD HELMET VISION',
    categoryId: 'head-protection',
    image: faceshieldHelmetVisionImage,
  },
  {
    id: 'head-protection-006',
    name: 'GOSAVE BRECKET FACESHIELD AL BECA',
    categoryId: 'head-protection',
    image: brecketFaceshieldAlBecaImage,
  },
  {
    id: 'head-protection-007',
    name: 'GOSAVE WELDING MASK WITH RACHET',
    categoryId: 'head-protection',
    image: weldingMaskRachetImage,
  },
  {
    id: 'head-protection-008',
    name: 'GOSAVE WELDING MASK WITH HANDLE',
    categoryId: 'head-protection',
    image: weldingMaskHandleImage,
  },
]
