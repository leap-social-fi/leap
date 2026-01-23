import { rm } from 'node:fs/promises'
import { Glob, build } from 'bun'

console.log('\n🚀 Starting Optimized Build...')

await rm('./dist', { recursive: true, force: true })

const glob = new Glob('features/*/routes.ts')

const features: string[] = []
for await (const file of glob.scan({ cwd: './src' })) {
  features.push(`./src/${file}`)
}

console.log(`📦 Found ${features.length} feature routes to compile.`)

const start = performance.now()
const result = await build({
  entrypoints: ['./src/index.ts', ...features],
  outdir: './dist',
  root: './src',
  minify: true,
  target: 'bun',
  splitting: true,
  sourcemap: 'none',
})

const end = performance.now()
if (result.success) {
  console.log('✅ Build complete!')
  console.log(`⏱️ Time: ${(end - start).toFixed(2)}ms\n`)

  const stats = result.outputs
    .map((artifact) => {
      return {
        File: artifact.path.split('/dist/')[1],
        Size: `${(artifact.size / 1024).toFixed(2)} KB`,
      }
    })
    .sort((a, b) => a.File.localeCompare(b.File))

  console.table(stats)
  console.log(`\n✨ Generated ${result.outputs.length} files.`)
} else {
  console.error('❌ Build failed')
  console.error(result.logs)
  process.exit(1)
}
