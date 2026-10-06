import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Scans output directory (e.g. .next or out) for [TBC], data-placeholder, or TBC badges
async function scanDir(dir, results = []) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith('cache')) {
          await scanDir(fullPath, results);
        }
      } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.txt'))) {
        const content = await readFile(fullPath, 'utf8');
        if (content.includes('[TBC]') || content.includes('data-placeholder') || content.includes('tbc-badge')) {
          results.push(fullPath);
        }
      }
    }
  } catch {
    // Directory might not exist before build
  }
  return results;
}

async function main() {
  console.log('🔍 Checking build output for unresolved TBC markers and placeholders...');
  const nextDir = join(process.cwd(), '.next');
  const violations = await scanDir(nextDir);

  if (violations.length > 0) {
    console.error(`❌ Found ${violations.length} files containing TBC or placeholder elements:`);
    violations.forEach((f) => console.error(`  - ${f}`));
    process.exit(1);
  } else {
    console.log('✅ No [TBC] markers or data-placeholder elements found in production output.');
  }
}

main();
