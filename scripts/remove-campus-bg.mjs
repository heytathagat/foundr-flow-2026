import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const base = process.cwd()
const outDir = path.join(base, 'public', 'partners')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

const logos = [
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-2099312a-f1a7-4a5a-b42f-66902b1932ac.png',
    out: 'campus-cgc-university-nobg.png',
  },
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-4e88fb4a-7b6f-4a6b-879f-714d33212802.png',
    out: 'campus-iit-delhi-nobg.png',
  },
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-f783b1c3-2557-44b5-8242-9d18682b0d04.png',
    out: 'campus-iilm-gurugram-nobg.png',
  },
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-7911596e-c3fa-4bea-838b-c0dce8c3496f.png',
    out: 'campus-sgt-university-nobg.png',
  },
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-57d83976-27ab-4207-b2a0-84fe336db7f4.png',
    out: 'campus-amity-university-nobg.png',
  },
  {
    src: 'C:/Users/aasth/.cursor/projects/c-Users-aasth-Downloads-b-oQvJxm5UNVs-1772274989205/assets/c__Users_aasth_AppData_Roaming_Cursor_User_workspaceStorage_d96b06f4f6078ed1bcc6414421b5e5aa_images_image-520928a5-e1cc-4afe-a27e-73d817ae6e88.png',
    out: 'campus-baba-farid-nobg.png',
  },
]

async function processOne({ src, out }) {
  const img = sharp(src).ensureAlpha()
  const meta = await img.metadata()
  const { width, height } = meta
  const buf = await img.raw().toBuffer()

  const counts = new Map()
  for (let i = 0; i < buf.length; i += 4) {
    const a = buf[i + 3]
    if (a < 10) continue
    const r = buf[i]
    const g = buf[i + 1]
    const b = buf[i + 2]
    const key = `${r},${g},${b}`
    counts.set(key, (counts.get(key) || 0) + 1)
  }

  let bgColor = '255,255,255'
  let max = -1
  for (const [k, v] of counts) {
    if (v > max) {
      max = v
      bgColor = k
    }
  }

  const [br, bg, bb] = bgColor.split(',').map(Number)
  const threshold = 40

  for (let i = 0; i < buf.length; i += 4) {
    const a = buf[i + 3]
    if (a < 10) continue
    const r = buf[i]
    const g = buf[i + 1]
    const b = buf[i + 2]
    const dist = Math.sqrt((r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2)
    if (dist < threshold) {
      buf[i + 3] = 0
    }
  }

  await sharp(buf, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, out))

  console.log('processed', out)
}

for (const logo of logos) {
  // eslint-disable-next-line no-console
  processOne(logo).catch((e) => {
    console.error('error processing', logo.out, e)
  })
}

